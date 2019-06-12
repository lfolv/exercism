module RunLengthEncoding
  CONSECUTIVE_DATA_ELEMENTS = /((.)\2*)/
  COMPRESSED_DATA_ELEMENTS = /(\d*.)/

  def self.encode(data)
    data.gsub(CONSECUTIVE_DATA_ELEMENTS) { |match| shrink(match) }
  end

  def self.shrink(chr)
    return chr[0] if chr.length == 1

    "#{chr.length}#{chr[0]}"
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
