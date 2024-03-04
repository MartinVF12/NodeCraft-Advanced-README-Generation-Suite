// Function to render the license badge
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`;
}

// Function to render the license link
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD 3':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return '';
  }
}

// Function to render the license section in the README
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `
## License
This project is licensed under the ${license} license. For more information, see [here](${renderLicenseLink(license)}).
`;
}

// Function to generate the markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

${renderLicenseSection(data.license)}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Questions
For questions, please contact me at ${data.email}.
GitHub: [${data.questions}](https://github.com/${data.questions})
`;
}

module.exports = generateMarkdown;
