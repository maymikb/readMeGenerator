// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![badge](https://img.shields.io/badge/LICENSE-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "MIT") {
    return "https://opensource.org/license/mit/"
  } else if(license == "Mozilla") {
    return "https://www.mozilla.org/en-US/MPL/2.0/"
  }
  
  else if(license == "Apache") {
    return "https://opensource.org/license/apache-2-0/"
  }
  
  
  else {
    return "No link found."
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `
## License
- This application is under ${license} license.
- Link: ${renderLicenseLink(license)}
`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Table of contents
- [Description](#description) 
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)

## Description 
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Testing
${data.testing}

## Questions
${data.questions}
- github:${data.github}
- email:${data.email}

${renderLicenseSection(data.license)}

`
}

module.exports = generateMarkdown;
