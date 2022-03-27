/**
* Chercher l'intrus
*/

/*
Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.


Exemples d’utilisation :
$> python exo.py 1 2 3 4 5 4 3 2 1
5

$> python exo.py bonjour monsieur bonjour
monsieur


Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

/* NOTES */
/*
- Look for errors like more than 1 unique value exists
- What if none unique value exists ?
*/


/******************
*   FUNCTIONS
******************/

/*
* Search the single value among a paired-value array
*/
function searchIntruder(array){
    let result = "no single value found.";
    const seenOnceArray = [];
    const seenTwiceArray = [];
    for(i=0; i<array.length; i++){
       if(!seenOnceArray.includes(array[i])){
           seenOnceArray.push(array[i]);
       } else {
           seenTwiceArray.push(array[i]);
       }
    }
    const diff = seenOnceArray.filter(x => seenTwiceArray.indexOf(x) === -1);
    if(diff.length == 1){
        result = diff[0];
    } else if(diff.length > 1){
        result = "error: " + diff.length + " single values found."
    }
    return result;
}

/******************
 * ERROR HANDLING
 ******************/
const errorMessage = new Error("error");

function areThereThreeOrMoreArguments(args) {
    return (args.length >= 3);
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = 1;
    if (!areThereThreeOrMoreArguments(args)) {
        //1.a if not exatly two arguments are passed
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
    result = searchIntruder(args);
}

/******************
 *    DISPLAY
 ******************/
console.log(result);