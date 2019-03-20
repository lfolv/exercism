class Clock
  def initialize(hour: 0, minute: 0)
    @minute = minute % 60
    extra_minutes = minute / 60
    @hour = (hour + extra_minutes) % 24 
  end

  def to_s
    stringfy_hour = hour.to_s.rjust(2, '0')
    stringfy_minute = minute.to_s.rjust(2, '0')
    "#{stringfy_hour}:#{stringfy_minute}"
  end

  def +(other)
    Clock.new(hour: hour + other.hour, minute: minute + other.minute)
  end

  protected

  attr_reader :hour, :minute
end