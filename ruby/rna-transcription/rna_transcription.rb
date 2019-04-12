module Complement
  COMPLEMENTS = Hash[*%w{G C C G T A A U}]

  def self.of_dna(dna_strand)
    dna_strand.each_char.sum('') { |nucleotide| COMPLEMENTS[nucleotide] }
  end
end
