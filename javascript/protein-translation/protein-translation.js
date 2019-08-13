const STOP = "STOP"

const CODONS_TO_AMINO_ACID = {
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
  UGG: "Tryptophan",
  UAA: STOP,
  UAG: STOP,
  UGA: STOP
};

const translate = (rna_sequence = "") => {
  const amino_acids = [];

  for (let codon of getCodons(rna_sequence)) {
    const amino_acid = CODONS_TO_AMINO_ACID[codon];

    if (!amino_acid) throw new Error("Invalid codon");

    if (amino_acid === STOP) break;

    amino_acids.push(amino_acid);
  }

  return amino_acids;
};

const getCodons = rna_sequence => rna_sequence.match(/(\w{3})/g) || [];

export default translate;
