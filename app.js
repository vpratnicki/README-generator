const fs = require('fs');
const basicDataArgs = process.argv.slice(2);
const [title, description, installation, usage, license, contributing, tests, name, githubLink, emailAddress] = basicDataArgs;

const generatePage = () => {
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
}

fs.writeFile('./README.md', generatePage(), err => {
    if (err) throw new Error(err);

    console.log('Profolio complete! Checkout README.md to see the output!');
});

// const printTitleData = titleDataArr => {
//     for (let i = 0; i < titleDataArr.length; i++) {
//         console.log(titleDataArr[i]);
//     }

//     console.log('=================');

//     titleDataArr.forEach(titleItem => console.log(titleItem));
// };

// printTitleData(titleDataArgs);