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

    ## License

    ${license}

    ## Contributing 

    ${contributing}

    ## Tests

    ${tests}

    ## Questions

    Have any questions about this project? Please reach out! 

    GutHub username: ${name}
    Link: [https://githut.com/${githubLink}](https://githut.com/${githubLink})
    Email: ${emailAddress}

    `;
};

module.exports = generateMarkdown;