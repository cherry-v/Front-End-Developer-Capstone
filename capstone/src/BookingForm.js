import { useState } from "react";

function BookingForm({
    availableTimes,
    dispatch,
    onSubmitBooking = () => {},
    submitForm = () => {},
}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState("Birthday");

    const handleSubmit = (event) => {
        event.preventDefault();
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

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
            >
                {availableTimes.map((slot) => (
                    <option key={slot} value={slot}>
                        {slot}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                min="1"
                max="10"
                value={guests}
                onChange={(event) => setGuests(Number(event.target.value))}
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(event) => setOccasion(event.target.value)}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <button type="submit" className="cta-button">
                Make Your Reservation
            </button>
        </form>
    );
}

export default BookingForm;
