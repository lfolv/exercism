class GradeSchool {
  private studends: Map<string, number>

  constructor() {
    this.studends = new Map()
  }

  studentRoster() {
    const result = new Map<string, string[]>()

    for (const [name, grade] of this.studends) {
      const key = grade.toString()
      const current = result.get(key) || []

      result.set(key, [...current, name])
    }

    return result
  }

  addStudent(name: string, grade: number) {
    this.studends.set(name, grade)
  }

  studentsInGrade(grade: number): string[] {
    return (this.studentRoster().get(grade.toString()) || []).sort()
  }
}

export default GradeSchool