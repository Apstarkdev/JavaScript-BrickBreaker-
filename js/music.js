


// window.addEventListener('click', () => {
//     document.getElementById('song').play();
// })

const button = document.getElementById('play');
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








