class Clock {
  private time: number;

  constructor(hour: number = 0, minutes: number = 0) {
    let time = hour * 60 + minutes;

    while (time < 0) {
      time += 1440;
    }

    this.time = time;
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
    this.time += minutes;
    return this;
  }

  minus(minutes: number) {
    this.time -= minutes;

    while (this.time < 0) {
      this.time += 1440;
    }

    return this;
  }

  equals(other: Clock) {
    return this.time === other.time;
  }
}

export default Clock;
