// Create a Queue data structure using two stacks. The queue
// should have methods 'enqueue' and 'dequeue' which add / remove
// elements from the queue AND also maintain 'first-in first-out'
// The Queue should also have a 'peek' method that shows next item
// to be dequeued from Queue, but does NOT dequeue.
// --- Examples
//     const q = new Queue();
//     q.enqueue(1);
//     q.enqueue(2);
//     q.peek();  // returns 1
//     q.dequeue(); // returns 1
//     q.dequeue(); // returns 2

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
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
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Queue from Stacks", () => {
  it("dequeue() removes element from queue and returns removed element", () => {
    const q = new Queue();
    q.enqueue(1);
    assert.equal(q.dequeue(), 1);
    assert.equal(q.dequeue(), undefined);
  });
  it("Queue has behavior of first in first out", () => {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    assert.equal(q.dequeue(), 1);
    assert.equal(q.dequeue(), 2);
    assert.equal(q.dequeue(), 3);
    assert.equal(q.dequeue(), undefined);
  });
  it("peek() returns next element to be removed from Queue", () => {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    assert.equal(q.peek(), 1);
    assert.equal(q.dequeue(), 1);
    assert.equal(q.dequeue(), 2);
    assert.equal(q.dequeue(), undefined);
  });
});

mocha.run();
