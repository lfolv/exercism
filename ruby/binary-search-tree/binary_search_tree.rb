class Bst
  include Enumerable

  attr_reader :data, :left, :right

  def initialize(data)
    @data = data
  end

  def insert(data)
    if data <= self.data
      insert_left(data)
    else
      insert_right(data)
    end
  end

  def each(&block)
    if block_given?
      left.each(&block) if left
      block.call(data)
      right.each(&block) if right
    else
      to_enum(:each)
    end
  end

  protected

  attr_writer :left, :right

  def insert_left(data)
    if left.nil?
      self.left = Bst.new(data)
    else
      left.insert(data)
    end
  end

  def insert_right(data)
    if right.nil?
      self.right = Bst.new(data)
    else
      right.insert(data)
    end
  end
end
