// Espera o conteúdo da página carregar completamente antes de executar o script.
// É uma boa prática para evitar erros de JavaScript tentando acessar elementos
// que ainda não existem na página.
document.addEventListener('DOMContentLoaded', () => {

    // 1. SELECIONANDO OS ELEMENTOS
    // ----------------------------
    // Pegamos referências aos elementos necessários na página.
    const blocoDeNotas = document.getElementById('blocoDeNotas');
    const btnLimparNotas = document.getElementById('btnLimparNotas');
    const btnSalvarNotas = document.getElementById('btnSalvarNotas');
    const btnDarkMode = document.getElementById('btnDarkMode'); // Botão para alternar o modo escuro

    // 2. APLICANDO MODO ESCURO SALVO (SE HOUVER)
    // ------------------------------------------
    // Verificamos se o usuário já escolheu o modo escuro anteriormente.
    // Essa informação é salva no localStorage com a chave 'modoEscuro'.
    const modoSalvo = localStorage.getItem('modoEscuro');
    if (modoSalvo === 'true') {
        // Se o modo escuro estiver ativado, aplicamos a classe ao <body>
        document.body.classList.add('dark-mode');
        // E atualizamos o texto do botão
        btnDarkMode.textContent = 'Desativar Dark Mode';
    }

    // 3. ADICIONANDO FUNCIONALIDADE AO BOTÃO DARK MODE
    // -------------------------------------------------
    // Ouvimos o clique no botão de Dark Mode para alternar entre claro e escuro
    btnDarkMode.addEventListener('click', () => {
        // Alternamos a classe 'dark-mode' no <body>
        const modoAtivo = document.body.classList.toggle('dark-mode');

        // Salvamos a preferência no localStorage
        localStorage.setItem('modoEscuro', modoAtivo);

        // Atualizamos o texto do botão com base no estado atual
        btnDarkMode.textContent = modoAtivo ? 'Desativar Dark Mode' : 'Ativar Dark Mode';
    });

    // 4. ADICIONANDO EVENTO PARA LIMPAR AS NOTAS
    // ------------------------------------------
    // Quando o botão é clicado, limpamos o conteúdo do bloco de notas
    btnLimparNotas.addEventListener('click', () => {
        blocoDeNotas.value = '';
        // E também removemos a nota salva do localStorage
        localStorage.removeItem('minhaNota');
        // Mensagem de confirmação no console
        console.log("Notas limpas e removidas do localStorage!");
    });

    // 5. CARREGANDO DADOS DO LOCALSTORAGE
    // ------------------------------------
    // Buscamos a nota salva anteriormente, se houver
    const notaSalva = localStorage.getItem('minhaNota');
    if (notaSalva) {
        // Se encontrarmos uma nota, colocamos no <textarea>
        blocoDeNotas.value = notaSalva;
    }

    // 6. ADICIONANDO EVENTO PARA SALVAR NOTAS
    // ---------------------------------------
    // Quando o botão "Salvar Notas" é clicado, salvamos o conteúdo atual
    btnSalvarNotas.addEventListener('click', () => {
        // Pegamos o texto atual e salvamos no localStorage
        localStorage.setItem('minhaNota', blocoDeNotas.value);

        // Mensagem de depuração no console
        console.log("Nota salva no localStorage!");
    });

});
