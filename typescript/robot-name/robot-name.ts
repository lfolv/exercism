const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const usedNames: string[] = []

class RobotName {
  private _name: string

  constructor() {
    this._name = RobotName.generateName()
  }

  static generateName() {
    let name = ''

    for (let i = 0; i < 2; i++) {
      name += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
    }

    for (let i = 0; i < 3; i++) {
      name += Math.floor(Math.random() * 10)
    }

    return name
  }

  get name() {
    return this._name
  }

  resetName() {
    let name = RobotName.generateName()

    while (usedNames.includes(name)) {
      name = RobotName.generateName()
    }

    usedNames.push(name)
    this._name = name
  }
}

export default RobotName
