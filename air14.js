/**
* Air : ok
*/

/*
Créez un programme qui célèbre votre victoire.

Exemples d’utilisation :
$> python exo.py
J’ai terminé l’Épreuve de l’Air et c’était [].
$>

Note : [] est à remplacer par un adjectif de votre choix (facile ?)
*/


/******************
*   FUNCTIONS
******************/

function airOk(feeling){
    const result = `J'ai terminé l'Épreuve de l'Air et c'était ${feeling}`;
    return result;
}

/******************
 * ERROR HANDLING
 ******************/

/******************
 *    PARSING
 ******************/
const howDidItGo = "un cran plus dur, surtout les deux derniers exos !";

/******************
 *      MAIN
 ******************/
result = airOk(howDidItGo);

/******************
 *    DISPLAY
 ******************/
console.log(result);