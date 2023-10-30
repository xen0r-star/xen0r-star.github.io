let Bar = document.getElementById('Bar');
let Progress = document.getElementById('Progress');
var ValueProgressBar = 1100000;

var i = -1;
function ProgressBarLoading(){
    if (i < ValueProgressBar) {
        i++;

        Bar.style.width = i + "%";
        Progress.innerText = Bar.style.width;
    } else {
        clearInterval(intervalIDProgressBarLoading);
    }
}

intervalIDProgressBarLoading = setInterval(ProgressBarLoading, 100);
