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
    this.deleteNode(this.tail)
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

  delete(value, node = this.head) {
    if (!node) {
      return
    }

    if (node.value === value) {
      this.deleteNode(node)
    } else {
      this.delete(value, node.next || null)
    }
  }

  deleteNode(node) {
    if (node === this.head && node === this.tail) {
      this.head = null
      this.tail = null
    }
    else if (node === this.head) {
      this.head = node.next
      this.head.previos = null
    } else if (node === this.tail) {
      this.tail = node.previos
      this.tail.next = null
    } else {
      node.previos.next = node.next
      node.next.previos = node.previos
    }
  }
}
