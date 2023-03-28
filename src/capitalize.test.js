const capitalize = require("./capitalize")

test('capitalizes first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });