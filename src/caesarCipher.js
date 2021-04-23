const caesar = (string, key) => {
  if (key < 0) return caesar(string, key + 26);

  let encryptedString = "";
  for (let i = 0; i < string.length; i++) {
    let code = string[i].charCodeAt();
    if (string[i].match(/[a-z]/i)) {
      if (code + key > lastLetterCode(code)) {
        let lastLetter = lastLetterCode(code);

        // get the number of shifts left after reaching the last alphabet (z/Z)
        // if w is 116 then (122 - 116) = 6
        // then the number of shifts left is the (key - 6)
        let shift = key - (lastLetter - code);

        // start from the character before the first alphabet and add the shifts left
        encryptedString += String.fromCharCode(lastLetter - 26 + shift);
      } else {
        encryptedString += String.fromCharCode(code + key);
      }
    } else {
      encryptedString += string[i];
    }
  }
  return encryptedString;
};

const lastLetterCode = (charCode) =>
  charCode >= 65 && charCode <= 90 ? 90 : 122;

module.exports = caesar;
