class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}

mocha.setup("bdd");
const { assert } = chai;

function createTestHashTable() {
  let ht = new HashTable(17);
  ht.set("maroon", "#800000");
  ht.set("yellow", "#FFFF00");
  ht.set("olive", "#808000");
  ht.set("salmon", "#FA8072");
  ht.set("lightcoral", "#F08080");
  ht.set("mediumvioletred", "#C71585");
  ht.set("plum", "#DDA0DD");
  ht.set("dupe", "#DDA0DD");
  return ht;
}

describe("Hash Table", () => {
  it("set() works and uses seperate-chaining to avoid collisions.", () => {
    let ht = createTestHashTable();
    assert.isOk(ht.keyMap[0]);
    assert.isNotOk(ht.keyMap[2]);
    assert.equal(ht.keyMap[8].length, 2);
  });

  it("get() works and returns the value of key, or falsy value on invalid key.", () => {
    let ht = createTestHashTable();
    assert.equal(ht.get("yellow"), "#FFFF00");
    assert.isNotOk(ht.get("woofwoof"));
  });
  it("keys() returns an array of all key values.", () => {
    let ht = createTestHashTable();
    assert.deepEqual(ht.keys(), [
      "plum",
      "salmon",
      "dupe",
      "maroon",
      "yellow",
      "olive",
      "lightcoral",
      "mediumvioletred"
    ]);
  });
  it("values() returns an array of values with no dupes!", () => {
    let ht = createTestHashTable();
    assert.deepEqual(ht.values(), [
      "#DDA0DD",
      "#FA8072",
      "#800000",
      "#FFFF00",
      "#808000",
      "#F08080",
      "#C71585"
    ]);
  });
});

mocha.run();
