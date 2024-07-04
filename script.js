let students = [
  {
      name: 'Bia Martins',
      noteOne: 7,
      noteTwo: 8
  },
  {
      name:'carlos silva',
      noteOne: 9,
      noteTwo: 8
  },
  {
      name: 'Davi Bastos',
      noteOne: 6,
      noteTwo: 6
  }
]

function calculateAverage(noteOne, noteTwo) {
  let average = (noteOne + noteTwo) / 2
  return average
}

for (let student of students) {
  averageIndividual = calculateAverage(student.noteOne, student.noteTwo)

  let passOrFail = averageIndividual >= 7
  ? `\nParabéns, ${student.name}! Você foi aprovado no concurso!`
  : `\nNão foi dessa vez, ${student.name}!. Tente novamente!`

  alert(`A média do aluno ${student.name} é ${averageIndividual} ${passOrFail}`)
}