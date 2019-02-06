// Create a 'weave' function that takes two queues as
// arguments and combines the contents of both into a new, third queue.
// The third queue should have alternating content of
// the two queues, like a zipper. weave() should also handle
// queues of different lengths without inserting 'undefined'
// if one of the two queues provided "runs out" of elements.
// --- Example
// const one = new Queue();
// one.enqueue(1);
// one.enqueue(2);
// one.enqueue(3);
// one.enqueue(4);
// const two = new Queue();
// two.enqueue("one");
// two.enqueue("two");

// const result = weave(one, two);
// expect(result.dequeue()).toEqual(1);
// expect(result.dequeue()).toEqual("one");
// expect(result.dequeue()).toEqual(2);
// expect(result.dequeue()).toEqual("two");
// expect(result.dequeue()).toEqual(3);
// expect(result.dequeue()).toEqual(4);

class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(record) {
    this.data.unshift(record);
  }

  dequeue() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

function weave(sourceOne, sourceTwo) {}

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

describe("Weaving with Queues", () => {
  it("should weave two queues together", () => {
    const one = new Queue();
    one.enqueue(1);
    one.enqueue(2);
    one.enqueue(3);
    const two = new Queue();
    two.enqueue("one");
    two.enqueue("two");
    two.enqueue("three");

    const result = weave(one, two);
    assert.equal(result.dequeue(), 1);
    assert.equal(result.dequeue(), "one");
    assert.equal(result.dequeue(), 2);
    assert.equal(result.dequeue(), "two");
    assert.equal(result.dequeue(), 3);
    assert.equal(result.dequeue(), "three");
    assert.equal(result.dequeue(), undefined);
  });
  it("can combine two queues of different lengths", () => {
    const one = new Queue();
    one.enqueue(1);
    one.enqueue(2);
    one.enqueue(3);
    one.enqueue(4);
    const two = new Queue();
    two.enqueue("one");
    two.enqueue("two");

    const result = weave(one, two);
    assert.equal(result.dequeue(), 1);
    assert.equal(result.dequeue(), "one");
    assert.equal(result.dequeue(), 2);
    assert.equal(result.dequeue(), "two");
    assert.equal(result.dequeue(), 3);
    assert.equal(result.dequeue(), 4);
    assert.equal(result.dequeue(), undefined);
  });
});

mocha.run();
