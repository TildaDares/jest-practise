const reverseString = require("../src/reverseString.js");

test("returns reversed string", () => {
  expect(reverseString("today's a good day")).toBe("yad doog a s'yadot");
});
