module CollatzConjecture
  def self.steps(n)
    raise ArgumentError.new if n <= 0

    (0..Float::INFINITY).each do |step|
      return step if n == 1
      n = n.even? ? n / 2 : n*3 + 1
    end
  end
end
