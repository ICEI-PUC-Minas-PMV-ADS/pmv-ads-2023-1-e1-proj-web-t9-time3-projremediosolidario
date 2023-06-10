
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

  function buscarMedicamento() {
  var termoBusca = document.getElementById("pesquise").value;
  var medicamentoEncontrado = null;

  for (var i = 0; i < medicamentos.length; i++) {
    if (medicamentos[i].nomeRemedio.toLowerCase() === termoBusca.toLowerCase()) {
      medicamentoEncontrado = medicamentos[i];
      break;
    }
  }

  var resultadoBusca = document.getElementById("resultado-busca");

  if (medicamentoEncontrado) {
    var divMedicamento = document.createElement("div");

    var imagem = document.createElement("img");
    imagem.src = medicamentoEncontrado.imagemRemedio;

    var nome = document.createElement("p");
    nome.textContent = "Nome: " + medicamentoEncontrado.nomeRemedio;

    var doador = document.createElement("p");
    doador.textContent = "Doador: " + medicamentoEncontrado.nomeDoador;

    var estadoCidade = document.createElement("p");
    estadoCidade.textContent = "Localização: " + medicamentoEncontrado.cidade + ", " + medicamentoEncontrado.estado;

    var quantidade = document.createElement("p");
    quantidade.textContent = "Quantidade: " + medicamentoEncontrado.quantidadeComprimidos;

    var registro = document.createElement("p");
    registro.textContent = "Registro: " + medicamentoEncontrado.numeroRegistro;

    var validade = document.createElement("p");
    validade.textContent = "Validade: " + medicamentoEncontrado.validade;

    var empresa = document.createElement("p");
    empresa.textContent = "Empresa: " + medicamentoEncontrado.nomeEmpresa;

    var botaoSolicitar = document.createElement("button");
botaoSolicitar.textContent = "Solicitar";
botaoSolicitar.onclick = function () {
  var confirmacao = confirm("Deseja iniciar um chat com o doador?");
  if (confirmacao) {
    abrirModalChat(medicamentoEncontrado);
  } else {
    resultadoBusca.textContent = "Medicamento solicitado, aguarde o contato do doador.";
    resultadoBusca.style.fontWeight = "bold";
    adicionarSolicitacao(medicamentoEncontrado);
  }
};

    divMedicamento.appendChild(imagem);
    divMedicamento.appendChild(nome);
    divMedicamento.appendChild(doador);
    divMedicamento.appendChild(estadoCidade);
    divMedicamento.appendChild(quantidade);
    divMedicamento.appendChild(registro);
    divMedicamento.appendChild(validade);
    divMedicamento.appendChild(empresa);
    divMedicamento.appendChild(botaoSolicitar);

    resultadoBusca.innerHTML = ""; // Limpa o conteúdo anterior
    resultadoBusca.appendChild(divMedicamento);
  } else {
    resultadoBusca.textContent = "Medicamento indisponível.";
  }
}
function abrirModalChat(medicamento) {
  var modalChat = document.getElementById("modal-chat");
  var doadorModal = document.getElementById("doador-modal");

  // Limpar o conteúdo anterior do modal
  while (doadorModal.firstChild) {
    doadorModal.removeChild(doadorModal.firstChild);
  }

  var nomeDoador = medicamento.nomeDoador;

  // Criar o elemento de parágrafo para exibir o nome do doador
  var nomeDoadorElemento = document.createElement("p");
  nomeDoadorElemento.textContent = "Doador: " + nomeDoador;

  // Adicionar o elemento de parágrafo ao modal
  doadorModal.appendChild(nomeDoadorElemento);

  modalChat.style.display = "block";
}

function fecharModalChat() {
  var modalChat = document.getElementById("modal-chat");
  modalChat.style.display = "none";
}
function adicionarSolicitacao(medicamento) {

  resultadoBusca.classList.add("mensagem-solicitacao");

  resultadoBusca.appendChild(divMedicamento);
}

function adicionarSolicitacao(medicamento) {
  var listaSolicitacoes = document.getElementById("lista-solicitacoes");

  var itemSolicitacao = document.createElement("li");

  var imagem = document.createElement("img");
  imagem.src = medicamento.imagemRemedio;

  var nome = document.createElement("p");
  nome.textContent = "Nome: " + medicamento.nomeRemedio;

  var quantidade = document.createElement("p");
  quantidade.textContent = "Quantidade: " + medicamento.quantidadeComprimidos;

  var validade = document.createElement("p");
  validade.textContent = "Validade: " + medicamento.validade;

  var estadoCidade = document.createElement("p");
  estadoCidade.textContent = "Localização: " + medicamento.cidade + ", " + medicamento.estado;

  var doador = document.createElement("p");
  doador.textContent = "Doador: " + medicamento.nomeDoador;

  itemSolicitacao.appendChild(imagem);
  itemSolicitacao.appendChild(nome);
  itemSolicitacao.appendChild(quantidade);
  itemSolicitacao.appendChild(validade);
  itemSolicitacao.appendChild(estadoCidade);
  itemSolicitacao.appendChild(doador);

  listaSolicitacoes.appendChild(itemSolicitacao);
}
