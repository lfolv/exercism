# Given an age in seconds, calculate how old someone would be on the planet
#
# @author Lucas Oliveira
class SpaceAge
  ORBITAL_PERIOD = {
    earth: 31557600.0,
    mercury: 7600543.81992
  }

  # Create a new SpaceAge object
  #
  # @param [Int] seconds - Age in seconds
  def initialize(seconds)
    @seconds = seconds
  end

  # Calculate how old someone would be on earth
  #
  # @return [Float] Age on earth
  #
  # @example
  #   age = SpaceAge.new(1_000_000_000)
  #   age.on_earth #=> 31.69
  def on_earth
    seconds / ORBITAL_PERIOD[:earth]
  end

  # Calculate how old someone would be on mercury
  #
  # @return [Float] age on mercury
  #
  # @example
  #   age = SpaceAge.new(2_134_835_688)
  #   age.on_earth #=> 280.88
  def on_mercury
    seconds / ORBITAL_PERIOD[:mercury]
  end

  private

  attr_reader :seconds
end
