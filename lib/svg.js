// CHAT GPT Commentary: this code defines a class called SVG that has a constructor function that initializes two properties: text and shape. 
// The render method returns an SVG tag that includes two placeholder variables (${this.shape} and ${this.text}) that will be replaced dynamically
//  when the render method is called. 
class SVG {
    constructor () {
        this.text = ""
        this.shape = ""
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }

// CHAT GPT Commentary: This code defines a class with two methods: setText and setShape. 
// The setText method takes in a char and a color parameter, checks if the length of char is greater than 3 characters, 
// and throws an error if it is. It then uses string interpolation to set a text property on the class,
//  which will output SVG text with the specified color and char values.
    setText (char, color) {
        if (char.length>3) { 
            throw new Error('text must not be longer than 3 characters')
        }
        // look up string interpolation
this.text= `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${char}</text>`
    }
    setShape (shape){
        this.shape=shape.render()
    }
}

// module.exports is an object that is used to export a module or a piece of code from one file to another. 
module.exports =SVG


