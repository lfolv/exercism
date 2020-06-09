const MINUTES_IN_A_HOUR = 60;
const MINUTES_IN_A_DAY = 1440;

class Clock {
  private time: number;

  constructor(hour: number = 0, minutes: number = 0) {
    let time = hour * MINUTES_IN_A_HOUR + minutes;

    this.time =
      ((time % MINUTES_IN_A_DAY) + MINUTES_IN_A_DAY) % MINUTES_IN_A_DAY;
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
