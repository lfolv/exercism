export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  push(value) {
    const node = {value, previos: this.tail}
    if (!this.head) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node
  }

  unshift(value) {
    const node = { value, next: this.head }
    if (!this.tail) {
      this.tail = node
    } else {
      this.head.previos = node
    }
    this.head = node
  }

  pop() {
    const { value } = this.tail
    if (this.head == this.tail) {
      this.head = null
    }
    this.tail = this.tail.previos
    return value
  }

  shift() {
    const { value } = this.head
    if (this.tail == this.head) {
      this.tail = null
    }
    this.head = this.head.next
    return value
  }

  count(node = this.head, length = 0) {
    if (node) {
      return this.count(node.next || null, length + 1)
    }

    return length
  }

  delete(value) {
    let current = this.head

    while(current.value !== value) {
      current = current.next
      if (!current) { return }
    }

    if (current === this.head && current === this.tail) {
      this.head = null
      this.tail = null
    }
    else if (current === this.head) {
      this.head = current.next
      this.head.previos = null
    } else if (current === this.tail) {
      this.tail = current.previos
      this.tail.next = null
    } else {
      current.previos.next = current.next
      current.next.previos = current.previos
    }
  }
}
