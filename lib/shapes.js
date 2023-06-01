// CHAT GPT Commentary: This code defines a class Shape with a constructor that initializes a color property.
//  It also defines a method setColor which sets the value of the color property.
class Shape {
    constructor(){
        this.color = " "
       
    }

    setColor (color) {
      this.color = color
    }
 
}
// CHAT GPT Commentary: # classes are defined-Circle, Square, and Triangle, which all inherit from Shape. 
// Each of these classes includes a render method that returns an SVG element with a particular shape (circle, square, or triangle) 
// and the color specified by the color property.
class Circle extends Shape {
    
    render(){
        return `<circle cx="150" cy="100" r="80"  fill="${this.color}"/>`
    }
}

class Square extends Shape {
    
  render(){
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}"/>`
  }
}
class Triangle extends Shape {
    
  render(){
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
  }
}
 
// module.exports exports the Circle, Square, and Triangle classes so that they can be used in other parts of the application.
module.exports = {Circle,Square,Triangle}




