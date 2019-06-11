module RunLengthEncoding
  CONSECUTIVE_DATA_ELEMENTS = /((.)\2*)/
  COMPRESSED_DATA_ELEMENTS = /(\d*.)/

  def self.encode(data)
    data
      .scan(CONSECUTIVE_DATA_ELEMENTS)
      .map { |match| shrink(match.first) }
      .join
  end

  def self.shrink(chrs)
    return chrs[0] if chrs.length == 1

    "#{chrs.length}#{chrs[0]}"
  end

  def self.decode(data)
    data
      .scan(COMPRESSED_DATA_ELEMENTS)
      .map { |match| grow(match.first) }
      .join
  end

  def self.grow(compressed_data)
    match = compressed_data.match(/(?<length>\d*)(?<chr>.)/)
    return match[:chr] if match[:length].empty?

    match[:chr] * match[:length].to_i
  end
end
