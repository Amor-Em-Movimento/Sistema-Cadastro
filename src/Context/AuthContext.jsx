import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { users as usersDB } from '../assets/database/db';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const navigate = useNavigate();

    const login = (usernameInput, passwordInput) => {
        // Usa o 'usersDB' importado em vez da constante local
        const userFound = usersDB.find(u => 
            u.username === usernameInput && u.password === passwordInput
        );

        if (userFound) {
            const { password, ...userData } = userFound;
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            navigate('/'); 
            return { success: true };
        } else {
            return { success: false, message: 'Usuário ou senha incorretos!' };
        }
    };

    const logout = () => {
        const confirmExit = window.confirm("Tem certeza que deseja sair do sistema?");
        
        if (confirmExit) {
            setUser(null);
            localStorage.removeItem('user');
            navigate('/login');
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);