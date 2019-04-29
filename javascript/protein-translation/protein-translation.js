const CODONS_TO_PROTEIN = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan"
};

const translate = (rna_sequence = "") =>
  getCodons(rna_sequence).map(codon => CODONS_TO_PROTEIN[codon]);

const getCodons = rna_sequence => rna_sequence.match(/(\w{3})/g) || [];

export default translate;
