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
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Restaurant Food" 
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
                                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
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
                                src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                                alt="Bruschetta" 
                                className="card-img"
                            />
                             <div className="card-content">
                                <div className="card-title">
                                    <h3>Bruschetta</h3>
                                    <span className="price">₹250</span>
                                </div>
                                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                                <div className="order-delivery">
                                    <Link to="/order">Order a delivery</Link>
                                </div>
                            </div>
                        </article>

                         {/* Card 3 */}
                         <article className="card">
                            <img 
                                src="https://images.unsplash.com/photo-1599785209796-786432b228bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                                alt="Lemon Dessert" 
                                className="card-img"
                            />
                             <div className="card-content">
                                <div className="card-title">
                                    <h3>Lemon Dessert</h3>
                                    <span className="price">₹200</span>
                                </div>
                                <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
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
