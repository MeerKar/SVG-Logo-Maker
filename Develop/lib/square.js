const Shape = require("./shape.js");

class Square extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${this.color}"/>
    <text x="100" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>   
</svg>`;
  }
}
module.exports = Square;
