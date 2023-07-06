

onload = function(){
  checkMobile();

  let initialSlide = 1;

var swiper = new Swiper(".mySwiper", {
    initialSlide:initialSlide,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true
  });
}





function checkMobile(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      console.log("mobile device");
      return true;
    }else{
      // false for not mobile device
      console.log("not mobile device");
      window.location.href = "event-camp.html";
      return false;
    }
}