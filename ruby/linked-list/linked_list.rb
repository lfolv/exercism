class Node
  attr_reader :value
  attr_accessor :right, :left

  def initialize(value: nil, right: nil, left: nil)
    @value = value
    @right = right
    @left = left
  end
end

class Deque
  def push(value)
    node = Node.new value: value, right: tail
    if head.nil?
      self.head = node
    else
      tail.left = node
    end
    self.tail = node
  end

  def pop
    value = tail.value
    self.tail = tail.right
    value
  end

  def shift
    value = head.value
    self.head = head.left
    value
  end

  private

  attr_accessor :head, :tail
end
