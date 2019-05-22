export class LinkedList {
  constructor() {
    this.first = null
    this.last = null
  }

  push(value) {
    const node = createNode({value, previos: this.last})
    if (!this.first) {
      this.first = node
    } else {
      this.last.next = node
    }
    this.last = node
  }
}

const createNode = ({ value = null, previos = null, next = null}) => ({
  value,
  previos,
  next
})
