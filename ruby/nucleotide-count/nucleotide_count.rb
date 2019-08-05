class Nucleotide
  def self.from_dna(dna)
    Nucleotide.new dna
  end

  def initialize(dna)
    @dna = dna
  end

  def count(nucleotide)
    dna.length
  end

  private

  attr_reader :dna
end