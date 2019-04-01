class Tournament
  INITIAL_VALUES =
  def self.tally(input)
    Tournament.new(input).tally
  end

  def initialize(input)
    @input = input
  end

  def tally
    ''.tap do |result|
      result << build_tally_line('Team', 'MP', 'W', 'D', 'L', 'P')
      team_tallies.each do |key, team_tally|
        result << build_tally_line(key, *team_tally.values)
      end
    end
  end

  private

  attr_reader :input

  def build_tally_line(*values)
    "%-31s|%3s |%3s |%3s |%3s |%3s\n" % values
  end

  def team_tallies
    tournament = Hash.new { |hash, key| hash[key] = {
        mp: 0,
        w: 0,
        d: 0,
        l: 0,
        p: 0
    }}

    matchers.each do |line|
      team1, team2, match_result = parse_match line
      tournament[team1][:mp] += 1
      tournament[team2][:mp] += 1

      case match_result
      when 'win'
        tournament[team1][:w] += 1
        tournament[team1][:p] += 3
        tournament[team2][:l] += 1
      when 'loss'
        tournament[team1][:l] += 1
        tournament[team2][:w] += 1
        tournament[team2][:p] += 3
      when 'draw'
        tournament[team1][:d] += 1
        tournament[team1][:p] += 1
        tournament[team2][:d] += 1
        tournament[team2][:p] += 1
      end
    end

    tournament = tournament.sort_by do |key, values|
      [-values[:p], key]
    end
  end

  def matchers
    input.split("\n")
  end

  def parse_match(match)
    match.split(";")
  end
end
