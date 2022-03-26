/**
 * Split en fonction
 */

/*
Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.

Votre programme devra intégrer une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}


Exemples d’utilisation :
$> python exo.py “Crevette magique dans la mer des étoiles” “la”
Crevette magique dans 
 mer des étoiles

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/******************
 *   FUNCTIONS
 ******************/

/*
* Split a sentence according to a separator
*/
function my_split(sentence, separator){
    return sentence.split(separator);
}

/******************
 * ERROR HANDLING
 ******************/
const errorMessage = new Error("error");

function areThereExactlyTwoArguments(args) {
    return (args.length == 2);
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = 1;
    if (!areThereExactlyTwoArguments(args)) {
        //1.a if not exatly two arguments are passed
        testResult = errorMessage;
    }
    return testResult;
}
/******************
 *    PARSING
 ******************/
let args = process.argv.slice(2);
console.log(args.length);
let checkResult = checkArgumentForError(args);
let result = "error";

/******************
 *      MAIN
 ******************/
if(checkResult !== 1){
    result = checkResult.message;
} else {
    result = my_split(args[0], args[1]).join("\n");
}

/******************
 *    DISPLAY
 ******************/
console.log(result);