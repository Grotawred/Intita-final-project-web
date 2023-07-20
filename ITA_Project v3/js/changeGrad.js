"use strict";

import grads from '../json/grad.json' assert {type: 'json'};



onload = function(){
    changeContent(this.localStorage.getItem('grad'));
}

function changeContent(grad){
    console.log(grads[0][grad]);

    if(grad == null){
        hacker = 'sasha';
    }

    const els = document.getElementsByClassName('change');

    document.getElementById('gradImg').src=grads[0][grad]['img'];

    document.getElementById('insta').onclick= function(){
        window.location.href=grads[0][grad]['insta'];
    }

    document.getElementById('tiktok').onclick= function(){
        window.location.href=grads[0][grad]['tiktok'];
    }

    document.getElementById('discord').onclick= function(){
        window.location.href=grads[0][grad]['discord'];
    }

    document.getElementById('face').onclick= function(){
        window.location.href=grads[0][grad]['face'];
    }

    document.getElementById('twitt').onclick= function(){
        window.location.href=grads[0][grad]['twitt'];
    }

    document.getElementById('telegram').onclick= function(){
        window.location.href=grads[0][grad]['telegram'];
    }


    for(var i = 0; i < els.length; i++){
        if(grads[0][grad][els[i].id]){
            els[i].innerHTML = grads[0][grad][els[i].id];
        }
    }


    
}