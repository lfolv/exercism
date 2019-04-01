class Tournament
  def self.tally(input)
    t = "Team                           | MP |  W |  D |  L |  P\n"
    tournament = Hash.new { |hash, key| hash[key] = {
        mp: 0,
        w: 0,
        d: 0,
        l: 0,
        p: 0
    }}

    input.split("\n").each do |line|
      team1, team2, match_result = line.split(";")
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

    tournament.each do |key, values|
      t << "%-31s|%3d |%3d |%3d |%3d | %d\n" % [key, values[:mp], values[:w], values[:d], values[:l], values[:p]]
    end
    t
  end
end
