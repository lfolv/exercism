class InvalidCodonError < StandardError
end

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

  def self.of_codon(codon)
    raise InvalidCodonError unless CODONS_TO_AMINO_ACID[codon]
    CODONS_TO_AMINO_ACID[codon]
  end

  def self.of_rna(rna_sequence)
    rna_sequence
      .scan(/\w{3}/)
      .map { |codon| of_codon(codon) }
      .take_while { |amino_acid| amino_acid != 'STOP' }
  end
end
