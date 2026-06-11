import { useState } from "react";
import BookingForm from "../components/booking/BookingForm";
import "../styles/BookingPage.css";

function BookingPage({ availableTimes, dispatch, submitForm }) {
    const [bookingData, setBookingData] = useState([]);

    const handleSubmitBooking = (newBooking) => {
        setBookingData((previous) => [...previous, newBooking]);
    };

    return (
        <section className="booking-page">
            <h1>Table Reservations</h1>
            <p className="booking-intro">
                Reserve your table and enjoy a memorable Mediterranean dining
                experience at Little Lemon.
            </p>

            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                onSubmitBooking={handleSubmitBooking}
                submitForm={submitForm}
            />

            <p className="booking-note">
                We will send confirmation details to you after selecting the
                final date and time.
            </p>

            <section className="booking-results">
                <h2>Booking Data</h2>
                {bookingData.length === 0 ? (
                    <p className="booking-empty">
                        No reservations yet. Submit the form to add one.
                    </p>
                ) : (
                    <table className="booking-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Guests</th>
                                <th>Occasion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookingData.map((booking, index) => (
                                <tr key={`${booking.date}-${booking.time}-${index}`}>
                                    <td>{booking.date}</td>
                                    <td>{booking.time}</td>
                                    <td>{booking.guests}</td>
                                    <td>{booking.occasion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </section>
    );
}

export default BookingPage;
