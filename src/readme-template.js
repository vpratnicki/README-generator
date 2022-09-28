//function that returns the license badge based on which license is passed in
const renderLicenseBadge = license => {
    console.log(license);
    switch (license[0]) {
        case 'GNU General Public License v3.0':
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        case 'Apache License 2.0':
            return `[![Licence: Apache 2](https://img.shields.io/badge/License-Apache%202-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)`; 
        case 'MIT License':
            return `[![Licence: MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://www.mit.edu/~amini/LICENSE.md)`; 
        case 'Boost Software License 1.0':
            return `[![Licence: Boost Software License](https://img.shields.io/badge/License-Boost%20Software%20License%201.0-green.svg)](https://www.boost.org/users/license.html)`; 
        case 'Mozilla Public License 2.0':
            return `[![Licence: Mozilla Public License 2.0](https://img.shields.io/badge/Mozilla%20Public%20License%202-green.svg)](https://www.mozilla.org/en-US/MPL/2.0/)`; 

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

This project is licensed under the terms of the ${license}.`
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
