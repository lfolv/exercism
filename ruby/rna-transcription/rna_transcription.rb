module Complement
  COMPLEMENTS = Hash[*%w{G C C G T A A U}]

  def self.of_dna(rna)
    return '' if rna == ''
    COMPLEMENTS[rna]
  end
end
