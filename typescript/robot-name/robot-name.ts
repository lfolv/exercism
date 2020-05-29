class RobotName {
  static characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  static usedNames: string[] = []

  constructor(private robot: Robot = new Robot('')) {
    this.resetName()
  }

  resetName() {
    let name = this.generateName()

    while (this.usedName(name)) {
      name = this.generateName()
    }

    this.addNameToUsed(name)
    this.robot.name = name
  }

  usedName(name: string) {
    return RobotName.usedNames.includes(name)
  }

  generateName() {
    let name = ''

    for (let i = 0; i < 2; i++) {
      name += RobotName.characters.charAt(Math.floor(Math.random() * RobotName.characters.length))
    }

    for (let i = 0; i < 3; i++) {
      name += Math.floor(Math.random() * 10)
    }

    return name
  }

  addNameToUsed(name: string) {
    RobotName.usedNames.push(name)
  }

  get name() {
    return this.robot.name
  }
}

class Robot {
  constructor(public name: string) {}
}

export default RobotName
