var nbEssai = document.querySelector(".nbEssai");
var essai = 10;
var propo = document.querySelector('.propo');
var but = randomNumber(0, 100);
var indice = document.querySelector('.indice');
var game = document.querySelector('.game');
var recap = document.querySelector('.recap');
var gameover = document.querySelector('.gameover');

console.log(but);

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validate() {
    var regex = /^([0-9]|([1-9][0-9])|100)$/;
    var nan = isNaN(propo.value);
    if (!regex.test(propo.value) || nan) {
        alert("Veuillez entrer un chiffre entre 0 et 100");
    } else if (propo.value < but) {
        indice.classList.add("superieur");
        indice.classList.remove("inferieur");
        essai--;
        nbEssai.innerHTML = "Il vous reste " + essai + " essai(s)";
    } else if (propo.value > but) {
        indice.classList.add("inferieur");
        indice.classList.remove("superieur");
        essai--;
        nbEssai.innerHTML = "Il vous reste " + essai + " essai(s)";
    } else if (propo.value == but) {
        alert("bravo!!!!");
        recap.style.display = "block";
        game.style.display = "none";
    } if (essai == 0) {
        game.style.display = "none";
        gameover.style.display = "block";
    }
}

function rejouer() {
    window.location.reload();
}
