import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const USERS = [
    { 
        username: 'admin', 
        password: '123', 
        name: 'Administrador', 
        role: 'admin',
        token: 'token-admin-123' 
    },
    { 
        username: 'voluntario', 
        password: '123', 
        name: 'João', 
        role: 'user',
        token: 'token-user-456' 
    },
    { 
        username: 'gestor', 
        password: '123', 
        name: 'Maria', 
        role: 'manager',
        token: 'token-manager-789' 
    }
];

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const navigate = useNavigate();

    const login = (usernameInput, passwordInput) => {
        const userFound = USERS.find(u => 
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