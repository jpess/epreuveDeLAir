/**
* Mélanger deux tableaux triés
*/

/*
Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_fusion(array1, array2) {
	# your algo
	return (new_array)
}


Exemples d’utilisation :
$> ruby exo.rb 10 20 30 fusion 15 25 35
10 15 20 25 30 35


Afficher error et quitter le programme en cas de problèmes d’arguments.
*/


/******************
*   FUNCTIONS
******************/

/*
* Merge two sorted arrays
*/
function mergeArrays(arrayOne, arrayTwo) {
    //loop on both array at the same time and compare value at index i and j
    //add in sorted order into third array result_array
    //return result_array
    let result_array = [];
    let j = 0;
    let i = 0;
    while(i < arrayOne.length && j < arrayTwo.length){
        if (Number(arrayOne[i]) < Number(arrayTwo[j])){
            result_array.push(arrayOne[i]);
            i++;
        } else {
            result_array.push(arrayTwo[j]);
            j++;
        }
    }
    if(i >= arrayOne.length){
        result_array = result_array.concat(arrayTwo.slice(j));
    } else if( j >= arrayTwo.length){
        result_array = result_array.concat(arrayOne.slice(i));
    }
   return result_array;
}

/******************
 * ERROR HANDLING
 ******************/
const errorMessage = new Error("error");

function threeOrMoreArguments(args) {
    return (args.length >= 3);
}

function isNumbersOnlyArray(arrayToTest){
    const regExp = new RegExp("^[-]?[0-9]+$");
    for(let i=0; i < arrayToTest.length; i++){
        if(!regExp.test(arrayToTest[i])){
            return false;
        }
    }
    return true;
}

function isArraySorted(arrayToTest){
    //loop until array length - 2 (as last element is the one to insert, and we use i and i+1)
    for(let i=0; i < args.length-2; i++){
        if (Number(arrayToTest[i]) > Number(arrayToTest[i+1])){
            return false;
        }
    }
    return true;
}

function isFusionInArray(args){
    return args.includes("fusion");
}

function isSyntaxValid(args){
    //split into two arrays on "fusion" keyword, if two arrays continue
    //test each arrays are NumbersOnly and SortedArrays
    if(!isFusionInArray(args)){
        //console.log("No fusion keyword");
        return false;
    } else {
        const arrayOne = args.slice(0, args.indexOf("fusion"));
        const arrayTwo = args.slice(args.indexOf("fusion")+1);
        if (arrayOne.length <= 0 || arrayTwo.length <= 0) {
            //console.log("No two arrays");
            return false;
        } else if (!isNumbersOnlyArray(arrayOne) || !isNumbersOnlyArray(arrayTwo)) {
            //console.log("Not all numbers");
            return false;
        } else if (!isArraySorted(arrayOne) || !isArraySorted(arrayTwo)) {
            //console.log("Not sorted arrays");
            return false;
        } else {
            return true;
        }
    }
   
}



/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = 1;
    if (!threeOrMoreArguments(args)) {
        testResult = errorMessage;
    } else if(!isSyntaxValid(args)){
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
    const arrayOne = args.slice(0, args.indexOf("fusion"));
    const arrayTwo = args.slice(args.indexOf("fusion") + 1);
    result = mergeArrays(arrayOne, arrayTwo).join(" ");
}

/******************
 *    DISPLAY
 ******************/
console.log(result);