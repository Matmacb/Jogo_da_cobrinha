let canvas = document.getElementById("Snake");
let context = canvas.getContext("2d");
let box = 32;
let Snake = [];
Snake[0] = {
    x:8*box,
    y:8*box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}


function CriarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function Criarcobrinha(){
    for(i=0;i<Snake.length; i++){
        context.fillStyle = "grenn";
        context.fillRect(Snake[i].x, Snake[i].y,box,box);
    }
}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
} 

function IniciarJogo(){
    if(Snake[0].x > 15 * box && direction == "right") Snake[0].x = 0;
    if(Snake[0].x < 0 && direction == "left") Snake[0].x = 16 * box;
    if(Snake[0].y > 15 * box && direction == "down") Snake[0].y = 0;
    if(Snake[0].y < 0 && direction == "up") Snake[0].y = 16 * box;

    for(i = 1; i < Snake.length; i++){
        if(Snake[0].x == Snake[i].x && Snake[0].y == Snake[i].y){
            clearInterval(jogo);
            alert('Gamer Over :(');
        }
    }

    CriarBG();
    Criarcobrinha();
    drawFood();

    let SnakeX = Snake[0].x;
    let SnakeY = Snake[0].y;

    if(direction ==  "right") SnakeX += box;
    if(direction == "left") SnakeX -= box;
    if(direction =="up") SnakeY -= box;
    if(direction == "down") SnakeY += box;

    if(SnakeX != food.x || SnakeY != food.y){
        Snake.pop();
    }
    else{food.x = Math.floor(Math.random() * 15 + 1) * box;
         food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    Snake.pop();

    let newHead = {
        x: SnakeX,
        y: SnakeY,
    }
    Snake.unshift(newHead);
}

let Jogo = setInterval(IniciarJogo, 100);