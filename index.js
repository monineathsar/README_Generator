// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is this project about? Give a detailed description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide step-by-step description of how to get the developement enviornment running."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for use of your project."
    },
    {
        type: "input",
        name: "license",
        message: "Let other developers know what they can and cannot do with your project."
    },
    {
        type: "input",
        name: "contribution",
        message: "Give some guidelines to let other developers know how they can contribute to your project."
    },
    {
        type: "input",
        name: "tests",
        message: "Write some tests for your application. Then provide examples on how to run them here."
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md file was generated successfully!")
    })
}
const writeFileAsync = util.promisify(writeToFile); 

// TODO: Create a function to initialize app
async function init() {
    const userInput = await inquirer.prompt(questions);
    const markdown = generateMarkdown(userInput);

    await writeFileAsync("README.md", markdown);
}
// Function call to initialize app
init();
