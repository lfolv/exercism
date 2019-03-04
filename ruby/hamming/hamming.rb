module Hamming
  def self.compute(strands1, strands2)
    raise ArgumentError unless strands1.length == strands2.length

    strands1.each_char.with_index.count do |char, index|
      char != strands2[index]
    end
  end
end