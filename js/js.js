/*******************************Variáveis e Constantes***********************************/
const home_btn = document.querySelector('.home-btn');
const buscar_btn = document.querySelector('.buscar-btn');
const cadastro_btn = document.querySelector('.cadastro-btn');
const relatorio_btn = document.querySelector('.relatorio-btn');
const help_btn = document.querySelector('.help-btn');
const logout_btn = document.querySelector('.logout-btn');
const profile_btn = document.querySelector('.profile-btn');
const btMenu = document.querySelector('.sidebar-header-btn');
const return_btn = document.querySelector('.return-btn');
const titleMenu = document.querySelector('.sidebar-header-title');
const filter_btn = document.querySelector('.btn-filter');
const export_btn = document.querySelector('.export-btn');
const add_btn = document.querySelector('.add-btn');
const save_crianca_btn = document.querySelector('#save-crianca-btn');
const cancel_btn = document.querySelector('#cancel-btn');
const back_btn = document.querySelector('.back-btn');
const next_btn = document.querySelector('.next-btn');
const save_profile_btn = document.querySelector('#save-profile-btn')
const edit_profile_btn = document.querySelector('#edit-profile-btn')
const profile_form = document.querySelector('#profile-content')
const search_bar = document.querySelector('#search-bar');
const submit_help = document.querySelector('#submit-help-btn');

/*******************************Events Listener******************************************/
home_btn?.addEventListener('click', (e)=> {
    e.preventDefault();
    window.location.href = '../pages/home.html';
});
buscar_btn?.addEventListener('click', (e)=> {
    e.preventDefault();
    window.location.href = '../pages/buscar.html';
});
cadastro_btn?.addEventListener('click', (e)=> {
    e.preventDefault();
    window.location.href = '../pages/cadastro.html';
});
relatorio_btn?.addEventListener('click', (e)=> {
    e.preventDefault();
    window.location.href = '../pages/relatorio.html';
});
help_btn?.addEventListener('click', (e)=> {
    e.preventDefault();
    window.location.href = '../pages/help.html';
});
logout_btn?.addEventListener('click', (e)=> {
    e.preventDefault();
    //adicionar modal de confirmação
    window.location.href = '../../index.html';
});
profile_btn?.addEventListener('click', (e)=> {
    e.preventDefault();
    window.location.href = '../pages/profile.html';
});
profile_form?.addEventListener('load', (e)=>{
    e.preventDefault();
    exibePerfil()
})
return_btn?.addEventListener('click', (e)=> {
    e.preventDefault();
    window.location.href = '../pages/home.html';
});
btMenu?.addEventListener('click', (e)=>{
    e.preventDefault();
    toggleSidebar();
});
titleMenu?.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href = '../pages/home.html';
});
/* Eventos de botões */
submit_help?.addEventListener('click', (e)=>{
    e.preventDefault();
    salvaHelp();
});
save_crianca_btn?.addEventListener('click', (e)=>{
    e.preventDefault();
    registraCrianca()
});
cancel_btn?.addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.removeItem("editandoId");
    document.querySelector('#nome-resp').value = "";
    document.querySelector('#nome-crianca').value = "";
    document.querySelector('#data-nasc').value = "";
    document.querySelector('#tam-roupa').value = "";
    document.querySelector('#tam-calcado').value = "";
    document.querySelector('select').value = "";
});
filter_btn?.addEventListener('click', (e)=>{
    e.preventDefault();
    buscaCrianca()
});
edit_profile_btn?.addEventListener('click',(e)=>{
    e.preventDefault();
    habilitaDadosPefilEdicao(true);
});
save_profile_btn?.addEventListener('click', (e)=>{
    e.preventDefault();
    salvaDadosPerfil()
});
search_bar?.addEventListener('keydown', (e)=>{
    // e.preventDefault();
    if (e.key === 'Enter') {
        buscaCrianca();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const pagina = document.body.dataset.pagina;
    if (pagina === "cadastro") {
        carregaInfoCrianca();
        // document.getElementById("btn-salvar")?.addEventListener("click", registraCrianca);
    } else if (pagina === "profile"){
        habilitaDadosPefilEdicao(false)
    } else if (pagina === "relatorio") {
        buscaCrianca();
    }
});

/*******************************Funções do Sistema****************************************/
//Função de alternar o menu lateral
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.querySelector('.sidebar-header-title').style.display =
        document.getElementById('sidebar').classList.contains('collapsed') ? 'none' : '';
    document.querySelectorAll('.menu-item-title').forEach(el => {
        el.style.display = document.getElementById('sidebar').classList.contains('collapsed') ? 'none' : '';
    });
}

//Função para cadastrar criança
function registraCrianca() {
    const nome_resp = document.querySelector('#nome-resp').value.trim();
    const nome_crianca = document.querySelector('#nome-crianca').value.trim();
    const nascimento = document.querySelector('#data-nasc').value;
    const roupa = document.querySelector('#tam-roupa').value.trim();
    const calcado = document.querySelector('#tam-calcado').value.trim();
    const sexo = document.querySelector('select').value;

    // Validação
    if (!nome_resp || !nome_crianca || !nascimento || !roupa || !calcado || !sexo) {
        alert("Preencha todos os campos.");
        return;
    }
    if (new Date(nascimento) > new Date()) {
        alert("A data de nascimento não pode ser futura.");
        return;
    }

    const idEditando = localStorage.getItem("editandoId");
    if (idEditando) {
        // Editar criança existente
        const criancas = JSON.parse(localStorage.getItem("crianca")) || [];
        const index = criancas.findIndex(c => c.id == idEditando);
        if (index !== -1) {
            criancas[index] = {
                id: parseInt(idEditando),
                nome_resp,
                nome_crianca,
                nascimento,
                roupa,
                calcado,
                sexo
            };
            localStorage.setItem("crianca", JSON.stringify(criancas));
            localStorage.removeItem("editandoId");
            alert("Cadastro atualizado com sucesso!");
        } else {
            alert("Criança não encontrada.");
        }
    } else{

        let ultimoId = parseInt(localStorage.getItem("idCrianca")) || 0;
        const novoId = ultimoId + 1;
        localStorage.setItem("idCrianca", novoId);
        
        const crianca = {
            id: novoId,
            nome_resp,
            nome_crianca,
            nascimento,
            roupa,
            calcado,
            sexo
        };
        
        const chave = "crianca";
        const lista = JSON.parse(localStorage.getItem(chave)) || [];
        lista.push(crianca);
        localStorage.setItem(chave, JSON.stringify(lista));
        
        alert("Cadastro salvo com sucesso!");
    }
    localStorage.removeItem("editandoId");
    document.querySelector('#nome-resp').value = "";
    document.querySelector('#nome-crianca').value = "";
    document.querySelector('#data-nasc').value = "";
    document.querySelector('#tam-roupa').value = "";
    document.querySelector('#tam-calcado').value = "";
    document.querySelector('select').value = "";
}

// Função para retornar todos os valores do localStorage
function buscaCrianca() {
    const relatorio_page = document.querySelector('.filter-container')? true : false;
    const criancas = JSON.parse(localStorage.getItem("crianca")) || [];
    
    if (relatorio_page) {
        const tableBody = document.querySelector('#table-body');
        tableBody.innerHTML = ''; 

        const nome_resp_filtro = document.querySelector('#nome-filter').value.trim();
        const nome_crianca_filtro = document.querySelector('#nome-filter').value.trim();
        const data_filtro = document.querySelector('#data-filter').value.trim();
        const roupa_filtro = document.querySelector('#roupa-filter').value.trim();
        const calcado_filtro = document.querySelector('#calcado-filter').value.trim();
        
        const criancas_filtradas = criancas.filter(crianca => {
            let nome_resp = !nome_resp_filtro || crianca.nome_resp.toLowerCase().includes(nome_resp_filtro.toLowerCase());
            let nome_crianca = !nome_crianca_filtro || crianca.nome_crianca.toLowerCase().includes(nome_crianca_filtro.toLowerCase());
            let data_nascimento = !data_filtro || crianca.nascimento === data_filtro;
            let tam_roupa = !roupa_filtro || crianca.roupa.toLowerCase().includes(roupa_filtro.toLowerCase());
            let tam_calcado = !calcado_filtro || crianca.calcado.toLowerCase().includes(calcado_filtro.toLowerCase());

            return (nome_resp || nome_crianca) && data_nascimento && tam_roupa && tam_calcado;
        })
        if (criancas_filtradas.length === 0) {
            const linhaTabela = tableBody.insertRow();
            linhaTabela.innerHTML = `
                <td colspan="8" class="text-center">Nenhuma criança encontrada.</td>
            `;
            return;
        } else{
            tableBody.innerHTML = ''; // Limpa a tabela antes de adicionar os resultados
            criancas_filtradas.forEach(crianca=>{
                const linhaTabela = tableBody.insertRow();
                linhaTabela.innerHTML = `
                <td>${crianca.id}</td>
                <td>${crianca.nome_resp}</td>
                <td>${crianca.nome_crianca}</td>
                <td>${formatarData(crianca.nascimento)}</td>
                <td>${crianca.sexo}</td>
                <td>${crianca.roupa}</td>
                <td>${crianca.calcado}</td>
                <td class="acoes"></td>
                `;
                
                const acoes = linhaTabela.querySelector('.acoes');
                
                const btnEditar = document.createElement("button");
                btnEditar.textContent = 'Editar';
                btnEditar.classList.add('edit-row-btn');
                btnEditar.addEventListener('click', () => {
                    editarCrianca(crianca.id);                   
                });
                
                const btnDetalhes = document.createElement("button");
                btnDetalhes.className = "details-row-btn";
                btnDetalhes.textContent = "Detalhes";
                btnDetalhes.addEventListener('click', ()=>{
                    mostrarDetalhes(crianca.id)
                });
                
                acoes.appendChild(btnEditar);
                acoes.appendChild(btnDetalhes);
            })
        }
    } else{
        const cardBody = document.getElementById("resultados-container");
        const nome_filtro = document.querySelector('#search-bar').value.trim().toLowerCase();

        cardBody.innerHTML = "";
        const criancas_filtradas = criancas.filter(c =>
            c.nome_crianca.toLowerCase().includes(nome_filtro)
        );

        if (criancas_filtradas.length === 0) {
            cardBody.innerHTML = "<p>Nenhum registro encontrado.</p>";
            return;
        } else{
            criancas_filtradas.forEach(crianca => {
                const card = document.createElement("div");
                card.className = "card-crianca";
                card.innerHTML = `
                <button class="btn-editar-card" onclick="editarCrianca(${crianca.id})">Editar</button>
                <h4>${crianca.nome_crianca}</h4>
                <p><strong>Responsável:</strong> ${crianca.nome_resp}</p>
                <p><strong>Data Nascimento:</strong> ${formatarData(crianca.nascimento)}</p>
                <p><strong>Sexo:</strong> ${crianca.sexo}</p>
                <p><strong>Roupa:</strong> ${crianca.roupa}</p>
                <p><strong>Calçado:</strong> ${crianca.calcado}</p>
                `;
                cardBody.appendChild(card);
            });
        }
    }
}

function habilitaDadosPefilEdicao(editando){
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const username = document.querySelector("#profile-username");
    const email = document.querySelector("#profile-email");
    const password = document.querySelector("#profile-password");
    const confirm_password = document.querySelector("#profile-confirm-password");

    if (editando){
        [username, email, password, confirm_password].forEach(input => input.disabled = false);
        username.focus();
    }

    username.value = user.username || "";
    email.value = user.email || "";
    password.value = user.password || "";
}
function salvaDadosPerfil(){
    const username = document.querySelector("#profile-username");
    const email = document.querySelector("#profile-email");
    const password = document.querySelector("#profile-password");
    const confirm_password = document.querySelector("#profile-confirm-password");

    if (password.value !== confirm_password.value) {
        alert("As senhas não coincidem.");
        return;
    }
    const updatedUser = {
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value
    };
    localStorage.setItem("loggedUser", JSON.stringify(updatedUser));
    alert("Perfil atualizado com sucesso.");
    [username, email, password, confirm_password].forEach(input => input.disabled = true);
};

function exibePerfil(){
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) {
        document.querySelector("#profile-username").value = loggedUser.username || "";
        document.querySelector("#profile-email").value = loggedUser.email || "";
        document.querySelector("#profile-password").value = loggedUser.password || "";
        document.querySelector("#profile-confirm-password").value = loggedUser.password || "";
        [
            document.querySelector("#profile-username"),
            document.querySelector("#profile-email"),
            document.querySelector("#profile-password"),
            document.querySelector("#profile-confirm-password")
        ].forEach(input => input.disabled = true);
    }
};

function editarCrianca(idCrianca) {
    const criancas = JSON.parse(localStorage.getItem("crianca")) || [];
    const crianca = criancas.find(c => c.id === idCrianca);
    
    if (!crianca) {
        alert("Criança não encontrada.");
        return;
    }

    localStorage.setItem("editandoId", crianca.id);
    window.location.href = "../pages/cadastro.html";
}

function carregaInfoCrianca(){
    const idEditando = localStorage.getItem("editandoId");
    if (!idEditando) return;

    const criancas = JSON.parse(localStorage.getItem("crianca")) || [];
    const crianca = criancas.find(c => c.id == idEditando);
    if (!crianca) return;

    document.querySelector('#nome-resp').value = crianca.nome_resp || "";
    document.querySelector('#nome-crianca').value = crianca.nome_crianca || "";
    document.querySelector('#data-nasc').value = crianca.nascimento || "";
    document.querySelector('#tam-roupa').value = crianca.roupa || "";
    document.querySelector('#tam-calcado').value = crianca.calcado || "";
    document.querySelector('select').value = crianca.sexo || "";
}
function mostrarDetalhes(idCrianca) {
    const criancas = JSON.parse(localStorage.getItem("crianca")) || [];
    const crianca = criancas.find(c => c.id === idCrianca);
    if (!crianca) {
        alert("Criança não encontrada.");
        return;
    }

    // Cria o modal se não existir
    let modal = document.getElementById("modal-crianca");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "modal-crianca";
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100vw";
        modal.style.height = "100vh";
        modal.style.background = "rgba(0,0,0,0.5)";
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.zIndex = "9999";
        modal.innerHTML = `
        <div id="modal-content-crianca" style="background:#fff; padding:0; border-radius:10px; min-width:300px; max-width:90vw; position:relative;">
            <button id="fechar-modal-crianca" style="position:absolute; top:8px; right:12px; font-size:1.5rem; background:none; border:none; cursor:pointer;">&times;</button>
            <div id="modal-card-crianca" class="card-crianca" style="margin: 2.5rem 2rem 2rem 2rem;"></div>
        </div>
        `;
        document.body.appendChild(modal);
        modal.querySelector("#fechar-modal-crianca").onclick = () => modal.style.display = "none";
        modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
        };
    } else {
        modal.style.display = "flex";
    }

    // Conteúdo do card no estilo da página de busca
    const card = `
        <h4>${crianca.nome_crianca}</h4>
        <p><strong>Responsável:</strong> ${crianca.nome_resp}</p>
        <p><strong>Data Nascimento:</strong> ${formatarData(crianca.nascimento)}</p>
        <p><strong>Sexo:</strong> ${crianca.sexo}</p>
        <p><strong>Roupa:</strong> ${crianca.roupa}</p>
        <p><strong>Calçado:</strong> ${crianca.calcado}</p>
    `;
    document.getElementById("modal-card-crianca").innerHTML = card;
    modal.style.display = "flex";
}


/**********************************Funções Auxiliares*************************************/
function formatarData(data) {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

function salvaHelp() {
    const nome = document.querySelector('#nome-help').value.trim();
    const email = document.querySelector('#email-help').value.trim();
    const titulo = document.querySelector('#titulo-help').value.trim();
    const mensagem = document.querySelector('#mensagem-help').value.trim();

    if (!nome || !email || !titulo ||!mensagem) {
        alert("Preencha todos os campos.");
        return;
    }

    let ultimoId = parseInt(localStorage.getItem("idHelp")) || 0;
        const novoId = ultimoId + 1;
        localStorage.setItem("idHelp", novoId);

    const helpData = {
        id: novoId,
        nome,
        email,
        titulo,
        mensagem,
        data: new Date().toISOString()
    };

    const helpList = JSON.parse(localStorage.getItem("helpList")) || [];
    helpList.push(helpData);
    localStorage.setItem("helpList", JSON.stringify(helpList));

    alert("Mensagem enviada com sucesso!");
    document.querySelector('#nome-help').value = "";
    document.querySelector('#email-help').value = "";
    document.querySelector('#titulo-help').value = "";
    document.querySelector('#mensagem-help').value = "";
}
