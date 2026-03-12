$(document).ready(function () { // Garantir que o DOM esteja carregado antes de manipular os elementos
    // Selecionar os elementos do envelope e dos botões
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () { // Adicionar um evento de clique ao envelope para abrir ou fechar a carta
    open();
  });
  btn_open.click(function () { // Adicionar um evento de clique ao botão "abrir"para abrir a carta
    open();
  });
  btn_reset.click(function () { // Adicionar um evento de clique ao botão reset para fechar a carta
    close();
  });

  function open() { // Função para abrir a carta, adicionando a classe "open" e removendo a classe "close"
    envelope.addClass("open").removeClass("close");
  }
  function close() {  // Função para fechar a carta, adicionando a classe "close" e removendo a classe "open"
    envelope.addClass("close").removeClass("open");
  }
});
