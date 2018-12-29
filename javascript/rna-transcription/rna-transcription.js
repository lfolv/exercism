export const toRna = dna =>
  dna.split("").reduce((rna, nucleotide) => {
    switch (nucleotide) {
      case "C":
        return rna + "G";
      case "G":
        return rna + "C";
      case "A":
        return rna + "U";
      case "T":
        return rna + "A";
      default:
        throw new Error("Invalid input DNA.");
    }
  }, "");
