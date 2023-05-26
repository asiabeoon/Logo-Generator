class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    renderSVG(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${this.render()}
        </svg>`
    }
}

class Circle extends Shape {
    constructor(text,textColor,shapeColor){
        super(text,textColor,shapeColor)
    }
    render(){
        return ` <circle cx="25" cy="75" r="20" stroke="red" fill="${this.shapeColor}" stroke-width="5"/>`
    }
}

const example = new Circle("AAA", "blue", "red")
console.log(example)


console.log(example.renderSVG())