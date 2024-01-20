// JavaScript source code
document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("lightButton");
    //var audio = new Audio("button-sound.mp3"); 

    button.addEventListener("click", function () {
        
        button.style.backgroundColor = "#FFFF00"; 

        
        //audio.play();

        
        setTimeout(function () {
            button.style.backgroundColor = "";
        }, 1000);
    });
});