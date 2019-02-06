// For bubbleUp you can find parent index by doing Math.floor((idx - 1) / 2);
// For sinkDown you can find child indexes with (idx * 2 + 1) (idx * 2 + 2)
// Extra hint have insert and extractMax call bubbleUp and sinkDown respectively
class BinaryHeap {
  constructor() {
    this.values = [];
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

describe("insert()", () => {
  it("Works. Hint use a bubbleup helper method in same class.", () => {
    const BH = new BinaryHeap();
    BH.insert(41);
    BH.insert(39);
    BH.insert(33);
    BH.insert(18);
    BH.insert(27);
    BH.insert(12);
    BH.insert(55);
    assert.deepEqual(BH.values, [55, 39, 41, 18, 27, 12, 33]);
  });
});

describe.skip("extractMax()", () => {
  it("Works. Hint use a sinkDown helper method in same class.", () => {
    const BH = new BinaryHeap();
    BH.insert(41);
    BH.insert(39);
    BH.insert(33);
    BH.insert(18);
    BH.insert(27);
    BH.insert(12);
    BH.extractMax();
    assert.deepEqual(BH.values, [39, 27, 33, 18, 12]);
  });
});

mocha.run();
