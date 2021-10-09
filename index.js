// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');
const choices = require('inquirer/lib/objects/choices');
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
      message: 'Please give a brief description of your project:'
  },
  {
      type: 'input',
      name: 'installation',
      message: 'Please give instructions on how to install your project:'
  },
  {
      type: 'input',
      name: 'usageInfo',
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
      type: 'list',
      name: 'licenses',
      message: 'Please check the licence used in your project:',
      choices: ['Apache 2.0', 'BSD 3', 'GPL 3.0', 'MIT', 'none']
  },
  {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address:',
    },

];

        

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err){
            return console.log(err);
        }
        console.log('README successfully generated!');
        });
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readMePageContent = generateMarkdown(answers);
        console.log(readMePageContent);
    writeToFile('README.md', readMePageContent);
      });
}
// Function call to initialize app
init();