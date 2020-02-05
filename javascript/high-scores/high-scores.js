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
    throw new Error("Remove this statement and implement this function");
  }

  get personalTopThree() {
    throw new Error("Remove this statement and implement this function");
  }
}
