/*
     _          _      _                                            _
    / \    ___ | |__  (_)  ___ __   __ ___  _ __ ___    ___  _ __  | |_  ___ 
   / _ \  / __|| '_ \ | | / _ \\ \ / // _ \| '_ ` _ \  / _ \| '_ \ | __|/ __|
  / ___ \| (__ | | | || ||  __/ \ V /|  __/| | | | | ||  __/| | | || |_ \__ \
 /_/   \_\\___||_| |_||_| \___|  \_/  \___||_| |_| |_| \___||_| |_| \__||___/

*/

let date1 = "1655337601"; // date 15 juin 2022 00:00:01
let date1_2 = date1 * 1000;
let date2 = Date.now();
let date3 = date2 - date1_2;
let date4 = date3 / (1000*3600*24);
let date5 = Math.round(date4); // nombre de jour qui séparer aujourd'hui et le 15 juin 2022 00:00:01
let px = date5 * 25;

console.log(date5);

let fond_scrollmenu_px = document.getElementById("fond_scrollmenu_px");
fond_scrollmenu_px.style.width = px + "px";

/*
   ____                                _                          
  / ___| ___   _ __ ___   _ __    ___ | |_  ___  _ __    ___  ___ 
 | |    / _ \ | '_ ` _ \ | '_ \  / _ \| __|/ _ \| '_ \  / __|/ _ \
 | |___| (_) || | | | | || |_) ||  __/| |_|  __/| | | || (__|  __/
  \____|\___/ |_| |_| |_|| .__/  \___| \__|\___||_| |_| \___|\___|
                         |_|                      

*/

let element1 = document.getElementById("element1");
let element2 = document.getElementById("element2");
let element3 = document.getElementById("element3");
let element4 = document.getElementById("element4");
let element5 = document.getElementById("element5");
let element6 = document.getElementById("element6");


element1.style.visibility = "visible";
element1.style.position ="relative";

element2.style.visibility ="hidden";
element2.style.position ="absolute";

element3.style.visibility ="hidden";
element3.style.position ="absolute";

element4.style.visibility ="hidden";
element4.style.position ="absolute";

element5.style.visibility ="hidden";
element5.style.position ="absolute";

element6.style.visibility ="hidden";
element6.style.position ="absolute";

function bouton_1() {
    console.log("bouton 1");
    element1.style.visibility = "visible";
    element1.style.position ="relative";

    element2.style.visibility ="hidden";
    element2.style.position ="absolute";

    element3.style.visibility ="hidden";
    element3.style.position ="absolute";

    element4.style.visibility ="hidden";
    element4.style.position ="absolute";

    element5.style.visibility ="hidden";
    element5.style.position ="absolute";

    element6.style.visibility ="hidden";
    element6.style.position ="absolute";
}

function bouton_2() {
    console.log("bouton 2");

    element1.style.visibility = "hidden";
    element1.style.position ="absolute";

    element2.style.visibility ="visible";
    element2.style.position ="relative";

    element3.style.visibility ="hidden";
    element3.style.position ="absolute";

    element4.style.visibility ="hidden";
    element4.style.position ="absolute";

    element5.style.visibility ="hidden";
    element5.style.position ="absolute";

    element6.style.visibility ="hidden";
    element6.style.position ="absolute";
}

function bouton_3() {
    console.log("bouton 3");

    element1.style.visibility = "hidden";
    element1.style.position ="absolute";

    element2.style.visibility ="hidden";
    element2.style.position ="absolute";

    element3.style.visibility ="visible";
    element3.style.position ="relative";

    element4.style.visibility ="hidden";
    element4.style.position ="absolute";

    element5.style.visibility ="hidden";
    element5.style.position ="absolute";

    element6.style.visibility ="hidden";
    element6.style.position ="absolute";
}

function bouton_4() {
    console.log("bouton 4");

    element1.style.visibility = "hidden";
    element1.style.position ="absolute";

    element2.style.visibility ="hidden";
    element2.style.position ="absolute";

    element3.style.visibility ="hidden";
    element3.style.position ="absolute";

    element4.style.visibility ="visible";
    element4.style.position ="relative";

    element5.style.visibility ="hidden";
    element5.style.position ="absolute";

    element6.style.visibility ="hidden";
    element6.style.position ="absolute";
}

function bouton_5() {
    console.log("bouton 5");

    element1.style.visibility = "hidden";
    element1.style.position ="absolute";

    element2.style.visibility ="hidden";
    element2.style.position ="absolute";

    element3.style.visibility ="hidden";
    element3.style.position ="absolute";

    element4.style.visibility ="hidden";
    element4.style.position ="absolute";

    element5.style.visibility ="visible";
    element5.style.position ="relative";

    element6.style.visibility ="hidden";
    element6.style.position ="absolute";
}

function bouton_6() {
    console.log("bouton 6");

    element1.style.visibility = "hidden";
    element1.style.position ="absolute";

    element2.style.visibility ="hidden";
    element2.style.position ="absolute";

    element3.style.visibility ="hidden";
    element3.style.position ="absolute";

    element4.style.visibility ="hidden";
    element4.style.position ="absolute";

    element5.style.visibility ="hidden";
    element5.style.position ="absolute";

    element6.style.visibility ="visible";
    element6.style.position ="relative";
}

/*
  _   _                 ____                          
 | \ | |  __ _ __   __ | __ )   __ _  _ __  _ __  ___ 
 |  \| | / _` |\ \ / / |  _ \  / _` || '__|| '__|/ _ \
 | |\  || (_| | \ V /  | |_) || (_| || |   | |  |  __/
 |_| \_| \__,_|  \_/   |____/  \__,_||_|   |_|   \___|


if (oDomElement.style.maxWidth <= "500") {
    let variable_union_barre = 0;
    document.getElementById("accueil").style.display = "none";
    document.getElementById("projet").style.display = "none";
    document.getElementById("apropos").style.display = "none";
    document.getElementById("contact").style.display = "none";

    function union_barre_boutton() {
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
}
}*/