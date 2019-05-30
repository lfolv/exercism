export class GradeSchool {
  constructor() {
    this.grades = {}
  }

  add(student, grade) {
    this.grades[grade] = [...this.grades[grade] || [], student]
  }

  roster() {
    return this.grades
  }
}
