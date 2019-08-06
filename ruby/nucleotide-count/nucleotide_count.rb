class Nucleotide
  NUCLEOTIDES = %w{A T C G}

  INITIAL_COUNTS = NUCLEOTIDES.each_with_object({}) do |nucleotide, acc|
    acc[nucleotide] = 0
  end

  VALID_DNA_FORMAT = Regexp.new("^[#{NUCLEOTIDES}]*$")

  def self.from_dna(dna)
    Nucleotide.new dna
  end

  def self.valid?(dna)
    dna.match? VALID_DNA_FORMAT
  end

  def initialize(dna)
    raise ArgumentError unless Nucleotide.valid?(dna)

    @dna = dna
  end

  def count(nucleotide)
    dna.count nucleotide
  end

  def histogram
    each_nucleotide.each_with_object(INITIAL_COUNTS.dup) do |nucleotide, counts|
      counts[nucleotide] += 1
    end
  end

  private

  attr_reader :dna

  def each_nucleotide
    dna.each_char
  end
end