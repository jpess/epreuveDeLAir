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

function metaCheck(){
    let result = "";
    let successCount = 0;
    //list all exercices in array like ['air00.js', 'air01.js', etc.]
    //for each exercice, test if file exists
    exercices.forEach(filepath => {
        if(fs.existsSync(filepath)){
            result += filepath + ": success \n";
            successCount++;
        } else {
            result += filepath + ": failure \n";
        }
    });

    //Add the Total Success data
    result += "Total success: (" + successCount + "/" + exercices.length + ")";
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
const exercices = ['air00.js', 'air01.js', 'air02.js', 'air03.js', 'air04.js', 'air05.js', 'air06.js', 'air07.js', 'air08.js', 'air09.js', 'air10.js', 'air11.js', 'air12.js'];
const fs = require("fs");

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