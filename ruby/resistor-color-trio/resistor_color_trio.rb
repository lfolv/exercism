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
      if resistence > 100
        "#{resistence / 1000} kiloohms"
      else
        "#{resistence} ohms"
      end
    end

    def resistence
      (resistence_tens + resistence_unit) * base
    end

    def resistence_tens
      COLOR_TO_VALUE[colors[0]] * 10
    end

    def resistence_unit
      COLOR_TO_VALUE[colors[1]]
    end

    def base
      10 ** COLOR_TO_VALUE[colors[2]]
    end
end