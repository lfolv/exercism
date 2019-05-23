export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  push(value) {
    const node = createNode({value, previos: this.tail})
    if (!this.head) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node
  }

  unshift(value) {
    const node = createNode({ value, next: this.head })
    if (!this.tail) {
      this.tail = node
    } else {
      this.head.previos = node
    }
    this.head = node
  }

  pop() {
    const { value } = this.tail
    this.tail = this.tail.previos
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
