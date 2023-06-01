const inquirer = require("inquirer")
const SVG =require('./svg')
// requiring data from the shapes file
const {Circle,Square,Triangle} = require('./shapes')
//  importing the 'writeFile' function which will write data to a logo.svg file.
const {writeFile} = require('fs/promises')

// CHAT GPT Commentary: This code defines a CLI class that uses the inquirer package to prompt the user for input to generate an SVG logo. 
// The class imports three shapes (Circle, Square, and Triangle) from the 'shapes' module and the writeFile function from the 'fs/promises' module.
class CLI {
    run (){
        return inquirer.prompt([
            {
                name: "text",
                type: "input",
                message: "Pick text for your logo(must not be more than 3 characters):",
                validate: (text) => text.length <= 3 || "text must not be longer than 3 characters"
            },
            {
                name: "textColor",
                type: "input",
                message: "Pick a color for your text", 
            },
            {
                name: "shapeChoice",
                type: "list",
                message: "Pick a shape:",
                choices: ["circle", "triangle", "square"]  
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Put a shape color for your svg(standard color or hex code)",  
            }

        ])
        .then(({text,textColor,shapeChoice,shapeColor}) => {
            let shape;
            switch(shapeChoice){
                case "circle":
                    shape=new Circle()
                    break
                case "square":
                    shape=new Square()
                    break
                default:
                    shape=new Triangle()
                    break    
            }
            shape.setColor(shapeColor)
            const svg =new SVG()
            svg.setText(text,textColor)
            svg.setShape(shape)
            return writeFile('logo.svg', svg.render())
        })
    }
}

// module.exports is an object that is used to export the code above to a new file. 
module.exports=CLI


