const inquirer = require("inquirer")

const questions = [{
    name: "shapeChoice",
    type: "list",
    message: "Pick a shape:",
    choices: ["circle", "triangle", "square"]
},
{
    name: "text",
    type: "input",
    message: "Picktext for your shape:",
    validate: function (userAnswer){
        if(userAnswer.length > 3){
            return "YOU MUST ENTER ONLY THREE CHARACTERS"
        }
        return true
    }
},
{
    name: "textColor",
    type: "input",
    message: "Pick a color for your text",
},
{
    name: "shapeColor",
    type: "input",
    message: "Put a shape color for your svg",
}]

const askQuestions = async () => {
    try {
        const answers = await inquirer.prompt(questions)
        return answers
    } catch (error) {
        console.log(error)
    }
}


const main = async() => {
    var userInput = await askQuestions()
    console.log(userInput)
    switch(userInput.shapeChoice){
        case "circle":
            writeToFile(new Circle(userInput.text, userInput.textColor,userInput.shapeColor).renderSVG())
    }


}

const writeToFile = (textToWrite){
    console.log(textToWrite)
}

main()
// inquirer.prompt(questions).then(answers => {
//     console.log(answers)
// }).catch(error => console.log(error))
