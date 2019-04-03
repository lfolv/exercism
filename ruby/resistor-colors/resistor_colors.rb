# Class ResistorColors provide helpful methods to get the value of the resistor
# bands
#
# @author Lucas Oliveira
class ResistorColors
  COLORS = {
    black: '0',
    brown: '1',
    red: '2',
    orange: '3',
    yellow: '4',
    green: '5',
    blue: '6',
    violet: '7',
    grey: '8',
    white: '9'
  }

  # Take two colors as input, and output the correct number
  #
  # @param [Array<String>] :colors The colors of the bands
  # @return [Integer] the correct number
  #
  # @example Get correct value of a band
  #   ResistorColors.value([["brown", "black"]]) #=> 10
  def self.value(colors)
    ResistorColors.new(colors).value
  end

  # Create a new ResistorColors object
  #
  # @param [Array<String>] :colors The colors of the bands
  def initialize(colors)
    @colors = colors
  end

  # Output the correct number of the ResistorColors object
  #
  # @return [Integer] the correct number
  #
  # @example Get correct value of a band
  #   resistor = ResistorColors.new([["brown", "black"]])
  #   resistor.value #=> 10
  def value
    colors.sum("") { |color| COLORS[color.to_sym] }.to_i
  end

  private

  attr_reader :colors
end
