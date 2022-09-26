/*
  __  __                                     
 |  \/  |  ___  ___  ___   __ _   __ _   ___ 
 | |\/| | / _ \/ __|/ __| / _` | / _` | / _ \
 | |  | ||  __/\__ \\__ \| (_| || (_| ||  __/
 |_|  |_| \___||___/|___/ \__,_| \__, | \___|
                                 |___/       

*/
function verifierFormulaire() {
    let nombre_result = 0;

    if (prenom.value) {
        const prenom = document.getElementById('prenom');
        const result = document.getElementById('result');
        prenom.style.borderBottom='#1fab03 solid 2px';

        nombre_result = nombre_result + 1;
        
        result.value = 'Prenom : ' + prenom.value;
    }
    else {
        const prenom = document.getElementById('prenom');
        const result = document.getElementById('result');
        prenom.style.borderBottom='#ab0303 solid 2px';
        result.value = 'Prenom : /' + prenom.value;
    }

    if (nom.value) {
        const nom = document.getElementById('nom');
        const result_2 = document.getElementById('result_2');
        nom.style.borderBottom='#1fab03 solid 2px';

        nombre_result = nombre_result + 1;
        
        result_2.value = 'Nom : ' + nom.value;
    }
    else {
        const nom = document.getElementById('nom');
        const result_2 = document.getElementById('result_2');
        nom.style.borderBottom='#ab0303 solid 2px';
        result_2.value = 'Nom : /' + nom.value;
    }

    if (email.value) {
        if (email.value.includes('@')) {
            const email = document.getElementById('email');
            const result_3 = document.getElementById('result_3');
            email.style.borderBottom='#1fab03 solid 2px';

            nombre_result = nombre_result + 1;
            
            result_3.value = 'Adresse email + @ : ' + email.value;
        }
        else {
            const email = document.getElementById('email');
            const result_3 = document.getElementById('result_3');
            email.style.borderBottom='#ab0303 solid 2px';
            result_3.value = 'Adresse email : ' + email.value;
        } 
    }
    else {
        const email = document.getElementById('email');
        const result_3 = document.getElementById('result_3');
        email.style.borderBottom='#ab0303 solid 2px';
        result_3.value = 'Adresse email : /' + email.value;
    }
        

    if (sujet.value) {
        const sujet = document.getElementById('sujet');
        const result_4 = document.getElementById('result_4');
        sujet.style.borderBottom='#1fab03 solid 2px';

        nombre_result = nombre_result + 1;
        
        result_4.value = 'Sujet : ' + sujet.value;
    }
    else {
        const sujet = document.getElementById('sujet');
        const result_4 = document.getElementById('result_4');
        sujet.style.borderBottom='#ab0303 solid 2px';
        result_4.value = 'Sujet : /' + sujet.value;
    }

    if (message.value) {
        const message = document.getElementById('message');
        const result_5 = document.getElementById('result_5');
        message.style.borderBottom='#1fab03 solid 2px';

        nombre_result = nombre_result + 1;
        
        result_5.value = 'Message : ' + message.value;
    }
    else {
        const message = document.getElementById('message');
        const result_5 = document.getElementById('result_5');
        message.style.borderBottom='#ab0303 solid 2px';
    }

    if (nombre_result == 5) {
        var envoye_message = true;
    }
    else {
        var envoye_message = false;
    }

    if (envoye_message == true) {
        // <?php 

        // ?>
        console.log("message envoyer");
        prenom.value = "";
        nom.value = "";
        email.value = "";
        sujet.value = "";
        message.value = "";
    }
    else {
        console.log("message non envoyer");
    }
}

/*
  _   _                 ____                          
 | \ | |  __ _ __   __ | __ )   __ _  _ __  _ __  ___ 
 |  \| | / _` |\ \ / / |  _ \  / _` || '__|| '__|/ _ \
 | |\  || (_| | \ V /  | |_) || (_| || |   | |  |  __/
 |_| \_| \__,_|  \_/   |____/  \__,_||_|   |_|   \___|



let variable_union_barre = 0;
document.getElementById("accueil").style.display = "none";
document.getElementById("projet").style.display = "none";
document.getElementById("apropos").style.display = "none";
document.getElementById("contact").style.display = "none";

function union_barre_boutton_4() {
    if (variable_union_barre == 0) {
        variable_union_barre = 1;
        console.log("union_barre_boutton = " + variable_union_barre);
        //document.getElementById("animation_barre").style.animationPlayState = 'running';
        document.getElementById("header").style.height = "120%";
        document.getElementById("accueil").style.display = "block";
        document.getElementById("projet").style.display = "block";
        document.getElementById("apropos").style.display = "block";
        document.getElementById("contact").style.display = "block";
    } else {
        variable_union_barre = 0;
        console.log("union_barre_boutton = " + variable_union_barre);
        //document.getElementById("animation_barre").style.animation = "animation_barre_2 1s infinite";
        document.getElementById("header").style.height = "100px";
        document.getElementById("accueil").style.display = "none";
        document.getElementById("projet").style.display = "none";
        document.getElementById("apropos").style.display = "none";
        document.getElementById("contact").style.display = "none";
    }
}*/