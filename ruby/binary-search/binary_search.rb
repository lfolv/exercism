class BinarySearch
  attr_reader :list

  def initialize(list)
    @list = list
    raise ArgumentError unless sorted?
  end

  def search_for(value, head = 0, tail = list.length)
    raise RuntimeError if head > tail

    index = middle(head, tail)
    if value < list[index]
      search_for(value, head, index - 1)
    elsif value > list[index]
      search_for(value, index + 1, tail)
    else
      index
    end
  end

  def middle(head = 0, tail = list.length)
    middle = ((tail - head) / 2).floor + head
  end

  private

  def sorted?
    list.each_cons(2).all? { |x, y| x < y }
  end
end
