import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import logo from '../assets/imgs/logotipo_amoremmovimento.png'; 

export default function LoginPage() {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        
        const result = login(username, password);
        
        if (!result.success) {
            setError(result.message);
        }
    };

    return (
        <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            backgroundColor: '#f4f4f4',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                textAlign: 'center',
                width: '100%',
                maxWidth: '350px'
            }}>
                <img src={logo} alt="Logo" style={{ width: '80px', marginBottom: '10px' }} />
                <h1 style={{ color: '#a00', fontSize: '1.5rem', marginBottom: '20px' }}>Login</h1>
                
                {error && <div style={{ color: 'red', marginBottom: '15px', fontSize: '0.9rem' }}>{error}</div>}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
                        required
                    />
                    <button type="submit" style={{ 
                        backgroundColor: '#a00', 
                        color: 'white', 
                        padding: '12px', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '1rem'
                    }}>
                        Entrar no Sistema
                    </button>
                </form>
            </div>
        </div>
    );
}