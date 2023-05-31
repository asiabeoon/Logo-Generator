class SVG {
    constructor () {
        this.text = ""
        this.shape = ""
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }

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

module.exports =SVG


