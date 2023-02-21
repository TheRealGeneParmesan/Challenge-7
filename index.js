// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const readQuestions = [{
    type: 'input',
    name: 'title',
    question: "What is the title of your project?"
},

{
    type: 'input',
    name: 'description',
    question: "Provide a description of your project."

},

{
    type: 'input',
    name: 'installation',
    question: "What steps are needed to install your project?"
},

{
    type: 'input',
    name: 'usage',
    question: "Provide the usage information for your project."
},

{
    type: 'input',
    name: 'contributing',
    question: "Provide the contribution guidelines for your project."
},

{
    type: 'input',
    name: 'tests',
    question: "How will the tests run for your project?"
},

{
    type: 'input',
    name: 'github',
    question: "What is your GitHub username?"
},

{
    type: 'input',
    name: 'email',
    question: "What is your email address?"
},

{
    type: 'list',
    name: 'license',
    question: "Which license would you like to use?",
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
},

];

inquirer.prompt(readQuestions).then((answers) => {
    const { title, description, installation, usage, contributing, tests, github, email, license } = answers;

    const readMeFile = `# ${answers.title}


    ${answers.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)


## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

If you have additional questions you can contact me at ${answers.email}. Also if you want to check out a cool github page you can find me here: https://github.com/${answers.username}.

## License

This project is licensed under the ${answers.license} license.`;


    fs.writeFile('README.md', readMeFile, (err) => {
        if (err)
            console.log("error")
        else (console.log("yes"))
    });
})


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { 

// }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
