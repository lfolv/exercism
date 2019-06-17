class Bst
  attr_reader :data, :left, :right

  def initialize(data)
    @data = data
  end

  def insert(data, current = self)
    if data <= current.data
      insert_left(data, current)
    else
      insert_right(data, current)
    end
  end

  protected

  attr_writer :left, :right

  def insert_left(data, current)
    if current.left.nil?
      current.left = Bst.new(data)
    else
      insert(data, current.left)
    end
  end

  def insert_right(data, current)
    if current.right.nil?
      current.right = Bst.new(data)
    else
      insert(data, current.right)
    end
  end
end
