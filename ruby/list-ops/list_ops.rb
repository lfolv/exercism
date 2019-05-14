module ListOps
  def self.arrays(list)
    inject(list, 0) { |length| length + 1 }
  end

  def self.reverser(list)
    inject(list, []) { |reversed, value| reversed.unshift(value) }
  end

  def self.concatter(first_list, second_list)
    inject(second_list, first_list) { |concatened, value| concatened << value }
  end

  def self.mapper(list)
    inject(list, []) { |mapped, value| mapped << yield(value) }
  end

  def self.filterer(list)
    inject(list, []) do |filtered, value|
      yield(value) ? filtered << value : filtered
    end
  end

  def self.sum_reducer(list)
    inject(list, 0) { |sum, value| sum += value }
  end

  def self.factorial_reducer(list)
    inject(list, 1) { |sum, value| sum *= value }
  end

  def self.inject(list, initial_value)
    accumulator = initial_value
    for value in list
      accumulator = yield(accumulator, value)
    end
    accumulator
  end
end
