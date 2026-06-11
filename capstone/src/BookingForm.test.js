import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const renderBookingForm = () =>
    render(
        <BookingForm
            availableTimes={["17:00", "18:00"]}
            dispatch={() => {}}
        />
    );

const today = new Date().toISOString().split("T")[0];

test("renders BookingForm static text", () => {
    renderBookingForm();

    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

test("applies HTML5 validation attributes to form fields", () => {
    renderBookingForm();

    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion");

    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("min", today);

    expect(timeSelect).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(occasionSelect).toHaveAttribute("required");
});

test("shows invalid JavaScript validation state for past date", () => {
    renderBookingForm();

    const dateInput = screen.getByLabelText("Choose date");
    const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
    });

    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];

    fireEvent.change(dateInput, { target: { value: yesterday } });
    fireEvent.blur(dateInput);

    expect(
        screen.getByText("Please choose today or a future date.")
    ).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
});

test("shows invalid and valid JavaScript validation states for guests", () => {
    renderBookingForm();

    const dateInput = screen.getByLabelText("Choose date");
    const guestsInput = screen.getByLabelText("Number of guests");
    const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
    });

    fireEvent.change(dateInput, { target: { value: today } });
    fireEvent.change(guestsInput, { target: { value: "11" } });
    fireEvent.blur(guestsInput);

    expect(
        screen.getByText("Guests must be between 1 and 10.")
    ).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.blur(guestsInput);

    expect(
        screen.queryByText("Guests must be between 1 and 10.")
    ).not.toBeInTheDocument();
    expect(submitButton).toBeEnabled();
});
