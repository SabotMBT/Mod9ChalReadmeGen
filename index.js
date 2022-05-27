const inquirer = require("inquirer");
const fs = require("fs");
const data = require("./data.js");
console.log(data);
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your app called?",
      name: "appName",
    },
    {
      type: "input",
      message: "Describe this app's function in one sentence",
      name: "appDesc",
    },
    {
      type: "input",
      message: "Why did you make this app?",
      name: "appWhy",
    },
    {
      type: "input",
      message: "What does this app do?",
      name: "appWhat",
    },
    {
      type: "input",
      message: "What is your GitHub profile name? ",
      name: "GitName",
    },
    {
      type: "input",
      message: "What is your GitHub profile URL? ",
      name: "GitURL",
    },
    {
      type: "input",
      message: "What is your app's GitHub repository URL? ",
      name: "appRepo",
    },
    {
      type: "input",
      message:
        "Go to choosealicense.com and pick a license. What is that license's name?",
      name: "licName",
    },
    {
      type: "input",
      message: "What is the URL to the license's full text?",
      name: "licURL",
    },
    {
      type: "input",
      message: "What is the URL to a video of this app's operation?",
      name: "vidURL",
    },
  ])
  .then((response) => generateREADME(response));

function generateREADME(userObj) {
  console.log(userObj);
  let test1 = data.dataDecon(userObj);
  // console.log(test1);
  fs.writeFile("NewReadme.md", test1, (err) => {
    if (err) console.log(err);
    else {
      console.log("Success!");
    }
  });
}
