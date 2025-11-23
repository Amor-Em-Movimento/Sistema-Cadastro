import React, { useState } from 'react';

// Dados fictícios para simulação
const mockFamilies = [
    { id: 1, nome: 'Ana Souza', bairro: 'Centro', dependentes: 3, status: 'Ativo' },
    { id: 2, nome: 'Carlos Pereira', bairro: 'Jardim das Flores', dependentes: 1, status: 'Pendente' },
    { id: 3, nome: 'Beatriz Lima', bairro: 'Vila Nova', dependentes: 5, status: 'Ativo' },
    { id: 4, nome: 'João Santos', bairro: 'Centro', dependentes: 2, status: 'Inativo' },
];

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFamilies = mockFamilies.filter(family => 
        family.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        family.bairro.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const tableHeaderStyle = { padding: '15px', textAlign: 'left', borderBottom: '2px solid #ddd', color: '#a00', whiteSpace: 'nowrap' };
    const tableCellStyle = { padding: '15px', textAlign: 'left', borderBottom: '1px solid #eee' };

    return (
        <div className="page-container">
            <div className="form-row">
                <input 
                    className="form-input"
                    type="text" 
                    placeholder="Buscar por nome ou bairro..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button style={{ backgroundColor: '#333', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>Filtrar</button>
            </div>

            {/* Container que permite rolagem horizontal no mobile */}
            <div className="table-container">
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th style={tableHeaderStyle}>Nome</th>
                            <th style={tableHeaderStyle}>Bairro</th>
                            <th style={tableHeaderStyle}>Dependentes</th>
                            <th style={tableHeaderStyle}>Status</th>
                            <th style={tableHeaderStyle}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                         {/* ... map dos dados ... */}
                         {mockFamilies.map(fam => (
                            <tr key={fam.id}>
                                <td style={tableCellStyle}>{fam.nome}</td>
                                <td style={tableCellStyle}>{fam.bairro}</td>
                                <td style={tableCellStyle}>{fam.dependentes}</td>
                                <td style={tableCellStyle}>{fam.status}</td>
                                <td style={tableCellStyle}><button>Editar</button></td>
                            </tr>
                         ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}