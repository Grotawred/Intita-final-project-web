onload = function(){
    checkMobile();
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