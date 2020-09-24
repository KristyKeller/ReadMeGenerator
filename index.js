const inquirer = require("inquirer");
const fs = require("fs");
const { table } = require("console");
const licenseOptions = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",

  "APACHE 2.0": "[![License](https:img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",

  "GPL 3.0": "[![License: GPL v3](https:img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",

  "BSD 3": " [![License](https:img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",

  "None": "None"
}
// Write types, messages and names to match requirements 

inquirer
  .prompt([
    // Title section
    {
      type: "input",
      message: "What is your project's title?",
      name: "projectTitle"
    },
    // License badges section
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: [
        "MIT",
        "APACHE 2.0",
        "GPL 3.0",
        "BSD 3",
        "None"
      ]
    },

    // Description section
    {
      type: "input",
      message: "Write a short description for your project.",
      name: "description"
    },

    // Installation section
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "installation"
    },

    // Test section
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "tests"
    },

    // Usage section
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "usage"
    },

    // Contributing section
    {
      type: "input",
      message: "What does the user need to know about contributing to the repo?",
      name: "contributing"
    },
    // License description section
    {
      type: "input",
      message: "What is your project licensed under?",
      name: "licenseDescription"
    },
    // Questions section
    {
      type: "input",
      message: "What should the user do if they have any questions about your repo?",
      name: "questions"
    },

    // Github username and email
    {
      type: "input",
      message: "What is your Github username that users can contact you for questions?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your email that users can contact you for questions?",
      name: "email"
    }
  ])

  // Return user responses
  .then(function (response) {
    let input = "# "
    input += response.projectTitle
    input += `\n\n`
    input += licenseOptions[response.license]
    input += `\n\n`
    input += "## Description"
    input += `\n\n`
    input += response.description
    input += `\n\n`
        // Table of Contents 
        var tableOfContents = "## Table of Contents\n\n[Installation](#installation)\n\n[Tests](#Tests)\n\n[Usage](#usage)\n\n[Contributing](#contributing)\n\n[License](#licenseDescription)\n\n[Questions](#questions)" 
        input += tableOfContents
  input += `\n\n`
    input += "## Installation"
    input += `
    
    `
    input += response.installation
    input += `\n\n`
    input += "## Tests"
    input += `  

    `
    input += response.tests
    input += `\n\n`
    input += "## Usage"
    input += `\n\n`
    input += response.usage
    input += `\n\n`
    input += "## Contributing"
    input += `\n\n`
    input += response.contributing
    input += `\n\n`
    input += "## License"
    input += `\n\n`
    input += response.licenseDescription
    input += `\n\n`
    input += "## Questions"
    input += `\n\n`
    input += "["+response.email+"]("+response.email+")"
    input += "["+response.username+"](https://github.com/"+response.username+")"

    // Return inputs
    console.log(input);
    console.log(response);
    fs.writeFile('readme.md', input, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });
  });
  