// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}

    ## Description
    
   ${data.description}
    
    ## Table of Contents 
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    ${data.installation} 
    
    ## Usage
    
    [//]: <> (To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: ![short description] (url))
    
    
    ## Credits
    
    ${data.credits}
    
    ## License
    
    ${data.license}
    
    ## Features
    
    ${data.features}
    
    ## How to Contribute
    
    [Contributor Covenant](${data.contribute})
    
  `;
  }
  
  module.exports = generateMarkdown;
  