module ListOps
  def self.arrays(list)
    size = 0
    list.each { size += 1 }
    size
  end

  def self.reverser(list)
    reversed = []
    list.each { |value| reversed.unshift(value) }
    reversed
  end
end
