class Clock
  BASE_HOUR = 24
  BASE_MINUTE = 60
  DISPLAY_SIZE = 2
  DISPLAY_COMPLEMENT = '0'
  MINUTES_IN_A_DAY = 1440

  def initialize(hour: 0, minute: 0)
    @minutes = (minute + (hour * BASE_MINUTE)) % MINUTES_IN_A_DAY
  end

  def to_s
    "#{stringfy_hour}:#{stringfy_minute}"
  end

  def +(other)
    Clock.new(minute: minutes + other.minutes)
  end

  def -(other)
    Clock.new(minute: minutes - other.minutes)
  end

  def ==(other)
    minutes == other.minutes
  end

  protected

  attr_reader :minutes

  def stringfy_hour
    ((minutes / BASE_MINUTE) % BASE_HOUR).to_s.rjust(DISPLAY_SIZE, DISPLAY_COMPLEMENT)
  end

  def stringfy_minute
    (minutes % BASE_MINUTE).to_s.rjust(DISPLAY_SIZE, DISPLAY_COMPLEMENT)
  end
end