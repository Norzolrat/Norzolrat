let cv_info = CV_INFO.cv_info;

// console.log(cv_info.name);
getContact(cv_info.contact);
getPermis(cv_info["driver's_license"]);
getFormations(cv_info.formations);
getLangues(cv_info.languages);
getHobbies(cv_info.hobbies);
getExpsPro(cv_info.professional_experiences);
getCptsTech(cv_info.technical_skills);

document.querySelector('#accordion-button-1').addEventListener("click",
    function(event){
        event.preventDefault();

        switchDisplay(document.querySelector('#accordion-item1'));
    },
false);

document.querySelector('#accordion-button-2').addEventListener("click",
    function(event){
        event.preventDefault();
        
        switchDisplay(document.querySelector('#accordion-item2'));
    },
false);

