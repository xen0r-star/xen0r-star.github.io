document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Empecher l’affichage du menu contextuel sur toute la page
});

let TwitterToXStat = false;
RestartTwitterToX();

function RestartTwitterToX() {
    if (!TwitterToXStat) {
        // Twitter To X Secret
        let compteurTwitter = 0;
        let IconTwitter = document.getElementById('IconTwitter');
    
        IconTwitter.addEventListener('contextmenu', function() {
            compteurTwitter++;
            if (compteurTwitter === 3) {
                console.log("click click click")
                compteurTwitter = 0;
        
                intervalIDTwitter = setInterval(TwitterWings, 150);
                document.getElementById('IconTwitterLien').innerHTML = `
                    <div id="IconTwitterDiv">
                        <svg id="AnimedTwitter" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.253 127.461C88.558 127.461 114.973 78.543 114.973 36.097C114.973 34.707 114.973 33.32 114.898 31.941C120.039 27.394 124.477 21.761 128 15.308C123.21 17.91 118.129 19.613 112.922 20.371C118.402 16.351 122.504 10.035 124.461 2.59697C119.305 6.33997 113.664 8.97697 107.781 10.398C99.645 -0.188028 86.711 -2.78203 76.234 4.07797C65.762 10.938 60.352 25.538 63.035 39.695C41.922 38.402 22.246 26.199 8.91499 6.13297C1.93299 20.803 5.48699 39.586 17.022 49.023C12.874 48.851 8.81499 47.468 5.18999 44.992V45.402C5.18999 60.675 13.976 73.84 26.21 76.894C22.3841 78.18 18.2744 78.3681 14.347 77.437C17.784 90.531 27.644 99.507 38.882 99.765C29.577 108.683 18.089 113.515 6.26499 113.485C4.17099 113.485 2.07699 113.335 -0.00100708 113.039C12.007 122.472 25.979 127.48 40.253 127.461Z" fill="var(--Element)" />
                        </svg>
                    </div>
                `;
                TwitterToX();
            }
        });
        
        IconTwitter.addEventListener('mouseup', function() {
            setTimeout(function() { compteurTwitter = 0; }, 1000);
        });
        
        
        
        let AnimedTwitter = true;
        
        function TwitterWings() {
          document.getElementById('AnimedTwitter').innerHTML = AnimedTwitter ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M77.5064 116.049C67.1153 123.284 54.6579 127.637 40.254 127.637C25.98 127.656 12.007 122.609 -0.000999451 113.176C2.077 113.472 4.171 113.622 6.265 113.622C18.089 113.652 29.577 108.82 38.882 99.9019C41.8445 109.434 51.9138 115.661 63.9316 115.401C62.1783 112.275 61.3361 108.72 61.5005 105.14C64.7441 110.766 70.6085 114.571 77.5064 116.049ZM84.274 64.6233C62.4293 72.7459 52.5504 80.1869 38.882 99.9019C42.1193 74.7582 47.2731 61.5692 63.035 39.8319C60.352 25.6749 65.762 11.0749 76.234 4.21494C86.711 -2.64506 99.645 -0.0510654 107.781 10.5349C113.664 9.11393 119.305 6.47694 124.461 2.73394C122.504 10.1719 118.402 16.4879 112.922 20.5079C118.129 19.7499 123.21 18.0469 128 15.4449C124.477 21.8979 120.039 27.5309 114.898 32.0779C114.973 33.4569 114.973 34.8439 114.973 36.2339C114.973 54.0721 110.308 73.0603 101.313 89.0813C93.4752 82.3775 87.6044 74.0515 84.274 64.6233Z" fill="var(--Element)" /><path d="M93.5164 115.402L93.8664 115.302C91.1604 113.054 89.1282 110.287 87.9056 107.197C87.7735 106.863 87.6508 106.525 87.5378 106.184C87.8076 106.371 88.0811 106.553 88.3582 106.729C99.2447 113.647 115.581 111.943 126.134 102.64C116.601 99.6068 108.198 94.9699 101.313 89.0813C93.4752 82.3775 87.6044 74.0515 84.274 64.6233C62.4293 72.7459 52.5504 80.1869 38.882 99.9019C41.8445 109.434 51.9138 115.661 63.9316 115.401C62.1783 112.275 61.3361 108.72 61.5005 105.14C64.7441 110.766 70.6085 114.571 77.5064 116.049C82.5019 117.118 88.0395 116.967 93.5164 115.402Z" fill="var(--Element)" />' : '<path d="M40.253 127.461C88.558 127.461 114.973 78.543 114.973 36.097C114.973 34.707 114.973 33.32 114.898 31.941C120.039 27.394 124.477 21.761 128 15.308C123.21 17.91 118.129 19.613 112.922 20.371C118.402 16.351 122.504 10.035 124.461 2.59697C119.305 6.33997 113.664 8.97697 107.781 10.398C99.645 -0.188028 86.711 -2.78203 76.234 4.07797C65.762 10.938 60.352 25.538 63.035 39.695C41.922 38.402 22.246 26.199 8.91499 6.13297C1.93299 20.803 5.48699 39.586 17.022 49.023C12.874 48.851 8.81499 47.468 5.18999 44.992V45.402C5.18999 60.675 13.976 73.84 26.21 76.894C22.3841 78.18 18.2744 78.3681 14.347 77.437C17.784 90.531 27.644 99.507 38.882 99.765C29.577 108.683 18.089 113.515 6.26499 113.485C4.17099 113.485 2.07699 113.335 -0.00100708 113.039C12.007 122.472 25.979 127.48 40.253 127.461Z" fill="var(--Element)" />';
          AnimedTwitter = !AnimedTwitter;
        }
        
        let TimeAnimationTwitter = 1500;
        
        function TwitterToX() {
            document.getElementById('IconTwitterDiv').style.animation = "TwitterToX " + TimeAnimationTwitter + "ms forwards";
        
            setTimeout(function() {
                clearInterval(intervalIDTwitter);
                document.getElementById('IconTwitterLien').innerHTML = '<svg id="IconX" style="width: 2.5vw; height: 2.5vw; transition: all ease-in-out .25s;" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path style="transition: all ease-in-out .25s;" d="M0.312077 4L49.7314 70.0784L0 123.803H11.1926L54.7323 76.7663L89.9113 123.803H128L75.8001 54.0077L122.09 4H110.897L70.7992 47.3198L38.4008 4H0.312077ZM16.7716 12.2444H34.2696L111.538 115.557H94.0399L16.7716 12.2444Z" fill="var(--Element)"/></svg>';
                document.getElementById('IconX').style.animation = "TwitterToX3 .5s forwards";
            
            }, TimeAnimationTwitter);
        }
    
        TwitterToXStat = !TwitterToXStat;
        RestartTwitterToX();
    } else {
        // X to Twitter Secret
        let compteurX = 0;
        let IconX = document.getElementById('IconX');
        
        IconX.addEventListener('contextmenu', function() {
            compteurX++;
            if (compteurX === 3) {
                console.log("click click click 2")
                compteurX = 0;
            }
        });
    
        TwitterToXStat = !TwitterToXStat;
        RestartTwitterToX();
    }
}