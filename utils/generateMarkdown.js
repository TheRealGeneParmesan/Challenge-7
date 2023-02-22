// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return `![MIT](https://img.shields.io/badge/license-MIT-brightgreen)`
  }
  else if (license == 'GNU LGPLv3') {
    return `![GNU LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-brightgreen)`
  }
  else if (license == 'Apache 2.0') {
    return `![Apache 2.0](https://img.shields.io/badge/license-apache%202.0-brightgreen)`
  }
  else {
    return ``
  }

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection };
