const Triangle = require("../triangle.js");

describe("Triangle", () => {
  it("renders SVG correctly", () => {
    const mytriangle = new Triangle("green", "G", "white");
    const svgOutput = mytriangle.render();
    expect(svgOutput).toContain(">G<");
    expect(svgOutput).toContain('fill="white"');
  });
});
