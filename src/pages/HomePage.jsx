import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p className="hero-description">
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </p>
                        <Link to="/booking" className="cta-button" aria-label="Reserve a Table">
                            Reserve a Table
                        </Link>
                    </div>
                    <div className="hero-image">
                       <img 
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" 
                            alt="Restaurant Interior" 
                            className="hero-img-real"
                       />
                    </div>
                </div>
            </section>

            {/* Highlights / Specials Section */}
            <section className="specials-section">
                <div className="container specials-container">
                    <div className="specials-header">
                        <h2>This weeks specials!</h2>
                        <button className="online-menu-btn">Online Menu</button>
                    </div>
                    
                    <div className="cards-grid">
                        {/* Card 1 */}
                        <article className="card">
                            <img 
                                src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=400&auto=format&fit=crop" 
                                alt="Greek Salad" 
                                className="card-img"
                            />
                            <div className="card-content">
                                <div className="card-title">
                                    <h3>Greek Salad</h3>
                                    <span className="price">₹450</span>
                                </div>
                                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                                <div className="order-delivery">
                                    <Link to="/order">Order a delivery</Link>
                                </div>
                            </div>
                        </article>

                        {/* Card 2 */}
                        <article className="card">
                            <img 
                                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop" 
                                alt="Penne Pasta" 
                                className="card-img"
                            />
                             <div className="card-content">
                                <div className="card-title">
                                    <h3>Penne Pasta</h3>
                                    <span className="price">₹350</span>
                                </div>
                                <p>Delicious penne pasta tossed in a spicy tomato basil sauce, garnished with fresh parmesan.</p>
                                <div className="order-delivery">
                                    <Link to="/order">Order a delivery</Link>
                                </div>
                            </div>
                        </article>

                         {/* Card 3 */}
                         <article className="card">
                            <img 
                                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop" 
                                alt="Chocolate Cake" 
                                className="card-img"
                            />
                             <div className="card-content">
                                <div className="card-title">
                                    <h3>Chocolate Cake</h3>
                                    <span className="price">₹300</span>
                                </div>
                                <p>Decadent, rich chocolate cake topped with a silky ganache and fresh berries.</p>
                                <div className="order-delivery">
                                    <Link to="/order">Order a delivery</Link>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
