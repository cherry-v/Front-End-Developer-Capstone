import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./BookingPage";
import HomePage from "./HomePage";
import UnderConstructionPage from "./UnderConstructionPage";

const DEFAULT_AVAILABLE_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00"];

export function initializeTimes() {
    return DEFAULT_AVAILABLE_TIMES;
}

export function updateTimes(state, action) {
    if (action?.type === "date_changed") {
        return DEFAULT_AVAILABLE_TIMES;
    }

    return state;
}

function Main() {
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        undefined,
        initializeTimes
    );

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
                        />
                    }
                />
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
