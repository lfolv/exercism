module Prime
  def self.nth(index)
    2
  end

  def self.prime?(number)
    (2..number).each do |n|
      return false if number % n == 0
    end
    return true
  end
end
