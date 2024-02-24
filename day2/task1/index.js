body=document.getElementById("body_id");
button=document.getElementById("button_id");
button.addEventListener("click", function(){
    if (button.textContent == "Hello") {
        button.textContent = "Goodbye";
        button.style.backgroundColor = "#DC143C";
        body.style.backgroundColor = "#609522";
    } else {
        button.textContent = "Hello";
        button.style.backgroundColor = "#609522";
        body.style.backgroundColor = "#DC143C";
    }

})



