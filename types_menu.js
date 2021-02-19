var inquirer = require('inquirer');
var fs = require('fs');

inquirer.prompt([
    {
        type: 'list',
        name: 'type',
        message: 'Commit\'s type?',
        choices: [
            'build',
            'conf',
            'feat',
            'fix',
            'props',
            'perf',
            'refactor',
            'style',
            'docs',
            'test'
        ]
    }
]).then(answers => {
    fs.writeFile(`${process.env.confDir}/type.log`, answers.type, function (err) {
        if (err) {
            console.log("Error! " + err);
        }
    });
}).catch(error => {
    if (error.isTtyError) {
        console.log("Couldn't render menu prompt!");
    } else {
        console.log("Something went wrong!");
    }
});