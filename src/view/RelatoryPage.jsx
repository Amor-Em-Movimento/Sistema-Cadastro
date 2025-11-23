import React from 'react';

export default function RelatoryPage() {
    const cardStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        flex: '1',
        minWidth: '200px',
        textAlign: 'center'
    };

    const numberStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#a00',
        margin: '10px 0'
    };

    return (
        <div style={{ width: '100%', maxWidth: '900px', padding: '20px' }}>
            <h2 style={{ color: '#333', marginBottom: '20px' }}>Resumo Geral</h2>
            
            {/* Cards de Métricas */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
                <div style={cardStyle}>
                    <h3>Famílias Cadastradas</h3>
                    <div style={numberStyle}>124</div>
                    <p style={{ color: '#666' }}>Total ativo no sistema</p>
                </div>
                <div style={cardStyle}>
                    <h3>Cestas Entregues</h3>
                    <div style={numberStyle}>85</div>
                    <p style={{ color: '#666' }}>Neste mês</p>
                </div>
                <div style={cardStyle}>
                    <h3>Novos Cadastros</h3>
                    <div style={numberStyle}>12</div>
                    <p style={{ color: '#666' }}>Últimos 30 dias</p>
                </div>
            </div>

            {/* Lista de Atividades Recentes */}
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '15px', color: '#333' }}>Últimas Movimentações</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
                        <span>Entrega de Cesta Básica - Família Souza</span>
                        <span style={{ color: '#888', fontSize: '0.9rem' }}>Hoje, 14:30</span>
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
                        <span>Novo Cadastro - Roberto Mendes</span>
                        <span style={{ color: '#888', fontSize: '0.9rem' }}>Ontem, 09:15</span>
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
                        <span>Atualização de Endereço - Carla Dias</span>
                        <span style={{ color: '#888', fontSize: '0.9rem' }}>20/11/2025</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}