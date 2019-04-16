class SpaceAge
  ORBITAL_PERIOD = {
    earth: 31557600.0,
    mercury: 7600543.81992
  }

  def initialize(seconds)
    @seconds = seconds
  end

  def on_earth
    seconds / ORBITAL_PERIOD[:earth]
  end

  def on_mercury
    seconds / ORBITAL_PERIOD[:mercury]
  end

  private

  attr_reader :seconds
end
