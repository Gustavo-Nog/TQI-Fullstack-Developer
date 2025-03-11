const alunos = [
	{
		nome: 'Abel',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Noé',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Abraão',
		nota: 3,
		turma: '2C',
	},
  {
    nome: 'Saul',
    nota: 6,
    turma: '1A',
  },
];

function alunosAprovados(alunos, media) {
  let aprovados = [];

  for (let i = 0; i < alunos.length; i++) {
    const { nota, nome} = alunos[i];

    if (nota >= media) {
      aprovados.push(nome);
    }
  }
  return aprovados;
}

console.log(alunosAprovados(alunos, 5));