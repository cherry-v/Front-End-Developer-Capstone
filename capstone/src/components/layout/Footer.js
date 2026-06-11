import "../../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer-background footer-container">
            <div className="footer-grid">
                <section>
                    <h4>Little Lemon</h4>
                    <p>123 Lemon Street, Chicago, IL</p>
                    <p>Copyright 2026 Little Lemon</p>
                </section>
                <section>
                    <h4>Contact</h4>
                    <ul>
                        <li>Phone: (312) 555-0114</li>
                        <li>Email: hello@littlelemon.com</li>
                    </ul>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
