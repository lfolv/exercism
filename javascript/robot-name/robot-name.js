const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export class Robot { 
  constructor() {
    this.name = ''
    for (let i = 0; i < 2; i++) {
      this.name += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
    }

    for (let i = 0; i < 3; i++) {
      this.name += Math.floor(Math.random() * 10)
    }
  }
}

Robot.releaseNames = () => { };
