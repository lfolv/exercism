class Nucleotide
  def self.from_dna(dna)
    Nucleotide.new dna
  end

  def initialize(dna)
    @dna = dna
  end

  def count(nucleotide)
    dna.count nucleotide
  end

  def histogram
    { 'A' => 0, 'T' => 0, 'C' => 0, 'G' => 0 }
  end

  private

  attr_reader :dna
end