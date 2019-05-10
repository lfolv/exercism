module Translation
  CODONS_TO_AMINO_ACID = {
    'AUG' => "Methionine",
    'UUU' => "Phenylalanine",
    'UUC' => "Phenylalanine",
    'UUA' => "Leucine",
    'UUG' => "Leucine",
    'UCU' => "Serine",
    'UCC' => "Serine",
    'UCA' => "Serine",
    'UCG' => "Serine",
    'UAU' => "Tyrosine",
    'UAC' => "Tyrosine",
    'UGU' => "Cysteine",
    'UGC' => "Cysteine",
    'UGG' => "Tryptophan",
    'UAA' => "STOP",
    'UAG' => "STOP",
    'UGA' => "STOP"
  }

  def self.of_codon(rna_sequence)
    CODONS_TO_AMINO_ACID[rna_sequence]
  end
end
