class Node {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/

mocha.setup("bdd");
const { assert } = chai;

describe("push()", () => {
  it("updates length of double linked list", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    assert.equal(l.length, 1);
    l.push("B");
    assert.equal(l.length, 2);
  });
  it("adds node to end of empty list by correctly setting head and tail", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    assert.deepEqual(l.head, { val: "A", next: null, prev: null });
    assert.deepEqual(l.tail, { val: "A", next: null, prev: null });
  });
  it("adds node to end of non empty list, next and prev properties set correctly", () => {
    const l = new DoubleLinkedList();
    l.push(2);
    l.push(4);
    assert.equal(l.tail.val, 4);
    assert.equal(l.tail.prev.val, 2);
    assert.equal(l.tail.prev.next.val, 4);
  });
});

describe.skip("pop()", () => {
  it("does nothing on empty list", () => {
    const l = new DoubleLinkedList();
    assert.isNotOk(l.pop());
    assert.equal(l.length, 0);
  });
  it("removes last node on list of length 1 by resetting head, tail, and length.", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    l.pop();
    assert.isNotOk(l.head);
    assert.isNotOk(l.tail);
    assert.equal(l.length, 0);
  });
  it("removes and returns last node. Updates 'prev' and 'next' properties on removed node and on the new tail", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    l.push("B");
    l.push("C");
    const removedNode = l.pop();

    assert.equal(l.length, 2);
    assert.equal(l.tail.val, "B");
    assert.isNotOk(l.tail.next);

    assert.equal(removedNode.val, "C");
    assert.isNotOk(removedNode.prev);
  });
});

describe.skip("shift()", () => {
  it("does nothing on empty list.", () => {
    const l = new DoubleLinkedList();
    assert.isNotOk(l.shift());
    assert.equal(l.length, 0);
  });
  it("removes head on list of length 1 by resetting head, tail, and length of linked list.", () => {
    const l = new DoubleLinkedList();
    l.push(2);
    l.shift();
    assert.isNotOk(l.head);
    assert.isNotOk(l.tail);
    assert.equal(l.length, 0);
  });
  it("removes and returns head of linked list. Upddates length of linked list. Updates 'next' and 'prev' properties of removed node and nodes on linked list", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    l.push("B");
    l.push("C");
    const removedNode = l.shift();
    assert.equal(l.length, 2);

    assert.equal(removedNode.val, "A");
    assert.isNotOk(removedNode.next);

    assert.equal(l.head.val, "B");
    assert.isNotOk(l.head.prev);
  });
});

describe.skip("unshift()", () => {
  it("adds node to start of empty list by setting head, tail, and length correctly.", () => {
    const l = new DoubleLinkedList();
    l.unshift("A");
    assert.equal(l.head.val, "A");
    assert.equal(l.tail.val, "A");
    assert.equal(l.length, 1);
  });
  it("adds node to start of non-empty list. Length of list updated, 'next' and 'prev' properties of nodes updated.", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    l.push("B");
    l.unshift("C");
    assert.equal(l.head.val, "C");
    assert.equal(l.head.next.val, "A");
    assert.equal(l.head.next.prev.val, "C");
  });
});

describe.skip("get()", () => {
  it("Returns falsy value on negative or out of bounds index.", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    assert.equal(l.head.val, "A");
    assert.isNotOk(l.get(-1));
    assert.isNotOk(l.get(100));
  });
  it("Returns node at given index.", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    l.push("B");
    l.push("C");
    l.push("D");
    l.push("E");
    const node = l.get(3);
    assert.equal(node.val, "D");
  });
});

describe.skip("set()", () => {
  it("returns false on out of bounds or negative index.", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    assert.equal(l.set(10, "meow"), false);
    assert.equal(l.set(-10, "meow"), false);
  });
  it("updates Node and returns true.", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    l.push("B");
    assert.equal(l.set(1, "meow"), true);
    assert.equal(l.tail.val, "meow");
  });
});

describe.skip("insert()", () => {
  it("returns false on index greater than length or negative index.", () => {
    const l = new DoubleLinkedList();
    assert.equal(l.insert(1, "meow"), false);
    assert.equal(l.insert(-10, "meow"), false);
  });
  it("inserts Node correctly for beginning or end of list.", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    l.insert(0, "meow");
    assert.equal(l.head.val, "meow");
    assert.equal(l.head.next.val, "A");
    assert.equal(l.head.next.prev.val, "meow");

    l.insert(2, "woof");
    assert.equal(l.tail.val, "woof");
    assert.equal(l.tail.prev.val, "A");
    assert.equal(l.tail.prev.next.val, "woof");
  });
  it("inserts Node correctly at given index. Returns true. Increases length of List. Correctly sets 'next' and 'prev' properties of nodes on List", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    l.push("B");
    const res = l.insert(1, "C");
    const fetchedNode = l.get(1);

    assert.equal(fetchedNode.val, "C");
    assert.equal(fetchedNode.next.val, "B");
    assert.equal(fetchedNode.prev.val, "A");

    assert.equal(l.head.next.val, "C");
    assert.equal(l.tail.prev.val, "C");
    assert.equal(l.length, 3);
    assert.equal(res, true);
  });
});

describe.skip("remove()", () => {
  it("returns falsy value on out of bounds or negative index.", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    assert.isNotOk(l.remove(1));
    assert.isNotOk(l.remove(-1));
  });
  it("removes node correctly for beginning or end of list.", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    l.push("B");
    l.remove(0);
    assert.equal(l.head.val, "B");
    l.push("C");
    l.remove(1);
    assert.equal(l.tail.val, "B");
  });
  it("returns removedNode. Decreases length of list. Updates 'next' and 'prev' properties of nodes correctly", () => {
    const l = new DoubleLinkedList();
    l.push("A");
    l.push("B");
    l.push("C");

    const removedNode = l.remove(1);
    assert.isNotOk(removedNode.next);
    assert.isNotOk(removedNode.prev);
    assert.equal(removedNode.val, "B");

    assert.equal(l.length, 2);
    const head = l.get(0);
    const tail = l.get(1);
    assert.equal(head.next.val, "C");
    assert.equal(tail.prev.val, "A");
  });
});

mocha.run();
