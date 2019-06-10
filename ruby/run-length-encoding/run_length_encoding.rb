module RunLengthEncoding
  def self.encode(data)
    encoded = ""
    previos = data[0]
    count = 1
    data[1..-1]&.each_char do |chr|
      if previos == chr
        count += 1
      else
        if count == 1
          encoded << "#{previos}"
        else
          encoded << "#{count}#{previos}"
        end
        count = 1
      end
      previos = chr
    end

    if count == 1
      encoded << "#{previos}"
    else
      encoded << "#{count}#{previos}"
    end

    encoded
  end
end
