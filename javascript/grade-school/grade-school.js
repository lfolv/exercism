export class GradeSchool {
  constructor() {
    this.grades = new Proxy({}, {
      get: function (object, property) {
        return object.hasOwnProperty(property) ? object[property] : []
      }
    })
  }

  add(student, grade) {
    this.grades[grade] = [...this.grades[grade], student].sort()
  }

  roster() {
    return Object.keys(this.grades)
      .reduce((object, key) => ({
        ...object,
        [key]: [...this.grades[key]]
      }), {})
  }

  grade(g) {
    return this.grades[g]
  }
}
