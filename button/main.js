
document.addEventListener("DOMContentLoaded", function () {
    var lightButton = document.getElementById("lightButton");

    function brightenCircle() {
        //brightened state
        lightButton.style.backgroundColor = "#87CEEB"; 
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