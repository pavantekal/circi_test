const stringExport = require('./stringExport');

test("function should return the string passed as argument", () => {
    expect(stringExport("Hello World")).toBe("Hello World");
})