import React, { useState } from 'react';
import { useData } from '../Context/DataContext';

export default function SearchPage() {
    const { families, removeFamily } = useData();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFamilies = families.filter(family => 
        family.nomeResponsavel?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        family.bairro?.toLowerCase().includes(searchTerm.toLowerCase())
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
            </div>

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
                        {filteredFamilies.map(fam => (
                            <tr key={fam.id}>
                                <td style={tableCellStyle}>{fam.nomeResponsavel}</td>
                                <td style={tableCellStyle}>{fam.bairro}</td>
                                <td style={tableCellStyle}>{fam.dependentes}</td>
                                <td style={tableCellStyle}>{fam.status}</td>
                                <td style={tableCellStyle}>
                                    <button onClick={() => removeFamily(fam.id)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}