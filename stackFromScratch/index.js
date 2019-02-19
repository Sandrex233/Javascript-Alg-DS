// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop'. Adding an element to the stack should
// store it until it is removed. Hint use a Singly Linked List.
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
    this.head = null;
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
    assert.equal(s.length, 2);
    assert.equal(s.head.value, "B");
  });
  it("pop() returns removed node and updates length of stack.", () => {
    const s = new Stack();
    s.push("A");
    assert.equal(s.pop().value, "A");
    assert.equal(s.length, 0);
    s.push("B");
    assert.equal(s.pop().value, "B");
  });
  it("pop() returns null and does not change length on empty stack.", () => {
    const s = new Stack();
    assert.equal(s.pop(), null);
    assert.equal(s.length, 0);
  });
  it("follows LIFO / FILO behavior.", () => {
    const browserHistory = new Stack();
    browserHistory.push("www.youtube.com");
    browserHistory.push("www.youtube.com/login/KodingKevin");
    browserHistory.push("www.youtube.com/watch/cats");
    browserHistory.push("www.youtube.com/watch/cats_meowing");

    //Pressing the back button on my browser
    assert.equal(
      browserHistory.pop().value,
      "www.youtube.com/watch/cats_meowing"
    );

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
