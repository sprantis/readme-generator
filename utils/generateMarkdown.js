// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "MIT"){
    return "[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if(license == "CC0 1.0"){
    return "[License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)";
  } else if(license == "Apache 2.0") {
    return "[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else{
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "MIT"){
    return "(https://opensource.org/licenses/MIT)";
  } else if(license == "CC0 1.0"){
    return "(http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if(license == "Apache 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else{
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "MIT"){
    return "MIT";
  } else if(license == "CC0 1.0"){
    return "CC0 1.0";
  } else if(license == "Apache 2.0") {
    return "Apache 2.0";
  } else{
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  [!${renderLicenseBadge(data.license)}]${renderLicenseLink(data.license)}
  # ${data.projectTitle}

  ## Table of Contents
  * [Description](#description)
  * [Installation instructions](#installation-instructions)
  * [Usage Information](#usage-information)
  * [License](#license)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## License
  [${renderLicenseSection(data.license)}]${renderLicenseLink(data.license)}

  ## Contribution Guidelines
  ${data.contributing}

  ## Test Instructions
  ${data.tests}

  ## Questions
  Have any addition questions? Contact me!
  &nbsp;  
  GitHub: [${data.github}](https://github.com/${data.github})
  &nbsp;
  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;