function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero.");
  }
  return a / b;
}

function handleCalculation(operation) {
  //obtem os valores dos campos
  const value1Input = document.getElementById("value1");
  const value2Input = document.getElementById("value2");
  const resultInput = document.getElementById("result");

  //limpa o campo resultado
  resultInput.value = "";

  const a = parseFloat(value1Input.value);
  const b = parseFloat(value2Input.value);

  try {
    const result = operation(a, b);

    resultInput.value = result;
  } catch (error) {
    resultInput.value = error.message;
  }
}

//Inicializar os eventos
document.getElementById("sum").addEventListener("click", () => {
  handleCalculation(sum);
});
document.getElementById("sub").addEventListener("click", () => {
  handleCalculation(sub);
});
document.getElementById("div").addEventListener("click", () => {
  handleCalculation(div);
});
document.getElementById("mult").addEventListener("click", () => {
  handleCalculation(mult);
});
