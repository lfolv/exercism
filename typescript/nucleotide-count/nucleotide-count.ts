class NucleotideCount {
  static nucleotideCounts(dna: string): { [key: string] : number } {
    const result: { [key: string] : number } = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    }

    for (const nucleotide of dna) {
      result[nucleotide] += 1
    }

    return result
  }
}

export default NucleotideCount
