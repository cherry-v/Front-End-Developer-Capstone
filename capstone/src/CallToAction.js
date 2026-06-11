import { Link } from "react-router-dom";
import gourmetImage from "./assets/gourmet.jpg";

function CallToAction() {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div>
                <h1 id="hero-title">Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Fresh Mediterranean flavors, warm hospitality, and a cozy
                    neighborhood atmosphere.
                </p>
                <Link to="/booking" className="cta-button" aria-label="On Click">
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
