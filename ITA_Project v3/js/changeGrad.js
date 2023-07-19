"use strict";

import grads from '../json/grad.json' assert {type: 'json'};



onload = function(){
    changeContent(this.localStorage.getItem('grad'));
}

function changeContent(grad){
    console.log(grads[0][grad]);

    const els = document.getElementsByClassName('change');

    document.getElementById('gradImg').src=grads[0][grad]['img'];

    for(var i = 0; i < els.length; i++){
        if(grads[0][grad][els[i].id]){
            els[i].innerHTML = grads[0][grad][els[i].id];
        }
    }


    
}