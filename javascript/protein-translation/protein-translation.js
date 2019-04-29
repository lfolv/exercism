const CODONS_TO_PROTEIN = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine"
};

const translate = (rna_sequences = "") =>
  rna_sequences === ""
    ? []
    : rna_sequences.match(/(\w{3})/g).map(codon => CODONS_TO_PROTEIN[codon]);

export default translate;
