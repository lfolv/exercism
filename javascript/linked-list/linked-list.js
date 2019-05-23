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

  unshift(value) {
    const node = createNode({ value, next: this.first })
    if (!this.last) {
      this.last = node
    } else {
      this.first.previos = node
    }
    this.first = node
  }

  pop() {
    const { value } = this.last
    this.last = this.last.previos
    return value
  }

  shift() {
    const { value } = this.first
    this.first = this.first.next
    return value
  }
}

const createNode = ({ value = null, previos = null, next = null}) => ({
  value,
  previos,
  next
})
