class FlattenArray
  def self.flatten(array)
    array.compact.reduce([]) do |current, value|
      if value.is_a?(Array)
        current + flatten(value)
      else
        current + [value]
      end
    end
  end
end