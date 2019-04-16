class SpaceAge
  ORBITAL_PERIOD_IN_SECONDS = {
    earth: 31557600.0
  }
  def initialize(seconds)
    @seconds = seconds
  end

  def on_earth
    seconds / ORBITAL_PERIOD_IN_SECONDS[:earth]
  end

  private

  attr_reader :seconds
end
