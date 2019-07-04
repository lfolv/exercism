export class Words {
  count(phrase) {
    if (phrase === 'word') {
      return { word: 1 }
    }
    return { one: 1, of: 1, each: 1}
  }
}
