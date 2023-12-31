var inquirer= require ("inquirer");
var fs = require("fs");
var generateMarkdown=require ("./utils/generateMarkdown")

inquirer
.prompt([
    {
    type: "input",
    name: "title",
    message:"What is the title?"
},

{
    type: "input",
    name: "description",
    message:"What is the description?"
},

{
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
},

{
    type: "input",
    name: "usage",
    message: "What is the usage information?"
},

{
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines?",
},

{
    type: "input",
    name: "testing",
    message: "What are the test instructions?",
},
{
    type: "input",
    name: "questions",
    message: "Are there any questions?", 
},
{
    type: "list",
    name: "license",
    message: "What license was used?", 
    choices: [
        "MIT", 
        "Mozilla",
        "Apache",
    ]
},

{
    type: "input",
    name: "github",
    message: "What is your github username?", 
},
{
    type: "input",
    name: "email",
    message: "What is your email address?", 
},
  
])

.then((answers)=>{
    console.log(answers.title);
    console.log(answers.description);
    console.log(answers.installation);
    console.log(answers.usage);
    console.log(answers.contributing);
    console.log(answers.testing);
    console.log(answers.questions);

    var template= generateMarkdown(answers)
    console.log(template)

    fs.writeFile("generated.md", template,()=>{
        console.log("created README markdown demo!")
    })
})


    



