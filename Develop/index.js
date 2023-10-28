var inquirer= require ("inquirer");
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
    name: "usage info ",
    message: "What is the usage information?"
},

{
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines?",
},

{
    type: "input",
    name: "testing",
    message: "What are the test instructions?",
},

 
])
.then((answers)=>{
//ANSWERS(FEEDBACK)
})



// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();



