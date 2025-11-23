import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logotipo_amoremmovimento.png'; // Verifique se o caminho está correto ou use o import existente

export default function HomePage() {
    return (
        <div style={{ width: '100%', maxWidth: '900px', padding: '20px' }}>
            <div style={{ 
                backgroundColor: 'white', 
                padding: '30px', 
                borderRadius: '8px', 
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                textAlign: 'center',
                marginBottom: '30px'
            }}>
                <img src={logo} alt="Logo Amor em Movimento" style={{ width: '120px', marginBottom: '20px' }} />
                <h1 style={{ color: '#a00', marginBottom: '10px' }}>Bem-vindo ao Amor em Movimento</h1>
                <p style={{ color: '#555', fontSize: '1.1rem' }}>Gestão de cadastros e doações simplificada.</p>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '25px' }}>
                    <Link to="/register">
                        <button style={{ 
                            padding: '12px 24px', 
                            backgroundColor: '#a00', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}>Novo Cadastro</button>
                    </Link>
                    <Link to="/search">
                        <button style={{ 
                            padding: '12px 24px', 
                            backgroundColor: '#333', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}>Buscar Família</button>
                    </Link>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                    <h2 style={{ color: '#a00', marginBottom: '15px' }}>Objetivo do Sistema</h2>
                    <p style={{ lineHeight: '1.6', color: '#444' }}>
                        Este sistema foi criado para ajudar a organizar de forma fácil as doações feitas pelo projeto. 
                        Aqui, é possível cadastrar as famílias que precisam de ajuda, informando dados como nome, endereço, 
                        idade e necessidades. Nosso objetivo é facilitar a vida de quem ajuda.
                    </p>
                </div>
                <div style={{ flex: 1, minWidth: '300px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                    <h2 style={{ color: '#a00', marginBottom: '15px' }}>Quem Somos?</h2>
                    <p style={{ lineHeight: '1.6', color: '#444' }}>
                        Somos o Amor em Movimento, um projeto que ajuda pessoas em situação de vulnerabilidade com doações 
                        e ações solidárias. Não temos fins lucrativos — apenas o desejo de fazer o bem e cuidar do próximo.
                        Juntos, fazemos a diferença.
                    </p>
                </div>
            </div>
        </div>
    );
}