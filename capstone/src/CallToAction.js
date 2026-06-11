import { Link } from "react-router-dom";
import gourmetImage from "./assets/gourmet.jpg";

function CallToAction() {
    return (
        <section className="hero">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Fresh Mediterranean flavors, warm hospitality, and a cozy
                    neighborhood atmosphere.
                </p>
                <Link to="/booking" className="cta-button">
                    Reserve a Table
                </Link>
            </div>
            <div
                className="hero-media"
                style={{ backgroundImage: `url(${gourmetImage})` }}
                aria-label="Little Lemon restaurant interior"
                role="img"
            />
        </section>
    );
}

export default CallToAction;
