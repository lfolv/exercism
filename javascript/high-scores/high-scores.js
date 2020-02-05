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
    return this.sort()[this.scores.length - 1];
  }

  get personalTopThree() {
    throw new Error("Remove this statement and implement this function");
  }

  sort() {
    return this.scores.sort((x, y) => Number.parseInt(x) - Number.parseInt(y));
  }
}
