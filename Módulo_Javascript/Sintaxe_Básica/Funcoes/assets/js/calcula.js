// funcões aritméticas
function calculadora() {
  const operacao = Number(prompt(
    'Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão real(/)\n 5 - Divisão inteira(%)\n 6 - Potenciação (**)'
  ));

  if (!operacao || operacao >= 7) {
    alert('Erro - operação inválida');
  } else {
    let numero1 = Number(prompt("insira o primeiro valor"));
    let numero2 = Number(prompt("insira o segundo valor."));
    let resultado;

    if (!numero1 || !numero2) {
      alert('Erro - valor digitado inválido');
      calculadora();
    } else {
      function soma() {
        resultado = numero1 + numero2;
        alert(`${numero1} + ${numero2} = ${resultado}`);
        novaOperacao();
      }
      function subtracao() {
        resultado = numero1 - numero2;
        alert(`${numero1} - ${numero2} = ${resultado}`);
        novaOperacao();
      }
      function multiplicacao() {
        resultado = numero1 * numero2;
        alert(`${numero1} * ${numero2} = ${resultado}`);
        novaOperacao();
      } 
      function divisaoReal() {
        resultado = numero1 / numero2;
        alert(`${numero1} / ${numero2} = ${resultado}`);
        novaOperacao();
      }
      function divisaoInteiro() {
        resultado = numero1 % numero2;
        alert(`O resto da divisão entre ${numero1} e ${numero2} é igual ${resultado}`);
        novaOperacao();
      }
      function potenciacao() {
        resultado = numero1 ** numero2;
        alert(`${numero1} elevado a ${numero2} é igual a ${resultado}`);
        novaOperacao();
      }
      function novaOperacao() {
        let opcao = prompt('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não');
        
        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert('Até breve.')
        } else {
          alert('Um dígito inválido foi inserido, insira um valor válido.');
          novaOperacao();
        }
      }
    }

    /* if (operacao == 1) {
      soma();
    } else if (operacao == 2) {
      subtracao();
    }  else if ( operacao == 3) {
      multiplicacao();
    }  else if ( operacao == 4) {
      divisaoReal();
    } else if (operacao == 5) {
      divisaoInteiro();
    } else if (operacao == 6) {
      potenciacao();
    } */

    switch (operacao) {
      case 1:
        soma();
        break;
      case 2:
        subtracao();
        break;
      case 3:
        multiplicacao();
        break;
      case 4:
        divisaoReal();
        break;
      case 5:
        divisaoInteiro();
        break;
      case 6:
        potenciacao();
        break;
      default:
        break;
    }
  }
}
calculadora();       


