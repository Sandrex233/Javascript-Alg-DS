// --- Directions
// Make a function that looks through an array of objects (first argument) and
// returns an array of all objects that have matching name and value pairs
// (second argument). Each name and value pair of the source object has to be
// present in the object from the collection if it is to be included in the
// returned array.
// --- Examples:
// whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }) --> []
// whatIsInAName([{ "apple": 1, "bat": 2 }], { "apple": 1 }) --> [{ "apple": 1, "bat": 2 }]

function whatIsInAName(collection, source) {}

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

describe("whatIsInAName()", () => {
  it("works.", () => {
    const res1 = whatIsInAName(
      [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
      ],
      { last: "Capulet" }
    );
    const res2 = whatIsInAName(
      [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }],
      { apple: 1 }
    );
    const res3 = whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 });

    assert.deepEqual(res1, [{ first: "Tybalt", last: "Capulet" }]);
    assert.deepEqual(res2, [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]);
    assert.deepEqual(res3, []);
  });
});

mocha.run();
