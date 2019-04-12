module Complement
  COMPLEMENTS = Hash[*%w{G C C G}]

  def self.of_dna(rna)
    return '' if rna == ''
    COMPLEMENTS[rna]
  end
end
