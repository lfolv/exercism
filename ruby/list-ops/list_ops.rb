module ListOps
  def self.arrays(list)
    inject(list, 0) { |length| length + 1 }
  end

  def self.reverser(list)
    inject(list, []) { |reversed, value| reversed.unshift(value) }
  end

  def self.concatter(first_list, second_list)
    concatened = []
    first_list.each { |value| concatened << value }
    second_list.each { |value| concatened << value }
    concatened
  end

  def self.mapper(list)
    inject(list, []) { |mapped, value| mapped << yield(value) }
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

  def self.inject(list, initial_value)
    sum = initial_value
    for value in list
      sum = yield(sum, value)
    end
    sum
  end
end
