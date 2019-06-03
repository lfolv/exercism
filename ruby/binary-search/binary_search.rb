class BinarySearch
  attr_reader :list

  def initialize(list)
    @list = list
    raise ArgumentError unless valid?
  end

  def search_for(value, head = 0, tail = list.length)
    index = middle(head, tail)

    return index if value == list[index]
    raise RuntimeError if head == tail
    return search_for(value, head, tail - 1) if value < list[middle]
    return search_for(value, head + 1, tail) if value > list[middle]
  end

  def middle(head = 0, tail = list.length)
    middle = ((tail - head) / 2).floor
  end

  private

  def valid?
    list.each_cons(2) { |a| return false if a[0] >= a[1] }
    true
  end
end
