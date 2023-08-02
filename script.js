const number = document.getElementById("number");
const addNumber = document.getElementById("addNumber");
const result = document.getElementById("result");
const finalize = document.getElementById("finalize");

const arrNumbers = [];

addNumber.addEventListener("click", () => {
  const numberValue = Number(number.value);
  if (numberValue >= 1 && numberValue <= 100){
    if(!arrNumbers.includes(numberValue)) {
      arrNumbers.push(numberValue);
      const option = document.createElement("option");
      option.innerText = `Valor ${numberValue} adicionado`;
      result.appendChild(option);
    } else {
      alert("Este valor já foi adicionado")
    }
  } else {
    alert("Digite um valor entre 1 e 100")
  }
  number.value = "";
  
});
