export class WordProblem {
  constructor(problem) {
    this.problem = problem
  }

  answer() {
    const match = this.problem.match(/^What is (-?\d+) (plus|minus) (-?\d+)\?$/)

    const x = Number(match[1])
    const operation = match[2]
    const y = Number(match[3])

    switch(operation) {
      case 'plus':
        return x + y
      case 'minus':
        return x - y
    }
  }
}
