module.exports = templateData => {
    console.log(templateData);
    // destructure page data by section
    const { ...readme } = templateData;


    return `
    # ${readme.title}

    ## Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
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

    ## Questions

    Have any questions about this project? Please reach out! 

    GutHub username: ${readme.github}
    Link: [https://githut.com/${readme.github}](https://githut.com/${readme.github})
    Email: ${readme.emailAddress}

    `;
};
