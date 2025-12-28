import { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login logic
        console.log("Login attempt:", email, password);
        alert("Login functionality is not implemented yet, but we received your credentials!");
    };

    return (
        <div className="container" style={{ padding: '5rem 20px', maxWidth: '500px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Welcome Back</h1>
            <form onSubmit={handleSubmit} className="booking-form" style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        placeholder="you@example.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        placeholder="********"
                    />
                </div>
                <div className="submit-group" style={{ textAlign: 'center' }}>
                    <input 
                        type="submit" 
                        value="Login" 
                        className="cta-button" 
                        style={{ 
                            width: '100%', 
                            marginTop: '1rem', 
                            fontSize: '1.2rem',
                            cursor: 'pointer'
                        }} 
                    />
                </div>
                <p style={{ marginTop: '1rem', textAlign: 'center' }}>
                    Don't have an account? <a href="#" style={{ color: 'var(--primary-green)' }}>Sign up</a>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
