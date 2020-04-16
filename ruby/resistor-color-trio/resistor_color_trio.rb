class ResistorColorTrio
  COLOR_TO_VALUE = { 
    'black' => 0,
    'brown' => 1,
    'red' => 2, 
    'orange' => 3,
    'yellow' => 4,
    'green' => 5,
    'blue' => 6,
    'violet' => 7,
    'grey' => 8,
    'white' => 9
  }
  
  def initialize(colors)
    raise ArgumentError unless colors.all? { |color| COLOR_TO_VALUE.include? color }

    @colors = colors
  end

  def label
    "Resistor value: #{total_value}"
  end

  private
    attr_reader :colors

    def total_value
      return "#{total_resistors_value / 1000} kiloohms" if total_resistors_value > 1000

      "#{total_resistors_value} ohms"
    end

    def total_resistors_value
      (first_resistor_value + second_resistor_value) * third_resistor_value
    end

    def first_resistor_value
      COLOR_TO_VALUE[colors[0]] * 10
    end

    def second_resistor_value
      COLOR_TO_VALUE[colors[1]]
    end

    def third_resistor_value
      10 ** COLOR_TO_VALUE[colors[2]]
    end
end