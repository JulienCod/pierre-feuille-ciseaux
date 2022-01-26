let computer={
    nom : "",
    score : 0,

    addScore : (number) =>{
        return this.score = number;
    },

    choiceName : ()=>{
        let tabNom=["Thanos","Spiderman","Thor","Hulk","Captain América","Black Panther","Vision","Iron Man","Docteur Strange",
        "Batman","Superman","Punisher","Daredevil","Flash","Cyborg","Ant-man","Wolverine","Loki","Mortelle Adèle","Black Widow","La Guèpe",
        "Groot","Rocket","Drax","Star-Lord","Venom"];
        let nbTab =tabNom.length
        let random = Math.round(Math.random()*nbTab)
        return this.nom = tabNom[random];
    }
}

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
let number = 0;

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
                <button class="btn" onclick="numberPlayer()">Commencer une partie</button>
                <a href="../../index.html"><button class="btn">Accueil</button></a>
            </div>
        </div>
`

//Étape 2 configuration du nombre de joueur.
function numberPlayer(){
    document.getElementById("game").innerHTML= `
    <div id="configGame1" class="tracking-in-contract-bck-bottom">
        <div class="flex1">
              <img src="./assets/images/joueurVSpc.png" class="imgConfig" onclick="configGameUnJoueur()" alt="image d'un homme et d'un ordinateur">
            <button class="btn" id="choixUnjoueur" onclick="configGameUnJoueur()">1 joueur</button>
        </div>    
        <div class ="flex1">
            <img src="./assets/images/joueurVSjoueur.png" class="imgConfig" onclick="configGameDeuxJoueurs()" alt="image d'un versus à deux joueurs">
            <button class="btn" id="choixdeuxjoueurs" onclick="configGameDeuxJoueurs()">2 joueurs</button>
        </div>
    </div>
    `
}
//Étape 3 configuration de la partie pour le mode 1 joueur
function configGameUnJoueur(){
    number = 1;
    computer.nom = computer.choiceName();
    document.getElementById("game").innerHTML= `
    <div id="configGame2" class="tracking-in-contract-bck-bottom">
        <span>Joueur 1</span><br>
        <label for="namePlayerOne">Nom :</label>
        <input type="text" name="namePlayerOne" id="namePlayerOne"><br>
        <label for="namePlayerTwo">Nom :</label>
        <span>${computer.nom}</span><br>
        <button class="btn"  onclick="initGame(1)">Valider</button>
    </div>
    `
    document.getElementById("namePlayerOne").focus();
    document.getElementById("namePlayerOne").addEventListener("keydown",(value)=>{
        if(value.key === 'Enter'){
            initGame(1);
            
        }
    })
}
//Étape 3 configuration de la partie pour le mode 2 joueurs
function configGameDeuxJoueurs() {
    number = 2;
    document.getElementById("game").innerHTML= `
    <div id="configGame2" class="tracking-in-contract-bck-bottom">
        <span>Joueur 1</span><br>
        <label for="namePlayerOne">Nom :</label>
        <input type="text" name="namePlayerOne" id="namePlayerOne"><br>
        <span>Joueur 2</span><br>
        <label for="namePlayerTwo">Nom :</label>
        <input type="text" name="namePlayerTwo" id="namePlayerTwo"><br>
        <button class="btn" onclick="initGame(2)">Valider</button>
    </div>
    `
    document.getElementById("namePlayerOne").focus();
    document.getElementById("namePlayerTwo").addEventListener("keydown",(value)=>{
        if(value.key === 'Enter'){
            initGame(2);
            
        }
    })
};

//Étape 4 récupération des informations sur les inputs et lancement de la partie prend en paramètre le nombre de joueur sélectionné

function initGame(number){
    if(number === 1){
        playerOne.nom = playerOne.configPlayer(document.getElementById("namePlayerOne").value);
        reset(1)
    }else if (number === 2){
        playerOne.nom = playerOne.configPlayer(document.getElementById("namePlayerOne").value);
        playerTwo.nom = playerTwo.configPlayer(document.getElementById("namePlayerTwo").value);   
        reset(2);
    }
};
//Étape 5 initialisation des score et du compteur à zéro

function reset(number) {
    if(number === 1){
        playerOne.score = 0;
        computer.score = 0;
        counter = 1;
        choiceOne(1);
    }else if (number === 2){
        playerOne.score = 0;
        playerTwo.score = 0;   
        counter = 1;
        choiceOne(2);
    }
};

//Étape 6 choix joueur 1

function choiceOne(number){

    document.getElementById("game").innerHTML = `
    <div id="playerOne" class="configPlayer tracking-in-contract-bck-bottom">
        <div id="name">${playerOne.nom}</div>
        <div class="win">
            <h3>Manche gagné : ${playerOne.score}</h3>
        </div>
        <div class="choice" id="choice" onkeydown="keydown(key)">`
        if(number === 1){
            document.getElementById("choice").innerHTML=`   
            <input type="image" class="imgChoice" src="./assets/images/pierre.png" value="1" onclick="choiceTwo(value,1)"  alt="image d'une pierre">
            <input type="image" class="imgChoice" src="./assets/images/papier.png" value="2" onclick="choiceTwo(value,1)"  alt="image de papier">
            <input type="image" class="imgChoice" src="./assets/images/ciseaux.png" value="3" onclick="choiceTwo(value,1)" alt="image de ciseaux">
        </div>
    </div>`;
        }else if (number === 2){
            document.getElementById("choice").innerHTML=`   
            <input type="image" class="imgChoice" src="./assets/images/pierre.png" value="1" onclick="choiceTwo(value,2)"  alt="image d'une pierre">
            <input type="image" class="imgChoice" src="./assets/images/papier.png" value="2" onclick="choiceTwo(value,2)"  alt="image de papier">
            <input type="image" class="imgChoice" src="./assets/images/ciseaux.png" value="3" onclick="choiceTwo(value,2)" alt="image de ciseaux">
        </div>
    </div>`; 
        }
       
};

//Étape 7 choix joueur 2 "joueur ou computer"

function choiceTwo(value,number){
    choicePlayerOne = value
    if(!isNaN(choicePlayerOne) && number === 2){
    document.getElementById("game").innerHTML=`
    <div id="playerTwo" class="configPlayer tracking-in-contract-bck-bottom">
        <div id="name">${playerTwo.nom}</div>
        <div class="win">
            <h3>Manche gagné : ${playerTwo.score}</h3>
        
        </div>
        <div class="choice">
            <input type="image" class="imgChoice" src="./assets/images/pierre.png" value="1"  onclick="startGame(value,2)" alt="image d'une pierre">
            <input type="image" class="imgChoice" src="./assets/images/papier.png" value="2"  onclick="startGame(value,2)" alt="image de papier">
            <input type="image" class="imgChoice" src="./assets/images/ciseaux.png" value="3" onclick="startGame(value,2)" alt="image de ciseaux">
        </div>

    </div> `} else if (!isNaN(choicePlayerOne) && number === 1){
        let value = Math.round(Math.random() * (3 - 1) + 1); 
        document.getElementById("game").innerHTML=`
    <div id="playerTwo" class="configPlayer tracking-in-contract-bck-bottom">
        <div id="name">${computer.nom}</div>
        <div class="win">
            <h3>Manche gagné : ${computer.score}</h3>
        
        </div>
        <div class="choice">
            <input type="image" class="imgChoice" src="./assets/images/pierre.png" value="1" alt="image d'une pierre">
            <input type="image" class="imgChoice" src="./assets/images/papier.png" value="2" alt="image de papier">
            <input type="image" class="imgChoice" src="./assets/images/ciseaux.png" value="3" alt="image de ciseaux">
        </div>

    </div> `
    startGame(value);
    }
};

//Étape 8 initialisation de la partie avec les valeurs des joueurs

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

        <div id="playerTwo" class="configPlayer">`
        if(number === 1){
            document.getElementById("playerTwo").innerHTML = `
            <div id="name">${computer.nom}</div>
            <div class="win">
                <h3>Manche gagné : ${computer.score}</h3>
            </div>
            <div class="choice">
                <input type="image" class="img" src="./assets/images/pierre.png" value="1" alt="image d'une pierre">
                <input type="image" class="img" src="./assets/images/papier.png" value="2" alt="image de papier">
                <input type="image" class="img" src="./assets/images/ciseaux.png" value="3" alt="image de ciseaux">
            </div>`
        }else if (number === 2){
            document.getElementById("playerTwo").innerHTML = `
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
    </div>`}
setTimeout(screenThree, 1000);
}
//compte à rebours 3
function screenThree() {
    document.getElementById("count").innerHTML = `
    <div id="manche">
        <h3>Manche numéro ${counter}</h3>
    </div>
    <div >
        <span id="timer">3</span>
    </div>
    `
setTimeout(screenTwo, 1000);
};
//compte à rebours 2
function screenTwo() {
    document.getElementById("count").innerHTML = `
    <div id="manche">
        <h3>Manche numéro ${counter}</h3>
    </div>
    <div >
        <span id="timer">2</span>
    </div>
    `
setTimeout(screenOne, 1000);
};
//compte à rebours1
function screenOne() {
    document.getElementById("count").innerHTML = `   
    <div id="manche">
        <h3>Manche numéro ${counter}</h3>
    </div>
    <div >
        <span id="timer">1</span>
    </div>
    `
setTimeout(screenZero, 1000);
};
//compte à rebours 0
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

//Étape 10 fonction qui désigne le vainqueur de la manche

function result(resOne, resTwo) {

    choicePlayerOne = parseInt(resOne);
    choicePlayerTwo = parseInt(resTwo);
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
        setTimeout(suite, 5000);
    }

    // tous les cas ou le joueur 1 gagne
    else if(choicePlayerOne === 1 && choicePlayerTwo === 3 || choicePlayerOne === 2 && choicePlayerTwo === 1 || choicePlayerOne === 3 && choicePlayerTwo === 2){
        playerOne.score += playerOne.addScore(1);
        screenRes(playerOne);
    }

    // tous les cas ou le joueur 2 gagne
    else if(choicePlayerTwo === 1 && choicePlayerOne ===3 || choicePlayerTwo === 2 && choicePlayerOne === 1 || choicePlayerTwo === 3 && choicePlayerOne === 2){
        if(number === 1){
            computer.score += computer.addScore(1);
            screenRes(computer);
        }else if (number === 2){
            playerTwo.score += playerTwo.addScore(1);
            screenRes(playerTwo);
        }
        
    }
    // affichage du résultat avec  les paramètres du joueur gagnant
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
        setTimeout(suite, 5000);
    }
    // prend tout les paramètres en compte afin de savoir si la partie est terminé ou non
    function suite(){
        // console.log("ici number"+number);  ******Test du nombre de joueur********
        if(counter < 3){
            if(number === 2){
                if(counter == 2 && playerOne.score == 2 || counter == 2 && playerTwo.score == 2){
                    finish(playerOne, playerTwo, number);    
                }else{
                    counter++;
                    choiceOne(number);
                }   
            } else if (number === 1){
                if(counter == 2 && playerOne.score == 2 || counter == 2 && computer.score == 2){
                    finish(playerOne, computer, number);    
                }else{
                    counter++;
                    choiceOne(number);
                }   
            }
        }
        // tant que le score dès deux joueurs sont égaux et que le 3ieme tour est passé il faut départager les joueurs pour avoir un gagnant.
        else if (counter >= 3){
            if(number === 2){
                if(playerOne.score === playerTwo.score){
                    counter++;
                    choiceOne(number);
                }else{
                    finish(playerOne, playerTwo);
                }    
            }else if (number === 1){
                if(playerOne.score === computer.score){
                    counter++;
                    choiceOne(number);
                }else{
                    finish(playerOne, computer);
                } 
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
                    
                    <button class="btn" onclick="numberPlayer()">une nouvelle partie</button>
                    <button class="btn" onclick="reset(${number})">Recommencer une partie</button>
                    <a href="../../index.html"><button class="btn">Accueil</button></a>
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
                    
                    <button class="btn" onclick="numberPlayer()">Une nouvelle partie</button>
                    <button class="btn" onclick="reset(${number})">Recommencer une partie</button>
                    <a href="../../index.html"><button class="btn">Accueil</button></a>
                </div>
            </div>
        `  
    }
}