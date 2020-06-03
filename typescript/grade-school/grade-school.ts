class GradeSchool {
  private grades: Map<number, string[]> = new Map()

  studentRoster() {
    const roster = new Map<string, string[]>()

    for (const [grade, students] of this.grades) {
      const key = grade.toString()
      roster.set(key, [...students])
    }

    return roster
  }

  addStudent(name: string, grade: number) {
    const students = this.grades.get(grade) || []
    this.grades.set(grade, [...students, name].sort())
  }

  studentsInGrade(grade: number) {
    return [...this.grades.get(grade) || []]
  }
}

export default GradeSchool