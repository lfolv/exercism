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
    node = new_tail_node(value)
    return add_to_empty(node) if empty?

    tail.next_node = node
    self.tail = node
  end

  def pop
    return remove_last_node.value if single_item?

    tail.value.tap do
      self.tail = tail.previous_node
    end
  end

  def shift
    return remove_last_node.value if single_item?

    head.value.tap do
      self.head = head.next_node
    end
  end

  def unshift(value)
    node = new_head_node(value)
    return add_to_empty(node) if empty?

    head.previous_node = node
    self.head = node
  end

  private

  attr_accessor :head, :tail

  def new_tail_node(value)
    Node.new value: value, previous_node: tail
  end

  def new_head_node(value)
    Node.new value: value, next_node: head
  end

  def empty?
    head.nil? && tail.nil?
  end

  def add_to_empty(node)
    node.tap do
      self.head = node
      self.tail = node
    end
  end

  def remove_last_node
    head.tap do
      self.head = nil
      self.tail = nil
    end
  end

  def single_item?
    head == tail
  end
end
