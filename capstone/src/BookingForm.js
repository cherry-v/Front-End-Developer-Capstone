import { useEffect, useMemo, useState } from "react";

function BookingForm({
    availableTimes,
    dispatch,
    onSubmitBooking = () => {},
    submitForm = () => {},
}) {
    const today = new Date().toISOString().split("T")[0];
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState("Birthday");
    const [touched, setTouched] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (availableTimes.length > 0 && !availableTimes.includes(time)) {
            setTime(availableTimes[0]);
        }
    }, [availableTimes, time]);

    const errors = useMemo(() => {
        return {
            date:
                !date || date < today
                    ? "Please choose today or a future date."
                    : "",
            time: !availableTimes.includes(time)
                ? "Please choose an available time slot."
                : "",
            guests:
                Number.isNaN(guests) || guests < 1 || guests > 10
                    ? "Guests must be between 1 and 10."
                    : "",
            occasion: !occasion ? "Please select an occasion." : "",
        };
    }, [date, today, time, guests, occasion, availableTimes]);

    const isFormValid = Object.values(errors).every((value) => value === "");

    const showFieldError = (fieldName) =>
        (touched[fieldName] || isSubmitted) && Boolean(errors[fieldName]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        if (!isFormValid) {
            return;
        }

        const formData = {
            date,
            time,
            guests,
            occasion,
        };

        onSubmitBooking(formData);
        submitForm(formData);
    };

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setDate(selectedDate);
        dispatch({ type: "date_changed", date: selectedDate });
    };

    const handleBlur = (fieldName) => {
        setTouched((previous) => ({ ...previous, [fieldName]: true }));
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                onBlur={() => handleBlur("date")}
                min={today}
                required
                aria-invalid={showFieldError("date")}
            />
            {showFieldError("date") && (
                <p className="form-error">{errors.date}</p>
            )}

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                onBlur={() => handleBlur("time")}
                required
                aria-invalid={showFieldError("time")}
            >
                {availableTimes.map((slot) => (
                    <option key={slot} value={slot}>
                        {slot}
                    </option>
                ))}
            </select>
            {showFieldError("time") && (
                <p className="form-error">{errors.time}</p>
            )}

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                min="1"
                max="10"
                value={guests}
                onChange={(event) => setGuests(Number(event.target.value))}
                onBlur={() => handleBlur("guests")}
                required
                aria-invalid={showFieldError("guests")}
            />
            {showFieldError("guests") && (
                <p className="form-error">{errors.guests}</p>
            )}

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(event) => setOccasion(event.target.value)}
                onBlur={() => handleBlur("occasion")}
                required
                aria-invalid={showFieldError("occasion")}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            {showFieldError("occasion") && (
                <p className="form-error">{errors.occasion}</p>
            )}

            <button type="submit" className="cta-button" disabled={!isFormValid}>
                Make Your Reservation
            </button>
        </form>
    );
}

export default BookingForm;
