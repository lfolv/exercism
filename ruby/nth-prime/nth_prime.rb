module Prime
  def self.nth(n)
    raise ArgumentError.new if n.zero?

    count = 1

    (2..Float::INFINITY).each do |current|
      if prime?(current)
        return current if count == n
        count += 1
      end
    end
  end

  def self.prime?(number)
    (2..(number / 2)).each do |n|
      return false if (number % n).zero?
    end

    true
  end
end
