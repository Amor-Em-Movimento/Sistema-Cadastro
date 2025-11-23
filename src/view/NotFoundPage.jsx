import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NotFoundPage() {
    const location = useLocation();

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '70vh',
            textAlign: 'center',
            color: '#333'
        }}>
            <h1 style={{ fontSize: '5rem', color: '#a00', margin: 0 }}>404</h1>
            <h2 style={{ marginBottom: '20px' }}>Ops... Página não encontrada!</h2>
            <p style={{ marginBottom: '30px', color: '#666' }}>
                A URL solicitada <strong>{location.pathname}</strong> não existe neste sistema.
            </p>
            <Link to="/">
                <button style={{ 
                    padding: '10px 20px', 
                    backgroundColor: '#a00', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer' 
                }}>
                    Voltar para o Início
                </button>
            </Link>
        </div>
    );
}