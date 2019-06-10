module RunLengthEncoding
  CONSECUTIVE_DATA_ELEMENTS = /((.)\2*)/

  def self.encode(data)
    data
      .scan(CONSECUTIVE_DATA_ELEMENTS)
      .map { |chrs, chr| shrink(chr, chrs.length) }
      .join
  end

  def self.shrink(chr, length)
    return chr if length == 1

    "#{length}#{chr}"
  end
end
