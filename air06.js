/**
* Contrôle de pass sanitaire
*/

/*
Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.

Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, string) {
	# votre algorithme
	return (nouvel_array_de_strings)
}


Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “t”
Michel

$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “a”
Michel, Thérèse, Benoit



Afficher error et quitter le programme en cas de problèmes d’arguments.
*/


/******************
*   FUNCTIONS
******************/

/*
* Delete from elmtArray all elements that contain the string elmtString (based on use case examples)
*/
function deleteElements(elmntArray, elmtString) {
    let array_result = [];
    for(let i=0; i<elmntArray.length; i++){
        //if elmtString is not includes in elmtArray element, add it to array_result
        if(!elmntArray[i].toLowerCase().includes(elmtString.toLowerCase())){
            array_result.push(elmntArray[i]);
        }
    }
    return array_result.join(", ");
}

/******************
 * ERROR HANDLING
 ******************/
const errorMessage = new Error("error");

function twoOrMoreArguments(args) {
    return (args.length >= 2);
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = 1;
    if (!twoOrMoreArguments(args)) {
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
    const elmtString = args.pop();
    result = deleteElements(args, elmtString);
}

/******************
 *    DISPLAY
 ******************/
console.log(result);