/**
 * Concat
 */

/*
Créez un programme qui transforme un tableau de chaînes de caractères en une 
seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument 
au programme.

Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, separateur) {
	# votre algorithme
	return (string)
}


Exemples d’utilisation :
$> python exo.py “je” “teste” “des” “trucs” “ “
Je teste des trucs


Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/******************
 *   FUNCTIONS
 ******************/

/*
* Concatenate a array of words into a sentence according to a separator
*/
function my_concat(array, separator){
    let concatString = array[0];
    for(let i=1; i<array.length; i++){
        concatString += `${separator}${array[i]}`;
    }
    return concatString;
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
    //Isolate the last argument from the array of argument (and remove it from the array of argument)
    let concatCharacter = args.pop();
    result = my_concat(args, concatCharacter);
}

/******************
 *    DISPLAY
 ******************/
console.log(result);