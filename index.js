// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'Title',
    question: "What is the title of your project?"
},

{
    type: 'input',
    name: 'Description',
    question: 'Provide a description of your project.'

},

{
    type: 'input',
    name: 'TableOfContents',
    question: 'Click to be taken to the table of contents.'
},

{
    type: 'input',
    name: 'Installation',
    question: 'Provide installation instructions for your project.'
},

{
    type: 'input',
    name: 'Usage',
    question: 'Provide the usage information for your project.'
},

{
    type: 'input',
    name: 'Contributing',
    question: 'Provide the contribution guidelines.'
},

{
    type: 'input',
    name: 'Tests',
    question: 'We will figure out why we need tests.'
},

{
    type: 'input',
    name: 'Questions',
    question: 'What is your GitHub username? ',
    question: 'Enter your email address? '
},



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
