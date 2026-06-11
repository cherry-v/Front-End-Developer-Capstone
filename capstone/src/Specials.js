import bruschettaImage from "./assets/bruschetta.jpg";
import cremeImage from "./assets/creme.jpg";
import saladImage from "./assets/salad.jpg";

const specials = [
    {
        title: "Greek Salad",
        price: "$12.99",
        description:
            "Crisp lettuce, peppers, olives, and feta cheese with a house dressing.",
        image: saladImage,
    },
    {
        title: "Bruschetta",
        price: "$8.99",
        description:
            "Toasted bread with garlic, tomatoes, and olive oil, served warm.",
        image: bruschettaImage,
    },
    {
        title: "Lemon Dessert",
        price: "$6.99",
        description:
            "A light citrus dessert with rich cream and a bright lemon finish.",
        image: cremeImage,
    },
];

function Specials() {
    return (
        <section className="specials" aria-labelledby="specials-title">
            <div className="section-heading">
                <h2 id="specials-title">Specials</h2>
                <button type="button" className="cta-button" aria-label="On Click">
                    Online Menu
                </button>
            </div>
            <div className="cards-grid" role="list" aria-label="Special menu items">
                {specials.map((item) => (
                    <article key={item.title} className="card" role="listitem">
                        <img
                            src={item.image}
                            alt={item.title}
                        />
                        <div className="card-body">
                            <h3>{item.title}</h3>
                            <span className="card-price">{item.price}</span>
                            <p>{item.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Specials;
