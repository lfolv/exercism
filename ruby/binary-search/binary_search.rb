class BinarySearch
  attr_reader :list

  def initialize(list)
    @list = list
    raise ArgumentError unless valid?
  end

  private

  def valid?
    list.each_cons(2) { |a| return false if a[0] >= a[1] }
    true
  end
end
