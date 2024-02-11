let bigContainer = document.querySelector('.bigContainer');

let soundBell = new Audio("assets/sound/clocheBox.mp3");
let soundOfVictory = new Audio("assets/sound/victory.mp3");

let soundOfTraining = new Audio("assets/sound/rocktrainingextrait.mp3");
let soundOfDefeat = new Audio("assets/sound/rockyDéfaite.mp3")

let soundOfRocky_Adrian = new Audio("assets/sound/rockybalboa/adrienne.mp3");
let soundOfRocky_Annonce = new Audio("assets/sound/rockybalboa/annonce.mp3");
let soundOfRocky_AnnonceTwo = new Audio("assets/sound/rockybalboa/annoncebis.mp3");
let soundOfRocky_TakeYouBack = new Audio("assets/sound/rockybalboa/takeyouback.mp3");

let soundOfApollo_Annonce = new Audio("assets/sound/apollocreed/annonce.mp3");
let soundOfApollo_Medical = new Audio("assets/sound/apollocreed/medical.mp3");
let soundOfApollo_EyeOfTiger = new Audio("assets/sound/apollocreed/eyeoftiger.mp3");
let soundOfApollo_SoundTrack = new Audio("assets/sound/apollocreed/soundtrack.mp3");

let soundOfIvan_BreakYou = new Audio("assets/sound/ivandrago/breakyou.mp3");
let soundOfIvan_IfHeDies = new Audio("assets/sound/ivandrago/ifhedies.mp3");
let soundOfIvan_Annonce = new Audio("assets/sound/ivandrago/ivandragoannonce.mp3");
let soundOfIvan_SoundTrack = new Audio("assets/sound/ivandrago/soundtrackdrago.mp3");

let answerUser = document.querySelector('#answerUser');
let computerAnswer = document.querySelector('#computerAnswer');
let result = document.querySelector('#result');
let userChoice = document.querySelectorAll('.userChoice');

let victoryUser = document.querySelector('#victoryUser');
let victoryComputer = document.querySelector('#victoryComputer');
let round = document.querySelector('#round');
let numberOfRound = 0;
let numberOfUserVictory = 0;
let numberOfComputerVictory = 0;

let boxbis = document.querySelectorAll('.boxbis');

//  refaire une partie 
let buttontoDoAgain = document.querySelector('.toDoAgain');
let buttonDontDoAgain = document.querySelector('.dontDoAgain');
let tryAgain = document.querySelector('.tryAgain');

// test modal 
let modal = document.querySelector("#myModal");

let modalImage = document.querySelector(".modal-image");
let modalbis = document.querySelector('.modal');
let sentence = document.querySelector('.sentence');

let numberRandomSound = Math.ceil(Math.random() * 4);

let userRandom = [{
    name: 'Rocky Balboa',
    img: 'rockyBalboa.png',
    imgbis: 'rockymvt.webp',
    sound: [soundOfRocky_Adrian, soundOfRocky_Annonce, soundOfRocky_AnnonceTwo, soundOfRocky_TakeYouBack]
},
{
    name: 'Apollo Creed',
    img: 'appoloCreed.png',
    imgbis: 'creedmvtbis.webp',
    sound: [soundOfApollo_Annonce, soundOfApollo_EyeOfTiger, soundOfApollo_Medical, soundOfApollo_SoundTrack]
},
{
    name: 'Ivan Drago',
    img: 'IvanDrago.png',
    imgbis: 'dragomvtbis.webp',
    sound: [soundOfIvan_Annonce, soundOfIvan_BreakYou, soundOfIvan_IfHeDies, soundOfIvan_SoundTrack]
}];


function playSoundOfDefeat() {
    soundOfDefeat.play();
}
function playSoundOfTraining() {
    soundOfTraining.play();
}
function jouerSonVictory() {
    soundOfVictory.play();
}
function jouerSon() {
    soundBell.play();
}

//  choix de l'utilisateur
var choix = 1;
var choicebis = 1;
for (let u of userChoice) {

    u.addEventListener('click', () => {

        choix = u.getAttribute('choice');

        answerUser.innerHTML = '';
        let newImageBalboa2 = document.createElement('div');
        newImageBalboa2.innerHTML = ` <img class="img-boxer" src="assets/img/${userRandom[choix - 1].img}" alt="${userRandom[choix - 1].name}"/><p>${userRandom[choix - 1].name}</p>`;
        answerUser.appendChild(newImageBalboa2);

        if (choix == 1) {
            for (us of userRandom[0].sound) {
                us.play();
                us.currentTime = 0;
            };
            for (us of userRandom[1].sound) {
                us.pause();
                us.currentTime = 0;
            }
            for (us of userRandom[2].sound) us.pause();

        } else if (choix == 2) {
            for (us of userRandom[0].sound) {
                us.pause();
                us.currentTime = 0;
            };
            for (us of userRandom[1].sound) {
                us.play();
                us.currentTime = 0;
            }
            for (us of userRandom[2].sound)
                us.pause();
            us.currentTime = 0;

        } else if (choix == 3) {
            for (us of userRandom[0].sound) {
                us.pause();
                us.currentTime = 0;
            };
            for (us of userRandom[1].sound) {
                us.pause();
                us.currentTime = 0;
            }
            for (us of userRandom[2].sound)
                us.play(); us.currentTime = 0;
        }

        var randomIndex = Math.floor(Math.random() * userRandom[choix - 1].sound.length)
        // gestion des sons réinitialisation, remettre à 0
        if (randomIndex == 0) {
            userRandom[choix - 1].sound[0].play();
            userRandom[choix - 1].sound[0].currentTime = 0;
            userRandom[choix - 1].sound[1].pause();
            userRandom[choix - 1].sound[1].currentTime = 0;
            userRandom[choix - 1].sound[2].pause();
            userRandom[choix - 1].sound[2].currentTime = 0;
            userRandom[choix - 1].sound[3].pause();
            userRandom[choix - 1].sound[3].currentTime = 0;
        } else if (randomIndex == 1) {
            userRandom[choix - 1].sound[0].pause();
            userRandom[choix - 1].sound[0].currentTime = 0;
            userRandom[choix - 1].sound[1].play();
            userRandom[choix - 1].sound[1].currentTime = 0;
            userRandom[choix - 1].sound[2].pause();
            userRandom[choix - 1].sound[2].currentTime = 0;
            userRandom[choix - 1].sound[3].pause();
            userRandom[choix - 1].sound[3].currentTime = 0;
        } else if (randomIndex == 2) {
            userRandom[choix - 1].sound[0].pause();
            userRandom[choix - 1].sound[0].currentTime = 0;
            userRandom[choix - 1].sound[1].pause();
            userRandom[choix - 1].sound[1].currentTime = 0;
            userRandom[choix - 1].sound[2].play();
            userRandom[choix - 1].sound[2].currentTime = 0;
            userRandom[choix - 1].sound[3].pause();
            userRandom[choix - 1].sound[3].currentTime = 0;
        } else if (randomIndex == 3) {
            userRandom[choix - 1].sound[0].pause();
            userRandom[choix - 1].sound[0].currentTime = 0;
            userRandom[choix - 1].sound[1].pause();
            userRandom[choix - 1].sound[1].currentTime = 0;
            userRandom[choix - 1].sound[2].pause();
            userRandom[choix - 1].sound[2].currentTime = 0;
            userRandom[choix - 1].sound[3].play();
            userRandom[choix - 1].sound[3].currentTime = 0;

        }


    })
    // pour les éléments survolés
    for (let b of boxbis) {
        u.addEventListener('mouseover', () => {

            choix = u.getAttribute('choice');
            choicebis = b.getAttribute('choicebis');

            if ((choicebis == choix)) {
                b.innerHTML = '';
                let newImageMvt = document.createElement('div');
                newImageMvt.innerHTML = ` <img class="img-boxer" src="assets/img/${userRandom[choicebis - 1].imgbis}" alt="${userRandom[choicebis - 1].name}"/>`;
                b.appendChild(newImageMvt);

            }
        })

        u.addEventListener('mouseout', () => {
            choix = u.getAttribute('choice');
            choicebis = b.getAttribute('choicebis');


            if ((choicebis == choix)) {
                b.innerHTML = '';
                let ImageReturn = document.createElement('div');
                ImageReturn.innerHTML = ` <img class="img-boxer" src="assets/img/${userRandom[choicebis - 1].img}" alt="${userRandom[choicebis - 1].name}"/>`;
                b.appendChild(ImageReturn);

            }
        })

    }

}

btnClick.addEventListener('click', () => {
    var numberRandom = Math.ceil(Math.random() * 3);
    for (us of userRandom[2].sound) {
        us.pause();
    }
    for (us of userRandom[0].sound) {
        us.pause();
    }
    for (us of userRandom[1].sound) {
        us.pause();
    }
    jouerSon();

    if (numberOfRound < 12) {

        numberOfRound++;
        round.innerText = numberOfRound;

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
        newImageBalboa.innerHTML = ` <img class="img-boxer" src="assets/img/${userRandom[numberRandom - 1].img}" alt="${userRandom[numberRandom - 1].name}"/><p>${userRandom[numberRandom - 1].name}</p>`;
        computerAnswer.appendChild(newImageBalboa);

        if (result.innerText == "You win!") {
            numberOfUserVictory++;
            victoryUser.innerText = numberOfUserVictory
        }
        if (result.innerText == "KO") {
            numberOfComputerVictory++;
            victoryComputer.innerText = numberOfComputerVictory;
        }

        if (choix == numberRandom) {
            numberOfComputerVictory++;
            victoryComputer.innerText = numberOfComputerVictory;
            numberOfUserVictory++;
            victoryUser.innerText = numberOfUserVictory;
        }

        //    else if (numberOfRound==12){
        //         console.log("blav")
        //       delete  userRandom[0].sound;
        //       delete userRandom[1].sound;
        //       delete userRandom[2].sound;
        //       } 

    }


    if ((numberOfUserVictory > numberOfComputerVictory) && (numberOfRound == 12)) {

        jouerSonVictory();
        soundBell.pause();

        modal.style.visibility = "visible";
        modalImage.style.height = "100vh";
        modalImage.style.backgroundImage = "url(assets/img/imagevictory.jpg)";
        modalbis.style.top = "0px";
        sentence.style.transform = "translateX(2000%)";
        sentence.style.left = "-100%";
        tryAgain.style.opacity = 1;

    } else if ((numberOfUserVictory < numberOfComputerVictory) && (numberOfRound == 12)) {

        playSoundOfDefeat();
        soundBell.pause();
        modal.style.visibility = "visible";
        modalImage.style.backgroundImage = "url(assets/img/defeat.jpg)";
        modalImage.style.backgroundPosition = "bottom";
        modalImage.style.height = "100vh";
        modalbis.style.top = "0px";
        sentence.innerText = 'You have lost';
        sentence.style.left = "-60%";
        sentence.style.transform = "translateX(2000%)"
        tryAgain.style.opacity = 1;
        ;

    }
    else if ((numberOfUserVictory == numberOfComputerVictory) && (numberOfRound == 12)) {

        playSoundOfTraining();
        soundBell.pause();

        modal.style.visibility = "visible";
        modalImage.style.backgroundImage = "url(assets/img/rockytrain.jpg)";
        modalImage.style.height = "100vh";
        modalbis.style.top = "0px";
        sentence.style.left = "-100%";
        sentence.innerText = 'You still have to train';
        sentence.style.transform = "translateX(2000%)";

        tryAgain.style.opacity = 1;
    }

})
//  Rejouer une partie au bout des 12 rounds
// si oui , recherge la page
buttontoDoAgain.addEventListener('click', () => {
    location.reload();

})
// si non, cacher le bouton fight, et remettre à zéro certains paramètres 
buttonDontDoAgain.addEventListener('click', () => {
    modal.style.visibility = "hidden";
    soundOfDefeat.pause();
    soundOfTraining.pause();
    soundOfVictory.pause();
    soundOfDefeat.currentTime = 0;
    soundOfTraining.currentTime = 0;
    soundOfVictory.currentTime = 0;
    btnClick.style.display = 'none';
    result.innerText = '';
    computerAnswer.innerHTML = '';
    answerUser.innerHTML = '';
})