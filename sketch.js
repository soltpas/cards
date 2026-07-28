let m = 0;
let mm = 0;
let c = 100;
let bc = 0;
var si;
var sii;
var siii;
var siv;
var sv;
var svi;
var svii;
var sviii;
var six;
var sx;
var sxi;
var sxii;
var sxiii;
var qi;
var qii;
var qiii;
var qiv;
var qv;
var qvi;
var qvii;
var qviii;
var qix;
var qx;
var qxi;
var qxii;
var qxiii;
var hi;
var hii;
var hiii;
var hiv;
var hv;
var hvi;
var hvii;
var hviii;
var hix;
var hx;
var hxi;
var hxii;
var hxiii;
var di;
var dii;
var diii;
var div;
var dv;
var dvi;
var dvii;
var dviii;
var dix;
var dx;
var dxi;
var dxii;
var dxiii;
var j;
var jj;
let ci = [];
let cn = 0;
let cb = 0;
let cbp = [];
let cci = [];
let ccn = 0;
let ccb = 0;

function preload(){
    const names = [
        "si","sii","siii","siv","sv","svi","svii","sviii","six","sx","sxi","sxii","sxiii",
        "qi","qii","qiii","qiv","qv","qvi","qvii","qviii","qix","qx","qxi","qxii","qxiii",
        "hi","hii","hiii","hiv","hv","hvi","hvii","hviii","hix","hx","hxi","hxii","hxiii",
        "di","dii","diii","div","dv","dvi","dvii","dviii","dix","dx","dxi","dxii","dxiii","j","jj"
    ];
    names.forEach(name => {
        const img = loadImage(`${name}.png`);
        window[name] = img;
        globalThis[name] = img;
    });
}

function setup(){
    createCanvas(1400,900);
}

function draw(){
    background(220);
    fill("gold");
    textSize(50);
    text("残り: " + c + "枚",100,50);
    text("賭け金: " + bc + "枚",400,50)
    if(mm == 0){
        fill(0,0,0)
        text("賭けフェーズ",700,50);
    }
    if(mm == 1){
        fill(0,0,0)
        text("ゲームフェーズ",700,50);
    }
    if(m == 0){
        fill(0,0,0)
        text("Q=ブラックジャック",100,150);
    }
    for(let i = 0; i < cn; i++){
        if(ci[i] == 1){
            image(si,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 2){
            image(sii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 3){
            image(siii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 4){
            image(siv,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 5){
            image(sv,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 6){
            image(svi,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 7){
            image(svii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 8){
            image(sviii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 9){
            image(six,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 10){
            image(sx,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 11){
            image(sxi,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 12){
            image(sxii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 13){
            image(sxiii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 14){
            image(qi,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 15){
            image(qii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 16){
            image(qiii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 17){
            image(qiv,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 18){
            image(qv,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 19){
            image(qvi,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 20){
            image(qvii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 21){
            image(qviii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 22){
            image(qix,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 23){
            image(qx,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 24){
            image(qxi,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 25){
            image(qxii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 26){
            image(qxiii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 27){
            image(hi,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 28){
            image(hii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 29){
            image(hiii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 30){
            image(hiv,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 31){
            image(hv,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 32){
            image(hvi,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 33){
            image(hvii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 34){
            image(hviii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 35){
            image(hix,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 36){
            image(hx,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 37){
            image(hxi,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 38){
            image(hxii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 39){
            image(hxiii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 40){
            image(di,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 41){
            image(dii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 42){
            image(diii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 43){
            image(div,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 44){
            image(dv,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 45){
            image(dvi,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 46){
            image(dvii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 47){
            image(dviii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 48){
            image(dix,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 49){
            image(dx,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 50){
            image(dxi,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 51){
            image(dxii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 52){
            image(dxiii,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 53){
            image(j,100 + 150 * i,600,200,300);
        }
        if(ci[i] == 54){
            image(jj,100 + 150 * i,600,200,300);
        }
    }

    if(m == 1){
        if(mm == 1){
            fill(0,0,0);
            text(cb,700,500);
            if(cb > 21){
                mm = 4;
            }
        }
        if(mm == 2){
        }   
    }

    if(mm == 3){
        fill(100,0,0);
        textSize(100);
        text("YOU WIN",700,150);
    }

    if(mm == 4){
        fill(0,0,100);
        textSize(100);
        text("YOU LOSE",700,150);
    }
}

function getRandomUniqueCardValue(excludedValues = []) {
    const availableValues = [];
    for (let i = 1; i <= 54; i++) {
        if (!excludedValues.includes(i)) {
            availableValues.push(i);
        }
    }
    if (availableValues.length === 0) {
        return null;
    }
    return availableValues[floor(random(availableValues.length))];
}

function keyPressed(){
    if (mm === 0) {
        if (keyCode === UP_ARROW) {
            if(bc < c){
                bc += 1;
            }
        }
        if (keyCode === DOWN_ARROW) {
            if(bc > 10){
                bc -= 1;
            }
        }
    }

    if(mm == 0){
        if(key == "a"){
            mm = 1;
            c -= bc;
            if(m == 1){
                const usedValues = [];
                ci[1] = getRandomUniqueCardValue(usedValues);
                usedValues.push(ci[1]);
                cbp[1] = ci[1] - (13 * floor((ci[1] - 1) / 13));
                if(cbp[1] > 10){
                    cbp[1] = 10;
                }
                for(let i = 0; i < cn - 3; i++){
                    if(cbp[i] == 1 && cb + 11 <= 21){
                        cbp[i] = 11;
                    }
                    if(cbp[i] == 1 && cb + 11 > 21){
                        cbp[i] = 1;
                    }
                }
                cb += cbp[1];
                ci[2] = getRandomUniqueCardValue(usedValues);
                usedValues.push(ci[2]);
                cbp[2] = ci[2] - (13 * floor((ci[2] - 1) / 13));
                if(cbp[2] > 10){
                    cbp[2] = 10;
                }
                for(let i = 0; i < cn - 3; i++){
                    if(cbp[i] == 1 && cb + 11 <= 21){
                        cbp[i] = 11;
                    }
                    if(cbp[i] == 1 && cb + 11 > 21){
                        cbp[i] = 1;
                    }
                }
                cb += cbp[2];
                cn = 3;
            }
        }
    }

    if(mm == 1){
        if(m == 1){
            if(key == "f"){
                const usedValues = [];
                for (let i = 0; i < cn; i++) {
                    if (ci[i] !== undefined) {
                        usedValues.push(ci[i]);
                    }
                }
                const nextCard = getRandomUniqueCardValue(usedValues);
                if (nextCard !== null) {
                    ci[cn] = nextCard;
                    cn += 1;
                }
                cbp[cn - 3] = ci[cn - 1] - (13 * floor((ci[cn - 1] - 1) / 13));
                if(cbp[cn - 3] > 10){
                    cbp[cn - 3] = 10;
                }
                for(let i = 0; i < cn - 3; i++){
                    if(cbp[i] == 1 && cb + 11 <= 21){
                        cbp[i] = 11;
                    }
                    if(cbp[i] == 1 && cb + 11 > 21){
                        cbp[i] = 1;
                    }
                }
                cb += cbp[cn - 3];
            }
        }
    }

    if(key == "q"){
        m = 1;
        bc = 10;
    }
}
