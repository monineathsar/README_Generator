// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      return 'https://img.shields.io/badge/license-Apache%202.0-blue';
    case 'MIT':
      return 'https://img.shields.io/badge/license-MIT-blue';
    case 'GNU GPLv3':
      return 'https://img.shields.io/badge/license-GNU%20GPLv3-blue';
    case 'MPL 2.0':
      return 'https://img.shields.io/badge/license-MPL%202.0-blue';
    case 'The Unlicense':
      return 'https://img.shields.io/badge/license-The%20Unlicense-blue';
    case 'none':
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// str = "A"
//renderLicenseLink(str) = 'https://choosealicense.com/licenses/apache-2.0/'
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return 'https://choosealicense.com/licenses/apache-2.0/';
    case 'MIT':
      return 'https://choosealicense.com/licenses/mit/';
    case 'GNU GPLv3':
      return 'https://choosealicense.com/licenses/gpl-3.0/';
    case 'MPL 2.0':
      return 'https://choosealicense.com/licenses/mpl-2.0/';
    case 'The Unlicense':
      return 'https://choosealicense.com/licenses/unlicense/';
    case 'none':
      return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let link = renderLicenseLink(license);
  
  if (link != "") {
    return `
## License
The application is covered under following licensing.  For more information about the licensing, please visit the link below:
- [${license}](${link})`;
  }

  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  let licenseSection = renderLicenseSection(userInput.license);
  let createMarkdown =  `
# ${userInput.title} `;
  
  if (licenseSection != "") {
    createMarkdown += `![${userInput.license}](${renderLicenseBadge(userInput.license)})`;
  }

  let createToC = `
## Table of Contents`;
  createToC += `
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)`;

  if (licenseSection !== "") {
    createToC += `\n- [License](#license)`;
  }

  createMarkdown += createToC;
  createMarkdown += `
## Description
${userInput.description}

## Installation
Below are instructions on how to install the application.\n
${userInput.installation}

## Usage
${userInput.usage}`;

  createMarkdown += licenseSection;

  createMarkdown += `
## Contribution
Below is a general guideline on how to contribute to this project.\n
${userInput.contribution}

## Tests
Below is the step-by-step description of how to get the development environment running.\n
${userInput.tests}

## Questions
If you have any questions about the project, you can check out the repo on my GitHub or contact me by the email provided below.
- [GitHub Repo](https://github.com/${userInput.username}/${userInput.repoName})
- ${userInput.email}`

  return createMarkdown;
}

renderLicenseSection();
module.exports = generateMarkdown;
