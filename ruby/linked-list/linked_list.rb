class Node
  attr_reader :value
  attr_accessor :previos

  def initialize(value: nil, previos: nil)
    @value = value
    @previos = previos
  end
end

class Deque
  def push(value)
    node = Node.new value: value, previos: tail
    self.tail = node
  end

  def pop
    value = tail.value
    self.tail = tail.previos
    value
  end

  private

  attr_accessor :tail
end
