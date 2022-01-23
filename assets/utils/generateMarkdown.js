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
    
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    
    ## License
    
    
    
    ## Features
    
    If your project has a lot of features, list them here.
    
    ## How to Contribute
    
    If you created an application or package and would like other developers to contribute it [Contributor Covenant](https://www.contributor-covenant.org/)
    
  `;
  }
  
  module.exports = generateMarkdown;
  