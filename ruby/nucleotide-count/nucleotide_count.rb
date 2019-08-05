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
    @histogra ||= nucleotides.each_with_object({ 
      'A' => 0, 
      'T' => 0, 
      'C' => 0, 
      'G' => 0 
    }) do |nucleotide, obj|
      obj[nucleotide] += 1
    end
  end

  private

  attr_reader :dna

  def nucleotides
    dna.each_char
  end
end