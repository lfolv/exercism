export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  count(node = this.head, length = 0) {
    if (node) {
      return this.count(node.next, length + 1)
    }

    return length
  }

  push(value) {
    const node = this.insertAfterNode(this.tail, value)
    if (!this.head) {
      this.head = node
    }
    this.tail = node
  }

  insertAfterNode(node, value) {
    const newNode = { value, previos: node, next: null }
    if (node) {
      node.next = newNode
    }
    return newNode
  }

  unshift(value) {
    const node = this.insertBeforeNode(this.head, value)
    if (!this.tail) {
      this.tail = node
    }
    this.head = node
  }

  insertBeforeNode(node, value) {
    const newNode = { value, previos: null, next: node }
    if (node) {
      node.previos = newNode
    }
    return newNode
  }

  pop() {
    const { value } = this.tail
    this.deleteNode(this.tail)
    return value
  }

  shift() {
    const { value } = this.head
    this.deleteNode(this.head)
    return value
  }

  delete(value, node = this.head) {
    if (!node) {
      return
    }

    if (node.value === value) {
      this.deleteNode(node)
    } else {
      this.delete(value, node.next)
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
