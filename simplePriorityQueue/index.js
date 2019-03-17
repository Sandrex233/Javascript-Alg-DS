// Implement a Priority Queue
// Hint: Use the built in sort() array method to reorganize priority Queue
// after enqueueing and dequeueing
// Hint 2: You can use the Array method of shift() to remove the first item of an Array
// for Dequeueing.

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue() {}
  dequeue() {}
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

describe("Enqueue", () => {
  it("pushes Object with 'val' and 'priority' properties into Priority Queue", () => {
    let emergencyRoom = new PriorityQueue();
    emergencyRoom.enqueue("glass in foot", 3);
    assert.equal(emergencyRoom.values[0].val, "glass in foot");
    assert.equal(emergencyRoom.values[0].priority, 3);
  });
  it("correctly puts higher priority injuries at top/front of Priority Queue", () => {
    let emergencyRoom = new PriorityQueue();
    emergencyRoom.enqueue("common cold", 5);
    emergencyRoom.enqueue("gunshot wound", 1);
    emergencyRoom.enqueue("high fever", 4);
    emergencyRoom.enqueue("broken arm", 2);
    emergencyRoom.enqueue("glass in foot", 3);
    assert.equal(emergencyRoom.values[0].val, "gunshot wound");
    assert.equal(emergencyRoom.values[1].val, "broken arm");
    assert.equal(emergencyRoom.values[2].val, "glass in foot");
    assert.equal(emergencyRoom.values[3].val, "high fever");
    assert.equal(emergencyRoom.values[4].val, "common cold");
  });
});

describe("Dequeue", () => {
  it("returns the dequeued Object and correctly sets Priority Queue", () => {
    let emergencyRoom = new PriorityQueue();
    emergencyRoom.enqueue("common cold", 5);
    emergencyRoom.enqueue("gunshot wound", 1);
    emergencyRoom.enqueue("high fever", 4);
    emergencyRoom.enqueue("broken arm", 2);
    emergencyRoom.enqueue("broken foot", 3);
    assert.equal(emergencyRoom.dequeue().val, "gunshot wound");
    assert.equal(emergencyRoom.dequeue().val, "broken arm");
    assert.equal(emergencyRoom.dequeue().val, "broken foot");
    assert.equal(emergencyRoom.dequeue().val, "high fever");
    assert.equal(emergencyRoom.dequeue().val, "common cold");
    assert.deepEqual(emergencyRoom.values, []);
  });
});

mocha.run();
