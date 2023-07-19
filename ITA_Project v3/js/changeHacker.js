"use strict";

import hackers from '../json/hackers.json' assert {type: 'json'};



onload = function(){
    changeContent(this.localStorage.getItem('hacker'));
}

function changeContent(hacker){
    console.log(hackers[0][hacker]);

    const els = document.getElementsByClassName('change');

    document.getElementById('studentImg').src=hackers[0][hacker]['img'];

    for(var i = 0; i < els.length; i++){
        if(hackers[0][hacker][els[i].id]){
            els[i].innerHTML = hackers[0][hacker][els[i].id];
        }
    }


    
}

