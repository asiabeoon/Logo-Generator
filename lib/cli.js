const inquirer = require("inquirer")
const SVG =require('./svg')
const {Circle,Square,Triangle} = require('./shapes')
const {writeFile} = require('fs/promises')

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

module.exports=CLI


