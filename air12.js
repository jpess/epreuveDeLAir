/**
* Le roi des tris
*/

/*
Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri rapide (QuickSort).

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_quick_sort(array) {
	# votre algorithme
	return (new_array)
}

Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6

Afficher error et quitter le programme en cas de problèmes d’arguments.

Wikipedia vous présentera une belle description de cet algorithme de tri.
*/


/******************
*   FUNCTIONS
******************/

/*
* Quick sort an array
*/
function my_quick_sort(array) {
    const left = 0;
    const right = array.length - 1;
    const new_array = quickSort(array, left, right);
    return new_array;
}

function quickSort(array, left, right){
    let index;

    if(array.length > 1){
       
        index = partition(array, left, right);

        if(left < index - 1){
            quickSort(array, left, index - 1);
        }

        if(index < right) {
            quickSort(array, index, right);
        }
    }
    
    return array;
}

/**
 * Partition an array to sort its pivot
 * @param {*} array Array to sort
 * @param {*} left Left index of Array
 * @param {*} right Rigth index of Array
 * @returns 
 */
function partition(array, left, right){
    let i = left; 
    let j = right;
    const pivot = array[getRandomIndexBetween(i,j)]; //random element
    //const pivot = array[Math.floor((right + left) / 2)]; //middle element

    
    while(i <= j){

        //increase index i until element higher than pivot or equal
        while (array[i] < pivot){
            i++;
        }
        
        //then decrease index j until element lower than pivot
        while (array[j] > pivot){
            j--;
        }

        if (i <= j) {
            //swap elements
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }
    return i;
}

/**
 * Randomely choose an number in between min and max
 * @param {*} min 
 * @param {*} max 
 * @returns an integer between min and max
 */
function getRandomIndexBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/******************
 * ERROR HANDLING
 ******************/
const errorMessage = new Error("error");

function atLeastTwoArguments(args) {
    return (args.length >= 2);
}

function isNumber(args){
    let result = true;
    const regExp = new RegExp("^-?[0-9]+$");
    for(let i = 0; i < args.length; i++){
        if(!regExp.test(args[i])){
            result = false;
            return result;
        }
    }
    return result;
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = 1;
    if (!atLeastTwoArguments(args)) {
        //console.log("erreur nombre d'arguments");
        testResult = errorMessage;
    } else if (!isNumber(args)){
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

/******************
 *      MAIN
 ******************/
if(checkResult !== 1){
    result = checkResult.message;
} else {
    result = my_quick_sort(args.map(Number)).join(" ");
}

/******************
 *    DISPLAY
 ******************/
console.log(result);