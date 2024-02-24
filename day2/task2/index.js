const body = document.body;
const button_blue = document.getElementById("button_blue");
const button_red = document.getElementById("button_red");
const button_Green = document.getElementById("button_Green");
const button_Black = document.getElementById("button_Black");

button_blue.addEventListener("click", function(){
    body.style.backgroundColor="#86A8E7";
});

button_red.addEventListener("click", function(){
    body.style.backgroundColor="#D74C6D";
});

button_Green.addEventListener("click", function(){
    body.style.backgroundColor="#3FACAC";
});

button_Black.addEventListener("click", function(){
    body.style.backgroundColor="#162C2C";
});



