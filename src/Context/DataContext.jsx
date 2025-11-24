import { createContext, useState, useContext, useEffect } from 'react';
import { families as familiesDB, inventory as inventoryDB, donations as donationsDB } from '../assets/database/db';

const DataContext = createContext();

export function DataProvider({ children }) {
    // const [families, setFamilies] = useState(() => {
    //     const saved = localStorage.getItem('syscad_families');
    //     return saved ? JSON.parse(saved) : familiesDB; 
    // });

    // const [stock, setStock] = useState(() => {
    //     const saved = localStorage.getItem('syscad_stock');
    //     return saved ? JSON.parse(saved) : inventoryDB; 
    // });

    // const [donations, setDonations] = useState(() => {
    //     const saved = localStorage.getItem('syscad_donations');
    //     return saved ? JSON.parse(saved) : donationsDB; 
    // });

    const [families, setFamilies] = useState(familiesDB); 
    const [stock, setStock] = useState(inventoryDB);
    const [donations, setDonations] = useState(donationsDB);

    useEffect(() => localStorage.setItem('syscad_families', JSON.stringify(families)), [families]);
    useEffect(() => localStorage.setItem('syscad_stock', JSON.stringify(stock)), [stock]);
    useEffect(() => localStorage.setItem('syscad_donations', JSON.stringify(donations)), [donations]);
    
    const addFamily = (data) => {
        const newFamily = { id: Date.now(), status: 'Ativo', ...data };
        setFamilies(prev => [newFamily, ...prev]);
    };

    const removeFamily = (id) => {
        setFamilies(prev => prev.filter(fam => fam.id !== id));
    };

    const getMetrics = () => {
        return {
            totalFamilias: families.length,
            familiasAtivas: families.filter(f => f.status === 'Ativo').length,
            produtosEmEstoque: stock.length,
            quantidadeItensEstoque: stock.reduce((acc, item) => acc + item.quantidade, 0),
            totalEstoque: stock.reduce((acc, item) => acc + item.quantidade, 0),
            totalDoacoes: donations.length
        };
    };

    return (
        <DataContext.Provider value={{ 
            families, stock, donations, 
            addFamily, removeFamily, getMetrics 
        }}>
            {children}
        </DataContext.Provider>
    );
}

export const useData = () => useContext(DataContext);