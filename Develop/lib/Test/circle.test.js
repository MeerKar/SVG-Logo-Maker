const Circle = require("../circle.js");
describe("Circle", () => {
  it("renders SVG with correct text content and properties", () => {
    const mycircle = new Circle("#ca00ca", "V", "white");
    const svgOutput = mycircle.render();
    expect(svgOutput).toContain("<text");
    expect(svgOutput).toContain(">V<");
    expect(svgOutput).toContain('fill="white"');
  });
});
