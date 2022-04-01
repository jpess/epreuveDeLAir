/**
* Rotation vers la gauche
*/

/*
Créez un programme qui décale tous les éléments d’un tableau vers la gauche. Le premier élément devient le dernier à chaque rotation.

Utilisez une fonction de ce genre (selon votre langage) :
ma_rotation(array) {
	# votre algorithme
	return (new_array)
}


Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit”
Albert, Thérèse, Benoit, Michel


Afficher error et quitter le programme en cas de problèmes d’arguments.
*/


/******************
*   FUNCTIONS
******************/

/*
* Rotate all elements to the left (first become last)
*/
function rotateArrayLeft(my_array) {
    let result = [];
    let i = 0;
    //Loop through the array and push the i+1 element to the array result
    //at the end of array, i+1 is 0 thanks to the modulo of array length applied on new index
    //so the first element of my_array is put last on result array.
    while (i < my_array.length){
        let j = (i + 1) % my_array.length;
        result.push(my_array[j]);
        i++;
    }
    return result;
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
    result = rotateArrayLeft(args).join(", ");
}

/******************
 *    DISPLAY
 ******************/
console.log(result);