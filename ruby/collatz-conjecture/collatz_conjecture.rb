module CollatzConjecture
  def self.steps(n)
    raise ArgumentError.new if n <= 0

    current_step = 0
    until n == 1
      n = n.even? ? n / 2 : n*3 + 1
      current_step += 1
    end
    current_step
  end
end
