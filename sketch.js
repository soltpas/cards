let g = 0;
let m = 0;
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
let ci = [];
let cn = 0;
let cb = 0;
let cbp = [];
let cci = [];
let ccn = 0;
let ccb = 0;
let ccbp = [];
let hl = 0;
let chl = [];

function preload(){
    const names = [
        "si","sii","siii","siv","sv","svi","svii","sviii","six","sx","sxi","sxii","sxiii",
        "qi","qii","qiii","qiv","qv","qvi","qvii","qviii","qix","qx","qxi","qxii","qxiii",
        "hi","hii","hiii","hiv","hv","hvi","hvii","hviii","hix","hx","hxi","hxii","hxiii",
        "di","dii","diii","div","dv","dvi","dvii","dviii","dix","dx","dxi","dxii","dxiii","j"
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

    if(m == 0){
        fill(0,0,0)
        text("賭けフェーズ",700,50);
    }

    if(m == 1){
        fill(0,0,0)
        text("ゲームフェーズ",700,50);
    }

    if(g == 0){
        fill(0,0,0)
        text("Q=ブラックジャック",100,150);
        text("W=ハイアンドロー",100,250);
    }

    if(g == 2){
        if(hl == 1){
            fill(100,0,0)
            textSize(100);
            text("High",700,500);
        }
        if(hl == 2){
            fill(0,0,100)
            textSize(100);
            text("Low",700,500);
        }
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
    }

    for(let i = 0; i < ccn; i++){
        if(cci[i] == 1){
            image(si,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 2){
            image(sii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 3){
            image(siii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 4){
            image(siv,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 5){
            image(sv,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 6){
            image(svi,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 7){
            image(svii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 8){
            image(sviii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 9){
            image(six,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 10){
            image(sx,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 11){
            image(sxi,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 12){
            image(sxii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 13){
            image(sxiii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 14){
            image(qi,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 15){
            image(qii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 16){
            image(qiii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 17){
            image(qiv,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 18){
            image(qv,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 19){
            image(qvi,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 20){
            image(qvii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 21){
            image(qviii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 22){
            image(qix,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 23){
            image(qx,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 24){
            image(qxi,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 25){
            image(qxii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 26){
            image(qxiii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 27){
            image(hi,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 28){
            image(hii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 29){
            image(hiii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 30){
            image(hiv,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 31){
            image(hv,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 32){
            image(hvi,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 33){
            image(hvii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 34){
            image(hviii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 35){
            image(hix,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 36){
            image(hx,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 37){
            image(hxi,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 38){
            image(hxii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 39){
            image(hxiii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 40){
            image(di,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 41){
            image(dii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 42){
            image(diii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 43){
            image(div,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 44){
            image(dv,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 45){
            image(dvi,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 46){
            image(dvii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 47){
            image(dviii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 48){
            image(dix,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 49){
            image(dx,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 50){
            image(dxi,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 51){
            image(dxii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 52){
            image(dxiii,100 + 150 * i,200,200,300);
        }
        if(cci[i] == 53){
            image(j,100 + 150 * i,200,200,300);
        }
    }

    if(g == 1){
        if(m == 1){
            fill(0,0,0);
            text(cb,700,500);
            if(cb > 21){
                m = 4;
            }
        }
        if(m == 2){
        }   
    }

    if(m == 3){
        fill(100,0,0);
        textSize(100);
        text("YOU WIN",700,150);
    }

    if(m == 4){
        fill(0,0,100);
        textSize(100);
        text("YOU LOSE",700,150);
    }

    if(m == 5){
        fill(0,100,0);
        textSize(100);
        text("DRAW",700,150);
    }

    if(g == 1){
        if(m == 2){
            fill(0,0,0);
            text(ccb,700,200);
            if(ccb <= 16){
                const usedValues = [];
                for (let i = 0; i < ccn; i++) {
                    if (cci[i] !== undefined) {
                        usedValues.push(cci[i]);
                    }
                }
                const nextCard = getRandomUniqueCardValuecom(usedValues);
                if (nextCard !== null) {
                    cci[ccn] = nextCard;
                    ccn += 1;
                    updateHandTotalcom();
                }
            }
            if(ccb > 21){
                m = 3;
                c += bc * 2;
            }
            if(ccb >= 17 && ccb <= 21){
                if(cb > ccb){
                    m = 3;
                    c += bc * 2;
                }
                if(cb < ccb){
                    m = 4;
                }
                if(cb == ccb){
                    m = 5;
                    c += bc;
                }
            }
        }
    }
}

function getRandomUniqueCardValue(excludedValues = []) {
    const availableValues = [];
    for (let i = 1; i <= 53; i++) {
        if (!excludedValues.includes(i)) {
            availableValues.push(i);
        }
    }
    if (availableValues.length === 0) {
        return null;
    }
    return availableValues[floor(random(availableValues.length))];
}

function getCardPipValue(cardValue) {
    const pip = cardValue - (13 * floor((cardValue - 1) / 13));
    return pip > 10 ? 10 : pip;
}

function updateHandTotal() {
    cb = 0;
    let aces = 0;
    for (let i = 0; i < cn; i++) {
        if (ci[i] === undefined) {
            continue;
        }
        cbp[i] = getCardPipValue(ci[i]);
        if (cbp[i] === 1) {
            aces += 1;
        }
        cb += cbp[i];
    }

    while (aces > 0 && cb + 10 <= 21) {
        cb += 10;
        aces -= 1;
    }
}

function getRandomUniqueCardValuecom(excludedValues = []) {
    const availableValues = [];
    for (let i = 1; i <= 53; i++) {
        if (!excludedValues.includes(i)) {
            availableValues.push(i);
        }
    }
    if (availableValues.length === 0) {
        return null;
    }
    return availableValues[floor(random(availableValues.length))];
}

function getCardPipValuecom(cardValue) {
    const pip = cardValue - (13 * floor((cardValue - 1) / 13));
    return pip > 10 ? 10 : pip;
}

function updateHandTotalcom() {
    ccb = 0;
    let aces = 0;
    for (let i = 0; i < ccn; i++) {
        if (cci[i] === undefined) {
            continue;
        }
        ccbp[i] = getCardPipValuecom(cci[i]);
        if (ccbp[i] === 1) {
            aces += 1;
        }
        ccb += ccbp[i];
    }

    while (aces > 0 && ccb + 10 <= 21) {
        ccb += 10;
        aces -= 1;
    }
}

function keyPressed(){
    if (m === 0) {
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

    if(key == "z"){
        if(m == 3){
            g = 0;
            m = 0;
            for(let i = 0; i < cn; i ++){
                ci[i] = 0;
                cci[i] = 0;
            }
            cn = 0;
            ccn = 0;
        }
        if(m == 4){
            g = 0;
            m = 0;
            for(let i = 0; i < cn; i ++){
                ci[i] = 0;
                cci[i] = 0;
            }
            cn = 0;
            ccn = 0;
        }
        if(m == 5){
            g = 0;
            m = 0;
            for(let i = 0; i < cn; i ++){
                ci[i] = 0;
                cci[i] = 0;
            }
            cn = 0;
            ccn = 0;
        }
        if(g == 2){
            if(m == 1){
                g = 0;
                m = 0;
                for(let i = 0; i < cn; i ++){
                    ci[i] = 0;
                    cci[i] = 0;
                }
                cn = 0;
                ccn = 0;
                hl = 0;
            }
        }
    }

    if(m == 0){
        if(key == "a"){
            m = 1;
            if(g == 1){
                c -= bc;
                const usedValues = [];
                ci[0] = getRandomUniqueCardValue(usedValues);
                usedValues.push(ci[0]);
                ci[1] = getRandomUniqueCardValue(usedValues);
                usedValues.push(ci[1]);
                cn = 2;
                updateHandTotal();
                if(cb == 21){
                    m = 3;
                    c += bc * 3;
                }
            }
            if(g == 2){
                const usedValues = [];
                ci[0] = getRandomUniqueCardValue(usedValues);
                usedValues.push(ci[0]);
                chl[0] = ci[0] - (13 * floor((ci[0] - 1) / 13));
                cn = 1;
            }
        }
    }

    if(m == 1){
        if(g == 1){
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
                    updateHandTotal();
                }
            }
            if(key == "j"){
                m = 2;
                const usedValues = [];
                cci[0] = getRandomUniqueCardValuecom(usedValues);
                usedValues.push(cci[0]);
                cci[1] = getRandomUniqueCardValuecom(usedValues);
                usedValues.push(cci[1]);
                ccn = 2;
                updateHandTotalcom();
            }
        }
        if(g == 2){
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
                if(ci[cn - 1] != 53 || ci[cn - 2] != 53){
                    chl[cn - 1] = ci[cn - 1] - (13 * floor((ci[cn - 1] - 1) / 13));
                    if(chl[cn - 1] > chl[cn - 2]){
                        c += floor(bc / 2);
                        hl = 1;
                    }
                    if(chl[cn - 1] < chl[cn - 2]){
                        c -= bc;
                        hl = 2;
                    }
                } else {
                    c += floor(bc / 4);
                }
            }
            if(key == "j"){
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
                if(ci[cn - 1] != 53 || ci[cn - 2] != 53){
                    chl[cn - 1] = ci[cn - 1] - (13 * floor((ci[cn - 1] - 1) / 13));
                    if(chl[cn - 1] > chl[cn - 2]){
                        c -= bc;
                        hl = 1;
                    }
                    if(chl[cn - 1] < chl[cn - 2]){
                        c += floor(bc / 2);
                        hl = 2;
                    }
                } else {
                    c += floor(bc / 4);
                }
            }
        }
    }

    if(key == "q"){
        g = 1;
        bc = 10;
        cb = 0,
        ccb = 0;
    }

    if(key == "w"){
        g = 2;
        bc = 10;
    }
}
