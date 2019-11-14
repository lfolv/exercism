const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

function valueOf(color) {
    const value = COLORS.indexOf(color)

    if (value === -1) {
      throw new Error('invalid color')
    }

    return value
}

export class ResistorColorTrio {
  constructor(colors) {
    this.colors = colors;
  }

  get label() {
    if (this.value > 1000) {
      const valueInKiloOhm = this.value / 1000
      return `Resistor value: ${valueInKiloOhm} kiloohms`;
    }

    return `Resistor value: ${this.value} ohms`;
  }

  get value() {
    return (this.valueOfFirstColor + this.valueOfSecondColor) * this.valueOfThirdColor;
  }

  get valueOfFirstColor() {
    return valueOf(this.colors[0]) * 10
  }
  
  get valueOfSecondColor() {
    return valueOf(this.colors[1])
  }

  get valueOfThirdColor() {
    return 10 ** valueOf(this.colors[2])
  }
}
