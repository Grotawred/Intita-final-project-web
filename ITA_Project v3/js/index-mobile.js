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

var txt = {
  en: {
      'golovna': "Main Page",
      'graduates': "Graduates",
      'students': "Students",
      'contacts': "Contacts",
      'academy': "VINNITSIA IT ACADEMY",
      'academyAdd1': "VINNITSIA",
      'academyAdd2': "IT ACADEMY",
      'learn': "Learn with us",
      'reach': "Achieve professional success - guaranteed!",
      'toCall': "Call",
      'events': "Events of the academy",
      'eventName': "IT-weekend",
      'eventDesc': "A wonderful Sunday holiday from the teachers of the academy. Warm company, goodies and board games awaited the students. Thank you to everyone who participated and had a good time in our society. We hope you will come to our other future events as well.",
      'studentsText': "Students",
      'moreStudent': "More",
      'ContactUs': "Contact Us",
      'inputName': "Name",
      'inputSurname': "Surname",
      'inputPhone':"Phone number",
      'contact': "We will contact you",
      'timeCall': "A convenient time for you",
      'sendCall': "Send",
      'graduatesText': "Graduates",
      'achivment': "Acvivments:",
      'moreGraduates': "More",
      'golovnaFooter': "Main Page",
      'graduatesFooter': "Graduates",
      'studentsFooter': "Students",
      'contactsFooter': "Contacts",
      'locationText': "Location",
      'email': "email: intitavn@gmail.com"

  },
  
  ua: {
      'golovna': "Головна",
      'graduates': "Випускники",
      'students': "Студенти",
      'contacts': "Контакти",
      'academy': "ВІННИЦЬКА IT-АКАДЕМІЯ",
      'academyAdd1': "ВІННИЦЬКА",
      'academyAdd2': "IT-АКАДЕМІЯ",
      'learn': "Навчайся разом з нами",
      'reach': "Досягай професійного успіху - гарантовано!",
      'toCall': "Зателефонувати",
      'events': "Заходи академії",
      'eventName': "Айтішний вікенд",
      'eventDesc': "Чудове недільне свято від викладачів академії. На студентів чекала тепла компанія, смаколики та настільні ігри. Дякуємо усім, хто взяв участь та гарно провів час у нашому товаристві. Сподіваємось, ви завітаєте і на інші наші подальші заходи.",
      'studentsText': "Студенти",
      'moreStudent': 'Дізнатись більше',
      'ContactUs': "Зв’язатись з нами",
      'inputName': "Ім’я",
      'inputSurname': "Прізвище",
      'inputPhone': "Номер телефону",
      'contact': "Зв’яжемось з вами",
      'timeCall': "Зручний для вас час",
      'sendCall': "Надіслати",
      'graduatesText': "Випускники",
      'achivment': "Досягнення:",
      'moreGraduates': "Більше",
      'golovnaFooter': "Головна",
      'graduatesFooter': "Випускники",
      'studentsFooter': "Студенти",
      'contactsFooter': "Контакти",
      'locationText': "Локація",
      'email': "пошта: intitavn@gmail.com"




  }
};

function setLang(lang){
  if(lang == 'en'){
      const el = document.getElementsByClassName('lang');
      document.getElementById('inputName').placeholder = txt[lang]['inputName'];
      document.getElementById('inputSurname').placeholder= txt[lang]['inputSurname'];
      document.getElementById('inputPhone').placeholder= txt[lang]['inputPhone'];
      document.getElementById('uaBut').style.background="none";
      document.getElementById('enBut').style.background="#30CFD0";
      for(var i = 0; i < el.length; i++){
          if (txt[lang][el[i].id]) {
              el[i].innerHTML = txt[lang][el[i].id];
          }
      }
  }
  if(lang == 'ua'){
      const el = document.getElementsByClassName('lang');
      document.getElementById('inputName').placeholder = txt[lang]['inputName'];
      document.getElementById('inputSurname').placeholder= txt[lang]['inputSurname'];
      document.getElementById('uaBut').style.background="#30CFD0";
      document.getElementById('enBut').style.background="none";
      for(var i = 0; i < el.length; i++){
          if (txt[lang][el[i].id]) {
              el[i].innerHTML = txt[lang][el[i].id];
          }
      }
  }
}