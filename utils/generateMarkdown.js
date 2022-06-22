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
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  Below are instructions on how to install the application.
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution
  Below is a general guideline on how to contribute to this project.
  ${data.contribution}

  ## Tests
  Below is the step-by-step description of how to get the development environment running:
  ${data.tests}

  ## Questions
  If you have any questions about the project, you can check out the repo on GitHub or contact me by the email provided below.
  ${data.github}
  ${data.email}

`;
};

module.exports = generateMarkdown;
