# Provides helpful method to handle with RNA complement
#
# @author Lucas Oliveira
# @since 0.1.0
module Complement
  COMPLEMENTS = Hash[*%w{G C C G T A A U}]

  # Given a DNA strand, return its RNA complement (per RNA transcription)
  #
  # @param [String] dna-strand - A DNA strand
  # @return [String] the RNA complement
  #
  # @example
  #   Complement.of_dna('ACGTGGTCTTAA') #=> 'UGCACCAGAAUU'
  def self.of_dna(dna_strand)
    dna_strand.each_char.sum('') { |nucleotide| COMPLEMENTS[nucleotide] }
  end
end
