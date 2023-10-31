let Bar = document.getElementById('Bar');
let Progress = document.getElementById('Progress');
Bar.style.width = 0;

function ProgressBarLoading(ValueProgressBar) {
    let i = parseInt(Bar.style.width);
    let intervalIDProgressBarLoading;

    function ProgressBar() {
        if (i < ValueProgressBar && i < 100) {
            i++;
            Bar.style.width = i + "%";
            Progress.innerText = Bar.style.width;
        } else if (i >= 100) {
            clearInterval(intervalIDProgressBarLoading);
            
            setTimeout(function() {
                document.getElementById('Loading').style.animation = "LoadingSlip 2s forwards";
            }, 1000);
        } else {
            clearInterval(intervalIDProgressBarLoading);
        }
    }

    intervalIDProgressBarLoading = setInterval(ProgressBar, 100);
}

ProgressBarLoading(100);