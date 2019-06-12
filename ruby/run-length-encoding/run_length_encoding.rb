module RunLengthEncoding
  CONSECUTIVE_DATA_ELEMENTS = /((.)\2*)/
  COMPRESSED_DATA_ELEMENTS = /(?<length>\d*)(?<chr>.)/

  def self.encode(data)
    data.gsub(CONSECUTIVE_DATA_ELEMENTS) { |match| shrink(match) }
  end

  def self.shrink(chr)
    return chr[0] if chr.length == 1

    "#{chr.length}#{chr[0]}"
  end

  def self.decode(data)
    data.gsub(COMPRESSED_DATA_ELEMENTS) do
      match = Regexp.last_match
      grow(match[:chr], match[:length])
    end
  end

  def self.grow(chr, length)
    return chr if length.empty?

    chr * length.to_i
  end
end
