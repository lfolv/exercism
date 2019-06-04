class BinarySearch
  attr_reader :list

  def initialize(list)
    @list = list
    raise ArgumentError unless sorted?
  end

  def search_for(value, head = 0, tail = list.length)
    raise RuntimeError if head > tail

    index = middle(head, tail)
    case compare(value, list[index])
    when :move_left
      search_for(value, head, index - 1)
    when :move_right
      search_for(value, index + 1, tail)
    when :match
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

  def compare(value, other)
    if value < other
      :move_left
    elsif value > other
      :move_right
    else
      :match
    end
  end
end
