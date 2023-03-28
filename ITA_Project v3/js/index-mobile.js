onload = function(){
    checkMobile();
}



function checkMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        console.log("mobile device");
        return false;
      }else{
        // false for not mobile device
        console.log("not mobile device");
        window.location.href = "index.html";
        return true;
      }
}