function main() {
  let username = prompt("Qual o seu nome?");

  if (username == null) {
    alert("Você cancelou o prompt!");
    return;
  }
  if (username.length === 0) {
    alert("Você precisa digita um nome para continuar!");
    main();
  }

  alert(`Olá ${username.trim()}, seja bem-vindo!`);

  let sabeProgramar = confirm("Você sabe programar em JS?");

  if (sabeProgramar) {
    alert(`Que ótimo ${username}, espero que você aprenda ainda mais!`);
  } else {
    alert(`Não tem problema ${username}, você irá aprender agora!`);
  }
}

main();
