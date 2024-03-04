class Shape {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
  // Will be completed in each child shape class
  render() {
    throw new Error("Child class must implement a render() method.");
  }

  //Set Methods
  setColor(newColor) {
    this.color = newColor;
  }

  setText(newText) {
    this.text = newText;
  }

  setTextColor(newTextColor) {
    this.textColor = newTextColor;
  }

  // Get Methods
  getColor() {
    return this.color;
  }
  getText() {
    return this.text;
  }
  getTextColor() {
    return this.textColor;
  }
}

// Export the class
module.exports = Shape;
