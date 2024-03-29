/**
* Meta exercice
*/

/*
Créez un programme qui vérifie si les exercices de votre épreuve de l’air sont présents dans le répertoire et qu’ils fonctionnent (sauf celui là). Créez au moins un test pour chaque exercice.


Exemples d’utilisation :
$> python exo.py
air00 (1/3) : success
air00 (2/3) : success
air00 (3/3) : success
air01 (1/2) : success
air01 (2/2) : failure
air02 (1/1) : success
... 
Total success: (56/62)


Bonus : trouvez le moyen d’utiliser du vert et du rouge pour rendre réussites et échecs plus visibles.
*/


/******************
*   FUNCTIONS
******************/

/**
 * Test script files with argument and return a string result
 * @returns a String with script filename, #of test out of total tests and succeed or failure accordingly
 */
function metaCheck(){
    let result = "";
    let successCount = 0; //count how many execution succeed
    let scriptTotal = 0; //count the total of script executed

    //browse all scipt filenames from the array of scripts and their arguments
    for (let i = 0; i < arrayScriptsAndArgs.length; i++) {
        const fileData = arrayScriptsAndArgs[i];
        if (fs.existsSync(fileData[0])){
            //if file exists, browse the arguments and exec the script
            for (let j = 0; j < fileData[1].length; j++) {
                let scriptResult = runScript(fileData[0], fileData[1][j]);
                //console.log(scriptResult.slice(0, -1)); //remove the line break at the end
                if (scriptResult.slice(0, -1).localeCompare('error') == 0) {
                    result += fileData[0].slice(0, -3) + " (" + (j + 1) + "/" + fileData[1].length + ") : " + "\033[31m failure \033[0m \n"; // displays failure in RED
                } else {
                    result += fileData[0].slice(0, -3) + " (" + (j + 1) + "/" + fileData[1].length + ") : " + "\033[32m success \033[0m \n"; // displays success in GREEN
                    successCount++;
                }
                scriptTotal++;
            }
        } else {
            //console.error("A problem occured, script exits.");
            process.exit(1);
        }
    }

    //Add the Total Success data
    result += "Total success: (" + successCount + "/" + scriptTotal + ")";
    return result;
}

/**
 * Run a script and its arguments in a command line (ex: node air00.js "Hello world !")
 * @param {*} filename script filename (ex: 'air00.js')
 * @param {*} arguments arguments (ex: "Hello world !")
 * @returns the result of the script
 */
function runScript(filename, arguments){
    const execSync = require('child_process').execSync;
    const cmdLine = "node " + filename + " " + arguments.join(" ");
    //console.log(cmdLine + "\n");
    const result = execSync(cmdLine, { encoding: 'utf-8' });
    //console.log(result);
    return result;
}

/******************
 * ERROR HANDLING
 ******************/
const errorMessage = new Error("error");

function noArguments(args) {
    return (args.length == 0);
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = true;
    if (!noArguments(args)) {
        //console.log("erreur nombre d'arguments");
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

const fs = require("fs"); // fileSystem used to check if a file exists

const arrayScriptsAndArgs = [
    ['air00.js', [['\"Bonjour les gars\"'], ['\"Comment ça va?\"'], ['\"Super test ! La folie !\"']]],
    ['air01.js', [['\"Crevette magique dans la mer des étoiles\"', '\"la\"'], ['\"Du beurre dans les épinards\"','\"dans\"']]],
    ['air02.js', [['Je', 'teste', 'des', 'trucs', ' ']]],
    ['air03.js', [[1, 2, 3, 4, 5, 4, 3, 2, 1],["monsieur", "bonjour", "monsieur"]]], 
    ['air04.js', [['\"Hello milady,   bien ou quoi ??\"']]],   
    ['air05.js', [[1, 2, 3, 4, 5, "+2"],[10, 11, 12, 20, "-5"]]],
    ['air06.js', [["Michel", "Albert", "Therese", "Benoit", "t"], ["Michel", "Albert", "Therese", "Benoit", "a"]]],
    ['air07.js', [[1, 2, 4, 2],[10, 20, 30, 40, 50, 60, 70, 90, 33]]],
    ['air08.js', [[10, 20, 30, "fusion", 15, 25, 35]]],
    ['air09.js', [["Michel", "Albert", "Therese", "Benoit"]]],
    ['air10.js', [["fichierTest.txt"]]],
    ['air11.js', [[0,5], ['^',8]]],
    ['air12.js', [[6, 5, 4, 3, 2, 1]]]];


/******************
 *      MAIN
 ******************/
if(!checkResult){
    result = checkResult.message;
} else {
    result = metaCheck();
}

/******************
 *    DISPLAY
 ******************/
console.log(result);