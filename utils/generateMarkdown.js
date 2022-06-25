// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  return `
  # ${userInput.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${userInput.description}

  ## Installation
  Below are instructions on how to install the application.
  ${userInput.installation}

  ## Usage
  ${userInput.usage}

  ## License
  ${userInput.license}

  ## Contribution
  Below is a general guideline on how to contribute to this project.
  ${userInput.contribution}

  ## Tests
  Below is the step-by-step description of how to get the development environment running.
  ${userInput.tests}

  ## Questions
  If you have any questions about the project, you can check out the repo on my GitHub or contact me by the email provided below.
  - GitHub: https://github.com/${userInput.username}
  - email: ${userInput.email}

`
};

module.exports = generateMarkdown;
