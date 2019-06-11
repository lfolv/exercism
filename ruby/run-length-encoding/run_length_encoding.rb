module RunLengthEncoding
  CONSECUTIVE_DATA_ELEMENTS = /((.)\2*)/

  def self.encode(data)
    data
      .scan(CONSECUTIVE_DATA_ELEMENTS)
      .map { |match| shrink(match.first) }
      .join
  end

  def self.shrink(letters)
    return letters[0] if letters.length == 1

    "#{letters.length}#{letters[0]}"
  end

  def self.decode(data)
    data
  end
end
