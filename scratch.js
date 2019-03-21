function anagrams(stringA, stringB) {
  const charCountObjA = stringA
    .replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase()
    .split("")
    .reduce((obj, char) => {
      obj[char] = obj[char] + 1 || 1;
      return obj;
    }, {});

  const charCountObjB = stringB
    .replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase()
    .split("")
    .reduce((obj, char) => {
      obj[char] = obj[char] + 1 || 1;
      return obj;
    }, {});

  if (Object.keys(charCountObjA).length !== Object.keys(charCountObjB).length) {
    return false;
  }

  for (key in charCountObjA) {
    if (charCountObjA[key] !== charCountObjB[key]) {
      return false;
    }
  }

  return true;
}
