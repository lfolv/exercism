class Clock
  BASE_MINUTE = 60
  MINUTES_IN_A_DAY = 1440

  def initialize(hour: 0, minute: 0)
    @minutes = (minute + (hour * BASE_MINUTE)) % MINUTES_IN_A_DAY
  end

  def to_s
    "%02d:%02d" % minutes.divmod(BASE_MINUTE)
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
end