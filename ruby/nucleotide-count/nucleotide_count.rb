class Nucleotide
  def self.from_dna(dna)
    Nucleotide.new dna
  end

  def initialize(dna)
    @dna = dna
  end

  def count(nucleotide)
    count = 0
    dna.each_char do |char|
      count += 1 if char == nucleotide
    end
    count
  end

  private

  attr_reader :dna
end