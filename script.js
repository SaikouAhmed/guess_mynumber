'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = Number(document.querySelector(".score").textContent);
let highScore = 0


document.querySelector(".check").addEventListener("click", function () {
    const inputValue = Number(document.querySelector(".guess").value);

    if (inputValue === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Félicitations";
        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    } else if (inputValue > secretNumber) {
        if (score > 0) {
            score--;
            document.querySelector(".message").textContent = "🔼 Le nombre est trop grand ";
        } else {
            document.querySelector(".message").textContent = "💥 Vous avez perdu la partie "
            document.querySelector("body").style.backgroundColor = "red";
            score = 0;
        }
        document.querySelector(".score").textContent = score;
    } else {
        score--;
        if (score > 0) {
            document.querySelector(".message").textContent = "🔽 Le nombre est trop petit ";
        } else {
            document.querySelector(".message").textContent = "💥 Vous avez perdu la partie "
            document.querySelector("body").style.backgroundColor = "red";
            score = 0;
        }
        document.querySelector(".score").textContent = score;
    }
});

///////////////////////////////////////
// Défi de Codage
/*
Implémentez une fonctionnalité de redémarrage du jeu, de sorte que le joueur puisse faire une nouvelle supposition ! Voici comment procéder :

1. Sélectionnez l'élément avec la classe 'again' et attachez-y un gestionnaire d'événement de clic.
2. Dans la fonction du gestionnaire, restaurez les valeurs initiales des variables score et secretNumber.
3. Restaurez les conditions initiales du message, du nombre, du score et du champ de saisie de la supposition.
4. Restaurez également la couleur d'arrière-plan originale (#222) et la largeur initiale du nombre (15rem).

BONNE CHANCE 😀
*/

document.querySelector(".again").addEventListener("click", function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Commencer la devinette";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";

});