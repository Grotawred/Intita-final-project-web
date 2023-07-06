"use strict";

import hackers from '../json/hackers.json' assert {type: 'json'};

console.log(hackers);

let hacker = '';

console.log(hacker);

onload = function(){
    checkMobile();
    changeContent(hacker);
}

function setHacker(hacker){
    this.hacker = hacker;
}


function changeContent(hacker){
    console.log(hackers[0][hacker]);

    const els = document.getElementsByClassName('change');

    for(var i = 0; i < els.length; i++){
        if(hackers[0][hacker][els[i].id]){
            els[i].innerHTML = hackers[0][hacker][els[i].id];
        }
    }


    
}

function checkMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        console.log("mobile device");
        window.location.href = "./hacker-page-mobile.html"
        return true;
      }else{
        // false for not mobile device
        console.log("not mobile device");
        return false;
      }
}

function hoverMoreArrowLocation(el,isTrue){
    if(isTrue){
        el.src="./img/arrow-location-hover.png";
    }else{
        el.src="./img/location-arrow.png";
    }
}


var txt = {
    en: {
        'golovna': "Main Page",
        'graduates': "Graduates",
        'students': "Students",
        'contacts': "Contacts",
        'academy': "VINNITSIA IT ACADEMY",
        'learn': "Learn with us",
        'reach': "Achieve professional success - guaranteed!",
        'toCall': "Call",
        'events': "Events of the academy",
        'eventName': "IT-weekend",
        'eventDesc': "A wonderful Sunday holiday from the teachers of the academy. Warm company, goodies and board games awaited the students. Thank you to everyone who participated and had a good time in our society. We hope you will come to our other future events as well.",
        'studentsText': "Students",
        'moreStudent': "More",
        'diplomas':"Diplomas",
        'ContactUs': "Contact Us",
        'inputName': "Write your name...",
        'inputSurname': "Write your surname...",
        'inputPhone': "Phone number",
        'timeCall': "A convenient time for you",
        'sendCall': "Send",
        'graduatesText': "Graduates",
        'achivment': "Acvivments:",
        'moreGraduates': "More",
        'locationText': "Location",
        'email': "email: intitavn@gmail.com"

    },
    
    ua: {
        'golovna': "Main Page",
        'graduates': "Випускники",
        'students': "Студенти",
        'contacts': "Контакти",
        'academy': "ВІННИЦЬКА IT-АКАДЕМІЯ",
        'learn': "Навчайся разом з нами",
        'reach': "Досягай професійного успіху - гарантовано!",
        'toCall': "Зателефонувати",
        'events': "Заходи академії",
        'eventName': "Айтішний вікенд",
        'eventDesc': "Чудове недільне свято від викладачів академії. На студентів чекала тепла компанія, смаколики та настільні ігри. Дякуємо усім, хто взяв участь та гарно провів час у нашому товаристві. Сподіваємось, ви завітаєте і на інші наші подальші заходи.",
        'studentsText': "Студенти",
        'moreStudent': 'Більше',
        'diplomas':"Дипломи",
        'ContactUs': "Зв’язатись з нами",
        'inputName': "Введіть ім’я...",
        'inputSurname': "Введіть прізвище...",
        'inputPhone': "Номер телефону",
        'timeCall': "Зручний для вас час",
        'sendCall': "Надіслати",
        'graduatesText': "Випускники",
        'achivment': "Досягнення:",
        'moreGraduates': "Більше",
        'locationText': "Локація",
        'email': "пошта: intitavn@gmail.com"




    }
};

function setLang(lang){
    if(lang == 'en'){
        const el = document.getElementsByClassName('lang');
        document.getElementById('Flag').src='./img/USflag.png'
        document.getElementById('inputName').placeholder = txt[lang]['inputName'];
        document.getElementById('inputSurname').placeholder= txt[lang]['inputSurname'];
        document.getElementById('inputPhone').placeholder= txt[lang]['inputPhone'];
        for(var i = 0; i < el.length; i++){
            if (txt[lang][el[i].id]) {
                el[i].innerHTML = txt[lang][el[i].id];
            }
        }
    }
    if(lang == 'ua'){
        const el = document.getElementsByClassName('lang');
        document.getElementById('Flag').src='./img/UAflag.jpg'
        document.getElementById('inputName').placeholder = txt[lang]['inputName'];
        document.getElementById('inputSurname').placeholder= txt[lang]['inputSurname'];
        document.getElementById('inputPhone').placeholder= txt[lang]['inputPhone'];
        for(var i = 0; i < el.length; i++){
            if (txt[lang][el[i].id]) {
                el[i].innerHTML = txt[lang][el[i].id];
            }
        }
    }
}