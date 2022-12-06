var ifDark = false;

function change() {
    const el = document.getElementsByClassName("infoStud");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="visible";
    }
}

function changeBack() {
    const el = document.getElementsByClassName("infoStud");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="hidden";
    }
}

function change2() {
    const el = document.getElementsByClassName("infoStud2");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="visible";
    }
}

function changeBack2() {
    const el = document.getElementsByClassName("infoStud2");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="hidden";
    }
}

function change3() {
    const el = document.getElementsByClassName("infoStud3");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="visible";
    }
}

function changeBack3() {
    const el = document.getElementsByClassName("infoStud3");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="hidden";
    }
}

function change4() {
    const el = document.getElementsByClassName("infoStud4");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="visible";
    }
}

function changeBack4() {
    const el = document.getElementsByClassName("infoStud4");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="hidden";
    }
}

function change5() {
    const el = document.getElementsByClassName("infoStud5");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="visible";
    }
}

function changeBack5() {
    const el = document.getElementsByClassName("infoStud5");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="hidden";
    }
}

function change6() {
    const el = document.getElementsByClassName("infoStud6");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="visible";
    }
}

function changeBack6() {
    const el = document.getElementsByClassName("infoStud6");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="hidden";
    }
}

function change7() {
    const el = document.getElementsByClassName("infoStud7");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="visible";
    }
}

function changeBack7() {
    const el = document.getElementsByClassName("infoStud7");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="hidden";
    }
}

function change8() {
    const el = document.getElementsByClassName("infoStud8");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="visible";
    }
}

function changeBack8() {
    const el = document.getElementsByClassName("infoStud8");
    for(var x = 0; x < el.length;x++){
        el[x].style.visibility="hidden";
    }
}

function DarkTheme(){
    if(ifDark == false){
        ifDark = true
        document.getElementById('lamp').src="./img/turn-on.svg";
        document.getElementById('header').style.backgroundColor = "#1B1F2F";
        document.getElementById('mainHeader').style.color = "white";
        document.getElementById('lang').style.color = "white";
        document.getElementById('body').style.backgroundColor = "#1B1F2F";
        document.getElementById('body').style.color = "white";
        document.getElementById('moreBut').style.backgroundColor = "#C9D5FF";
        document.getElementById('moreBut').style.color = "black";
        document.getElementById('slider-s').style.color = "white";
        document.getElementById('slider-l').style.color = "white";
        document.getElementById('footer').style.color = "white !important";
    }else{
        ifDark = false
        document.getElementById('lamp').src="./img/turn-on2.svg";
        document.getElementById('header').style.backgroundColor = "#C9D5FF";
        document.getElementById('mainHeader').style.color = "black";
        document.getElementById('lang').style.color = "black";
        document.getElementById('body').style.backgroundColor = "#C9D5FF"; 
        document.getElementById('body').style.color = "black";
        document.getElementById('moreBut').style.backgroundColor = "#1B1F2F";
        document.getElementById('moreBut').style.color = "black";
        document.getElementById('slider-s').style.color = "black";
        document.getElementById('slider-l').style.color = "black";
        document.getElementById('footer').style.color = "black !important";
    }
}