/**
* Un seul à la fois
*/

/*
Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.


Exemples d’utilisation :
$> python exo.py “Hello milady,   bien ou quoi ??”
Helo milady, bien ou quoi ?


Afficher error et quitter le programme en cas de problèmes d’arguments.
*/


/******************
*   FUNCTIONS
******************/

/*
* Trim any identical adjacent char 
*/
function trimIdenticalAdjacentChar(sentence) {
    let result = '';
    for (i = 0; i < sentence.length; i++) {
        const charOne = sentence.charAt(i);
        const charTwo = sentence.charAt(i + 1);
        if(charTwo.localeCompare(charOne) === 0){
            continue;
        } else {
            result += charOne;
        }
    }
    return result;
}

/******************
 * ERROR HANDLING
 ******************/
const errorMessage = new Error("error");

function isThereOnlyOneArgument(args) {
    return (args.length == 1);
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = 1;
    if (!isThereOnlyOneArgument(args)) {
        //1.a if not exatly one argument is passed
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

/******************
 *      MAIN
 ******************/
if(checkResult !== 1){
    result = checkResult.message;
} else {
    result = trimIdenticalAdjacentChar(args[0]);
}

/******************
 *    DISPLAY
 ******************/
console.log(result);