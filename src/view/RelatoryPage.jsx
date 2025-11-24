import React from 'react';
import { useData } from '../Context/DataContext';

export default function RelatoryPage() {
    const { getMetrics } = useData();
    const metrics = getMetrics(); 

    const cardStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        flex: '1',
        minWidth: '200px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center'     
    };

    const numberStyle = { fontSize: '2.5rem', fontWeight: 'bold', color: '#a00', margin: '10px 0' };
    const subTextStyle = { color: '#666', marginTop: 'auto' }; 

    return (
        <div className="page-container">
            <h2 style={{ color: '#333', marginBottom: '20px' }}>Resumo Geral</h2>
            
            <div className="card-grid" style={{ marginBottom: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                
                {/* CARD 1 */}
                <div style={cardStyle}>
                    <h3>Famílias Ativas</h3>
                    <div style={numberStyle}>{metrics.familiasAtivas}</div>
                    <p style={subTextStyle}>De {metrics.totalFamilias} cadastradas</p>
                </div>

                <div style={cardStyle}>
                    <h3>Estoque</h3>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'baseline', margin: '10px 0' }}>
                        <div style={{textAlign: 'center'}}>
                            <div style={{...numberStyle, margin: 0, fontSize: '2.5rem'}}>{metrics.produtosEmEstoque}</div>
                            <span style={{fontSize: '0.7rem', fontWeight: 'bold', color: '#555', display:'block'}}>PRODUTOS</span>
                        </div>
                        
                        <div style={{ fontSize: '2rem', color: '#ccc' }}>/</div>
                        
                        <div style={{textAlign: 'center'}}>
                            <div style={{...numberStyle, margin: 0, fontSize: '2.5rem'}}>{metrics.quantidadeItensEstoque}</div>
                            <span style={{fontSize: '0.7rem', fontWeight: 'bold', color: '#555', display:'block'}}>ITENS</span>
                        </div>
                    </div>

                    <p style={subTextStyle}>Diversidade / Quantidade total</p>
                </div>

                <div style={cardStyle}>
                    <h3>Doações Realizadas</h3>
                    <div style={numberStyle}>{metrics.totalDoacoes}</div>
                    <p style={subTextStyle}>Entregas registradas</p>
                </div>
            </div>
        </div>
    );
}