const FIRST_NUMBER = /^What is (-?\d+).*$/
const OPERATION = /(plus|minus|multiplied by|divided by) (-?\d+)/g
const OPERATION_NAME_TO_CALLBACK = {
  'plus': (x, y) => x + y,
  'minus': (x, y) => x - y,
  'multiplied': (x, y) => x * y,
  'divided': (x, y) => x / y 
}

export class WordProblem {
  constructor(problem) {
    this.problem = problem;
  }

  answer() {
    return operationsFrom(this.problem)
      .reduce(operationReducer, firstNumberFrom(this.problem));
  }
}

const firstNumberFrom = problem =>
  Number(problem.match(FIRST_NUMBER)[1]);

const operationReducer = (current, [callback, value]) => 
  callback(current, value)

const operationsFrom = problem =>
  problem
    .match(OPERATION)
    .map(parseOperation);

const parseOperation = operation => {
  const [name, value] = operation.replace(" by", "").split(" ")

  return [OPERATION_NAME_TO_CALLBACK[name], Number(value)]
}
