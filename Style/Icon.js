const IconTwitter = document.getElementById('IconTwitter');

IconTwitter.addEventListener('mouseover', function() {
    document.getElementById('IconTwitterNoColor').style.display = "none";
    document.getElementById('IconTwitterColor').style.display = "block";
});

IconTwitter.addEventListener('mouseout', function() {
    document.getElementById('IconTwitterNoColor').style.display = "block";
    document.getElementById('IconTwitterColor').style.display = "none";
});

const IconLinkedin = document.getElementById('IconLinkedin');

IconLinkedin.addEventListener('mouseover', function() {
    document.getElementById('IconLinkedinNoColor').style.display = "none";
    document.getElementById('IconLinkedinColor').style.display = "block";
});

IconLinkedin.addEventListener('mouseout', function() {
    document.getElementById('IconLinkedinNoColor').style.display = "block";
    document.getElementById('IconLinkedinColor').style.display = "none";
});

const IconFigma = document.getElementById('IconFigma');

IconFigma.addEventListener('mouseover', function() {
    document.getElementById('IconFigmaNoColor').style.display = "none";
    document.getElementById('IconFigmaColor').style.display = "block";
});

IconFigma.addEventListener('mouseout', function() {
    document.getElementById('IconFigmaNoColor').style.display = "block";
    document.getElementById('IconFigmaColor').style.display = "none";
});