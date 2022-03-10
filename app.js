function Chutar() {
  let numeroSecreto = parseInt(Math.random() * 11);
  let chute = parseInt(document.getElementById("valor").value);
  let resultado = document.getElementById("resultado");
  let contador = 0;
  
    if (chute == numeroSecreto) {
      resultado.innerHTML = "PARABÉNS ! Você acertou !!!";
    } else if (chute > 10 || chute < 0) {
      resultado.innerHTML = "Número inválido ! Digite um número de 0 a 10.";
    } else {
      resultado.innerHTML = `QUE PENA ! Você errou, o número correto é ${numeroSecreto}.`;
      
    }
  }

