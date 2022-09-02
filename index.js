// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        type: 'list',
        message: 'Select which license this project will use: ',
        name: 'license',
        choices: ['MIT', 'CC0 1.0', 'Apache 2.0']
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
    .prompt(data)
    .then((answers) => {
        console.log(answers);
        const readMeContent = generateMarkdown(answers);

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