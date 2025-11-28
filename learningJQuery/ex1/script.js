$(document).ready(function () {
  const nome = prompt("Qual é seu nome?");

  if (nome) {
    $("#saudacao").html(`Seja bem vindo <strong>${nome}</strong>`);
  } else {
    $("#saudacao").text("Seja bem vindo(a)!");
  }

  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ducimus, facere exercitationem saepe culpa iste magni neque dolorum, enim laboriosam officiis ullam vitae odio possimus ipsum esse harum ut amet.";

  $("#btnAdicionar").on("click", function () {
    const novoParagrafo = `<p>${lorem}</p>`;
    $("#container-paragrafos").append(novoParagrafo);
  });

  $("#btnRemover").on("click", function () {
    $("#container-paragrafos").empty();
  });
});
