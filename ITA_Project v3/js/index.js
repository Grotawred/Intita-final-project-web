onload = function(){
    checkMobile();

    var swiper = new Swiper(".swiper-event", {
        effect: "cards",
        grabCursor: true,
      });

      var elms = document.getElementsByClassName( 'splide-ttb' );
      for ( var i = 0, len = elms.length; i < len; i++ ) {
        new Splide( elms[ i ],{rewind:false, direction: 'ttb', width: 666, height: '100%', gap: 0} ).mount();
      }

      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


}






function checkMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        console.log("mobile device");
        window.location.href = "index-mobile.html";
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

function search() {
    // Get the input value from the user
    var searchText = document.getElementById("input").value;
    
    // Check if the search text is not empty
    if (searchText.trim() !== "") {
      // Create a regular expression to search the text globally and ignore case
      var regex = new RegExp(searchText, "gi");
      
      // Get all the elements in the page that contain text nodes
      var elements = document.getElementsByTagName("p");
      
      // Loop through each element and search for the text
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        // Loop through each text node in the element and search for the text
        for (var j = 0; j < element.childNodes.length; j++) {
          var node = element.childNodes[j];
          if (node.nodeType === 3 && regex.test(node.textContent)) {
            // If the text is found, replace it with a highlighted version
            var highlightedNode = document.createElement("span");
            highlightedNode.className = "highlight";
            var newText = node.textContent.replace(regex, function(match) {
              return "<span class='highlight'>" + match + "</span>";
            });
            highlightedNode.innerHTML = newText;
            element.replaceChild(highlightedNode, node);
          }
        }
      }
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





  
  




