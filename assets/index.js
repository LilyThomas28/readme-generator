// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: import the generateMarkdown function from utils/generateMarkdown.js
// fs.readFile('./utils/generateMarkdown.js', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// );
const generateMarkdown = require('./utils/generateMarkdown.js');

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
  ])
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
