const generateMarkdown = (data) => {
    return `
    # ${title}

    ## Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Description

    ${description}

    ## Installation

    ${installation}

    ## Usage

    ${usage}

    ## Credits

    ${credits}

    ## Contributing 

    ${contributing}

    ## Tests

    ${tests}

    ## Questions

    Have any questions about this project? Please reach out! 

    GutHub username: ${github}
    Link: [https://githut.com/${github}](https://githut.com/${github})
    Email: ${emailAddress}

    `;
};

module.exports = generateMarkdown;