// Créer une liste avec trois éléments (Pierre, Feuille, Ciseaux).

// Ajouter un bouton « Shifumi ! ».

// Lorsque l'on clique sur « Shifumi ! », choisir un élément au hasard (Pierre, Feuille ou Ciseaux). Le comparer à l'élément choisi par le joueur pour voir qui a gagné entre l'humain et la machine.

// Pour ce TP, laissez libre cours à votre imagination en proposant une version originale du célèbre jeu!

// Bonus : Ajouter un compteur de victoires et de défaites et afficher le pourcentage de victoire contre l'ordinateur.
let bigContainer= document.querySelector('.bigContainer');
let soundBell = new Audio("assets/sound/clocheBox.mp3");
let soundOfVictory= new Audio("assets/sound/victory.mp3");

let soundOfTraining = new Audio("assets/sound/rocktrainingextrait.mp3");
let soundOfDefeat = new Audio ("assets/sound/rockyDéfaite.mp3")

let soundOfRocky_Adrian = new Audio ("assets/sound/rockybalboa/adrienne.mp3");
let soundOfRocky_Annonce = new Audio ("assets/sound/rockybalboa/annonce.mp3");
let soundOfRocky_AnnonceTwo = new Audio ("assets/sound/rockybalboa/annoncebis.mp3");
let soundOfRocky_TakeYouBack= new Audio ("assets/sound/rockybalboa/takeyouback.mp3");

let soundOfApollo_Annonce= new Audio ("assets/sound/apollocreed/annonce.mp3");
let soundOfApollo_Medical= new Audio ("assets/sound/apollocreed/medical.mp3");
let soundOfApollo_EyeOfTiger= new Audio ("assets/sound/apollocreed/eyeoftiger.mp3");
let soundOfApollo_SoundTrack= new Audio ("assets/sound/apollocreed/soundtrack.mp3");

let soundOfIvan_BreakYou= new Audio ("assets/sound/ivandrago/breakyou.mp3");
let soundOfIvan_IfHeDies= new Audio("assets/sound/ivandrago/ifhedies.mp3");
let soundOfIvan_Annonce = new Audio ("assets/sound/ivandrago/ivandragoannonce.mp3");
let soundOfIvan_SoundTrack= new Audio ("assets/sound/ivandrago/soundtrackdrago.mp3");

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
let boxbis=document.querySelectorAll('.boxbis');

//  refaire une partie 
let buttontoDoAgain=document.querySelector('.toDoAgain');
let buttonDontDoAgain=document.querySelector('.DontDoAgain');

// function playSoundOfAdrian (){
// soundOfRocky_Adrian.play();
// }

// function playSoundOfTakeYouBack(){
//     soundOfRocky_TakeYouBack.play();
// }

// function playSoundOfAnnonce(){
//     soundOfRocky_Annonce.play();
// }

// function playSoundOfAnnonceTwo(){
//     soundOfRocky_AnnonceTwo.play();
// }
let soundOfHandleOne= new Audio ("assets/sound/coup depoing/1970.mp3");
let soundOfHandleTwo= new Audio ("assets/sound/coup depoing/1976.mp3")
let soundOfHandleThree= new Audio ("assets/sound/coup depoing/3454.mp3");


// var randomIndex = Math.floor(Math.random() * userRandom[choix-1].sound.length)
// var tableaubis= userRandom[choix-1].sound[randomIndex];
// tableaubis.play();

// test modal 
let modal = document.querySelector("#myModal");

let modalImage= document.querySelector(".modal-image");
let modalbis=document.querySelector('.modal');
let sentence=document.querySelector('.sentence');

let numberRandomSound = Math.ceil(Math.random() * 4);
let userRandom = [{
    name : 'Rocky Balboa',
    img : 'rockyBalboa.png',
    imgbis:'rockymvt.png',
    sound:[soundOfRocky_Adrian,soundOfRocky_Annonce,soundOfRocky_AnnonceTwo,soundOfRocky_TakeYouBack]
},
 {
    name : 'Apollo Creed',
    img : 'appoloCreed.png',
    imgbis:'creedmvtbis.png',
    sound:[soundOfApollo_Annonce,soundOfApollo_EyeOfTiger,soundOfApollo_Medical,soundOfApollo_SoundTrack]
}, 
{
    name : 'Ivan Drago',
    img : 'IvanDrago.png',
    imgbis:'dragomvtbis.png',
    sound:[soundOfIvan_Annonce,soundOfIvan_BreakYou,soundOfIvan_IfHeDies,soundOfIvan_SoundTrack]
}];

// for (s of userRandom[1].sound){
// s.play();
// }
let soundOfHandle = [soundOfHandleOne,soundOfHandleTwo,soundOfHandleThree];
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

// var isPlaying = false;
// buttonBalboa.addEventListener('mouseover',()

var choix = 1;
var choicebis=1;
for (let u of userChoice) {
    // u.addEventListener('mouseover',()=>{ numberOfHandleSound.play();})
    u.addEventListener('click', () => {
        // function handleClick() {
        //     console.log("Clic !");
        //   } 
        choix = u.getAttribute('choice');
        
         answerUser.innerHTML = '';
         let newImageBalboa2 = document.createElement('div');
         newImageBalboa2.innerHTML = ` <img src="assets/img/${userRandom[choix - 1].img}" alt="${userRandom[choix - 1].name}"/><p>${userRandom[choix - 1].name}</p>`;
         answerUser.appendChild(newImageBalboa2);
    
           if(choix==1){
              for  (us of userRandom[0].sound){
                us.play();
                us.currentTime=0;
              };
              for (us of userRandom[1].sound){
                us.pause();
                us.currentTime=0;
              }
              for (us of userRandom[2].sound)us.pause(); 
              
           } else if (choix==2){
            for  (us of userRandom[0].sound){
                us.pause();
                us.currentTime=0;
              };
              for (us of userRandom[1].sound){
                us.play();
                us.currentTime=0;
              }
              for (us of userRandom[2].sound)
              us.pause(); 
              us.currentTime=0;

            }else if (choix==3){
            for  (us of userRandom[0].sound){
                us.pause();
                us.currentTime=0;
              };
              for (us of userRandom[1].sound){
                us.pause();
                us.currentTime=0;
              }
              for (us of userRandom[2].sound)
              us.play();us.currentTime=0; 
          }
 
  var randomIndex = Math.floor(Math.random() * userRandom[choix-1].sound.length)
//   var tableaubis= userRandom[choix-1].sound[randomIndex];

// userRandom[choix-1].sound[1].play()
if (randomIndex ==0){
 userRandom[choix-1].sound[0].play();
 userRandom[choix-1].sound[0].currentTime=0;
 userRandom[choix-1].sound[1].pause();
 userRandom[choix-1].sound[1].currentTime=0;
 userRandom[choix-1].sound[2].pause();
 userRandom[choix-1].sound[2].currentTime=0;
 userRandom[choix-1].sound[3].pause();
 userRandom[choix-1].sound[3].currentTime=0;
 }else if (randomIndex==1) {
    userRandom[choix-1].sound[0].pause();
    userRandom[choix-1].sound[0].currentTime=0;
     userRandom[choix-1].sound[1].play();
     userRandom[choix-1].sound[1].currentTime=0;
     userRandom[choix-1].sound[2].pause();
     userRandom[choix-1].sound[2].currentTime=0;
     userRandom[choix-1].sound[3].pause();
     userRandom[choix-1].sound[3].currentTime=0;
 }else if (randomIndex==2){
     userRandom[choix-1].sound[0].pause();
     userRandom[choix-1].sound[0].currentTime=0;
 userRandom[choix-1].sound[1].pause();
 userRandom[choix-1].sound[1].currentTime=0;
 userRandom[choix-1].sound[2].play();
 userRandom[choix-1].sound[2].currentTime=0;
 userRandom[choix-1].sound[3].pause();
 userRandom[choix-1].sound[3].currentTime=0;
 }else if (randomIndex==3){
     userRandom[choix-1].sound[0].pause();
     userRandom[choix-1].sound[0].currentTime=0;
 userRandom[choix-1].sound[1].pause();
 userRandom[choix-1].sound[1].currentTime=0;
 userRandom[choix-1].sound[2].pause();
 userRandom[choix-1].sound[2].currentTime=0;
 userRandom[choix-1].sound[3].play();
 userRandom[choix-1].sound[3].currentTime=0;

 }


    })

 for (let b of boxbis){
        u.addEventListener('mouseover',()=>{
         
             choix = u.getAttribute('choice');
          choicebis=  b.getAttribute('choicebis');
          
         if ((choicebis==choix)){
            b.innerHTML='';
            let newImageMvt = document.createElement('div');
            newImageMvt.innerHTML = ` <img src="assets/img/${userRandom[choicebis - 1].imgbis}" alt="${userRandom[choicebis - 1].name}"/>`;
            b.appendChild(newImageMvt);
        
         }})

         u.addEventListener('mouseout',()=>{   
            choix = u.getAttribute('choice');
            choicebis=  b.getAttribute('choicebis');
 

            if ((choicebis==choix)){
                b.innerHTML='';
                let ImageReturn = document.createElement('div');
                ImageReturn.innerHTML = ` <img src="assets/img/${userRandom[choicebis - 1].img}" alt="${userRandom[choicebis - 1].name}"/>`;
                b.appendChild(ImageReturn);
               
            }})
        
        }

    }
     
btnClick.addEventListener('click', () => {
    var numberRandom = Math.ceil(Math.random() * 3); 
    for (us of userRandom[2].sound){
        us.pause();
    }
    for (us of userRandom[0].sound){
        us.pause();
    }
    for (us of userRandom[1].sound){
        us.pause();
    }
    jouerSon();

    if  (numberOfRound <12){
         
         numberOfRound++;
        round.innerText= numberOfRound; 
    
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

//    else if (numberOfRound==12){
//         console.log("blav")
//       delete  userRandom[0].sound;
//       delete userRandom[1].sound;
//       delete userRandom[2].sound;
//       } 
   
   }
   
   
   if ((numberOfUserVictory>numberOfComputerVictory )&& (numberOfRound==12)){
   
    jouerSonVictory ();
    soundBell.pause();
    // result.innerHTML='';
    // let newImageVictory = document.createElement("div");
    
    // newImageVictory.innerHTML=`<div><img src="assets/img/imagevictory.jpg" alt="image victoire"<p>Match gagné!</p></div> ` ;
    // result.appendChild(newImageVictory);
            
    modal.style.visibility = "visible";
    modalImage.style.height="100vh";
    modalImage.style.backgroundImage="url(assets/img/imagevictory.jpg)";
   modalbis.style.top="0px";
   sentence.style.transform="translateX(2000%)";
   sentence.style.left="-100%"; 
 
     
   } else if((numberOfUserVictory<numberOfComputerVictory )&& (numberOfRound==12)) {
    
    playSoundOfDefeat(); 
    soundBell.pause();
    
    //  result.innerHTML='';
    // let newImageDefaite = document.createElement("div");
    
    //  newImageDefaite.innerHTML=`<div><img src="assets/img/defaite.jpg" alt="image victoire"<p>Match perdu!</p></div> ` ;
    //  result.appendChild(newImageDefaite);
     modal.style.visibility = "visible";
     modalImage.style.backgroundImage="url(assets/img/defeat.jpg)";
     modalImage.style.backgroundPosition="bottom";
     modalImage.style.height="100vh";
    modalbis.style.top="0px";
    sentence.innerText='You have lost';
    sentence.style.left="-60%";
    sentence.style.transform="translateX(2000%)"
 
    ; 
       
     }
    else if ((numberOfUserVictory==numberOfComputerVictory )&& (numberOfRound==12)){
   
    playSoundOfTraining();
     soundBell.pause();
     
    //  result.innerHTML='';
    //  let newImageTraining = document.createElement("div");
    //  newImageTraining.innerHTML=`<div><img src="assets/gif/rockyTraining.gif" alt="image victoire"<p>You Must Train !</p></div> ` ;
    //  result.appendChild(newImageTraining);
     modal.style.visibility = "visible";
     modalImage.style.backgroundImage="url(assets/img/imagevictory.jpg)";
     modalImage.style.height="100vh";
    modalbis.style.top="0px";
    sentence.style.left="-150%";
    sentence.innerText='You still have to train';
    sentence.style.transform="translateX(2000%)";
    // document.body.style.backgroundImage = "url('img_tree.png')"; 
  
}

})

buttontoDoAgain.addEventListener('click',()=>{
    victoryComputer.innerText=0;
    victoryUser.innerText=0;
    round.innerText=0;
    result.innerText='';
    computerAnswer.innerHTML = '';
    answerUser.innerHTML='';
    numberOfRound=0;
    numberOfUserVictory=0;
    numberOfComputerVictory=0;
    modalImage.style.height="0vh";

    modal.style.visibility="hidden";
  
   
   
   }) 

  



// for (let e of tableau){
   