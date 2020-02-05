export class HighScores {
  constructor(scores) {
    this._scores = scores;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    throw new Error("Remove this statement and implement this function");
  }

  get personalBest() {
    throw new Error("Remove this statement and implement this function");
  }

  get personalTopThree() {
    throw new Error("Remove this statement and implement this function");
  }
}
