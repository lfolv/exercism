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
      .sort
      .map { |grade, students| {grade: grade, students: students} }
  end

  private

  attr_reader :grades
end
