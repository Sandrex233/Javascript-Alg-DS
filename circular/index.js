// Create a function that detects if a linked list is circular by
// returning true or false
// --- Examples
// const l = new List();
// l.push("a");
// l.push("b");
// l.push("c");
// l.getLast().next = l.get(1);
// circular(l) --> true

function circular(list) {}

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
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)

mocha.setup("bdd");
const { assert } = chai;

describe("Circular Linked List", () => {
  it("returns true for circular linked lists", () => {
    const l = new LinkedList();
    l.push("a");
    l.push("b");
    l.push("c");
    l.getLast().next = l.getFirst();
    assert.equal(circular(l), true);
  });
  it("returns true for circular linked lists that does not point to head.", () => {
    const l = new LinkedList();
    l.push("a");
    l.push("b");
    l.push("c");
    l.getLast().next = l.get(1); // c points to b
    assert.equal(circular(l), true);
  });
  it("returns false for non-circular linked lists", () => {
    const l = new LinkedList();
    l.push("a");
    l.push("b");
    l.push("c");
    assert.equal(circular(l), false);
  });
});

mocha.run();
