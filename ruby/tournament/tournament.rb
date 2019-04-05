class Tournament
  PAIRS = Hash[*%w[win loss loss win draw draw]]

  def self.tally(input)
    Tournament.new(input).tally
  end

  def initialize(input)
    @input = input
  end

  def tally
    teams.map(&method(:calculate))
         .sort_by { |results| [-results[:p], results[:name]] }
         .map(&:values)
         .unshift(%w[Team MP W D L P])
         .map(&method(:build_line))
         .join
  end

  private

  attr_reader :input

  def calculate(name, roast)
    {
      name: name,
      mp: roast.length,
      w: roast.count('win'),
      d: roast.count('draw'),
      l: roast.count('loss'),
      p: roast.count('win') * 3 + roast.count('draw')
    }
  end

  def build_line(line_values)
    "%-31s|%3s |%3s |%3s |%3s |%3s\n" % line_values
  end

  def teams
    initial = Hash.new { |hash, key| hash[key] = [] }
    matchers.each_with_object(initial) do |match, roster|
      home, away, outcome = parse_match(match)
      roster[home] << outcome
      roster[away] << PAIRS[outcome]
    end
  end

  def matchers
    input.split("\n")
  end

  def parse_match(match)
    match.split(';')
  end
end
