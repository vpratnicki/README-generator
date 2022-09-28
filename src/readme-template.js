//function that returns the license badge based on which license is passed in
const renderLicenseBadge = license => {
    console.log(license);
    switch (license[0]) {
        case 'GNU General Public License v3.0':
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        case 'Apache v2.0':
            return `[![Licence: Apache 2](https://img.shields.io/badge/License-Apache%202-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)`; 

        default: 
            return '';
    }
};

// function that returns the license section of README
const renderLicenseSection = license => {
    if (!license) {
        return '';
    }

    return `## License

    This project is licensed under the terms of the ${license}`
};

const renderLicenseTableOfContents = license => {
    if (!license.length) {
        return '';
    }

    return `- [License](#license)`
};


module.exports = templateData => {
    console.log(templateData);
    // destructure page data by section
    const { license, ...readme } = templateData;


    return `
${renderLicenseBadge(license)}

# ${readme.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseTableOfContents(license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${readme.description}

## Installation

${readme.installation}

## Usage

${readme.usage}

## Credits

${readme.credits}

## Contributing 

${readme.contributing}

## Tests

${readme.tests}

${renderLicenseSection(license)}

## Questions

Have any questions about this project? Please reach out! 

GutHub username: ${readme.github}
Link: [https://githut.com/${readme.github}](https://githut.com/${readme.github})
Email: ${readme.emailAddress}

`;
};
