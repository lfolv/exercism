module Year
  def self.leap?(year)
    return true if (year % 400).zero?
    return false if (year % 100).zero?
    (year % 4).zero?
  end
end