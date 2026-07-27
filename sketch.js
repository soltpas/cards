let m = 0;
let c = 100;
let si;
let sii;
let siii;
let siv;
let sv;
let svi;
let svii;
let sviii;
let six;
let sx;
let sxi;
let sxii;
let sxiii;
let qi;
let qii;
let qiii;
let qiv;
let qv;
let qvi;
let qvii;
let qviii;
let qix;
let qx;
let qxi;
let qxii;
let qxiii;
let hi;
let hii;
let hiii;
let hiv;
let hv;
let hvi;
let hvii;
let hviii;
let hix;
let hx;
let hxi;
let hxii;
let hxiii;
let di;
let dii;
let diii;
let div;
let dv;
let dvi;
let dvii;
let dviii;
let dix;
let dx;
let dxi;
let dxii;
let dxiii;
let j;
let jj;

function preload(){
    const names = [
        "si","sii","siii","siv","sv","svi","svii","sviii","six","sx","sxi","sxii","sxiii",
        "qi","qii","qiii","qiv","qv","qvi","qvii","qviii","qix","qx","qxi","qxii","qxiii",
        "hi","hii","hiii","hiv","hv","hvi","hvii","hviii","hix","hx","hxi","hxii","hxiii",
        "di","dii","diii","div","dv","dvi","dvii","dviii","dix","dx","dxi","dxii","dxiii","j","jj"
    ];
    names.forEach(name => {
        globalThis[name] = loadImage(`${name}.png`);
    });
}

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
