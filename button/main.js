
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