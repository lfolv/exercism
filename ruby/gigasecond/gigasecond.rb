module Gigasecond
  LIVED_SECONDS = 1e9

  def self.from(time)
    time + LIVED_SECONDS
  end
end