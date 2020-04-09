const COLOR_TO_VALUE = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

type Color = keyof typeof COLOR_TO_VALUE;

export class ResistorColor {
  private colors: Color[];

  constructor(colors: Color[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }

    this.colors = colors;
  }

  value() {
    const [firstColor, secondColor] = this.colors;

    return COLOR_TO_VALUE[firstColor] * 10 + COLOR_TO_VALUE[secondColor];
  }
}
