const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/readme-template.js');

const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects title?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.'
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to choose a license for your application',
        default: true
      },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license for this project:',
        choices: ['license 1', 'license 2', 'license 3'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.'    
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Enter your email address'
    }
])
};


questions()
.then(questionsData => {
    const pageREADME = generateMarkdown(questionsData);

    fs.writeFile('./README.md', pageREADME, err => {
      if (err) throw err;

      console.log('Profolio complete! Checkout README.md to see the output!');
    });
});
