/**
 * Split
 */

/*
Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).

Votre programme devra utiliser une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}

Exemples d’utilisation :
$> python exo.py “Bonjour les gars”
Bonjour
les
gars

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/******************
 *   FUNCTIONS
 ******************/

/*
* Split a sentence according to separators
*/
function my_split(sentence, separators){
    //browse sentence and split each time a character is includes in separators
    let array = sentence.split(new RegExp(separators.join('|'), 'g'));
    return array;
}

/******************
 * ERROR HANDLING
 ******************/
const errorMessage = new Error("error");

function isOnlyOneArgument(args) {
    return (args.length === 1);
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = 1;
    if (!isOnlyOneArgument(args)) {
        //1.a if none or more than one argument has been passed
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
// Array of separateors such as space, tab and line break
const separators = ['\\s', '\\t', '\\n'];

/******************
 *      MAIN
 ******************/
//1. Arguments test
if (checkResult !== 1) {
    result = checkResult.message;
} else {
    result = my_split(args[0], separators).join("\n");
}

/******************
 *    DISPLAY
 ******************/
console.log(result);