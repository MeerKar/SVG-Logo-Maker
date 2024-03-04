const Square = require("../square.js");
describe("Square", () => {
  it("renders SVG correctly", () => {
    const mysquare = new Square("#2596be", "S", "white");
    const svgOutput = mysquare.render();
    expect(svgOutput).toContain(">S<");
    expect(svgOutput).toContain('fill="white"');
  });
});
