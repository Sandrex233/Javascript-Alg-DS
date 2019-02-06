// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop'. Adding an element to the stack should
// store it until it is removed. Hint use a Singly Linked List. Only need this.first
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.size = 0;
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

describe("Stack from scratch", () => {
  it("push() adds elements to stack and updates size.", () => {
    const s = new Stack();
    s.push("A");
    s.push("B");
    assert.equal(s.size, 2);
    assert.equal(s.first.value, "B");
  });
  it("pop() returns removed node and updates size of stack.", () => {
    const s = new Stack();
    s.push("A");
    assert.equal(s.pop().value, "A");
    assert.equal(s.size, 0);
    s.push("B");
    assert.equal(s.pop().value, "B");
  });
  it("follows first in, last out.", () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    assert.equal(s.pop().value, 3);
    assert.equal(s.pop().value, 2);
    assert.equal(s.pop().value, 1);
  });
});

mocha.run();
