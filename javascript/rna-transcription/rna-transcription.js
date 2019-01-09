const transcription = {
  C: "G",
  G: "C",
  A: "U",
  T: "A"
};

export const toRna = dna =>
  dna
    .split("")
    .map(nucleotide => {
      if (transcription.hasOwnProperty(nucleotide)) {
        return transcription[nucleotide];
      }
      throw new Error("Invalid input DNA.");
    })
    .join("");
