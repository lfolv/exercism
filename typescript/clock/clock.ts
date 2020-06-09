class Clock {
  private time: number;

  constructor(hour: number = 0, minutes: number = 0) {
    let time = hour * 60 + minutes;

    this.time = ((time % 1440) + 1440) % 1440;
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
    return new Clock(0, this.time + minutes);
  }

  minus(minutes: number) {
    return new Clock(0, this.time - minutes);
  }

  equals(other: Clock) {
    return this.time === other.time;
  }
}

export default Clock;
