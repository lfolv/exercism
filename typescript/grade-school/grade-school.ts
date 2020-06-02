class GradeSchool {
  studentRoster() {
    return new Map()
  }

  addStudent(name: string, grade: number) {
    console.log(name, grade)
  }

  studentsInGrade(grade: number): string[] {
    console.log(grade)

    return []
  }
}

export default GradeSchool