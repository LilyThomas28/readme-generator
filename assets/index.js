// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: import the generateMarkdown function from utils/generateMarkdown.js
// fs.readFile('./utils/generateMarkdown.js', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// );
const generateMarkdown = require('./utils/generateMarkdown.js');
//create variable that holds prompt/inquirer questions
const questions = inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'If you had any collabators or used key code or information list them here.',
      name: 'credits',
    },
    {
      type: 'input',
      message: 'Please give your License here.',
      name: 'license',
    },
    {
      type: 'input',
      message: 'If your project has a lot of features, list them here.',
      name: 'features',
    },
    {
      type: 'input',
      message: 'If you created an application or package and would like other developers to contribute it, enter the url.',
      name: 'contribute',
    },
  ])
  // create writefile function
  function writeFile(file, data) {
    fs.writeFile(file, data, (err) => {
        err ? console.log(err) : console.log('Success!')
    });
};

// TODO: Create a function to initialize app??
function init() {
    questions
    .then(function (input) {
        console.log(input)
        writeFile("README.md", generateMarkdown(input));
    })
}

// Function call to initialize app
init();
