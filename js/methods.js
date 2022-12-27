function fa(name) {
    let i = document.createElement('i');
    i.classList.add("fa-solid");
    i.classList.add("fa-"+name);
    return i;
}

function getContact(info){
    let contact = document.querySelector('#cv_info_1').querySelector('.content');
    let fa_phone = fa("phone");
    let phone = document.createElement('p').textContent = " " + info.phone;
    let fa_email = fa("at");
    let email = document.createElement('p').textContent = " " + info.email;
    let fa_address = fa("house");
    let address = document.createElement('p').textContent = " " + info.address;
    contact.append(fa_phone);
    contact.append(phone);
    contact.append(BR());
    contact.append(fa_email);
    contact.append(email);
    contact.append(BR());
    contact.append(fa_address);
    contact.append(address);
    contact.append(BR());
}

function getPermis(info){
    let permis = document.querySelector('#cv_info_2').querySelector('.content');
    info.forEach(function(element){
        let fa_drive = fa("car");
        let drive = document.createElement('p').textContent = " " + element;
        permis.append(fa_drive);
        permis.append(drive);
        permis.append(BR());
    });
}

function getFormations(info){
    let formations = document.querySelector('#cv_info_3').querySelector('.content');
    info.forEach(function(element){
        let fa_forma = fa("caret-right");
        let forma = document.createElement('p').textContent = " " + element;
        formations.append(fa_forma);
        formations.append(forma);
        formations.append(BR());
    });
}

function getLangues(info){
    let langue = document.querySelector('#cv_info_4').querySelector('.content');
    info.forEach(function(element){
        let fa_lang = fa("book");
        let lang = document.createElement('p').textContent = " " + element;
        langue.append(fa_lang);
        langue.append(lang);
        langue.append(BR());
    });
}

function getHobbies(info){
    let hobbies = document.querySelector('#cv_info_5').querySelector('.content');
    info.forEach(function(element){
        let fa_hobby = fa("dice-d20");
        let hobby = document.createElement('p').textContent = " " + element;
        hobbies.append(fa_hobby);
        hobbies.append(hobby);
        hobbies.append(BR());
    });
}

function getExp(info){
    let experience = document.createElement('div');
    let date = document.createElement('strong');
    date.textContent = info.date;
    let description = document.createElement('p').textContent = info.description;
    experience.append(date);
    experience.append(BR());
    experience.append(description);
    experience.append(BR());
    return experience;
}

function getExpsPro(info){
    let experiences = document.querySelector('#accordion-item1');
    info.forEach(function(element){
        let exp = getExp(element);
        experiences.append(exp);
        experiences.append(BR());
    });
}

function getCpt(info){
    let competence = document.createElement('div');
    let title = document.createElement('strong');
    title.textContent = info.title;
    let description = document.createElement('p').textContent = info.description;
    competence.append(title);
    competence.append(BR());
    competence.append(description);
    competence.append(BR());
    return competence;
}

function getCptsTech(info){
    let competences = document.querySelector('#accordion-item2');
    info.forEach(function(element){
        let cpt = getCpt(element);
        competences.append(cpt);
        competences.append(BR());
    });
}
