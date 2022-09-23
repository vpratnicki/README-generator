const inquirer = require('inquirer');
// const fs = require('fs');
// const generateMarkdown = require('./src/readme-template.js');

// const pageREADME = generateMarkdown(data);

// fs.writeFile('./README.md', pageREADME, err => {
//     if (err) throw err;

//     console.log('Profolio complete! Checkout README.md to see the output!');
// });

inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects title?'
    }
])
.then(answers => console.log(answers));
