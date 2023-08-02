const number = document.getElementById("number");
const addNumber = document.getElementById("addNumber");
const result = document.getElementById("result");
const finalize = document.getElementById("finalize");
const res = document.getElementById("res");

const arrNumbers = [];

addNumber.addEventListener("click", () => {
  const numberValue = Number(number.value);
  if (numberValue >= 1 && numberValue <= 100) {
    if (!arrNumbers.includes(numberValue)) {
      arrNumbers.push(numberValue);
      const option = document.createElement("option");
      option.innerText = `Valor ${numberValue} adicionado`;
      result.appendChild(option);
    } else {
      alert("Este valor já foi adicionado");
    }
  } else {
    alert("Digite um valor entre 1 e 100");
  }
  number.value = "";
});

finalize.addEventListener("click", () => {
  res.innerHTML = `<p>Ao todos, temos ${arrNumbers.length} números cadastrados.</p>`;
  res.innerHTML += `<p>O maior valor informado foi ${Math.max(
    ...arrNumbers
  )}.</p>`;
  res.innerHTML += `<p>O menor valor informado foi ${Math.min(
    ...arrNumbers
  )}.</p>`;
  const sum = arrNumbers.reduce((initialValue, numbers) => {
    return initialValue + numbers;
  }, 0);
  const average = sum / arrNumbers.length;

  res.innerHTML += `<p>Somando todos os valores temos ${sum}.</p>`;
  res.innerHTML += `<p>A média dos valores digitados é ${average.toFixed(
    0
  )}.</p>`;
});
