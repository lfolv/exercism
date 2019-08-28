export class WordProblem {
  constructor(problem) {
    this.problem = problem
  }

  answer() {
    const match = this.problem.match(/^What is (\d) plus (\d)\?$/)
    return Number(match[1]) + Number(match[2])
  }
}
