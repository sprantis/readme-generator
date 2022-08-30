// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: "Enter in your project's description",
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter in your installation details',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter in your usage information',
        name: 'usage',
    }, 
    {
        type: 'input',
        message: 'Provide which license this project will use',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter in details on how to contribute',
        name: 'contributing',
    }, 
    {
        type: 'input',
        message: 'Enter in information on testing',
        name: 'tests',
    } 
]

const generateReadMe = ({projectTitle, description, installation, usage, license, contributing, tests, questions}) => 
`
# ${projectTitle}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
${questions}
`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
  .prompt(data)
  .then((answers) => {
    console.log(answers);
    const readMeContent = generateReadMe(answers);

    fs.writeFile(fileName, readMeContent, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md', questions)
}

// Function call to initialize app
init();
