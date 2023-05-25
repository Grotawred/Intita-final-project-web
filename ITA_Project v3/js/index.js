onload = function(){
    checkMobile();
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


// function changeInfo(name){
//     const elText = document.getElementById('studentName');
//     const elImg = document.getElementById('studentImg');
//     const credoText = document.getElementById('credo');
//     elText.innerHTML=name;
//     switch(name){
//         case 'Володимир Ратинський':
//             elImg.src="./img/Vova_big.png";
//             elImg.style.width='350px';
//             credoText.innerHTML="wenomechainsama tumajarbisaun Wifenlooof eselifterbraun Anweculbetugtbaby Aslonskysrblu Yuaksoinocenow Buchyulaidsosun wenomechainsama";
//             break;
//         case 'Механічева Олександра':
//             elImg.src="./img/Slider_student1.1.png";
//             elImg.style.width='400px';
//             credoText.innerHTML='І прийде час, коли один скаже: "Слава Україні! ", а мільйони відповідатимуть "Героям слава!"';
//             break;
//         case 'Гурський Даніл':
//             elImg.src="./img/Danil_big.png";
//             elImg.style.width='462px';
//             credoText.innerHTML="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an";
//             break;
//         case 'Костя Гавриш':
//             elImg.src="./img/Kostya_big.png";
//             elImg.style.width='462px';
//             credoText.innerHTML="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an";
//             break;
//         case 'Власко Григорій':
//             elImg.src="./img/Cringe.png";
//             elImg.style.width='400px';
//             credoText.innerHTML="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an";
//             break;
//     }
// }

// function changeInfoGraduate(name){
//     const elText = document.getElementById('graduateName');
//     const elImg = document.getElementById('graduateImg');
//     elText.innerHTML=name;
//     switch(name){
//         case 'Механічева Олександра':
//             elImg.src="./img/Sasha_small.png";
//             break;
//         case 'Франишина Діана':
//             elImg.src="./img/Diana_small.png";
//             break;
//         case 'Кравчук Анастасія':
//             elImg.src="./img/Nastya_small.png";
//             break;
//         case 'Володимир Ратинський':
//             elImg.src="./img/Vova_small.png";
//             break;
//         case 'Гурський Даніл':
//             elImg.src="./img/Danilo_small.png";
//             break;
//         case 'Власко Григорій':
//             elImg.src="./img/Grisha_small.png";
//             break;
//         case 'Федчишин Єгор':
//             elImg.src="./img/Egor_small.png";
//             break;
//         case 'Костя Гавриш':
//             elImg.src="./img/Kostya_small.png";
//             break;
//         case 'Бобрук Тимофій':
//             elImg.src="./img/Tima_small.png";
//             break;
//     }
// }

// function hoverMoreArrowStudent(el,isTrue){
//     if(isTrue){
//         el.src = "./img/arrow-short-left.png";
//     }else{
//         el.src = "./img/moreArrowHover.png";
//     }
// }

// function hoverMoreArrowGraduate(el,isTrue){
//     if(isTrue){
//         el.src="./img/arrow-short-right3.png";
//     }else{
//         el.src="./img/arrow-short-right.png";
//     }
// }

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
        'ContactUs': "Contact Us",
        'inputName': "Write your name...",
        'inputSurname': "Write your surname...",
        'timeCall': "When to call?",
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
        'moreStudent': 'Дізнатись більше',
        'ContactUs': "Зв’язатись з нами",
        'inputName': "Введіть ім’я...",
        'inputSurname': "Введіть прізвище...",
        'timeCall': "Коли зателефонувати?",
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
        for(var i = 0; i < el.length; i++){
            if (txt[lang][el[i].id]) {
                el[i].innerHTML = txt[lang][el[i].id];
            }
        }
    }
}

  
  




