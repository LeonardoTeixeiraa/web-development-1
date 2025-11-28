$(document).ready(function () {
  const $quadrados = $(".quadrado");
  let $quadradoSelecionado = null;
  const passo = 10;

  $quadrados.each(function () {
    const $this = $(this);
    $this.data("originalTop", $this.position().top);
    $this.data("originalLeft", $this.position().left);
  });

  $quadrados.on("click", function () {
    const $this = $(this);

    if ($this.hasClass("selecionado")) {
      $this.removeClass("selecionado");
      $this.animate(
        {
          top: $this.data("originalTop"),
          left: $this.data("originalLeft"),
        },
        300
      ); 
      $quadradoSelecionado = null;
    } else if ($quadradoSelecionado) {
      alert(
        "Atenção! já há um quadrado selecionado, desselecione-o antes de selecionar outro."
      );
    } else {
      $this.addClass("selecionado");
      $quadradoSelecionado = $this;
    }
  });

  $(document).on("keydown", function (event) {
    if (!$quadradoSelecionado) return;

    event.preventDefault();

    let currentTop = $quadradoSelecionado.position().top;
    let currentLeft = $quadradoSelecionado.position().left;

    switch (event.key.toUpperCase()) {
      case "W":
      case "ARROWUP":
        currentTop -= passo;
        break;
      case "A":
      case "ARROWLEFT": 
        currentLeft -= passo;
        break;
      case "S":
      case "ARROWDOWN": 
        currentTop += passo;
        break;
      case "D":
      case "ARROWRIGHT": 
        currentLeft += passo;
        break;
      default:
        return;
    }

    $quadradoSelecionado.css({
      top: currentTop + "px",
      left: currentLeft + "px",
    });
  });
});
