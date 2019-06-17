class Bst
  attr_reader :data, :left, :right

  def initialize(data)
    @data = data
  end

  def insert(data, current = self)
    if data <= current.data
      if current.left.nil?
        current.left = Bst.new(data)
      else
        insert(data, current.left)
      end
    else
      if current.right.nil?
        current.right = Bst.new(data)
      else
        insert(data, current.right)
      end
    end
  end

  protected

  attr_writer :left, :right
end
