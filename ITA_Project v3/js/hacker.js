"use strict";

import hackers from '../json/hackers.json' assert {type: 'json'};

console.log(hackers);

let hacker = 'vova';

onload = function(){
    checkMobile();
    changeContent(hacker);
}


function changeContent(hacker){
    console.log(hackers['0'][hacker]);

    const els = document.getElementsByClassName('change');

    for(var i = 0; i < els.length; i++){
        if(hackers['0'][hacker][els[i].id]){
            els[i].innerHTML = hackers['0'][hacker][els[i].id];
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