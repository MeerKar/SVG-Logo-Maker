const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/circle.js");
const Triangle = require("./lib/triangle.js");
const Square = require("./lib/square.js");

const writeSVGLogo = (data) => {
  let shape;

  if (data.shape === "Circle") {
    shape = new Circle(data.color, data.text, data.textColor);
  } else if (data.shape === "Square") {
    shape = new Square(data.color, data.text, data.textColor);
  } else {
    // Assuming 'Triangle' as the only other option
    shape = new Triangle(data.color, data.text, data.textColor);
  }

  // writeFile() function used to create SVG logo
  fs.writeFile("./logo.svg", shape.render(), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated logo.svg successfully.");
    }
  });
};
// Function to ask questions and create shape
inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "What shape would you like to create?",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: "color",
      message: "What color should the shape be?",
    },
    {
      type: "input",
      name: "text",
      message: "What text should the shape include?",
    },
    {
      type: "input",
      name: "textColor",
      message: "What color should the text be?",
    },
    {
      type: "input",
      name: "color",
      message: "What color should the shape be?",
      validate: (input) =>
        /^#[0-9A-F]{6}$/i.test(input) ||
        "Please enter a valid hex color (e.g., #123abc).",
    },
  ])
  .then(writeSVGLogo);
