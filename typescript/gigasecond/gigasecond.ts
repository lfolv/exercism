const GIGASECOND: number = 1e12;

class Gigasecond {
  private fromDate: Date;

  constructor(fromDate: Date) {
    this.fromDate = fromDate;
  }

  date(): Date {
    return new Date(this.fromDate.getTime() + GIGASECOND);
  }
}

export default Gigasecond;
