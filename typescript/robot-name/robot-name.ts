const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

class RobotNameDatabase {
  private usedNames: Map<string, boolean> = new Map<string, boolean>()

  newName() {
    let name = this.generateName()

    while (this.usedNames.has(name)) {
      name = this.generateName()
    }

    this.addNameToUsed(name)
    return name
  }

  generateName() {
    let name = ''

    for (let i = 0; i < 2; i++) {
      name += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
    }

    for (let i = 0; i < 3; i++) {
      name += Math.floor(Math.random() * 10)
    }

    return name
  }

  addNameToUsed(name: string) {
    this.usedNames.set(name, true)
  }
}

const defaultNamesDatabase = new RobotNameDatabase()

class RobotName {
  public name: string
  static namesDatabase: RobotNameDatabase

  constructor(private namesDatabase: RobotNameDatabase = defaultNamesDatabase) {
    this.name = ""
    this.resetName()
  }

  resetName() {
    this.name = this.namesDatabase.newName()
  }
}

export default RobotName
