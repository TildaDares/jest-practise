const caesar = (string, key) => {
  if (key < 0) return caesar(string, key + 26);

  let encryptedString = "";
  for (let i = 0; i < string.length; i++) {
    let code = string[i].charCodeAt();
    if (string[i].match(/[a-z]/i)) {
      if (code >= 65 && code <= 90) {

        // add the key to the code and then start from the top by subtracting a/A
        // and then mod by 26 which means a = 0, b = 1 e.t.c
        // and then add it to a/A to get the letter code
        // Use this https://gist.github.com/EvanHahn/2587465#gistcomment-2391301 if you ever forget
        encryptedString += String.fromCharCode((code + key - 65) % 26 + 65);
      } else {
        encryptedString += String.fromCharCode((code + key - 97) % 26 + 97);
      }
    } else {
      encryptedString += string[i];
    }
  }
  return encryptedString;
};

module.exports = caesar;
