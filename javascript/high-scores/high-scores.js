export class HighScores {
  constructor(scores) {
    this._scores = scores;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    return this.sort()[0];
  }

  get personalTopThree() {
    return this.sort().slice(0, 3);
  }

  sort() {
    return this.scores.sort((x, y) => Number.parseInt(y) - Number.parseInt(x));
  }
}
