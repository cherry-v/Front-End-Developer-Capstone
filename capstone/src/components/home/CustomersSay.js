import customerImageOne from "../../assets/bruschetta1.jpg";
import customerImageTwo from "../../assets/bruschetta2.jpg";
import customerImageThree from "../../assets/istockphoto-537818802-612x612.jpg";

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
        <section className="testimonials" aria-labelledby="testimonials-title">
            <h2 id="testimonials-title">What Customers Say</h2>
            <div className="cards-grid" role="list" aria-label="Customer testimonials">
                {testimonials.map((item) => (
                    <article key={item.name} className="card testimonial-card" role="listitem">
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
