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
      if match_result == 'win'
        tournament[team1][:mp] += 1
        tournament[team1][:w] += 1
        tournament[team1][:p] += 3


        tournament[team2][:mp] += 1
        tournament[team2][:l] += 1
      elsif match_result == 'loss'
        tournament[team1][:mp] += 1
        tournament[team1][:l] += 1

        tournament[team2][:mp] += 1
        tournament[team2][:w] += 1
        tournament[team2][:p] += 3
      end
    end

    tournament = tournament.sort_by do |key, values|
      -values[:p]
    end

    tournament.each do |key, values|
      t << "#{key}             |  %d |  %d |  %d |  %d |  %d\n" % [values[:mp], values[:w], values[:d], values[:l], values[:p]]
    end
    t
  end
end
