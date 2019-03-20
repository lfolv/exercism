class Clock
  BASE_HOUR = 24
  BASE_MINUTE = 60
  DISPLAY_SIZE = 2
  DISPLAY_COMPLEMENT = '0'

  def initialize(hour: 0, minute: 0)
    @minute = minute % BASE_MINUTE
    extra_minutes = minute / BASE_MINUTE
    @hour = (hour + extra_minutes) % BASE_HOUR 
  end

  def to_s
    stringfy_hour = hour.to_s.rjust(DISPLAY_SIZE, DISPLAY_COMPLEMENT)
    stringfy_minute = minute.to_s.rjust(DISPLAY_SIZE, DISPLAY_COMPLEMENT)
    "#{stringfy_hour}:#{stringfy_minute}"
  end

  def +(other)
    Clock.new(hour: hour + other.hour, minute: minute + other.minute)
  end

  def -(other)
    Clock.new(hour: hour - other.hour, minute: minute - other.minute)
  end

  def ==(other)
    hour == other.hour && minute == other.minute
  end

  protected

  attr_reader :hour, :minute
end