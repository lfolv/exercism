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

const translate = (rnaSequence) => {
  if (rnaSequence === undefined) {
    return []
  }

  const aminoAcids = [];

  for (let codon of getCodons(rnaSequence)) {
    const aminoAcid = CODONS_TO_AMINO_ACID[codon];

    if (!aminoAcid) throw new Error("Invalid codon");

    if (aminoAcid === STOP) break;

    aminoAcids.push(aminoAcid);
  }

  return aminoAcids;
};

const getCodons = rnaSequence => rnaSequence.match(/(\w{1,3})/g) || [];

export default translate;
