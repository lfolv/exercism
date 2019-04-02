class ETL
  def self.transform(old_system)
    new_system = {}
    old_system.each do |key, values|
      values.each do |value|
        new_system[value.downcase] = key
      end
    end
    new_system
  end
end
