// Créer une liste avec trois éléments (Pierre, Feuille, Ciseaux).

// Ajouter un bouton « Shifumi ! ».

// Lorsque l'on clique sur « Shifumi ! », choisir un élément au hasard (Pierre, Feuille ou Ciseaux). Le comparer à l'élément choisi par le joueur pour voir qui a gagné entre l'humain et la machine.

// Pour ce TP, laissez libre cours à votre imagination en proposant une version originale du célèbre jeu!

// Bonus : Ajouter un compteur de victoires et de défaites et afficher le pourcentage de victoire contre l'ordinateur.
let bigContainer= document.querySelector('.bigContainer');
let soundBell = new Audio("assets/sound/clocheBox.mp3");
let soundOfVictory= new Audio("assets/sound/victory.mp3");

let soundOfTraining = new Audio("assets/sound/rocktrainingextrait.mp3.mp3");
let soundOfDefeat = new Audio ("assets/sound/rockyDéfaite.mp3")

let answerUser = document.querySelector('#answerUser');
let computerAnswer = document.querySelector('#computerAnswer');
let result = document.querySelector('#result');
let userChoice = document.querySelectorAll('.userChoice');

let victoryUser= document.querySelector('#victoryUser');
let victoryComputer= document.querySelector('#victoryComputer');
let round= document.querySelector('#round');
let numberOfRound=0;
let numberOfUserVictory=0;
let numberOfComputerVictory=0;

let buttonBalboa= document.querySelector('#buttonBalboa');
let buttonDrago= document.querySelector('#buttonDrago');
let buttonCreed= document.querySelector('#buttonCreed');
let boxBalboa=document.querySelector('#boxBalboa');
let boxDrago=document.querySelector('#boxDrago');
let boxCreed=document.querySelector('#boxCreed');

let userRandom = [{
    name : 'Rocky Balboa',
    img : 'rockyBalboa.png'
}, {
    name : 'Apollo Creed',
    img : 'appoloCreed.png'
}, {
    name : 'Ivan Drago',
    img : 'IvanDrago.png'
}];

function playSoundOfDefeat(){
    soundOfDefeat.play();
}
function playSoundOfTraining(){
    soundOfTraining.play();
}
function jouerSonVictory (){
    soundOfVictory.play();
}
function jouerSon() {
    soundBell.play();
}

 buttonBalboa.addEventListener('mouseover',()=>{
    boxBalboa.innerHTML='';
    let newImageRocky = document.createElement("div");
    newImageRocky.innerHTML=`<div><img src="assets/img/rockymvt.png"alt="image rocky "></div> ` ;
    boxBalboa.appendChild(newImageRocky);
    
 });
 buttonBalboa.addEventListener('mouseout',()=>{
    boxBalboa.innerHTML='';
    boxBalboa.innerHTML=`<div><img src="assets/img/rockyBalboa.png"alt="image rocky "></div> ` 

 })
 buttonDrago.addEventListener('mousemove',()=>{
    boxDrago.innerHTML='';
    let newImageDrago = document.createElement("div");
    newImageDrago.innerHTML=`<div><img src="assets/img/dragomvtbis.png"alt="image Drago coup de poing"></div> ` ;
    boxDrago.appendChild(newImageDrago);
    
 });

 buttonCreed.addEventListener('mousemove',()=>{
    boxCreed.innerHTML='';
    let newImageCreed = document.createElement("div");
    newImageCreed.innerHTML=`<div><img src="assets/img/creedmvtbis.png"alt="image Creed coup de poing"></div> ` ;
    boxCreed.appendChild(newImageCreed);
 });



var choix = 1;
for (let u of userChoice) {
    u.addEventListener('click', () => {
        choix = u.getAttribute('choice');
        answerUser.innerHTML = '';
        //  answerUser.innerText = u.innerText;
        let newImageBalboa2 = document.createElement('div');
        newImageBalboa2.innerHTML = ` <img src="assets/img/${userRandom[choix - 1].img}" alt="${userRandom[choix - 1].name}"/><p>${userRandom[choix - 1].name}</p>`;
        answerUser.appendChild(newImageBalboa2);
    })
}

btnClick.addEventListener('click', () => {
    let numberRandom = Math.ceil(Math.random() * 3);
    jouerSon();

    if  (numberOfRound <12){ 
        numberOfRound++;
        round.innerText= numberOfRound; 
    
    // numberOfRound++;
    
    
    if ((choix == 1) && (numberRandom == 2)) {
        result.innerText = "KO";
    } else if ((choix == 1) && (numberRandom == 3)) {
        result.innerText = "You win!";
    } else if ((choix == 2) && (numberRandom == 1)) {
        result.innerText = "You win";
    } else if ((choix == 2) && (numberRandom == 3)) {
        result.innerText = "KO";
    } else if ((choix == 3) && (numberRandom == 1)) {
        result.innerText = "KO";
    } else if ((choix == 3) && (numberRandom == 2)) {
        result.innerText = "You win!";
    } else if (choix == numberRandom) {
        result.innerText = "Double KO";
    };



computerAnswer.innerHTML = ''
        let newImageBalboa = document.createElement('div');
        newImageBalboa.innerHTML = ` <img src="assets/img/${userRandom[numberRandom - 1].img}" alt="${userRandom[numberRandom - 1].name}"/><p>${userRandom[numberRandom - 1].name}</p>`;
        computerAnswer.appendChild(newImageBalboa);

   if (result.innerText == "You win!"){
     numberOfUserVictory++;
     victoryUser.innerText=numberOfUserVictory
   }
   if (result.innerText == "KO"){
    numberOfComputerVictory++;
    victoryComputer.innerText=numberOfComputerVictory;
   }

   if (choix == numberRandom){
    numberOfComputerVictory++;
    victoryComputer.innerText=numberOfComputerVictory;
    numberOfUserVictory++;
     victoryUser.innerText=numberOfUserVictory;
   }

   
   
   }
   if ((numberOfUserVictory>numberOfComputerVictory )&& (numberOfRound==12)){
    jouerSonVictory ();
    soundBell.pause();
    // bigContainer.style.backgroundImage="url('assets/img/imagevictory.jpg')";
    result.innerHTML='';
    let newImageVictory = document.createElement("div");
    
    newImageVictory.innerHTML=`<div><img src="assets/img/imagevictory.jpg" alt="image victoire"<p>Match gagné!</p></div> ` ;
    result.appendChild(newImageVictory);
   } else if((numberOfUserVictory<numberOfComputerVictory )&& (numberOfRound==12)) {
    playSoundOfDefeat(); 
    soundBell.pause();
     result.innerHTML='';
    let newImageDefaite = document.createElement("div");
    
     newImageDefaite.innerHTML=`<div><img src="assets/img/defaite.jpg" alt="image victoire"<p>Match perdu!</p></div> ` ;
     result.appendChild(newImageDefaite);

   } else if ((numberOfUserVictory==numberOfComputerVictory )&& (numberOfRound==12)){
    playSoundOfTraining();
     soundBell.pause();
    
     result.innerHTML='';
     let newImageTraining = document.createElement("div");
     newImageTraining.innerHTML=`<div><img src="assets/gif/rockyTraining.gif" alt="image victoire"<p>You Must Train !</p></div> ` ;
     result.appendChild(newImageTraining);
}
}

)
