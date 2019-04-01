class Tournament
  def self.tally(input)
    t = "Team                           | MP |  W |  D |  L |  P\n"
    input.split("\n").each do |line|
      team1, team2, match_result = line.split(";")
      t << "#{team1}             |  1 |  1 |  0 |  0 |  3\n"
      t << "#{team2}             |  1 |  0 |  0 |  1 |  0\n"
    end
    t
  end
end
