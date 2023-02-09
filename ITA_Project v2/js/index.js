function showInfo(){
    document.getElementById("infoBottom").style.animation="bounce 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    document.getElementById("infoBottom").style.visibility="visible";
}

function hideInfo(){
    document.getElementById("infoBottom").style.animation="slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
}