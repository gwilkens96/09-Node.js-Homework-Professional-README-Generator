// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
      case 'Apache 2.0':
        return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      case 'BSD 3':
        return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg';
      case 'GPL 3.0':
        return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      case 'MIT':
        return 'https://img.shields.io/badge/License-MIT-yellow.svg';
        case '':
          break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'BSD 3':
      return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg';
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case '':
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case 'Apache 2.0':
      return 'Apache 2.0';
    case 'BSD 3':
      return 'BSD 3';
    case 'GPL 3.0':
      return 'GPL 3.0';
    case 'MIT':
      return 'MIT';
    case '':
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.licenses);
  let licenseLink = renderLicenseLink(data.licenses);
  let licenseSection = renderLicenseSection(data.licenses)
  return `# ${data.title}
  [![License: [${licenseBadge}]
  
  ## Description

  ${data.description}

  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usageInfo}

## License

${licenseSection} ${licenseLink}

## Credits

${data.contribution}

## Tests

${data.tests}

## Questions

If you have any questions, please email me at ${data.email}, or find me on github.com as ${data.github}.


`;
}

module.exports = generateMarkdown;