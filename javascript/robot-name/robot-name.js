const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export class Robot { 
  static releaseNames() { 
    Robot.usedNames = {}
  };

  static newName() {
    let newName = Robot.generateRobotName()

    while (Robot.usedNames[newName]) {
      newName = Robot.generateRobotName()
    }

    Robot.usedNames[newName] = true
    return newName
  }

  static generateRobotName() {
    let newName = ''

    for (let i = 0; i < 2; i++) {
      newName += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
    }

    for (let i = 0; i < 3; i++) {
      newName += Math.floor(Math.random() * 10)
    }

    return newName
  }

  constructor() {
    this.reset()
  }

  get name() {
    return this._name
  }

  reset() {
    this._name = Robot.newName()
  }
}

Robot.releaseNames()
