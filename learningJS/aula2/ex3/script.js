let lastFixedColor = "white";

function getbackgroundColor(element) {
  const computedStyle = window.getComputedStyle(element);

  return computedStyle.backgroundColor;
}

function handleButtonClick(buttonElement) {
  const newColor = getbackgroundColor(buttonElement);

  document.body.style.backgroundColor = newColor;

  lastFixedColor = newColor;
}

const previewTextElement = document.getElementById("preview-container");

function handleMouseOver(buttonElement) {
  const hoverColor = getbackgroundColor(buttonElement);

  document.body.style.backgroundColor = hoverColor;
  if (previewTextElement) {
    previewTextElement.classList.add("preview-visible");
  }
}

function handleMouseOut() {
  document.body.style.backgroundColor = lastFixedColor;
  if (previewTextElement) {
    previewTextElement.classList.remove("preview-visible");
  }
}

function resetButton() {
  lastFixedColor = "white";
  document.body.style.backgroundColor = lastFixedColor;
}

document.getElementById("box-red").addEventListener("mouseover", function () {
  handleMouseOver(this);
});

document.getElementById("box-red").addEventListener("mouseout", function () {
  handleMouseOut(this);
});

document.getElementById("box-green").addEventListener("mouseover", function () {
  handleMouseOver(this);
});

document.getElementById("box-green").addEventListener("mouseout", function () {
  handleMouseOut(this);
});

document
  .getElementById("box-yellow")
  .addEventListener("mouseover", function () {
    handleMouseOver(this);
  });

document.getElementById("box-yellow").addEventListener("mouseout", function () {
  handleMouseOut(this);
});

document.getElementById("box-blue").addEventListener("mouseover", function () {
  handleMouseOver(this);
});

document.getElementById("box-blue").addEventListener("mouseout", function () {
  handleMouseOut(this);
});

document
  .getElementById("box-violet")
  .addEventListener("mouseover", function () {
    handleMouseOver(this);
  });

document.getElementById("box-violet").addEventListener("mouseout", function () {
  handleMouseOut(this);
});
