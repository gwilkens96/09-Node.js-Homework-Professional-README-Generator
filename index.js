// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');
const choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
inquirer
  .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description of your project:'
    },
    {
        type: 'number',
        name: 'table-of-contents',
        message: 'How many sections in your table of contents?'
    },
    {
        type: 'input',
        name: 'sections',
        message: 'What are the titles of your sections separated by commas?'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give instructions on how to install your project:'
    },
    {
        type: 'input',
        name: 'usage-info',
        message: 'Please give instructions and examples on how to use your project:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list your collaborators, if any:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide examples on how to test your project:'
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'Please check all licenses used in your project:',
        choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib']
    }
  ]).then((answers) => {
      console.log(JSON.stringify(answers));
  });
        

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();