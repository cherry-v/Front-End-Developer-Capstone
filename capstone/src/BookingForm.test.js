import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders BookingForm static text", () => {
    render(
        <BookingForm
            availableTimes={["17:00", "18:00"]}
            dispatch={() => {}}
        />
    );

    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});
