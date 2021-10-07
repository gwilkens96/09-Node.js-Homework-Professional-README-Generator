// TODO: Include packages needed for this application
const inquirer ='inquirer'
const fs ='fs'
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description of your project.'
    },
    {
        type: 'input',
        name: 'table-of-contents',
        message: 'Please give your table of contents.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give instructions on how to install your project.'
    },
    {
        type: 'input',
        name: 'usage-info',
        message: 'Please give instructions and examples on how to use your project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list your collaborators, if any.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide examples on how to test your project.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();