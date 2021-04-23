const capitalize = require("../src/capitalize.js");

test("returns string in title case", () => {
  expect(capitalize("today's a good day")).toBe("Today's a good day");
});
