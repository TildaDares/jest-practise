const caesar = (string, key) => {
  let encryptedString = "";
  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    if (charIsALetter(code)) {
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

const charIsALetter = (charCode) =>
  (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);

module.exports = caesar;
