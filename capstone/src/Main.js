import { Route, Routes } from "react-router-dom";
import BookingPage from "./BookingPage";
import HomePage from "./HomePage";
import UnderConstructionPage from "./UnderConstructionPage";

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
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
