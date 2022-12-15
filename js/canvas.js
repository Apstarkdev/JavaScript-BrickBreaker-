const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 5;
let dy = -1;                         //ACTIVAR PARA FUNCIONAR

const puntajeFinal = 2000;              // Puntaje necesario para terminar el nivel

// Variables Jugador
const hitbox_Bola = 10;
const jugadorHeight = 15;
const jugadorWidth = 130;
let jugadorX = (canvas.width - jugadorWidth) / 2;
let izquierdaON = false;
let derechaON = false;
// Ladrillos
const ladrilloRowCount = 7;      //7
const ladrilloColumnCount = 15;   //15
const ladrilloWidth = 75;
const ladrilloHeight = 30;
const ladrilloPadding = 10;
const ladrilloOffsetTop = 40;
const ladrilloOffsetLeft = 18;






// Funcion de ladrillos   // Desaparecer
const ladrillos = [];
for (let c = 0; c < ladrilloColumnCount; c++) {
    ladrillos[c] = [];
    for (let r = 0; r < ladrilloRowCount; r++) {
        ladrillos[c][r] = { x: 0, y: 0, status: 1 };
    }
}


// Colision de ladrillos

function ColisionDeLadrillos() {
    for (let c = 0; c < ladrilloColumnCount; c++) {
        for (let r = 0; r < ladrilloRowCount; r++) {
            const b = ladrillos[c][r];
            if (b.status == 1) {
                if(
                    x > b.x &&
                    x < b.x + ladrilloWidth &&
                    y > b.y &&
                    y < b.y + ladrilloHeight
                ) {
                    dy = -dy;
                    b.status = 0;
                    puntaje +=100;
                    dx += 0.54                                   // INCREMENTO DE VELOCIDAD DE LA BOLA (MANIPULARLO CAMBIARA EL PATRON DEL NIVEL)
                    dy += 0.4                                    // INCREMENTO ANGULO DE LA BOLA (MANIPULARLO CAMBIARA EL PATRON DEL NIVEL)

                    if (puntaje  === puntajeFinal) {             
                        hasGanado();
                        dx = 0
                        dy= 0
                        // JUEGO GANADO
                        // document.location.reload();
                        // clearInterval(interval);

                    }
                    
                }
            }
        }
    }
}









function drawBricks() {
    for (let c = 0; c < ladrilloColumnCount; c++) {
        for (let r = 0; r < ladrilloRowCount; r++) {
            if (ladrillos[c][r].status === 1) {
                var ladrilloX = (c * (ladrilloWidth + ladrilloPadding)) + ladrilloOffsetLeft;
                var ladrilloY = (r * (ladrilloHeight + ladrilloPadding)) + ladrilloOffsetTop;
                ladrillos[c][r].x = ladrilloX;
                ladrillos[c][r].y = ladrilloY;
                ctx.beginPath();
                ctx.rect(ladrilloX, ladrilloY, ladrilloWidth, ladrilloHeight);
                ctx.fillStyle = "#ff0044";
                ctx.fill();
                ctx.closePath();
        }
    }
}}







function DibujoBola(){
    ctx.beginPath();
    ctx.arc(x, y, hitbox_Bola, 0, Math.PI * 2, false);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.strokeStyle = "#ff0044"
    ctx.stroke();
    ctx.closePath();
}

function DibujoJugador() {
    ctx.beginPath();
    ctx.rect(jugadorX, canvas.height - jugadorHeight, jugadorWidth, jugadorHeight);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}

//Puntaje
let puntaje = 0;



function drawScore() {
    ctx.font = "26px Poppins";
    ctx.fillStyle = "yellow";
    ctx.fillText(`SCORE: ${puntaje}`, 1070, 27);
}





function draw() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    DibujoBola()
    DibujoJugador()
    drawBricks()
    ColisionDeLadrillos()
    drawScore()
    x += dx;
    y += dy;
    if (x + dx > canvas.width - hitbox_Bola || x + dx < hitbox_Bola) {
        dx = -dx;
    }
    if (y + dy < hitbox_Bola) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - hitbox_Bola) {
        if (x > jugadorX && x < jugadorX + jugadorWidth) {
            dy = -dy;
        }
        else {
            bloqueEstado();
            
            clearInterval(interval); 
        }
    }
    if (derechaON && jugadorX < canvas.width - jugadorWidth) {
        jugadorX += 6.2;
    }
    else if (izquierdaON && jugadorX > 0) {
        jugadorX -= 6.2;
    }
}






var interval = setInterval(draw, 7);
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        derechaON = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        izquierdaON = true;
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        derechaON = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        izquierdaON= false;
    }
}











