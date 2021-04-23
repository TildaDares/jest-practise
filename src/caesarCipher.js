const caesar = (string, key) => {
  if (key < 0) return caesar(string, key + 26);

  let encryptedString = "";
  for (let i = 0; i < string.length; i++) {
    let code = string[i].charCodeAt();
    if (string[i].match(/[a-z]/i)) {
      if (code + key > lastLetterCode(code)) {
        let lastLetter = lastLetterCode(code);
        let shift = key - (lastLetter - code);
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
