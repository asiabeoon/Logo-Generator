# Logo-Generator
Generate a Logo from different shape, color and text options

## Directions
Object-oriented Programming Challenge: SVG Logo Maker
Your task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG fileLinks to an external site.. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.


## User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Instructions
Your application should use JestLinks to an external site. for running the unit tests and InquirerLinks to an external site. for collecting input from the user. The application will be invoked by using the following command:

node index.js
It is recommended that you start with a directory structure that looks like the following example:

.  
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions           
IMPORTANT
Make sure that you remove dist from the .gitignore file so that Git will track this folder and include it when you push up to your application's repository.

The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

## The following example test should pass:

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="b/>')

## Websites-Activities-Classes/Tutors
 Info to download json https://www.npmjs.com/package/package-json
 Object-Oriented Programming (OOP) Day 3 2:45 minutes into the video
 Activities-10-OOP-02 Challenge-Assets-circle.svg
 SVG Shape Types https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
Inquirer Documentation https://www.npmjs.com/package/inquirer
Do not change the test file, only work in index.js (and, there’s a package.json file… what do we immediately do when we see one? npm i to install it! And, remember, to run the test after we install we type npm run test. 
https://mochajs.org/#asynchronous-code

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>

<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
  <path d="M20,20 L180,20 M20,50 L180,50 M20,80 L180,80" stroke="grey" />

  <text dominant-baseline="auto" x="30" y="20">Auto</text>
  <text dominant-baseline="middle" x="30" y="50">Middle</text>
  <text dominant-baseline="hanging" x="30" y="80">Hanging</text>
</svg>