const A = parseInt(gets());
const B = parseInt(gets());

function soma(A, B) {
  const n = B - A + 1; // Número de termos
  return (n * (A + B)) / 2; // Soma da progressão aritmética
}

console.log(soma(A, B));
