class GradeSchool {
  private students: Map<string, number> = new Map()

  studentRoster() {
    const result = new Map<string, string[]>()

    for (const [name, grade] of this.students) {
      const key = grade.toString()
      const current = result.get(key) || []
      const names = [...current, name].sort()

      result.set(key, names)
    }

    return result
  }

  addStudent(name: string, grade: number) {
    this.students.set(name, grade)
  }

  studentsInGrade(grade: number) {
    return this.studentRoster().get(grade.toString()) || []
  }
}

export default GradeSchool