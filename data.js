function dataDecon({
  appName,
  appDesc,
  appWhy,
  appWhat,
  GitName,
  GitURL,
  appRepo,
  licName,
  licURL,
  vidURL,
}) {
  return `# ${appName}

## ${appDesc}

- ${appWhy}
- ${appWhat}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Walkthrough](#walkthrough)

## Installation

- (List Dependencies that need to be installed here. EG: Node.js)

- Download the repository from ${appRepo}.

- Place the file somewhere on your computer (if it is zipped, unzip it.)

- (Describe how to install any additional dependencies. For example: npm Inquirer)

## Usage

- (Describe how to launch and use your program)

## Credits

- Author: ${GitName} ${GitURL}

- (List any dependencies and thier URLs here)

## License

- ${licName}: ${licURL}

- (Optional: Additional Text Placeholder)

## How to Contribute (Optional)

- (Describe how other coders can contribute to your project, if your license allows open-source development. Otherwise, feel free to delete this section.)

## Walkthrough

- A video walkthrough is available here: ${vidURL}`;
}

module.exports = {
  dataDecon,
};
