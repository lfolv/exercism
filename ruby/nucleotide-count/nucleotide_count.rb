class Nucleotide
  INITIAL_COUNTS = { 
    'A' => 0, 
    'T' => 0, 
    'C' => 0, 
    'G' => 0 
  }

  def self.from_dna(dna)
    Nucleotide.new dna
  end

  def initialize(dna)
    raise ArgumentError unless dna =~ /^[ATCG]*$/

    @dna = dna
  end

  def count(nucleotide)
    dna.count nucleotide
  end

  def histogram
    @histogram ||= each_nucleotide.each_with_object(INITIAL_COUNTS.dup) do |nucleotide, acc|
      acc[nucleotide] += 1
    end
  end

  private

  attr_reader :dna

  def each_nucleotide
    dna.each_char
  end
end