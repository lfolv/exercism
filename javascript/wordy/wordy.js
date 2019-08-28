export class WordProblem {
  constructor(problem) {
    this.problem = problem
  }

  answer() {
    const result = Number(this.problem.match(/^What is (-?\d+).*$/)[1]) 
    const match = /(plus|minus|multiplied by|divided by) (-?\d+)\?$/.exec(this.problem)

    const operation = match[1]
    const value = Number(match[2])

    switch(operation) {
      case 'plus':
        return result + value
      case 'minus':
        return result - value
      case 'multiplied by':
        return result * value
      case 'divided by':
        return result / value
    }
  }
}
