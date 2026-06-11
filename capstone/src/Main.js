import { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import HomePage from "./pages/HomePage";
import UnderConstructionPage from "./pages/UnderConstructionPage";

const DEFAULT_AVAILABLE_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00"];

function getAvailableTimes(date) {
    // Coursera API script is injected from public/index.html at runtime.
    if (typeof window.fetchAPI === "function") {
        return window.fetchAPI(date);
    }

    return DEFAULT_AVAILABLE_TIMES;
}

export function initializeTimes() {
    return getAvailableTimes(new Date());
}

export function updateTimes(state, action) {
    // Keep reducer shape ready for future date-based API behavior.
    if (action?.type === "date_changed") {
        return getAvailableTimes(new Date(action.date));
    }

    return state;
}

function Main() {
    const navigate = useNavigate();
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        undefined,
        initializeTimes
    );
    const submitForm = (formData) => {
        const isSubmitted =
            typeof window.submitAPI === "function"
                ? window.submitAPI(formData)
                : true;

        if (isSubmitted) {
            navigate("/booking-confirmed");
        }
    };

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/booking"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
                <Route
                    path="/about"
                    element={<UnderConstructionPage title="About" />}
                />
                <Route
                    path="/menu"
                    element={<UnderConstructionPage title="Menu" />}
                />
                <Route
                    path="/order-online"
                    element={<UnderConstructionPage title="Order Online" />}
                />
            </Routes>
        </main>
    );
}

export default Main;
