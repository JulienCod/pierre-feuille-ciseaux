

let playerOne ={
    nom : "",
    score : 0,

    configPlayer : (name) => {
        return this.nom = name;
    },
    addScore : (number) =>{
        return this.score = number;
    },
};
let playerTwo ={
    nom :"",
    score : 0,
    configPlayer : (name) => {
        return this.nom = name;
    },
    addScore : (number) =>{
        return this.score = number;
    },
};
let counter = 1;
let choicePlayerOne = 0;
let choicePlayerTwo = 0;

//Étape 1 affichage de la page de bienvenue

document.getElementById("game").innerHTML=`
        <div id="intro" class="tracking-in-contract-bck-bottom">
            <div id="welcome">
                <h2>Bienvenue</h2>
            </div>
            <div id="regle">
                <h3>Règles du jeux</h3>
                <p>
                Choisir entre la pierre, la feuille et les ciseaux.<br>
                La pierre écrase les ciseaux et gagne.<br>
                La feuille enveloppe la pierre et gagne.<br>
                Les ciseaux découpent la feuille et gagnent.<br>
                A partir de là chaque forme en bat une autre et perd contre une autre. Voici les forces en général au chifumi.<br>
                Quand vous êtes prêt cliquer sur le boutton <span>"Commencer une partie"</span>
                </p>
                <button class="btn" onclick="configGame()">Commencer une partie</button>
            </div>
        </div>
`

//Étape 2 aprés un click sur le bouton configuration de la partie

function configGame() {
    document.getElementById("game").innerHTML= `
    <div id="configGame" class="tracking-in-contract-bck-bottom">
        <span>Joueur 1</span><br>
        <label for="namePlayerOne">Nom :</label>
        <input type="text" name="namePlayerOne" id="namePlayerOne"><br>
        <span>Joueur 2</span><br>
        <label for="namePlayerTwo">Nom :</label>
        <input type="text" name="namePlayerTwo" id="namePlayerTwo"><br>
        <button class="btn" id="btn" onclick="initGame()">Valider</button>
    </div>
    `
    document.getElementById("namePlayerOne").focus();
    document.getElementById("namePlayerTwo").addEventListener("keydown",(value)=>{
        if(value.key === 'Enter'){
            initGame();
        }
    })
};

//Étape 3 récupération des informations sur les inputs et lancer le jeu

function initGame(){
    
    playerOne.nom = playerOne.configPlayer(document.getElementById("namePlayerOne").value);
    playerTwo.nom = playerTwo.configPlayer(document.getElementById("namePlayerTwo").value);
    reset();
};

function reset() {
    playerOne.score = 0;
    playerTwo.score = 0;
    counter = 1;
    choiceOne();
};

//Étape 4 choix joueur 1

function choiceOne(){
    
    document.getElementById("game").innerHTML = `
    <div id="playerOne" class="configPlayer tracking-in-contract-bck-bottom">
        <div id="name">${playerOne.nom}</div>
        <div class="win">
        <h3>Manche gagné : ${playerOne.score}</h3>
        
        </div>
        <div class="choice" id="choice" onkeydown="keydown(key)">
            
            <input type="image" class="imgChoice" src="./assets/images/pierre.png" value="1" onclick="choiceTwo(value)"  alt="image d'une pierre">
            <input type="image" class="imgChoice" src="./assets/images/papier.png" value="2" onclick="choiceTwo(value)"  alt="image de papier">
            <input type="image" class="imgChoice" src="./assets/images/ciseaux.png" value="3" onclick="choiceTwo(value)" alt="image de ciseaux">
        </div>
    </div>`;
};

//Étape 5 choix joueur 2

function choiceTwo(value){
    choicePlayerOne = value
    if(!isNaN(choicePlayerOne))
    document.getElementById("game").innerHTML=`
    <div id="playerTwo" class="configPlayer tracking-in-contract-bck-bottom">
        <div id="name">${playerTwo.nom}</div>
        <div class="win">
            <h3>Manche gagné : ${playerTwo.score}</h3>
        
        </div>
        <div class="choice">
            <input type="image" class="imgChoice" src="./assets/images/pierre.png" value="1"  onclick="startGame(value)" alt="image d'une pierre">
            <input type="image" class="imgChoice" src="./assets/images/papier.png" value="2"  onclick="startGame(value)" alt="image de papier">
            <input type="image" class="imgChoice" src="./assets/images/ciseaux.png" value="3" onclick="startGame(value)" alt="image de ciseaux">
        </div>

    </div> `
};

//lancement du jeu

function startGame(value){
    choicePlayerTwo = value;
    if(!isNaN(choicePlayerTwo))
    document.getElementById("game").innerHTML = `
    <div id="gridGame">
        <div id="playerOne" class="configPlayer">
            <div id="name">${playerOne.nom}</div>
            <div class="win">
                <h3>Manche gagné : ${playerOne.score}</h3>
            
            </div>
            <div class="choice">
                <input type="image" class="img" src="./assets/images/pierre.png" value="1" alt="image d'une pierre">
                <input type="image" class="img" src="./assets/images/papier.png" value="2" alt="image de papier">
                <input type="image" class="img" src="./assets/images/ciseaux.png" value="3" alt="image de ciseaux">
            </div>
        </div>
        <div id="count">
            <div id="manche">
                <h3>Manche numéro ${counter}</h3>
            </div>
            <div >
                <span id="timer"></span>
            </div>
        </div>

        <div id="playerTwo" class="configPlayer">
            <div id="name">${playerTwo.nom}</div>
            <div class="win">
                <h3>Manche gagné : ${playerTwo.score}</h3>

            </div>
            <div class="choice">
                <input type="image" class="img" src="./assets/images/pierre.png" value="1" alt="image d'une pierre">
                <input type="image" class="img" src="./assets/images/papier.png" value="2" alt="image de papier">
                <input type="image" class="img" src="./assets/images/ciseaux.png" value="3" alt="image de ciseaux">
            </div>
        </div>
    </div>
    `
setTimeout(screenThree,1000);
};

function screenThree() {
    document.getElementById("count").innerHTML = `
    <div id="manche">
        <h3>Manche numéro ${counter}</h3>
    </div>
    <div >
        <span id="timer">3</span>
    </div>
    `
setTimeout(screenTwo,1000);
};
function screenTwo() {
    document.getElementById("count").innerHTML = `
    <div id="manche">
        <h3>Manche numéro ${counter}</h3>
    </div>
    <div >
        <span id="timer">2</span>
    </div>
    `
setTimeout(screenOne,1000);
};
function screenOne() {
    document.getElementById("count").innerHTML = `   
    <div id="manche">
        <h3>Manche numéro ${counter}</h3>
    </div>
    <div >
        <span id="timer">1</span>
    </div>
    `
setTimeout(screenZero,1000);
};
function screenZero() {
    document.getElementById("count").innerHTML = `   
    <div id="manche">
        <h3>Manche numéro ${counter}</h3>
    </div>
    <div >
        <span id="timer">0</span>
    </div>
    `
setTimeout(result(choicePlayerOne,choicePlayerTwo),1000);
};

// fonction qui désigne le vainqueur de la manche

function result(resOne, resTwo) {

    choicePlayerOne = parseInt(resOne);
    choicePlayerTwo = parseInt(resTwo);
    console.log(choicePlayerOne);
    console.log(choicePlayerTwo);
    // cas d'une égalité
    if(choicePlayerOne === choicePlayerTwo){
        document.getElementById("game").innerHTML = `
        <div id="screen">  
            <div id="playerTwo" class="configPlayer">
                <div id="name">Le gagnant de la manche est : ...</div>
                <div class="win" id="egalite">
                ÉGALITÉ   
                </div>
                <div class="win">
                    <img src="./assets/images/egalite.png" class="imgResult" alt="image d'un smiley qui ne sait pas">
                </div>
            </div>
        </div>
        `
        setTimeout(suite,5000);
    }

    // tous les cas ou le joueur 1 gagne
    else if(choicePlayerOne === 1 && choicePlayerTwo === 3 || choicePlayerOne === 2 && choicePlayerTwo === 1 || choicePlayerOne === 3 && choicePlayerTwo === 2){
        playerOne.score += playerOne.addScore(1);
        screenRes(playerOne);
    }

    // tous les cas ou le joueur 2 gagne
    else if(choicePlayerTwo === 1 && choicePlayerOne ===3 || choicePlayerTwo === 2 && choicePlayerOne === 1 || choicePlayerTwo === 3 && choicePlayerOne === 2){
        playerTwo.score += playerTwo.addScore(1);
        screenRes(playerTwo);
    }

    function screenRes(player){
        document.getElementById("game").innerHTML = `
            <div id="screen">  
                <div id="playerTwo" class="configPlayer">
                    <div id="name">Le gagnant de la manche est : ${player.nom}</div>
                    <div class="win">
                        <h3>Manche gagné : ${player.score}</h3>
            
                    </div>
                    <div class="win">
                        <img src="./assets/images/victoireManche.png" class="imgResult" alt="image d'un smiley qui applaudit">
                    </div>
                </div>
            </div>
        `
        setTimeout(suite,5000);
    }

    function suite(){

        if(counter < 3){
            if(counter == 2 && playerOne.score == 2 || counter == 2 && playerTwo.score == 2){
                finish(playerOne, playerTwo);
            }
            else{
                counter++;
                choiceOne();
                
            }
        }
        // tant que le score dès deux joueurs sont égaux et que le 3ieme tour est passé il faut départager les joueurs pour avoir un gagnant.
        else if (counter >= 3){
            if(playerOne.score === playerTwo.score){
                counter++;
                choiceOne();
            }else{
                finish(playerOne, playerTwo);
            }
        }
    }
}
// fonction qui designe le grand gagnant

function finish(playerone, playertwo) {
    let playerOne = playerone.score;
    let playerTwo = playertwo.score;
    let points ="points";

    if(playerOne > playerTwo){
        if( playerOne === 1){
            points ="point";
        }
        document.getElementById("game").innerHTML=`
            <div id="intro" class="tracking-in-contract-bck-bottom">
                <div id="questionChoice">
                    <h2>Fin du jeu</h2>
                </div>
                <div id="info">
                    <p>Félicitation au grand gagnant ${playerone.nom}<br>
                    Avec un total de ${playerone.score} ${points}<br><br>

                    <img src="./assets/images/trophee.png" alt="image d'un trophée"><br>
                    
                    Que voulez-vous faire ?<br><br>

                    Pour faire une nouvelle partie avec des nouveaux joueur cliquez sur le bouton<span>" Une nouvelle partie"<span>.<br><br>
                    Pour recommencer une partie avec les mêmes nom de joueur cliquez sur le bouton <span>"Recommencer une partie<span>.
                    
                    </p>
                    
                    <button class="btn" onclick="configGame()">une nouvelle partie</button>
                    <button class="btn" onclick="reset()">Recommencer une partie</button>
                </div>
            </div>
        `
    }else if(playerTwo > playerOne){
        if( playerTwo === 1){
            points ="point";
        }
        document.getElementById("game").innerHTML=`
            <div id="intro" class="tracking-in-contract-bck-bottom">
                <div>
                    <h2>Fin du jeu</h2>
                </div>
                <div id="info">
                    <p>Félicitation au grand gagnant ${playertwo.nom}<br>
                    Avec un total de ${playertwo.score} ${points}<br><br>

                    <img src="./assets/images/trophee.png" alt="image d'un trophée"><br>
                    
                    Que voulez-vous faire ?<br><br>

                    Pour faire une nouvelle partie avec des nouveaux joueurs cliquez sur le bouton <span>"Une nouvelle partie"<span>.<br><br>
                    Pour recommencer une partie avec les mêmes nom de joueur cliquez sur le bouton <span>"Recommencer une partie"<span>.
                    
                    </p>
                    
                    <button class="btn" onclick="configGame()">Une nouvelle partie</button>
                    <button class="btn" onclick="reset()">Recommencer une partie</button>
                </div>
            </div>
        `  
    }
}