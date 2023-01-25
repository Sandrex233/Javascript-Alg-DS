// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'

function capitalize(str) {
  // Method 1
  /* let myStr = str.toLowerCase().split(" ")
  let newStr = ""
  myStr.map(word => {
    newStr += word[0].toUpperCase() + word.slice(1) + " "
  })
  return newStr.trim() */

  // Method 2
  let newStr = str.toLowerCase().split(" ")
  let myStr = []
  for (let i = 0; i < newStr.length; i++) {
    myStr.push(newStr[i].substring(0, 1).toUpperCase() + newStr[i].substring(1))
  }
  return myStr.join(" ")
}


console.log(capitalize("sHoRt AnD sToUt"));
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

describe("Capitalization", () => {
  it("capitalizes the first letter of each word", () => {
    assert.equal(capitalize("I'm a little tea pot"), "I'm A Little Tea Pot");
  });
  it("lowercases the rest of the word", () => {
    assert.equal(capitalize("sHoRt AnD sToUt"), "Short And Stout");
  });
});

mocha.run();
