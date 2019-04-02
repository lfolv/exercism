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
        .sort_by { |name, result| [-result[:p], name] }
        .map { |name, result| build_line(name, *result.values)}
        .join
    end
  end

  private

  attr_reader :input

  def build_line(name, mp, w, d, l, p)
    "%-31s|%3s |%3s |%3s |%3s |%3s\n" % [name, mp, w, d, l, p]
  end

  def teams
    parsed_teams = Hash.new { |hash, key| hash[key] = {
        mp: 0,
        w: 0,
        d: 0,
        l: 0,
        p: 0
    }}

    games.each do |line|
      team1, team2, match_result = parse_game line
      parsed_teams[team1][:mp] += 1
      parsed_teams[team2][:mp] += 1

      case match_result
      when 'win'
        parsed_teams[team1][:w] += 1
        parsed_teams[team1][:p] += 3
        parsed_teams[team2][:l] += 1
      when 'loss'
        parsed_teams[team1][:l] += 1
        parsed_teams[team2][:w] += 1
        parsed_teams[team2][:p] += 3
      when 'draw'
        parsed_teams[team1][:d] += 1
        parsed_teams[team1][:p] += 1
        parsed_teams[team2][:d] += 1
        parsed_teams[team2][:p] += 1
      end
    end

    parsed_teams
  end

  def games
    input.split("\n")
  end

  def parse_game(game)
    game.split(";")
  end
end
