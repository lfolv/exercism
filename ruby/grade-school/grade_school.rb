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
    result = []
    grades.each_key do |grade|
      result << { grade: grade, students: students(grade)}
    end
    result
  end

  private

  attr_reader :grades
end
