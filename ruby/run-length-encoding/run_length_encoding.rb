module RunLengthEncoding
  def self.encode(data)
    encoded = ""
    data.scan(/((.)\2*)/).each do |chrs, chr|
      if chrs.length == 1
        encoded << chr
      else
        encoded << "#{chrs.length}#{chr}"
      end
    end
    encoded
  end
end
