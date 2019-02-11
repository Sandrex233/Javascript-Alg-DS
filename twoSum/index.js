// --- Directions
// Given an array of numbers, return all pairs that add up to a given sum.
// Do not return duplicate pairs. For instance in example below you
// could return [0, 5] or [5, 0] as a result for first pair but NOT
// both.
// --- Examples:
// twoSum([7, 0, -4, 5, 2, 3], 5) -->  [[0, 5], [2, 3]]

function twoSum(arr, sum) {}

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

describe("twoSum()", () => {
  it("twoSum([7, 0, -4, 5, 2, 3], 5) works.", () => {
    const result = twoSum([7, 0, -4, 5, 2, 3], 5);
    const firstPair = result[0];
    const secondPair = result[1];

    assert.equal(result.length, 2);
    assert.equal(firstPair.length, 2);
    assert.equal(secondPair.length, 2);

    assert.isOk(firstPair.includes(0) && firstPair.includes(5));
    assert.isOk(secondPair.includes(3) && secondPair.includes(2));
  });

  it("twoSum([2], 4) works.", () => {
    assert.equal(twoSum([2], 4).length, 0);
  });
});

mocha.run();
