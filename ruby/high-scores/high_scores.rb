class HighScores
  attr_reader :scores

  def initialize(scores)
    @scores = scores
  end

  def latest
    scores.last
  end

  def personal_best
    scores.max
  end

  def personal_top
    scores.max 3
  end

  def report
    "Your latest score was #{latest}. #{report_details}"
  end

  private

  def report_details
    if personal_best == latest
      "That's your personal best!"
    else
      difference = personal_best - latest
      "That's #{difference} short of your personal best!"
    end
  end
end