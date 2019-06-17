class Bst
  attr_reader :data, :left, :right

  def initialize(data)
    @data = data
  end

  def insert(data, current = self)
    node = Bst.new(data)
    if data <= current.data
      self.left = node
    else
      self.right = node
    end
  end

  private

  attr_writer :left, :right
end
