# [Sistema de Cadastro - Amor em Movimento](https://amoremmovimento-syscad.netlify.app/login)

A [ONG Amor em Movimento]() realiza, anualmente, uma Ação Solidária de Natal em comunidades carentes na cidade de São Paulo-SP. Essa ação engloba a doação de Kits de Natal para as crianças das comunidades.

Atualmente, os dados essenciais de Cadastro das Famílias e Crianças, como **Nome**, **Idade**, **Gênero**, **Tamanho de roupas e sapatos**, **Endereço** e **Nome do Responsável** são coletados manualmente em papel e, posteriormente, transcritos para uma planilha do Excel. Tal procedimento, além de demorado e cansativo, também pode gerar erros e retrabalho desnecessários que acabam atrapalhando as ações da ONG.

Portanto, o Objetivo do Sistema de Cadastro é auxiliar a ONG na ação de cadastro das famílias e crianças nas comunidades. Facilitando tanto o processo de coleta de dados, quanto na distribuição dos Kits doados. Facilitando o método de coleta e organização dos kits, evitando possíveis erros de contagem ou erros de informação, e agilizando a ação realizada.

---

## 🚀 Funcionalidades

- **🔐 Autenticação e Segurança**
  - Sistema de Login com validação de usuários.
  - Proteção de rotas (acesso restrito a usuários logados).
  - Logout com confirmação de segurança.

- **👨‍👩‍👧‍👦 Gestão de Famílias**
  - Cadastro completo de beneficiários (Responsável, Endereço, Dependentes, Necessidades).
  - Busca e filtragem de famílias em tempo real.
  - Exclusão de registros.

- **📦 Controle de Doações e Estoque**
  - Visualização de itens disponíveis no estoque.
  - Histórico de doações realizadas.
  - Banco de dados simulado com persistência via `localStorage` (os dados não somem ao atualizar a página).

- **📊 Relatórios Inteligentes**
  - Dashboard com métricas em tempo real.
  - Contagem de famílias ativas, diversidade de produtos e volume total de itens.

- **📱 Interface Responsiva**
  - Layout adaptável para Desktop e Mobile.
  - Sidebar dinâmica e Header inteligente.

---

## 🛠️ Tecnologias Utilizadas

- **Core:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Roteamento:** [React Router Dom 7](https://reactrouter.com/)
- **Estilização:** CSS Modules (Scoped CSS) + Flexbox/Grid Layout
- **Gerenciamento de Estado:** React Context API (`AuthContext`, `DataContext`)
- **Persistência:** LocalStorage + Mock Database (`db.js`)

---

## ⚙️ Como Rodar o Projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. **Clone o repositório** (se ainda não tiver):
   ```
   git clone [https://github.com/Amor-Em-Movimento/Sistema-Cadastro.git](https://github.com/Amor-Em-Movimento/Sistema-Cadastro.git)
   cd Sistema-Cadastro
   ```
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```
   npm run dev
   ```
4. Acesse no navegador: Geralmente em http://localhost:5173/

---

## 🔑 Acesso ao Sistema

Como o sistema utiliza um banco de dados simulado (src/database/db.js), utilize as seguintes credenciais para entrar:
Usuário (Username)	Senha	Perfil
admin	123	Administrador Geral
voluntario	123	Usuário Padrão

---

## 📂 Estrutura do Projeto
```
src/
├── assets/          # Imagens e banco de dados estático (db.js)
├── Components/      # Componentes reutilizáveis (Header, Sidebar, etc)
├── contexts/        # Gerenciamento de estado global (Auth, Data)
├── Routes/          # Configuração de rotas e proteção (PrivateRoute)
├── view/            # Páginas da aplicação (Home, Login, Register, etc)
├── App.jsx          # Componente raiz e configuração de Providers
└── main.jsx         # Ponto de entrada da aplicação
```

---

## 🤝 Contribuição

Este projeto foi desenvolvido como parte das atividades do semestre acadêmico. Pull Requests são bem-vindos para melhorias na interface ou novas funcionalidades de back-end real.
