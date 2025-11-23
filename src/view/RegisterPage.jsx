import React, { useState } from 'react';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        nomeResponsavel: '',
        cpf: '',
        endereco: '',
        telefone: '',
        qtdDependentes: '',
        tamanhosRoupas: '',
        necessidades: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Dados salvos com sucesso! (Simulação)');
        console.log(formData);
    };

    const inputStyle = {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '100%',
        marginBottom: '10px',
        boxSizing: 'border-box'
    };

    const labelStyle = {
        textAlign: 'left',
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
        color: '#333'
    };

    return (
        <div className="page-container">
            <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h2 style={{ color: '#a00', marginBottom: '20px' }}>Ficha Cadastral</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label className="label">Nome do Responsável</label>
                        <input className="form-input" type="text" name="nomeResponsavel" onChange={handleChange} placeholder="Ex: Maria Silva" />
                    </div>

                    {/* A classe .form-row cuida de deixar um ao lado do outro no PC e um abaixo do outro no Mobile */}
                    <div className="form-row">
                        <div className="form-group">
                            <label>CPF</label>
                            <input className="form-input" type="text" name="cpf" onChange={handleChange} placeholder="000.000.000-00" />
                        </div>
                        <div className="form-group">
                            <label>Telefone</label>
                            <input className="form-input" type="text" name="telefone" onChange={handleChange} placeholder="(11) 99999-9999" />
                        </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label>Endereço Completo</label>
                        <input className="form-input" type="text" name="endereco" onChange={handleChange} />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Qtd. Dependentes</label>
                            <input className="form-input" type="number" name="qtdDependentes" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Tamanhos de Roupas</label>
                            <input className="form-input" type="text" name="tamanhosRoupas" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label>Outras Necessidades</label>
                        <textarea className="form-textarea" name="necessidades" onChange={handleChange} rows="3"></textarea>
                    </div>

                    <div className="form-row form-actions">
                        <button type="submit" style={{ backgroundColor: '#a00', color: 'white', padding: '10px', border:'none', borderRadius:'5px', flex: 1, cursor:'pointer' }}>Salvar Cadastro</button>
                        <button type="button" style={{ backgroundColor: '#6c757d', color: 'white', padding: '10px', border:'none', borderRadius:'5px', flex: 1, cursor:'pointer' }}>Cancelar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}