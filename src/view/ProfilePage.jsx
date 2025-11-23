import React, { useState } from 'react';
import profileIcon from '../assets/imgs/profile_icon.svg'; // Reutilizando o ícone existente

export default function ProfilePage() {
    const [userData, setUserData] = useState({
        nome: 'Administrador',
        email: 'admin@amoremmovimento.org',
        cargo: 'Coordenador Geral',
        telefone: '(11) 99999-9999'
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setIsEditing(false);
        alert('Perfil atualizado com sucesso!');
    };

    const styles = {
        container: {
            width: '100%',
            maxWidth: '800px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        },
        card: {
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '30px'
        },
        avatarSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
        },
        avatar: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#eee',
            padding: '10px',
            border: '2px solid #a00'
        },
        infoSection: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        },
        inputGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
        },
        label: {
            fontWeight: 'bold',
            color: '#555',
            fontSize: '0.9rem'
        },
        input: {
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            backgroundColor: isEditing ? 'white' : '#f4f4f4',
            color: isEditing ? 'black' : '#555',
            cursor: isEditing ? 'text' : 'default'
        },
        buttonPrimary: {
            padding: '10px 20px',
            backgroundColor: '#a00',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            alignSelf: 'flex-start'
        },
        buttonSecondary: {
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginRight: '10px'
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={{ color: '#a00' }}>Meu Perfil</h2>

            <div style={styles.card}>
                <div style={styles.avatarSection}>
                    <img src={profileIcon} alt="Avatar" style={styles.avatar} />
                    <span style={{ fontWeight: 'bold', color: '#333' }}>{userData.cargo}</span>
                </div>

                <div style={styles.infoSection}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Nome Completo</label>
                        <input 
                            type="text" 
                            name="nome"
                            value={userData.nome} 
                            onChange={handleChange}
                            disabled={!isEditing}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>E-mail</label>
                        <input 
                            type="email" 
                            name="email"
                            value={userData.email} 
                            onChange={handleChange}
                            disabled={!isEditing}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Telefone</label>
                        <input 
                            type="text" 
                            name="telefone"
                            value={userData.telefone} 
                            onChange={handleChange}
                            disabled={!isEditing}
                            style={styles.input}
                        />
                    </div>

                    <div style={{ marginTop: '10px' }}>
                        {isEditing ? (
                            <>
                                <button style={styles.buttonSecondary} onClick={() => setIsEditing(false)}>Cancelar</button>
                                <button style={styles.buttonPrimary} onClick={handleSave}>Salvar Alterações</button>
                            </>
                        ) : (
                            <button style={styles.buttonPrimary} onClick={() => setIsEditing(true)}>Editar Perfil</button>
                        )}
                    </div>
                </div>
            </div>

            {/* Seção de Segurança */}
            <div style={{...styles.card, flexDirection: 'column', alignItems: 'flex-start', marginTop: '10px'}}>
                <h3 style={{ color: '#333', marginBottom: '10px' }}>Segurança</h3>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                    <div>
                        <strong>Senha</strong>
                        <p style={{ color: '#666', fontSize: '0.9rem', margin: '5px 0' }}>Sua senha foi alterada há 3 meses.</p>
                    </div>
                    <button style={{...styles.buttonSecondary, backgroundColor: 'transparent', color: '#a00', border: '1px solid #a00'}}>Alterar Senha</button>
                </div>
            </div>
        </div>
    );
}