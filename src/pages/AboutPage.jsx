const AboutPage = () => {
    return (
        <div className="container" style={{ padding: '5rem 20px', textAlign: 'center' }}>
            <h1>About Us</h1>
            <p style={{ maxWidth: '600px', margin: '2rem auto', fontSize: '1.2rem' }}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
            </p>
            <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Chefs in kitchen"
                style={{ width: '100%', maxWidth: '600px', borderRadius: '16px', marginTop: '20px' }} 
            />
        </div>
    );
};

export default AboutPage;
