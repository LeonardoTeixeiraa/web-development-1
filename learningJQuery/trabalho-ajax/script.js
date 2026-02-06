$(document).ready(function () {
  const URL_LISTAGEM = "https://epansani.com.br/2025/dwe1/ajax/list.php";
  const URL_INSERCAO = "https://epansani.com.br/2025/dwe1/ajax/ins.php";
  const URL_EXCLUSAO = "https://epansani.com.br/2025/dwe1/ajax/rem.php";

  const $tabelaDados = $("#tabela-dados");
  const $formCadastro = $("#form-cadastro");
  const $mensagemStatus = $("#mensagem-status");
  const $btnAtualizar = $("#btn-atualizar");

  function exibirMensagem(msg, tipo) {
    $mensagemStatus
      .removeClass("alert-success alert-danger")
      .addClass("alert-" + tipo)
      .text(msg)
      .slideDown()
      .delay(3000)
      .slideUp();
  }

  function carregarDados() {
    $tabelaDados.empty();

    $.getJSON(URL_LISTAGEM)
      .done(function (response) {
        if (response && Array.isArray(response)) {
          $.each(response, function (i, item) {
            const newRow = `
                            <tr>
                                <td>${item.nome}</td>
                                <td>${item.email}</td>
                                <td>
                                    <button class="btn btn-danger btn-sm btn-apagar" data-id="${item.id}">Apagar</button>
                                </td>
                            </tr>
                        `;
            $tabelaDados.append(newRow);
          });
        } else {
          exibirMensagem("Nenhum dado encontrado.", "warning");
        }
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.error("Erro Listagem:", textStatus, errorThrown);
        exibirMensagem(
          "Erro ao carregar dados. Verifique o console.",
          "danger"
        );
      });
  }

  $formCadastro.on("submit", function (e) {
    e.preventDefault();

    const nome = $("#nome").val();
    const email = $("#email").val();

    const dados = {
      nome: nome,
      email: email,
    };

    $.ajax({
      url: URL_INSERCAO,
      method: "POST",
      data: dados, 
      dataType: "text",

      success: function (response) {
        if (response.trim() === "true") {
          exibirMensagem("Dados gravados com sucesso!", "success");
          $formCadastro[0].reset(); 
          carregarDados(); 
        } else {
          console.error("Erro Servidor:", response);
          exibirMensagem(
            "Falha ao gravar. O servidor retornou erro (veja console).",
            "danger"
          );
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        exibirMensagem(
          "Erro de conexão ao gravar. (Status: " + textStatus + ")",
          "danger"
        );
      },
    });
  });

  $tabelaDados.on("click", ".btn-apagar", function () {
    const $this = $(this);
    const idRegistro = $this.data("id");

    if (
      !confirm(`Tem certeza que deseja apagar o registro ID: ${idRegistro}?`)
    ) {
      return;
    }

    const dados = {
      id: idRegistro,
    };

    $.ajax({
      url: URL_EXCLUSAO,
      method: "POST",
      data: dados, 
      dataType: "text",

      success: function (response) {
        if (response.trim() === "true") {
          $this.closest("tr").remove(); 
          exibirMensagem("Registro apagado com sucesso.", "success");
        } else {
          console.error("Erro Exclusão:", response);
          exibirMensagem(
            "Falha ao apagar. O servidor retornou erro.",
            "danger"
          );
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        exibirMensagem("Erro de conexão ao apagar.", "danger");
      },
    });
  });

  $("#btn-limpar").on("click", function () {
    $formCadastro[0].reset();
    $mensagemStatus.slideUp();
  });

  $btnAtualizar.on("click", carregarDados);

  carregarDados();
});
