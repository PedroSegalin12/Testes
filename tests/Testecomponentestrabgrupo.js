function runComponentTests() {
  // Teste Navegação Principal
  testar("COMPONENT - Itens do menu de navegação devem estar na tela", () => {
    const menuItens = [
      "dashboard",
      "feirantes",
      "estandes",
      "inscricoes",
      "relatorios",
      "configuracoes",
      "suporte"
    ];

    menuItens.forEach(id => {
      const elemento = document.getElementById(id);
      if (!elemento) throw new Error(`Menu '${id}' não encontrado`);
    });
  });

  // Teste Login
  testar("COMPONENT - Campos da tela de login devem aceitar valores", () => {
    const email = document.getElementById("login-email");
    const senha = document.getElementById("login-senha");
    const idioma = document.getElementById("login-idioma");

    email.value = "teste@exemplo.com";
    senha.value = "123456";
    idioma.value = "PT";

    if (email.value !== "teste@exemplo.com") throw new Error("Campo de email com problema");
    if (senha.value !== "123456") throw new Error("Campo de senha com problema");
    if (idioma.value !== "PT") throw new Error("Campo de idioma com problema");
  });

  // Teste Botões de Login
  testar("COMPONENT - Botões da tela de login devem funcionar", () => {
    const botaoLogin = document.getElementById("btn-login");
    const botaoEsqueci = document.getElementById("btn-esqueci-senha");
    const botaoCadastro = document.getElementById("btn-cadastro");

    let clicouLogin = false;
    let clicouEsqueci = false;
    let clicouCadastro = false;

    botaoLogin.addEventListener("click", () => clicouLogin = true);
    botaoEsqueci.addEventListener("click", () => clicouEsqueci = true);
    botaoCadastro.addEventListener("click", () => clicouCadastro = true);

    botaoLogin.click();
    botaoEsqueci.click();
    botaoCadastro.click();

    if (!clicouLogin) throw new Error("Botão Login não clicável");
    if (!clicouEsqueci) throw new Error("Botão Esqueci Senha não clicável");
    if (!clicouCadastro) throw new Error("Botão Cadastro não clicável");
  });

  // Teste Dashboard
  testar("COMPONENT - Cards e gráficos do dashboard devem estar presentes", () => {
    const cards = [
      "card-total-feirantes",
      "card-estandes",
      "card-proximas-feiras",
      "card-receitas"
    ];

    cards.forEach(id => {
      const card = document.getElementById(id);
      if (!card) throw new Error(`Card '${id}' não encontrado`);
    });

    const grafico = document.getElementById("dashboard-grafico");
    if (!grafico) throw new Error("Gráfico do dashboard não encontrado");
  });

  // Teste Tabela de Feirantes
  testar("COMPONENT - Tabela de feirantes deve conter colunas principais", () => {
    const colunas = [
      "col-nome",
      "col-empresa",
      "col-cnpj",
      "col-contato",
      "col-tipo-produto",
      "col-status"
    ];

    colunas.forEach(id => {
      const coluna = document.getElementById(id);
      if (!coluna) throw new Error(`Coluna '${id}' não encontrada`);
    });

    const botoes = [
      "btn-cadastrar-feirante",
      "btn-editar-feirante",
      "btn-enviar-mensagem",
      "btn-gerar-pdf"
    ];

    botoes.forEach(id => {
      const botao = document.getElementById(id);
      if (!botao) throw new Error(`Botão '${id}' não encontrado`);
    });
  });

  // Teste Mapa Interativo
  testar("COMPONENT - Mapa interativo deve ter zonas clicáveis", () => {
    const zonas = [
      "zona-disponivel",
      "zona-reservado",
      "zona-ocupado"
    ];

    zonas.forEach(id => {
      const zona = document.getElementById(id);
      if (!zona) throw new Error(`Zona '${id}' não encontrada no mapa`);
    });
  });

  // Teste Agendamento
  testar("COMPONENT - Campos do calendário devem estar presentes", () => {
    const datas = [
      "data-montagem",
      "data-evento",
      "data-desmontagem"
    ];

    datas.forEach(id => {
      const campo = document.getElementById(id);
      if (!campo) throw new Error(`Campo '${id}' do calendário não encontrado`);
    });
  });

  // Teste Pagamentos
  testar("COMPONENT - Tabela de pagamentos deve ter campos principais", () => {
    const campos = [
      "valor-estande",
      "metodo-pagamento",
      "status-pagamento",
      "btn-gerar-2via",
      "btn-enviar-comprovante"
    ];

    campos.forEach(id => {
      const campo = document.getElementById(id);
      if (!campo) throw new Error(`Campo '${id}' da área de pagamentos não encontrado`);
    });
  });

  // Teste Formulários Personalizados
  testar("COMPONENT - Campos personalizados devem receber valores", () => {
    const nome = document.getElementById("form-nome");
    const empresa = document.getElementById("form-empresa");
    const tipoProduto = document.getElementById("form-produto");
    const eletrica = document.getElementById("form-eletrica");
    const limpeza = document.getElementById("form-limpeza");

    nome.value = "Feirante Exemplo";
    empresa.value = "Empresa Exemplo";
    tipoProduto.value = "Alimentos";
    eletrica.checked = true;
    limpeza.checked = true;

    if (nome.value !== "Feirante Exemplo") throw new Error("Nome do formulário com problema");
    if (empresa.value !== "Empresa Exemplo") throw new Error("Empresa do formulário com problema");
    if (tipoProduto.value !== "Alimentos") throw new Error("Tipo de produto com problema");
    if (!eletrica.checked) throw new Error("Campo elétrica não marcável");
    if (!limpeza.checked) throw new Error("Campo limpeza não marcável");
  });

  // Teste Relatórios
  testar("COMPONENT - Filtros e botões de relatórios devem funcionar", () => {
    const filtros = [
      "filtro-evento",
      "filtro-cidade",
      "filtro-categoria"
    ];

    filtros.forEach(id => {
      const campo = document.getElementById(id);
      if (!campo) throw new Error(`Filtro '${id}' não encontrado`);
    });

    const botoes = [
      "btn-exportar-pdf",
      "btn-exportar-excel"
    ];

    botoes.forEach(id => {
      const botao = document.getElementById(id);
      if (!botao) throw new Error(`Botão '${id}' de relatório não encontrado`);
    });
  });

  // Teste Configurações
  testar("COMPONENT - Configurações devem ter campos básicos", () => {
    const campos = [
      "config-usuarios",
      "config-idiomas",
      "config-cores",
      "config-logo"
    ];

    campos.forEach(id => {
      const campo = document.getElementById(id);
      if (!campo) throw new Error(`Campo de configuração '${id}' não encontrado`);
    });
  });

  // Teste Suporte
  testar("COMPONENT - Botão de suporte deve estar presente", () => {
    const botaoAjuda = document.getElementById("btn-ajuda");
    if (!botaoAjuda) throw new Error("Botão de ajuda não encontrado");
  });
}
