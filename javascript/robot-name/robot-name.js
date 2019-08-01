const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export class Robot { 
  constructor() {
    this.reset()
  }

  reset() {
    let newName = ''

    for (let i = 0; i < 2; i++) {
      newName += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
    }

    for (let i = 0; i < 3; i++) {
      newName += Math.floor(Math.random() * 10)
    }

    this.name = newName
  }
}

Robot.releaseNames = () => { };
