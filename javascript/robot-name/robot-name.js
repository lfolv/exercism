const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export class Robot { 
  constructor() {
    this.reset()
  }

  get name() {
    return this._name
  }

  reset() {
    let newName = generateRobotName()

    while (Robot.usedNames.has(newName)) {
      newName = generateRobotName()
    }

    Robot.usedNames.add(newName)
    this._name = newName
  }
}

function generateRobotName() {
  let newName = ''

  for (let i = 0; i < 2; i++) {
    newName += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
  }

  for (let i = 0; i < 3; i++) {
    newName += Math.floor(Math.random() * 10)
  }

  return newName
}

Robot.usedNames = new Set()

Robot.releaseNames = () => { 
  Robot.usedNames = new Set()
};
