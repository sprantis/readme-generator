// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project: ',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: "Enter your project's description: ",
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter your installation details: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: "Enter your project's usage information: ",
        name: 'usage',
    }, 
    {
        type: 'input',
        message: 'Select which license this project will use: ',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter details on how to contribute: ',
        name: 'contributing',
    }, 
    {
        type: 'input',
        message: 'Enter information on testing: ',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username: ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email: ',
        name: 'email',
    }  
]

const generateReadMe = ({projectTitle, description, installation, usage, license, contributing, tests, github, email}) => 
`
# ${projectTitle}

## Table of Contents
* [Description](#description)
* [Installation instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [License](#license)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [Questions](#questions)

## Description
${description}

## Installation Instructions
${installation}

## Usage Information
${usage}

## License
${license}

## Contribution Guidelines
${contributing}

## Test Instructions
${tests}

## Questions
Have any addition questions? Contact me!
&nbsp;  
GitHub: [${github}](https://github.com/${github})
&nbsp;
Email: ${email}
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
    writeToFile('README.md', questions);
}

// Function call to initialize app
init();
