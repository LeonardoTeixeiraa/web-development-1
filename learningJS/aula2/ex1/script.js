function showMessageOnScreen(tag, text) {
  let campo = document.getElementById(tag);
  campo.innerHTML = text;
}

function showName() {
  let username = prompt("Digite o seu nome: ");
  let mensagem = "Seja bem vindo visitante!";

  if (username && username.length > 0) {
    mensagem = `Seja bem vindo(a), ${username}`;
  }
  showMessageOnScreen("saudacao", mensagem);
}

function addText() {
  const LOREM_IPSUM =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem illo at quisquam delectus sed modi! Deserunt voluptas corporis accusantium expedita iure beatae veritatis quasi facilis distinctio, nesciunt debitis harum!";

  const divLoremipsum = document.getElementById("lorem-ipsum-container");
  const newParagraph = document.createElement("p");
  newParagraph.textContent = LOREM_IPSUM;
  divLoremipsum.appendChild(newParagraph);
}

function removeText() {
  const container = document.getElementById("lorem-ipsum-container");
  container.innerHTML = "";
}

showName();
