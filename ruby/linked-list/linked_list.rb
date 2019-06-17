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
    if head == tail
      self.head = nil
      self.tail = nil
    else
      self.tail = tail.right
    end
    value
  end

  def shift
    value = head.value
    if head == tail
      self.head = nil
      self.tail = nil
    else
      self.head = head.left
    end
    value
  end

  def unshift(value)
    node = Node.new value: value, left: head
    if tail.nil?
      self.tail = node
    else
      head.right = node
    end
    self.head = node
  end

  private

  attr_accessor :head, :tail
end
