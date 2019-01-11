export const toRna = dna =>
  dna
    .split("")
    .map(nucleotide => transcription[nucleotide] || throwInvalidInputDNAError())
    .join("");

const transcription = {
  C: "G",
  G: "C",
  A: "U",
  T: "A"
};

const throwInvalidInputDNAError = () => {
  throw new Error("Invalid input DNA.");
};
