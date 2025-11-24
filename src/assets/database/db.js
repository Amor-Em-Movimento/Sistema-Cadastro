export const users = [
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

export const families = [
    { 
        id: 1, 
        nomeResponsavel: 'Ana Souza', 
        bairro: 'Centro', 
        dependentes: 3, 
        status: 'Ativo', 
        cpf: '123.456.789-00', 
        telefone: '(11) 99999-0001', 
        necessidades: 'Cesta básica' 
    },
    { 
        id: 2, 
        nomeResponsavel: 'Carlos Pereira', 
        bairro: 'Jardim das Flores', 
        dependentes: 1, 
        status: 'Pendente', 
        cpf: '234.567.890-11', 
        telefone: '(11) 99999-0002', 
        necessidades: 'Roupas tam. M' 
    },
    { 
        id: 3, 
        nomeResponsavel: 'Beatriz Lima', 
        bairro: 'Vila Nova', 
        dependentes: 5, 
        status: 'Ativo', 
        cpf: '345.678.901-22', 
        telefone: '(11) 99999-0003', 
        necessidades: 'Leite e Fraldas' 
    }
];

export const inventory = [
    { id: 1, item: 'Cesta Básica', quantidade: 50, unidade: 'un' },
    { id: 2, item: 'Leite em Pó', quantidade: 120, unidade: 'lata' },
    { id: 3, item: 'Fralda G', quantidade: 30, unidade: 'pct' },
    { id: 4, item: 'Cobertor', quantidade: 15, unidade: 'un' }
];

export const donations = [
    { id: 1, familyId: 1, itemId: 1, data: '2025-06-01', quantidade: 1 }, 
    { id: 2, familyId: 3, itemId: 3, data: '2025-06-02', quantidade: 2 },
    { id: 3, familyId: 1, itemId: 2, data: '2025-06-10', quantidade: 3 },  
    { id: 4, familyId: 2, itemId: 4, data: '2025-06-11', quantidade: 3 }  
];