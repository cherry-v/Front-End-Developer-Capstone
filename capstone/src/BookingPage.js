import BookingForm from "./BookingForm";
import "./styles/BookingPage.css";

function BookingPage({ availableTimes, dispatch }) {
    return (
        <section className="booking-page">
            <h1>Table Reservations</h1>
            <p className="booking-intro">
                Reserve your table and enjoy a memorable Mediterranean dining
                experience at Little Lemon.
            </p>

            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />

            <p className="booking-note">
                We will send confirmation details to you after selecting the
                final date and time.
            </p>
        </section>
    );
}

export default BookingPage;
