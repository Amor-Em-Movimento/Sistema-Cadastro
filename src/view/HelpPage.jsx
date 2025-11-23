import React from 'react';

export default function HelpPage() {
    const sectionStyle = {
        marginBottom: '30px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    };

    return (
        <div style={{ width: '100%', maxWidth: '800px', padding: '20px', textAlign: 'left' }}>
            
            <div style={sectionStyle}>
                <h2 style={{ color: '#a00', marginBottom: '15px' }}>Precisa de ajuda?</h2>
                <p style={{ color: '#333', lineHeight: '1.6' }}>
                    Se você está com dificuldades para usar o sistema ou encontrou algum erro, entre em contato com a equipe de suporte técnico do Amor em Movimento.
                </p>
            </div>

            <div style={sectionStyle}>
                <h3 style={{ marginBottom: '15px', color: '#333' }}>Perguntas Frequentes (FAQ)</h3>
                
                <details style={{ marginBottom: '10px', cursor: 'pointer' }}>
                    <summary style={{ fontWeight: 'bold', color: '#555' }}>Como cadastrar uma nova família?</summary>
                    <p style={{ padding: '10px', color: '#666' }}>Vá até o menu "Cadastrar", preencha o formulário com os dados do responsável e dependentes e clique em "Salvar".</p>
                </details>

                <details style={{ marginBottom: '10px', cursor: 'pointer' }}>
                    <summary style={{ fontWeight: 'bold', color: '#555' }}>Como editar um cadastro existente?</summary>
                    <p style={{ padding: '10px', color: '#666' }}>Acesse o menu "Buscar", encontre a família desejada na lista e clique no botão "Editar".</p>
                </details>

                <details style={{ marginBottom: '10px', cursor: 'pointer' }}>
                    <summary style={{ fontWeight: 'bold', color: '#555' }}>Esqueci minha senha, o que fazer?</summary>
                    <p style={{ padding: '10px', color: '#666' }}>Entre em contato com o administrador do sistema pelo e-mail de suporte para solicitar a redefinição.</p>
                </details>
            </div>

            <div style={sectionStyle}>
                <h3 style={{ marginBottom: '15px', color: '#333' }}>Canais de Suporte</h3>
                <ul style={{ listStyle: 'none', padding: 0, color: '#444' }}>
                    <li style={{ marginBottom: '10px' }}>📧 <strong>E-mail:</strong> suporte@amoremmovimento.org</li>
                    <li style={{ marginBottom: '10px' }}>📞 <strong>Telefone:</strong> (11) 4002-8922</li>
                    <li>🏢 <strong>Sede:</strong> Rua da Solidariedade, 123 - Centro</li>
                </ul>
            </div>

        </div>
    );
}