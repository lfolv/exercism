const COMPLEMENT: { [key: string]: string } = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
}

const SEPATATOR = ""

class Transcriptor {
  toRna(dna_strands: string): string {
    return dna_strands
      .split(SEPATATOR)
      .map(this.toRnaNucleotide)
      .join(SEPATATOR)
  }

  toRnaNucleotide(dna_nucleodite: string): string {
    const rna_nucledite = COMPLEMENT[dna_nucleodite]

    if (!rna_nucledite) {
      throw new Error("Invalid input DNA.")
    }

    return rna_nucledite
  }
}

export default Transcriptor
