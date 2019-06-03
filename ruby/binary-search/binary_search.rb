class BinarySearch
  attr_reader :list

  def initialize(list)
    list.each_cons(2) { |a| raise ArgumentError if  a[0] >= a[1] }
    @list = list
  end
end
