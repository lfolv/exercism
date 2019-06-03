class BinarySearch
  attr_reader :list

  def initialize(list)
    @list = list
    raise ArgumentError unless valid?
  end

  def search_for(value, head = 0, tail = list.length)
    index = middle(head, tail)
    if value == list[index]
      index
    elsif  head == tail
      raise RuntimeError
    elsif value < list[index]
      search_for(value, head, tail - 1)
    else
      search_for(value, head + 1, tail)
    end
  end

  def middle(head = 0, tail = list.length)
    middle = ((tail - head) / 2).floor + head
  end

  private

  def valid?
    list.each_cons(2) { |a| return false if a[0] >= a[1] }
    true
  end
end
