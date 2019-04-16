# Given an age in seconds, calculate how old someone would be on the planet
#
# @author Lucas Oliveira
class SpaceAge
  ORBITAL_PERIOD = {
    earth: 31557600.0,
    mercury: 7600543.81992
  }

  ORBITAL_PERIOD.each do |planet, orbital_period|
    define_method "on_#{planet}" do
      seconds / orbital_period
    end
  end

  # Create a new SpaceAge object
  #
  # @param [Int] seconds - Age in seconds
  def initialize(seconds)
    @seconds = seconds
  end

  private

  attr_reader :seconds
end
