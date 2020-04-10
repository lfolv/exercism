export default class Triangle {
  constructor(private a: number, private b: number, private c: number) {}

  kind(): string {
    if (this.isInvalid()) {
      throw new Error();
    }

    if (this.matchingSides === 3) {
      return "equilateral";
    }

    if (this.matchingSides === 2) {
      return "isosceles";
    }

    return "scalene";
  }

  get matchingSides() {
    if (this.a === this.b && this.a === this.c) {
      return 3;
    }

    if (this.a === this.b || this.a === this.c || this.b === this.c) {
      return 2;
    }

    return 1;
  }

  get sides() {
    return [this.a, this.b, this.c];
  }

  private isInvalid() {
    return this.hasInvalidSize() || this.hasInequality();
  }

  private hasInvalidSize() {
    return this.sides.some((side) => side <= 0);
  }

  private hasInequality() {
    return (
      this.a + this.b < this.c ||
      this.a + this.c < this.b ||
      this.b + this.c < this.a
    );
  }
}
