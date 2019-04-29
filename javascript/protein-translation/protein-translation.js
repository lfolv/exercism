const CODONS_TO_PROTEIN = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine"
};

const translate = (rna_sequence = "") =>
  getCodons(rna_sequence).map(codon => CODONS_TO_PROTEIN[codon]);

const getCodons = rna_sequence => rna_sequence.match(/(\w{3})/g) || [];

export default translate;
