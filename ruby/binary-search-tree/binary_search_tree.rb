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
    return to_enum(:each) unless block_given?

    left&.each(&block)
    block.call(data)
    right&.each(&block)
  end

  protected

  attr_writer :left, :right

  def insert_left(data)
    left&.insert(data) || self.left = Bst.new(data)
  end

  def insert_right(data)
    right&.insert(data) || self.right = Bst.new(data)
  end
end
