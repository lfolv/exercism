class Array
  def accumulate
    result = []
    self.each do |value|
      result << yield(value)
    end
    result
  end
end
