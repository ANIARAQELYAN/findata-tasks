const button=document.getElementById('myButton');
const paragraph=document.getElementById("myParagraph")
const input = document.getElementById('textInput');
button.addEventListener('click',function(){
    const new_text=input.value
    paragraph.textContent=new_text
})
