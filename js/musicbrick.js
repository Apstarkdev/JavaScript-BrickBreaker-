


// window.addEventListener('click', () => {
//     document.getElementById('song').play();
// })

const button = document.querySelector('button');
var musicState = false;


button.addEventListener('click', () => {
    musicStates()
    button.classList.toggle('active')
})



function musicStates(){
if(musicState) {
    document.getElementById('song').pause();
    
}else{
    document.getElementById('song').play();
    colorState = true;
} 
    musicState = !musicState
} 



// const button2 = document.querySelector('.play2',musicStates);
// var musicState = false;
// button2.addEventListener('click',)

// function musicStates(){
//     button2.classList.toggle('active')
//     if(musicState) {
//     document.getElementById('song').pause();
    
//     }else{
//     document.getElementById('song').play();
//     colorState = true;
//     } 
//     musicState = !musicState
// }


















const difuminado = document.querySelector('.difuminado');
const bloque2 = document.querySelector('.bloque');
const texto2 = document.querySelector('.alerta');
const btnRetry = document.querySelector('.btn-3');
const btnMenu = document.querySelector('.btn-4');
bloque2.addEventListener('click',bloqueEstado );

function bloqueEstado(){
    if(bloque2.classList.contains('activo')){
        bloque2.classList.remove('activo');
        texto2.classList.remove('activo');
        difuminado.classList.remove('activo');
        btnRetry.classList.remove('activo');
        btnMenu.classList.remove('activo');
    }else{
        bloque2.classList.add('activo');
        texto2.classList.add('activo');
        difuminado.classList.add('activo');
        btnRetry.classList.add('activo');
        btnMenu.classList.add('activo');
    }
}




function hasGanado() {
    if (bloque2.classList.contains('activo')) {
        bloque2.classList.remove('activo');
        texto2.classList.remove('activo');
        difuminado.classList.remove('activo');
        btnRetry.classList.remove('activo');
        btnMenu.classList.remove('activo');
    } else {
        texto2.textContent = 'LEVEL WIN'
        bloque2.classList.add('activo');
        texto2.classList.add('activo');
        difuminado.classList.add('activo');
        btnRetry.classList.add('activo');
        btnMenu.classList.add('activo');
    }
}








// const btn3A = document.querySelector('.btn-3')

// btn3A.addEventListener('click',musicaRetry)

// function musicaRetry(){
//     document.getElementById('song').play();
// }


// if (btn3A.classList.contains('activo')) {

// }