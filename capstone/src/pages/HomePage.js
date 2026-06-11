import CallToAction from "../components/home/CallToAction";
import Chicago from "../components/home/Chicago";
import CustomersSay from "../components/home/CustomersSay";
import Specials from "../components/home/Specials";
import "../styles/HomePage.css";

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
