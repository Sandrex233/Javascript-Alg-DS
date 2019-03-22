// --- Directions
// Given a magazine of words and a ransom note, determine if it’s possible to “cut out”
// and create the ransom note from the magazine words. Word count matters!
// --- Examples:
// const magazine = "I love you";
// ransomNote('I love you', magazine) --> true
// ransomNote('I love you you', magazine) --> false
// ransomNote('I love you Kevin please marry me boss', magazine) --> false
function ransomNote(note, magazine) {}

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
const magazine = "I love you";

describe("Ransom Note", () => {
  it("Should return true", () => {
    assert.equal(ransomNote("I love you", magazine), true);
  });

  it("Should return false", () => {
    assert.equal(
      ransomNote("I love you Kevin please marry me boss", magazine),
      false
    );

    assert.equal(ransomNote("I love you you", magazine), false);
  });
});

mocha.run();
