/**
* Sur chacun d'entre eux
*/

/*
Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.


Exemples d’utilisation :
$> ruby exo.rb 1 2 3 4 5 “+2”
3 4 5 6 7

$> ruby exo.rb 10 11 12 20 “-5”
5 6 7 15


L’opération à appliquer sera toujours le dernier élément.


Afficher error et quitter le programme en cas de problèmes d’arguments.

*/


/******************
*   FUNCTIONS
******************/

/*
* Add or Remove value to each aray element
*/
function applyOperation(array, operation) {
    array.forEach(function (value, index) {
        array[index] = Number(value) + Number(operation);
    });
    return array;
}

/******************
 * ERROR HANDLING
 ******************/
const errorMessage = new Error("error");

function twoOrMoreArguments(args) {
    return (args.length >= 2);
}

function onlyNumbers(args) {
    const regExp = new RegExp("^[0-9]+$");
    return regExp.test(args);
}

function lastArgumentValid(arg) {
    const regExp = new RegExp("^[+|-][0-9]+$");
    return regExp.test(arg);
}



/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = 1;
    if (!twoOrMoreArguments(args)) {
        //1.a if not exatly one argument is passed
        testResult = errorMessage;
    } else {
        let operator = args[args.length-1];
        if(!onlyNumbers(args.slice(0,-1).join(""))){
            testResult = errorMessage;
        } else if(!lastArgumentValid(operator)){
            testResult = errorMessage;
        }

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
    const operation = args.pop();
    result = applyOperation(args, operation);
}

/******************
 *    DISPLAY
 ******************/
console.log(result);