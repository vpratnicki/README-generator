const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if there's an error, reject the promise and send the error to the `.catch()` method
            if (err) {
                reject(err);
            return;
            }
            // if everything went well, resolve the Promise and send the succesfull data to the `.then()` method
            resolve({
                ok: true,
                message: 'README created!'
            });
        });
    });
};

module.exports = { writeFile };