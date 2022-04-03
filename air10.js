/**
* Afficher le contenu
*/

/*
Créez un programme qui affiche le contenu d’un fichier donné en argument.

Exemples d’utilisation :
$> cat a.txt
Je danse le mia
$> ruby exo.rb “a.txt”
Je danse le mia

Afficher error et quitter le programme en cas de problèmes d’arguments ou de fichier inaccessible.
*/


/******************
*   FUNCTIONS
******************/

/*
* Read the file content
*/
function readFileContent(fileToRead, fs) {
    return fs.readFileSync(fileToRead, 'utf8');
}

/******************
 * ERROR HANDLING
 ******************/
const errorMessage = new Error("error");

function oneAndOnlyOneArguments(args) {
    return (args.length == 1);
}

function isArgumentAFile(args){
    const regExp = new RegExp("^[^\.]+.[a-zA-Z]+$"); //read any char except '.' followed by '.' followed by any letters
    return regExp.test(args);

}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = 1;
    if (!oneAndOnlyOneArguments(args)) {
        console.log("erreur nombre d'arguments");
        testResult = errorMessage;
    } else if(!isArgumentAFile(args)){
        console.log("erreur syntaxe de l'argument");
        testResult = errorMessage;
    }
    return testResult;
}
/******************
 *    PARSING
 ******************/
let args = process.argv.slice(2);  
let checkResult = checkArgumentForError(args);
let result = "error";
const fs = require('fs'); //to read a file

/******************
 *      MAIN
 ******************/
if(checkResult !== 1){
    result = checkResult.message;
} else {
    result = readFileContent(args[0], fs);
}

/******************
 *    DISPLAY
 ******************/
console.log(result);