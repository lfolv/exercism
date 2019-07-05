class Node
  attr_reader :value
  attr_accessor :previous_node, :next_node

  def initialize(value: nil, previous_node: nil, next_node: nil)
    @value = value
    @previous_node = previous_node
    @next_node = next_node
  end
end

class Deque
  def push(value)
    node = Node.new value: value, previous_node: tail
    return add_to_empty(node) if empty?

    tail.next_node = node
    self.tail = node
  end

  def pop
    value = tail.value
    if head == tail
      self.head = nil
      self.tail = nil
    else
      self.tail = tail.previous_node
    end
    value
  end

  def shift
    value = head.value
    if head == tail
      self.head = nil
      self.tail = nil
    else
      self.head = head.next_node
    end
    value
  end

  def unshift(value)
    node = Node.new value: value, next_node: head
    return add_to_empty(node) if empty?

    head.previous_node = node
    self.head = node
  end

  private

  attr_accessor :head, :tail

  def empty?
    head.nil? && tail.nil?
  end

  def add_to_empty(node)
    self.head = node
    self.tail = node
    node
  end
end
