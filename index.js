// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require('./utils/generateMarkdown')


// Creates an array of prompts for user to respond to in order to create README.

const readQuestions = [{
    type: 'input',
    name: 'title',
    message: "What is the title of your project?"
},

{
    type: 'input',
    name: 'description',
    message: "Provide a description of your project."

},

{
    type: 'input',
    name: 'installation',
    message: "What steps are needed to install your project?"
},

{
    type: 'input',
    name: 'usage',
    message: "Provide the usage information for your project."
},

{
    type: 'input',
    name: 'contributing',
    message: "Provide the contribution guidelines for your project."
},

{
    type: 'input',
    name: 'tests',
    message: "How will the tests run for your project?"
},

{
    type: 'input',
    name: 'username',
    message: "What is your GitHub username?"
},

{
    type: 'input',
    name: 'email',
    message: "What is your email address?"
},

{
    type: 'list',
    name: 'license',
    message: "Which license are you using?",
    choices: ['MIT', 'GNU LGPLv3', 'Apache 2.0', 'None'],
},

];

// The prompt takes the questions that are stored in the readQuestions array and then once the questions are answered they are passed to the .then promise. The answers are stored in the answers object.   

function init() {
    inquirer.prompt(readQuestions).then((answers) => {
        const { title, description, installation, usage, contributing, tests, username, email, license } = answers;

        // Here we create a read me file string that we use below to generate the README file. 

        const readMeFile = `## ${title}


    ${description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)


## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Tests

${tests}

## Questions

If you have additional questions you can contact me at ${email}. Also if you want to check out a cool github page you can find me here: https://github.com/${username}.

## License

${renderLicenseBadge(license)}

This project is licensed under the ${license} license.`;

        // Create a function to write README file
        fs.writeFile('./Final-Product/README.md', readMeFile, (err) => {
            if (err)
                console.log("error")
            else (console.log("success"))
        });
    })
}



// // Function call to initialize app
init();
