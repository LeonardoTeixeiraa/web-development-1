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

  const contentDiv = document.getElementById("lorem-ipsum-content");
  contentDiv.textContent = LOREM_IPSUM;
}

function removeText() {
  const contentDiv = document.getElementById("lorem-ipsum-content");
  contentDiv.textContent = "";
}

showName();
