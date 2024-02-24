button=document.getElementById("button_id");
p=document.getElementById("p_id");

button.addEventListener("click", function (){
    p.textContent = +p.textContent + 1;
})