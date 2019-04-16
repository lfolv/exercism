# Given an age in seconds, calculate how old someone would be on the planet
#
# @author Lucas Oliveira
class SpaceAge
  ORBITAL_PERIOD = {
    earth: 31557600.0,
    mercury: 7600543.81992,
    venus: 19414149.052176,
    mars: 59354032.690079994,
    jupiter: 374355659.124,
    saturn: 929292362.8848,
    uranus: 2651370019.3296,
    neptune: 5200418560.032001
  }

  # Create a new SpaceAge object
  #
  # @param [Int] seconds - Age in seconds
  def initialize(seconds)
    @seconds = seconds
  end

  ORBITAL_PERIOD.each do |planet, orbital_period|
    define_method "on_#{planet}" do
      seconds / orbital_period
    end
  end

  private

  attr_reader :seconds
end
