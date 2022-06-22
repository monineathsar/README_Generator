// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Your-Project-Title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "Description",
        message: "What is this project about? Give a detailed description of your project."
    },
    {
        type: "input",
        name: "Installation",
        message: "Please provide step-by-step description of how to get the developement enviornment running."
    },
    {
        type: "input",
        name: "Usage",
        message: "Please provide instructions and examples for use of your project."
    },
    {
        type: "input",
        name: "License",
        message: "Let other developers know what they can and cannot do with your project."
    },
    {
        type: "input",
        name: "Contribution",
        message: "Give some guidelines to let other developers know how they can contribute to your project."
    },
    {
        type: "input",
        name: "Test Instructions",
        message: "Write some tests for your application. Then provide examples on how to run them here."
    },
    {
        type: "input",
        name: "Questions",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "Questions",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
