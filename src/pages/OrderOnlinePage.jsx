const OrderOnlinePage = () => {
    return (
        <div className="container" style={{ padding: '6rem 20px', textAlign: 'center', minHeight: '60vh' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Order Online</h1>
            <p style={{ fontSize: '1.3rem', margin: '0 auto 3rem', maxWidth: '600px', lineHeight: '1.6' }}>
                Our online ordering system is currently undergoing maintenance to serve you better. 
                <br/>
                In the meantime, please call us directly to place your pickup or delivery order.
            </p>
            
            <div style={{ marginTop: '2rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--primary-green)' }}>Call to Order</h2>
                <a 
                    href="tel:+919465675515" 
                    style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: '800', 
                        color: 'var(--secondary-salmon)', 
                        textDecoration: 'none',
                        fontFamily: 'var(--font-family-serif)',
                        display: 'inline-block',
                        marginTop: '10px'
                    }}
                >
                    +91 9465675515
                </a>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                    Available Mon-Sun: 11:00am - 10:00pm
                </p>
            </div>
        </div>
    );
};

export default OrderOnlinePage;
