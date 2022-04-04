/**
* Afficher une pyramide
*/

/*
Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.

Exemples d’utilisation :
$> ruby exo.rb O 5
    O
   OOO
  OOOOO
 OOOOOOO
OOOOOOOOO

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/


/******************
*   FUNCTIONS
******************/

/*
* Read the file content
*/
function generatePyramid(char, storey) {
    let arrayResult = [];
    
    //v.1 loop from i = storey to 1, fill up an array adding j-1 space before
    /*
    let j = 0;
    for(let i = storey; i < 0; i--){
        let leadingSpaceString = '';
        for(let sp = 0; sp < j; sp++){
            leadingSpaceString += ' ';
        }
        let line = leadingSpaceString;
        let occ = ( i * 2 ) + 1;
        for (let k = 0; k < occ; k++){
            line += char;
        }
        arrayResult.push(line);
        j++;
    }
    arrayResult = arrayResult.reverse();
    return arrayResult;
    */

    //v.2 loop from i = 0 to storey -1, fill up array adding storey/2 -1 -i
    for(let i = 0; i < storey; i++){
        let leadingSpaceString = ''; //number of leading spaces
        for(let sp = i; sp < storey; sp++){
            leadingSpaceString += ' ';
        }
        let occ = ( i * 2 ) + 1; //number of char for line
        let line = ''; //line to display
        for(let j = 0; j < occ; j++){
            line += char;
        }
        //push to array result leading space followed by line of char
        arrayResult.push(leadingSpaceString + line);
    }
    return arrayResult;
    
    
}

/*
* Display the result as a pyramid (version 1)
*/
/*
function displayResultV1(result){
    if(result.length>1){
        //display pyramid
        for(let i = result.length - 1; i > 0; i--){
            console.log(result[i]);
        }
    } else {
        console.log(result);
    }
}
*/

/*
* Display the result as a pyramid (version 2)
*/
function displayResultV2(result) {
    if (Array.isArray(result) && result.length > 1) {
        //display pyramid
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    } else {
        console.log(result);
    }
}

/******************
 * ERROR HANDLING
 ******************/
const errorMessage = new Error("error");

function twoAndOnlyTwoArguments(args) {
    return (args.length == 2);
}

function isNumber(args){
    const regExp = new RegExp("^[0-9]+$");
    return regExp.test(args);
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = 1;
    if (!twoAndOnlyTwoArguments(args)) {
        //console.log("erreur nombre d'arguments");
        testResult = errorMessage;
    } else if (!isNumber(args[1])){
        //console.log("erreur syntaxe de l'argument");
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
    result = generatePyramid(args[0], args[1]);
}

/******************
 *    DISPLAY
 ******************/
displayResultV2(result);