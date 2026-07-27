let m = 0;
let c = 100;

function setup(){
    createCanvas(1400,900);
    textSize(50);
}

function draw(){
    background(220);
    fill("gold");
    text("残り: " + c + "枚",100,50);
    if(m == 0){
        fill(0,0,0)
        text("Q=ブラックジャック",100,150);
    }
    if(m == 1){

    }
}

function keyPressed(){
    if(key == "q"){
        m = 1;
    }
}
