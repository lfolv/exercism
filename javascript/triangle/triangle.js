class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    if (this.isValid()) {
      throw new Error();
    }
    if (this.a === this.b && this.a === this.c) {
      return "equilateral";
    }
    if (this.a === this.b || this.a === this.c || this.b == this.c) {
      return "isosceles";
    }
    return "scalene";
  }

  isValid() {
    return (
      this.a <= 0 ||
      this.b <= 0 ||
      this.c <= 0 ||
      this.a + this.b < this.c ||
      this.b + this.c < this.a
    );
  }
}

export default Triangle;
