function return_to_normal() {
const elementosBraille = document.querySelectorAll('.braille');
elementosBraille.forEach(elemento => {
elemento.style.fontFamily = 'Braille_6P_Normal';
});
}

function change_to_framed() {
const elementosBraille = document.querySelectorAll('.braille');
elementosBraille.forEach(elemento => {
elemento.style.fontFamily = 'Braille_6P_Framed';
});
}

function change_to_guided() {
const elementosBraille = document.querySelectorAll('.braille');
elementosBraille.forEach(elemento => {
elemento.style.fontFamily = 'Braille_6P_Guided';
});
}

function change_to_guided_framed() {
const elementosBraille = document.querySelectorAll('.braille');
elementosBraille.forEach(elemento => {
elemento.style.fontFamily = 'Braille_6P_Guided_Framed';
});
}

document.addEventListener('DOMContentLoaded', function load_content() {
document.getElementById('normal_font').addEventListener('click', return_to_normal);
document.getElementById('guided_font').addEventListener('click', change_to_guided);
document.getElementById('frammed_font').addEventListener('click', change_to_framed);
document.getElementById('guidedframed').addEventListener('click', change_to_guided_framed);
});