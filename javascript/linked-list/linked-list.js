export class LinkedList {
  constructor() {
    this.head = null
    this.last = null
  }

  push(value) {
    const node = createNode({value, previos: this.last})
    if (!this.head) {
      this.head = node
    } else {
      this.last.next = node
    }
    this.last = node
  }

  unshift(value) {
    const node = createNode({ value, next: this.head })
    if (!this.last) {
      this.last = node
    } else {
      this.head.previos = node
    }
    this.head = node
  }

  pop() {
    const { value } = this.last
    this.last = this.last.previos
    return value
  }

  shift() {
    const { value } = this.head
    this.head = this.head.next
    return value
  }

  count() {
    if (!this.head) {
      return 0
    }

    let c = 0
    let current = this.head
    while (current) {
      c++
      current = current.next
    }
    return c
  }
}

const createNode = ({ value = null, previos = null, next = null}) => ({
  value,
  previos,
  next
})
