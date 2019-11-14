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

export class ResistorColorTrio {
  constructor(colors) {
    this.colors = colors;
  }

  get label() {
    return `Resistor value: ${this.value} ohms`;
  }

  get value() {
    return COLORS.indexOf(this.colors[0]) * 10 + COLORS.indexOf(this.colors[1]);
  }
}
