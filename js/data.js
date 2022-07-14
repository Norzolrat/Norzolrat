const CV_INFO = 
{
    "cv_info" : {
        "name" : "ZOLGER",
        "first_name" : "Normann",
        "entitled" : "Etudiant en Cyber-Sécurité",
        "description" : "Sérieux et sociable je travaille en équipe depuis 2016. J’aime découvrir de nouveaux horizons et aussi créer de manière innovante. ",
        "contact" : {
            "phone" : "06 51 97 10 27",
            "email" : "normann.zolger@outlook.fr",
            "address" : "75 bis avenue de Ventadour, 19300 Egletons"
        },
        "formations" : [
            "IUT Informatique Aubière 2022",
            "BACCALAUREAT Scientifique 2019, Option SI"
        ],
        "driver's_license" : [
            "Permis B"
        ],
        "languages" : [
            "Anglais Opérationnel",
            "Français Langue Natale"
        ],
        "hobbies" : [
            "Randonnée en Nature",
            "Cuisine",
            "Arduino"
        ],
        "professional_experiences" : [
            {
                "date" : "2022",
                "description" : "Stage chez SYLink Technologie sur Clermont-Ferrand (63000), 35 rue Blatin. Entreprise dans le domaine la cybersécurité."
            },
            {
                "date" : "2016 - 2021",
                "description" : "Chaque été depuis 2016 jusqu’à 2021 j’ai ramassé de la paille pour l’entreprise SARL Monteil & Fils en Corrèze. C'est la seule entreprise européenne qui fabrique des paillons authentiques."
            },
            {
                "date" : "2015",
                "description" : "J'ai travaillé en tant que serveur dans une crêperie saisonnière installée près du château de Ventadour (19300)."
            }
        ],
        "technical_skills" : [
            {
                "title" : "Systèmes d’exploitation Unix",
                "description" : "Debian / Kali linux"
            },
            {
                "title" : "Langages de programmation",
                "description" : "C, Python, PostegreSQL, SQL, Javascript, Shell (bash)\n\nNotions en Java /Java Android, C#, XAML, PHP, Ruby"
            },
            {
                "title" : "Notions en Administration Systemes et Réseaux sous Linux",
                "description" : "Couche IP du modèle OSI\nTable de Routage\nServer DHCP\nSocket TCP / UDP\nFire-Wall"
            },
            {
                "title" : "Systèmes de gestion de bases de données",
                "description" : "Oracle\nMaria DB / MySQL\nPostgreSQL"
            }
        ]
    }
}

const BR = function (){
    return document.createElement('br');
}

const switchDisplay = function(elem) {
    if(elem.style.display == 'none'){
        elem.style.display = 'block';
    }else{
        elem.style.display = 'none';
    }
};
