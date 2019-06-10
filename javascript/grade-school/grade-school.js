export class GradeSchool {
  constructor() {
    this.grades = {}
  }

  add(student, grade) {
    this.grades[grade] = [...this.students(grade), student].sort()
  }

  roster() {
    return Object.keys(this.grades)
      .reduce((object, key) => ({
        ...object,
        [key]: [...this.grades[key]]
      }), {})
  }

  grade(g) {
    return [...this.students(g)]
  }

  students(grade) {
    return grade in this.grades ?
      this.grades[grade] :
      [];
  }
}
