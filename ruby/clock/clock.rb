class Clock
  def initialize(hour:)
    @hour = hour
  end

  def to_s
    "0#{hour}:00"
  end
  private

  attr_reader :hour
end