class Bst
  attr_reader :data, :left, :right

  def initialize(data)
    @data = data
  end

  def insert(data)
    node = Bst.new(data)
    if data <= self.data
      self.left = node
    else
      self.right = node
    end
  end

  private

  attr_writer :left, :right
end
