class School
  def initialize
    @grades = Hash.new { |hash, key| hash[key] = [] }
  end

  def students(grade)
    grades[grade].sort
  end

  def add(name, grade)
    grades[grade] << name
  end

  def students_by_grade
    grades.keys.sort.each_with_object([]) do |grade, result|
      result << { grade: grade, students: students(grade)}
    end
  end

  private

  attr_reader :grades
end
