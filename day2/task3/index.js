const button=document.getElementById("button-id");
const input=document.getElementById("input_id");
const p=document.getElementById("p_id");

button.addEventListener("click", function(){
    const text_input=input.value;
    if(text_input.length>0){
        p.textContent=text_input;
    }else{
        alert("Input is empty.")
    }

})


