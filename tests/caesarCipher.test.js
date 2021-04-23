const caesar = require("../src/caesarCipher.js");

test("encrypts character A to B", () => {
  expect(caesar("A", 1)).toBe("B");
});

test("encryption works with a higher key", () => {
  expect(caesar("A", 5)).toBe("F");
});

test("accepts the character Z and wraps to beginning of alphabet", () => {
  expect(caesar("Z", 1)).toBe("A");
});

test("wraps alphabet with a higher key", () => {
  expect(caesar("X", 5)).toBe("C");
});

test("accepts more than 1 character", () => {
  expect(caesar("ABC", 3)).toBe("DEF");
});

test("works for lower case letters", () => {
  expect(caesar("abc", 3)).toBe("def");
});

test("wraps lower case letters", () => {
  expect(caesar("z", 2)).toBe("b");
});

test("works with a mix of lower and upper cases", () => {
  expect(caesar("AbCXyZ", 1)).toBe("BcDYzA");
});

test("keeps punctuation in place", () => {
  expect(caesar("Hello World!", 1)).toBe("Ifmmp Xpsme!");
});

test("Random Test", () => {
  expect(
    caesar(
      "I love to dance, sing, eat and watch movies. My mom thinks I'm lazy, she's right.",
      15
    )
  ).toBe(
    "X adkt id spcrt, hxcv, tpi pcs lpirw bdkxth. Bn bdb iwxczh X'b apon, hwt'h gxvwi."
  );
});
