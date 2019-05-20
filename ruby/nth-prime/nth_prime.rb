module Prime
  def self.nth(n)
    count = 1
    current = 2

    loop do
      if prime?(current)
        return current if count == n
        count += 1
      end
      current += 1
    end
  end

  def self.prime?(number)
    (2...number).each do |n|
      return false if (number % n).zero?
    end

    true
  end
end
