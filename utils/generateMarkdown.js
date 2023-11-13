function renderLicenseBadge(license) {
  return `![badge](https://img.shields.io/badge/LICENSE-${license}-blue)`
}

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

function renderLicenseSection(license) {
return `
## License
- This application is under ${license} license.
- Link: ${renderLicenseLink(license)}
`

}

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
- github:[${data.github}](https://github.com/${data.github})
- email:${data.email}

${renderLicenseSection(data.license)}

`
}

module.exports = generateMarkdown;
