export class GradeSchool {
  constructor() {
    this.grades = new Proxy({}, {
      get: function (object, property) {
        return object.hasOwnProperty(property) ? object[property] : []
      }
    })
  }

  add(student, grade) {
    this.grades[grade] = [...this.grades[grade], student]
  }

  roster() {
    return this.grades
  }

  grade(g) {
    return this.grades[g].sort()
  }
}
