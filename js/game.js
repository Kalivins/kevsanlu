var nbEssai = document.querySelector(".nbEssai");
var essai = 10;
var propo = document.querySelector('.propo');
var but = randomNumber(0, 100);
var indice = document.querySelector('.indice');
var start = document.querySelector('.start');
var game = document.querySelector('.game');
var recap = document.querySelector('.recap');
var gameover = document.querySelector('.gameover');
var essaiUtilise = 10 - essai;

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
        nbEssai.innerHTML = "Il vous reste <strong>" + essai + "</strong> essai(s)";
        propo.style.border = "solid red 1px";
        propo.classList.add("animated");
        propo.classList.add("shake");
        propo.classList.remove("wobble");
        itemDelete();
        var crack = document.querySelector('.crack');
        crack.play();
    } else if (propo.value > but) {
        indice.classList.add("inferieur");
        indice.classList.remove("superieur");
        essai--;
        nbEssai.innerHTML = "Il vous reste " + essai + " essai(s)";
        propo.style.border = "solid red 1px";
        propo.classList.add("wobble");
        propo.classList.remove("shake");
        itemDelete();
        var crack = document.querySelector('.crack');
        crack.play();
    } else if (propo.value == but) {
        propo.style.border = "solid green 1px";
        game.style.display = "none";
        recap.style.display = "block";
        var audio = document.querySelector('.win');
        audio.play();
    }
    
    
    if (essai == 0) {
        game.style.display = "none";
        gameover.style.display = "block";
        var audioover = document.querySelector('.audioover');
        audioover.play();
    }
}

function switchDiv(from, to) {
    from.classList.remove("zoomIn");
    removeFadeOut(from, 500);
    to.classList.add("fadeIn");
    to.style.display = "block";
}

function rejouer() {
    window.location.reload();
}

function removeFadeOut(el, speed) {
    var seconds = speed / 1000;
    el.style.transition = "opacity " + seconds + "s ease";

    el.style.opacity = 0;
    setTimeout(function () {
        el.parentNode.removeChild(el);
    }, speed);
}

function itemDelete() {
    var coffee = document.querySelector('.cafe');
    setTimeout(function () {
        coffee.removeChild(coffee.lastElementChild);
    }, 400);
}