# module ResistorColors provide helpful functions to get the value of the
# resistor bands
#
# @author Lucas Oliveira
module ResistorColors
  COLORS = %w[black brown red orange yellow green blue violet grey white]

  # Take two colors as input, and output the correct number
  #
  # @param [Array<String>] :colors The colors of the bands
  # @return [Integer] the correct number
  #
  # @example Get correct value of a band
  #   ResistorColors.value([["brown", "black"]]) #=> 10
  def self.value(colors)
    colors
      .map(&COLORS.method(:index))
      .join
      .to_i
  end
end
