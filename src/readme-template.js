// function that returns the license badge based on which license is passed in
// const renderLicenseBadge = licenseBadge => {
//     if (!licenseBadge) {
//         return '';
//     }

//     return `
    
//     `
// };

// function that returns the license section of README
const renderLicenseSection = license => {
    if (!license) {
        return '';
    }

    return `
    ## License
    ${license}
    `
};

// function that returns the license link
// const renderLicenseLink = licenseLink => {
//     if (!licenseLink) {
//         return '';
//     }

//     return `
    
//     `
// };



module.exports = templateData => {
    console.log(templateData);
    // destructure page data by section
    const { license, ...readme } = templateData;


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

    ${renderLicenseSection(license)}

    ## Questions

    Have any questions about this project? Please reach out! 

    GutHub username: ${readme.github}
    Link: [https://githut.com/${readme.github}](https://githut.com/${readme.github})
    Email: ${readme.emailAddress}

    `;
};
