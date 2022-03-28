/**
* Insertion dans un tableau trié
*/

/*
Créez un programme qui ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant. Le dernier argument est l’élément à ajouter.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_insert(array, new_element) {
	# your algo
	return (new_array)
}


Exemples d’utilisation :
$> ruby exo.rb 1 3 4 2
1 2 3 4

$> ruby exo.rb 10 20 30 40 50 60 70 90 33
10 20 30 33 40 50 60 70 90


Afficher error et quitter le programme en cas de problèmes d’arguments.
*/


/******************
*   FUNCTIONS
******************/

/*
* Insert an element in a sorted array
*/
function insertElement(sortedArray, elmt) {
    for(let i=0; i < sortedArray.length; i++){
        if(sortedArray[i] > elmt){
            //First approach I'd add element in a result_array until here, then add elmt and then the rest of sortedArray using substract or similar
            //Second approach, use of splice that insert the element at the desired index. Done!
            sortedArray.splice(i, 0, elmt);
            return sortedArray;
        }
    }
    return sortedArray;
}

/******************
 * ERROR HANDLING
 ******************/
const errorMessage = new Error("error");

function twoOrMoreArguments(args) {
    return (args.length >= 2);
}

function isArraySorted(args){
    //loop until array length - 2 (as last element is the one to insert, and we use i and i+1)
    for(let i=0; i < args.length-2; i++){
        if(args[i] > args[i+1]){
            return false;
        }
    }
    return true;
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = 1;
    if (!twoOrMoreArguments(args)) {
        testResult = errorMessage;
    } else if(!isArraySorted(args)){
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
    const elmt = args.pop();
    result = insertElement(args, elmt);
}

/******************
 *    DISPLAY
 ******************/
console.log(result);