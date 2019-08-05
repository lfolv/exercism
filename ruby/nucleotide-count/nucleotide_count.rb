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
    h = { 'A' => 0, 'T' => 0, 'C' => 0, 'G' => 0 }
    
    dna.each_char do |c|
      h[c] += 1
    end
    
    h
  end

  private

  attr_reader :dna
end