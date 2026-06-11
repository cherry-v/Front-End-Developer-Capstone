import customerImageOne from "./assets/bruschetta1.jpg";
import customerImageTwo from "./assets/bruschetta2.jpg";
import customerImageThree from "./assets/istockphoto-537818802-612x612.jpg";

const testimonials = [
    {
        name: "Maria",
        rating: "5/5",
        quote: "Amazing flavors and super friendly staff.",
        image: customerImageOne,
    },
    {
        name: "David",
        rating: "5/5",
        quote: "The best cozy dinner spot in the neighborhood.",
        image: customerImageTwo,
    },
    {
        name: "Aisha",
        rating: "4.5/5",
        quote: "Great food and quick service. Will return again.",
        image: customerImageThree,
    },
];

function CustomersSay() {
    return (
        <section className="testimonials">
            <h2>What Customers Say</h2>
            <div className="cards-grid">
                {testimonials.map((item) => (
                    <article key={item.name} className="card testimonial-card">
                        <img
                            src={item.image}
                            alt={`${item.name} avatar`}
                            className="avatar"
                        />
                        <h3>{item.name}</h3>
                        <span>{item.rating}</span>
                        <p>{item.quote}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default CustomersSay;
