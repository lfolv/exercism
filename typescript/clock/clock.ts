class Clock {
  private time: number;

  constructor(hour: number = 0, minutes: number = 0) {
    this.time = hour * 60 + minutes;
  }

  static format(time: number) {
    return time.toString().padStart(2, "0");
  }

  get hour() {
    return Math.floor(this.time / 60);
  }

  get minutes() {
    return this.time - this.hour * 60;
  }

  format(time: number) {
    return time.toString().padStart(2, "0");
  }

  toString() {
    const h = Clock.format(this.hour % 24);
    const m = Clock.format(this.minutes);

    return `${h}:${m}`;
  }

  plus(minutes: number) {
    console.log(minutes);
    return this;
  }

  minus(minutes: number) {
    console.log(minutes);
    return this;
  }

  equals(other: Clock) {
    console.log(other);
    return true;
  }
}

export default Clock;
