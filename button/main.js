// JavaScript source code
//document.addEventListener("DOMContentLoaded", function () {
//    var button = document.getElementById("lightButton");

//    function brightenCircle() {
//        LightButton.style.backgroundColor = "#55a7ff"; // Updated color for the brightened state
 //   }

    // Function to reset the circle button to its original color
 //   function resetCircle() {
 //       LightButton.style.backgroundColor = "#3498db"; // Original color
//    }

    // Event listener for mouse press
 //   LightButton.addEventListener("mousedown", brightenCircle);

    // Event listener for mouse release
 //   LightButton.addEventListener("mouseup", resetCircle);
    //var audio = new Audio("button-sound.mp3"); 

   // button.addEventListener("click", function () {
        
       // button.style.backgroundColor = "#FFFF00"; 

        
        //audio.play();

        
       // setTimeout(function () {
        //    button.style.backgroundColor = "";
       // }, 1000);
    //});
//});

document.addEventListener("DOMContentLoaded", function () {
    var lightButton = document.getElementById("lightButton");

    function brightenCircle() {
        //brightened state
        lightButton.style.backgroundColor = "#55a7ff"; 
    }

    //reset to the original colour 
    function resetCircle() {
        lightButton.style.backgroundColor = "#3498db"; 
    }

    //mousepress event listener 
    lightButton.addEventListener("mousedown", brightenCircle);

    //mouserelease event listener
    lightButton.addEventListener("mouseup", resetCircle);
});