var medicamentos = [
  {
  imagemRemedio: "assets/img/remedio_1.png",
  nomeDoador: "João Souza",
  estado: "Minas Gerais",
  cidade: "Sete Lagoas",
  nomeRemedio: "Dipirona",
  quantidadeComprimidos: 20,
  numeroRegistro: "123456",
  validade: "2025-12-01",
  nomeEmpresa: "Medley",
  especialidade: "Analgésico"
  },
  {
  imagemRemedio: "assets/img/remedio_2.jpg",
  nomeDoador: "Maria Souza",
  estado: "Minas Gerais",
  cidade: "Belo Horizonte",
  nomeRemedio: "Paracetamol",
  quantidadeComprimidos: 20,
  numeroRegistro: "123456",
  validade: "2024-05-01",
  nomeEmpresa: "Eurofarma",
  especialidade: "Analgésico"
  },
  {
  imagemRemedio: "assets/img/remedio_3.jpg",
  nomeDoador: "Ana Souza",
  estado: "Minas Gerais",
  cidade: "Belo Horizonte",
  nomeRemedio: "Amoxilina",
  quantidadeComprimidos: 10,
  numeroRegistro: "123456",
  validade: "2024-09-15",
  nomeEmpresa: "Eurofarma",
  especialidade: "Antibiotico"
  },
  {
  imagemRemedio: "assets/img/remedio_4.jpg",
  nomeDoador: "Júlia Silva",
  estado: "Minas Gerais",
  cidade: "Belo Horizonte",
  nomeRemedio: "Paracetamol",
  quantidadeComprimidos: 50,
  numeroRegistro: "123456",
  validade: "2024-03-20",
  nomeEmpresa: "Neo Química",
  especialidade: "Analgésico"
  },
  {
  imagemRemedio: "assets/img/remedio_5.png",
  nomeDoador: "Paulo Silva",
  estado: "Minas Gerais",
  cidade: "Belo Horizonte",
  nomeRemedio: "Ibuprofeno",
  quantidadeComprimidos: 15,
  numeroRegistro: "123456",
  validade: "2023-12-10",
  nomeEmpresa: "Eurofarma",
  especialidade: "Analgésico"
  },
  {
  imagemRemedio: "assets/img/remedio_6.png",
  nomeDoador: "Lucas Silva",
  estado: "Minas Gerais",
  cidade: "Contagem",
  nomeRemedio: "Insulina",
  quantidadeComprimidos: 30,
  numeroRegistro: "123456",
  validade: "2024-02-05",
  nomeEmpresa: "Neo Química",
  especialidade: "Endocrinologico"
  },
  {
  imagemRemedio: "assets/img/remedio_7.png",
  nomeDoador: "Marcela Silva",
  estado: "Minas Gerais",
  cidade: "Contagem",
  nomeRemedio: "Losartana",
  quantidadeComprimidos: 30,
  numeroRegistro: "123456",
  validade: "2023-08-18",
  nomeEmpresa: "Medley",
  especialidade: "Anti-hipertensivo"
  },
  {
  imagemRemedio: "assets/img/remedio_8.png",
  nomeDoador: "Karina Matos",
  estado: "Minas Gerais",
  cidade: "Betim",
  nomeRemedio: "Tropinal",
  quantidadeComprimidos: 10,
  numeroRegistro: "123456",
  validade: "2024-07-10",
  nomeEmpresa: "Neo Química",
  especialidade: "Analgésico"
  },
  {
  imagemRemedio: "assets/img/remedio_9.png",
  nomeDoador: "Silvia Matos",
  estado: "Minas Gerais",
  cidade: "Betim",
  nomeRemedio: "T-Puran",
  quantidadeComprimidos: 8,
  numeroRegistro: "123456",
  validade: "2023-10-05",
  nomeEmpresa: "Medley",
  especialidade: "Endocrinologico"
  },
  {
  imagemRemedio: "assets/img/remedio_10.png",
  nomeDoador: "Pedro Pimenta",
  estado: "Minas Gerais",
  cidade: "Belo Horizonte",
  nomeRemedio: "Avastim",
  quantidadeComprimidos: 20,
  numeroRegistro: "123456",
  validade: "2023-12-01",
  nomeEmpresa: "Neo Química",
  especialidade: "Ancologico"
  },
      ];

function popularFiltros() {
  var cidades = [];
  var estados = [];
  var especialidades = [];

  for (var i = 0; i < medicamentos.length; i++) {
    var cidade = medicamentos[i].cidade;
    var estado = medicamentos[i].estado;
    var especialidade = medicamentos[i].especialidade;

    if (!cidades.includes(cidade)) {
      cidades.push(cidade);
    }

    if (!estados.includes(estado)) {
      estados.push(estado);
    }

    if (!especialidades.includes(especialidade)) {
      especialidades.push(especialidade);
    }
  }

  var filtroCidade = document.getElementById("filtroCidade");
  var filtroEstado = document.getElementById("filtroEstado");
  var filtroEspecialidade = document.getElementById("filtroEspecialidade");

  for (var i = 0; i < cidades.length; i++) {
    var option = document.createElement("option");
    option.value = cidades[i];
    option.textContent = cidades[i];
    filtroCidade.appendChild(option);
  }

  for (var i = 0; i < estados.length; i++) {
    var option = document.createElement("option");
    option.value = estados[i];
    option.textContent = estados[i];
    filtroEstado.appendChild(option);
  }

  for (var i = 0; i < especialidades.length; i++) {
    var option = document.createElement("option");
    option.value = especialidades[i];
    option.textContent = especialidades[i];
    filtroEspecialidade.appendChild(option);
  }
}

// Função para filtrar os medicamentos de acordo com os filtros selecionados
function filtrarMedicamentos() {
  var buscaInput = document.getElementById("buscaInput");
  var filtroCidade = document.getElementById("filtroCidade");
  var filtroEstado = document.getElementById("filtroEstado");
  var filtroEspecialidade = document.getElementById("filtroEspecialidade");

  var busca = buscaInput.value.trim().toLowerCase();
  var cidade = filtroCidade.value;
  var estado = filtroEstado.value;
  var especialidade = filtroEspecialidade.value;

  var medicamentoEncontrado = false;

  var medicamentoEncontradoDiv = document.querySelector(".medicamento-encontrado");
  var medicamentoIndisponivelDiv = document.querySelector(".medicamento-indisponivel");
  var solicitacoesDiv = document.querySelector(".solicitacoes");
  var chatModal = document.getElementById("chatModal");

  // Limpar os resultados anteriores
  medicamentoEncontradoDiv.style.display = "none";
  medicamentoIndisponivelDiv.style.display = "none";
  solicitacoesDiv.innerHTML = "";
  solicitacoesDiv.style.display = "none";
  chatModal.style.display = "none";

  for (var i = 0; i < medicamentos.length; i++) {
    var medicamento = medicamentos[i];
    var nomeRemedio = medicamento.nomeRemedio.toLowerCase();

    if (
      (busca !== "" && nomeRemedio.includes(busca)) ||
      (cidade !== "" && medicamento.cidade === cidade) ||
      (estado !== "" && medicamento.estado === estado) ||
      (especialidade !== "" && medicamento.especialidade === especialidade)
    ) {
      medicamentoEncontradoDiv.querySelector("img").src = medicamento.imagemRemedio;
      medicamentoEncontradoDiv.querySelector("h2").textContent = medicamento.nomeRemedio;
      medicamentoEncontradoDiv.querySelector("p:nth-child(3)").textContent = "Nome do remédio: " + medicamento.nomeRemedio;
      medicamentoEncontradoDiv.querySelector("p:nth-child(4)").textContent = "Estado: " + medicamento.estado;
      medicamentoEncontradoDiv.querySelector("p:nth-child(5)").textContent = "Cidade: " + medicamento.cidade;
      medicamentoEncontradoDiv.querySelector("p:nth-child(6)").textContent = "Quantidade de comprimidos: " + medicamento.quantidadeComprimidos;
      medicamentoEncontradoDiv.querySelector("p:nth-child(7)").textContent = "Especialidade: " + medicamento.especialidade;
      medicamentoEncontradoDiv.querySelector("p:nth-child(8)").textContent = "Validade: " + medicamento.validade;
      medicamentoEncontradoDiv.querySelector("p:nth-child(9)").textContent = "Nome do doador: " + medicamento.nomeDoador;
      medicamentoEncontradoDiv.style.display = "block";
      medicamentoEncontrado = true;
      break;
    }
  }

  if (!medicamentoEncontrado) {
    medicamentoIndisponivelDiv.style.display = "block";
  } else {
    solicitacoesDiv.style.display = "block";
  }
}

// Função para solicitar um medicamento
function solicitarMedicamento() {
  var solicitacoesDiv = document.querySelector(".solicitacoes");
  var chatModal = document.getElementById("chatModal");
  var nomeDoador = document.querySelector(".medicamento-encontrado p:nth-child(9)").textContent.replace("Nome do doador: ", "");

  solicitacoesDiv.innerHTML = "";

  var solicitacaoDiv = document.createElement("div");
  solicitacaoDiv.classList.add("solicitacao");

  var imagemDoador = document.createElement("img");
  imagemDoador.src = "assets/img/remedio_1.png";
  solicitacaoDiv.appendChild(imagemDoador);

  var nomeDoadorElement = document.createElement("p");
  nomeDoadorElement.textContent = "Nome do doador: " + nomeDoador;
  solicitacaoDiv.appendChild(nomeDoadorElement);

  var statusElement = document.createElement("p");
  statusElement.textContent = "Status: Solicitado! guarde o contato com o(a) " + nomeDoador;
  solicitacaoDiv.appendChild(statusElement);

  var buttonElement = document.createElement("button");
  buttonElement.textContent = "Abrir chat";
  buttonElement.onclick = function() {
    abrirChat(nomeDoador);
  };
  solicitacaoDiv.appendChild(buttonElement);

  solicitacoesDiv.appendChild(solicitacaoDiv);

  chatModal.style.display = "none";
}

// Função para abrir o chat com o doador
function abrirChat(nomeDoador) {
  var chatModal = document.getElementById("chatModal");
  var modalContent = document.querySelector(".modal-content");
  var mensagemInput = document.getElementById("mensagemInput");

  modalContent.innerHTML = "";
  modalContent.innerHTML += "<h3>Chat com Doador</h3>";
  modalContent.innerHTML += "<p>Nome do doador: " + nomeDoador + "</p>";

  var chatElement = document.createElement("div");
  chatElement.id = "chat";
  modalContent.appendChild(chatElement);

  chatModal.style.display = "block";

  mensagemInput.focus();
}

// Função para fechar o modal de chat
function fecharModal() {
  var chatModal = document.getElementById("chatModal");
  chatModal.style.display = "none";
}

// Função para enviar uma mensagem no chat
function enviarMensagem() {
  var mensagemInput = document.getElementById("mensagemInput");
  var chatElement = document.getElementById("chat");

  var mensagem = mensagemInput.value.trim();

  if (mensagem !== "") {
    var mensagemElement = document.createElement("p");
    mensagemElement.textContent = mensagem;
    chatElement.appendChild(mensagemElement);
    mensagemInput.value = "";
  }

  mensagemInput.focus();
}

// Popula os filtros ao carregar a página
popularFiltros();
