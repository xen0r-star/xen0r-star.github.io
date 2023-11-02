const Bulb = document.getElementById("Bulb");
let root = document.documentElement.style;
let BulbLight = document.getElementById('BulbLight');
let isAnimationFinished = true;

Bulb.addEventListener("click", () => {
    if (isAnimationFinished) {
        isAnimationFinished = false;

        Bulb.style.animation = "BulbClicked 1s forwards";
        
        if (BulbLight.getAttribute('fill') != null) {
            BulbLight.removeAttribute('fill');
            
            root.setProperty('--Background', '#000000');
            root.setProperty('--Color', '#ffffff');
            root.setProperty('--Element', '#ffffff');
            root.setProperty('--ColorBulbDash', '#00000000');
        } else {
            BulbLight.setAttribute('fill', '#F9B810');

            root.setProperty('--Background', '#ffffff');
            root.setProperty('--Color', '#000000');
            root.setProperty('--Element', '#000000');
            root.setProperty('--ColorBulbDash', '#000000');
        }
    }
});

Bulb.addEventListener("animationend", () => {
    isAnimationFinished = true;
    Bulb.style.animation = "none";
});