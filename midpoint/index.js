// Return the 'middle' node of a linked list.
// Given a singly linked list, find middle of the linked list. If there
// are even nodes, fetch the highest node of the first half. For
// example, if given linked list is 1->2->3->4 then output should be 2.
// Do not fetch the length of the linked list in the implementation.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  unshift(data) {
    this.head = new Node(data, this.head);
    this.length++;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }
  clear() {
    this.head = null;
    this.length = 0;
  }
  shift() {
    if (this.head) {
      this.length--;
    }
    const originalHead = this.head;
    this.head = this.head ? this.head.next : null;
    return originalHead;
  }
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      return this.shift();
    }
    let node = this.head;
    const last = this.getLast();
    while (node.next !== last) {
      node = node.next;
    }
    node.next = null;
    this.length--;
    return last;
  }
  push(data) {
    if (!this.head) {
      return this.unshift(data);
    }
    this.getLast().next = new Node(data);
    this.length++;
  }
  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    }
    let node = this.head;
    let counter = 0;
    while (index !== counter) {
      node = node.next;
      counter++;
    }
    return node;
  }
  set(index, data) {
    if (!this.get(index)) {
      return false;
    }
    this.get(index).data = data;
    return true;
  }
  remove(index) {
    if (!this.get(index)) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    const removed = this.get(index);
    this.get(index - 1).next = removed.next;
    this.length--;
    return removed;
  }
  insert(index, data) {
    if (index > this.length || index < 0) {
      return false;
    }
    if (index === 0) {
      this.unshift(data);
      return true;
    }
    this.get(index - 1).next = new Node(data, this.get(index));
    this.length++;
    return true;
  }
  reverse() {
    let prev = null;
    let current = this.head;
    const size = this.length;
    for (let i = 0; i < size; i++) {
      const temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    this.head = prev;
  }
  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }
}

mocha.setup("bdd");
const { assert } = chai;

describe("Midpoint of Linked List", () => {
  it("Returns the middle node of list with odd number of nodes.", () => {
    const l = new LinkedList();
    l.push(1);
    l.push(2);
    l.push(3);
    l.push(4);
    l.push(5);
    assert.equal(midpoint(l).data, 3);
  });
  it("Returns the middle node of list with even number of nodes", () => {
    const l = new LinkedList();
    l.push(1);
    l.push(2);
    l.push(3);
    l.push(4);
    assert.equal(midpoint(l).data, 2);
  });
});

mocha.run();
