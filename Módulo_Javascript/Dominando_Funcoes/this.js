function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos} anos de idade.`;
}

const pessoa1 = {
  nome: 'Eva',
  idade: 30,
};

const pessoa2 = {
  nome: 'Ruth',
  idade: 26,
};

const pessoa3 = {
  nome: 'Raquel',
  idade: 5,
};

const animal = {
  nome: 'Shrek',
  idade: 3,
  raca: 'Pitbull',
};

// usando call
console.log(calculaIdade.call(pessoa1, 5));
console.log(calculaIdade.call(pessoa2, 5));
console.log(calculaIdade.call(pessoa3, 5));
console.log(calculaIdade.call(animal, 5));
console.log('');

// usando appapply
console.log(calculaIdade.apply(pessoa1, [5]));
console.log(calculaIdade.apply(pessoa2, [5]));
console.log(calculaIdade.apply(pessoa3, [5]));
console.log(calculaIdade.apply(animal, [5]));
