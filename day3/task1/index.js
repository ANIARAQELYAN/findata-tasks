const button=document.getElementById("button_id");
const paragraph=document.getElementById("paragraph");
button.addEventListener("click",function(){
    if(button.textContent=="Hide"){
        paragraph.style.display = 'none';
        button.textContent= "Show"
    }else{
        paragraph.style.display = '';
        button.textContent="Hide"
    }

})
