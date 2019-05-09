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

  def self.concatter(first_list, second_list)
    concatened = []
    first_list.each { |value| concatened << value }
    second_list.each { |value| concatened << value }
    concatened
  end

  def self.mapper(list)
    mapped = []
    list.each { |value| mapped << yield(value) }
    mapped
  end

  def self.filterer(list)
    filtered = []
    list.each { |value| filtered << value if yield(value) }
    filtered
  end

  def self.sum_reducer(list)
    sum = 0
    list.each { |value| sum += value }
    sum
  end

  def self.factorial_reducer(list)
    sum = 1
    list.each { |value| sum *= value }
    sum
  end
end
