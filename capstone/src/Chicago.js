import chicagoImage from "./assets/lemon.jpg";

function Chicago() {
    return (
        <section className="chicago-story">
            <div>
                <h2>Little Lemon Chicago</h2>
                <p>
                    Founded by two chefs with a passion for Mediterranean
                    cooking, Little Lemon brings authentic family recipes to the
                    heart of Chicago.
                </p>
                <p>
                    Every dish celebrates fresh ingredients, simple techniques,
                    and welcoming hospitality.
                </p>
            </div>
            <div
                className="chicago-media"
                style={{ backgroundImage: `url(${chicagoImage})` }}
                aria-label="Little Lemon Chicago restaurant"
                role="img"
            />
        </section>
    );
}

export default Chicago;
