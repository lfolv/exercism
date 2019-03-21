class Clock
  MINUTES_IN_A_HOUR = 60
  MINUTES_IN_A_DAY = 1440

  def initialize(hour: 0, minute: 0)
    @minutes = (minute + (hour * MINUTES_IN_A_HOUR)) % MINUTES_IN_A_DAY
  end

  def to_s
    "%02d:%02d" % minutes.divmod(MINUTES_IN_A_HOUR)
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