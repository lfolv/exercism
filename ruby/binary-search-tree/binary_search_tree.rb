class Bst
  attr_reader :data, :left

  def initialize(data)
    @data = data
  end

  def insert(data)
    self.left = Bst.new(data)
  end

  private

  attr_writer :left
end
