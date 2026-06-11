import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import Specials from "./Specials";
import "./styles/HomePage.css";

function HomePage() {
    return (
        <section className="home-page" aria-label="Homepage content">
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </section>
    );
}

export default HomePage;
