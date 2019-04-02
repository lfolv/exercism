class Tournament
  def self.tally(input)
    Tournament.new(input).tally
  end

  def initialize(input)
    @input = input
  end

  def tally
    ''.tap do |result|
      result << build_line('Team', 'MP', 'W', 'D', 'L', 'P')
      result << teams
        .sort_by { |name, results| [-results[:p], name] }
        .map { |name, results| build_line(name, *results.values)}
        .join
    end
  end

  private

  attr_reader :input

  def build_line(name, mp, w, d, l, p)
    "%-31s|%3s |%3s |%3s |%3s |%3s\n" % [name, mp, w, d, l, p]
  end

  def teams
    initial = Hash.new { |hash, key| hash[key] = {
        mp: 0,
        w: 0,
        d: 0,
        l: 0,
        p: 0
    }}

    games.each_with_object(initial) do |line, hsh|
      team1, team2, match_result = parse_game line
      hsh[team1][:mp] += 1
      hsh[team2][:mp] += 1

      case match_result
      when 'win'
        hsh[team1][:w] += 1
        hsh[team1][:p] += 3
        hsh[team2][:l] += 1
      when 'loss'
        hsh[team1][:l] += 1
        hsh[team2][:w] += 1
        hsh[team2][:p] += 3
      when 'draw'
        hsh[team1][:d] += 1
        hsh[team1][:p] += 1
        hsh[team2][:d] += 1
        hsh[team2][:p] += 1
      end
    end
  end

  def games
    input.split("\n")
  end

  def parse_game(game)
    game.split(";")
  end
end
