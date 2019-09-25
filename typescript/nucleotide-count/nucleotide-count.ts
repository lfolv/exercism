interface Counter {
  [key: string]: number
}

class NucleotideCount {
  static nucleotideCounts(strand: string): Counter {
    const counter: Counter = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    }

    for (const nucleotide of strand) {
      if (counter[nucleotide] === undefined) {
        throw new Error('Invalid nucleotide in strand')
      }

      counter[nucleotide] += 1
    }

    return counter
  }
}

export default NucleotideCount
