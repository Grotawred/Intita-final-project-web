onload = function(){
    checkMobile();
}



function checkMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        console.log("mobile device");
        window.location.href = "index-mobile.html";
        return true;
      }else{
        // false for not mobile device
        console.log("not mobile device");
        return false;
      }
}


function changeInfo(name){
    const elText = document.getElementById('studentName');
    const elImg = document.getElementById('studentImg');
    const credoText = document.getElementById('credo');
    elText.innerHTML=name;
    switch(name){
        case 'Володимир Ратинський':
            elImg.src="./img/Vova_big.png";
            elImg.style.width='350px';
            credoText.innerHTML="wenomechainsama tumajarbisaun Wifenlooof eselifterbraun Anweculbetugtbaby Aslonskysrblu Yuaksoinocenow Buchyulaidsosun wenomechainsama";
            break;
        case 'Механічева Олександра':
            elImg.src="./img/Slider_student1.1.png";
            elImg.style.width='400px';
            credoText.innerHTML="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an";
            break;
        case 'Гурський Даніл':
            elImg.src="./img/Danil_big.png";
            elImg.style.width='462px';
            credoText.innerHTML="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an";
            break;
        case 'Костя Гавриш':
            elImg.src="./img/Kostya_big.png";
            elImg.style.width='462px';
            credoText.innerHTML="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an";
            break;
        case 'Власко Григорій':
            elImg.src="./img/Cringe.png";
            elImg.style.width='400px';
            credoText.innerHTML="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an";
            break;
    }
}

function changeInfoGraduate(name){
    const elText = document.getElementById('graduateName');
    const elImg = document.getElementById('graduateImg');
    elText.innerHTML=name;
    switch(name){
        case 'Механічева Олександра':
            elImg.src="./img/Sasha_small.png";
            break;
        case 'Франишина Діана':
            elImg.src="./img/Diana_small.png";
            break;
        case 'Кравчук Анастасія':
            elImg.src="./img/Nastya_small.png";
            break;
        case 'Володимир Ратинський':
            elImg.src="./img/Vova_small.png";
            break;
        case 'Гурський Даніл':
            elImg.src="./img/Danilo_small.png";
            break;
        case 'Власко Григорій':
            elImg.src="./img/Grisha_small.png";
            break;
        case 'Федчишин Єгор':
            elImg.src="./img/Egor_small.png";
            break;
        case 'Костя Гавриш':
            elImg.src="./img/Kostya_small.png";
            break;
        case 'Бобрук Тимофій':
            elImg.src="./img/Tima_small.png";
            break;
    }
}

function hoverMoreArrowStudent(el,isTrue){
    if(isTrue){
        el.src = "./img/arrow-short-left.png";
    }else{
        el.src = "./img/moreArrowHover.png";
    }
}

function hoverMoreArrowGraduate(el,isTrue){
    if(isTrue){
        el.src="./img/arrow-short-right3.png";
    }else{
        el.src="./img/arrow-short-right.png";
    }
}

function hoverMoreArrowLocation(el,isTrue){
    if(isTrue){
        el.src="./img/arrow-location-hover.png";
    }else{
        el.src="./img/location-arrow.png";
    }
}


