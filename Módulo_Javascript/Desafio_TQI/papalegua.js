while (true) {
  let qtdEntradas = parseInt(gets());
  if (!qtdEntradas) break; // Encerra quando chega ao fim do arquivo

  let melhor = Number.MAX_VALUE;
  for (let i = 0; i < qtdEntradas; i++) {
      let tempo = parseFloat(gets());
      if (tempo <= melhor) {
          melhor = tempo; // Atualiza o melhor tempo
      }
  }
  console.log(melhor.toFixed(2)); // Exibe o melhor tempo com 2 casas decimais
}
