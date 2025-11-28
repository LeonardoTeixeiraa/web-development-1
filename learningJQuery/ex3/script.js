$(document).ready(function () {
  const $body = $("body");
  const $lampadaContainer = $("#lampada-container");
  const $statusText = $("#status-lampada");

  $lampadaContainer.on("mouseenter", function () {
    $body.addClass("aceso");

    $statusText.text("Lâmpada acesa");
  });

  $lampadaContainer.on("mouseleave", function () {
    $body.removeClass("aceso");

    $statusText.text("Lâmpada apagada");
  });
});
