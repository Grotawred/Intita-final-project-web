"use strict";

import hackers from '../json/hackers.json' assert {type: 'json'};



onload = function(){
    changeContent(this.localStorage.getItem('hacker'));
}

function changeContent(hacker){
    console.log(hackers[0][hacker]);

    if(hacker == null){
        hacker = 'sasha'
    }

    const els = document.getElementsByClassName('change');

    document.getElementById('studentImg').src=hackers[0][hacker]['img'];

    document.getElementById('insta').onclick= function(){
        window.location.href=hackers[0][hacker]['insta'];
    }

    document.getElementById('tiktok').onclick= function(){
        window.location.href=hackers[0][hacker]['tiktok'];
    }

    document.getElementById('discord').onclick= function(){
        window.location.href=hackers[0][hacker]['discord'];
    }

    document.getElementById('face').onclick= function(){
        window.location.href=hackers[0][hacker]['face'];
    }

    document.getElementById('twitt').onclick= function(){
        window.location.href=hackers[0][hacker]['twitt'];
    }

    document.getElementById('telegram').onclick= function(){
        window.location.href=hackers[0][hacker]['telegram'];
    }

    for(var i = 0; i < els.length; i++){
        if(hackers[0][hacker][els[i].id]){
            els[i].innerHTML = hackers[0][hacker][els[i].id];
        }
    }


    
}

