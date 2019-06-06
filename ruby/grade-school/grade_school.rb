class School
  def initialize
    @grades = Hash.new { |hash, key| hash[key] = [] }
  end

  def students(grade)
    grades[grade]
  end

  def add(name, grade)
    grades[grade] << name
    grades[grade].sort!
  end

  def students_by_grade
    grades
      .keys
      .sort
      .each_with_object([])
      .map { |grade| { grade: grade, students: students(grade)} }
  end

  private

  attr_reader :grades
end
