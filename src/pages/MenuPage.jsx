const MenuPage = () => {
    return (
        <div className="container" style={{ padding: '5rem 20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Menu</h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="menu-category">
                    <h2>Starters</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span><strong>Bruschetta</strong><br/><small>Grilled bread with garlic, salt and olive oil.</small></span>
                            <span style={{ fontWeight: 'bold', color: '#EE9972' }}>₹250</span>
                        </li>
                         <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span><strong>Greek Salad</strong><br/><small>Crispy lettuce, peppers, olives and feta cheese.</small></span>
                            <span style={{ fontWeight: 'bold', color: '#EE9972' }}>₹450</span>
                        </li>
                    </ul>
                </div>

                <div className="menu-category">
                    <h2>Mains</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                         <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span><strong>Grilled Fish</strong><br/><small>Seasonal fish served with vegetables.</small></span>
                            <span style={{ fontWeight: 'bold', color: '#EE9972' }}>₹800</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span><strong>Lemon Pasta</strong><br/><small>Fresh pasta with lemon zest and parmesan.</small></span>
                            <span style={{ fontWeight: 'bold', color: '#EE9972' }}>₹550</span>
                        </li>
                    </ul>
                </div>
                 <div className="menu-category">
                    <h2>Desserts</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span><strong>Lemon Dessert</strong><br/><small>Authentic grandma's recipe.</small></span>
                            <span style={{ fontWeight: 'bold', color: '#EE9972' }}>₹200</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
