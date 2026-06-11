import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import Specials from "./Specials";
import "./styles/HomePage.css";

function HomePage() {
    return (
        <div className="home-page">
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </div>
    );
}

export default HomePage;
