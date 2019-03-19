class Clock
  def initialize(hour: 0, minute: 0)
    @hour = hour
    @minute = minute
  end

  def to_s
    "#{stringfy_hour}:#{stringfy_minute}"
  end
  private

  attr_reader :hour, :minute

  def stringfy_hour
    hour.to_s.rjust(2, '0') 
  end

  def stringfy_minute
    minute.to_s.rjust(2, '0')
  end
end