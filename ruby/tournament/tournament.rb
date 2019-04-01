class Tournament
  def self.tally(input)
    t = "Team                           | MP |  W |  D |  L |  P\n"
    tournament = Hash.new()

    input.split("\n").each do |line|
      team1, team2, match_result = line.split(";")
      tournament[team1] = {
        mp: 1,
        w: 1,
        d: 0,
        l: 0,
        p: 3
      }
      tournament[team2] = {
        mp: 1,
        w: 0,
        d: 0,
        l: 1,
        p: 0
      }
    end


    tournament.each do |key, values|
      t << "#{key}             |  %d |  %d |  %d |  %d |  %d\n" % [values[:mp], values[:w], values[:d], values[:l], values[:p]]
    end
    t
  end
end
