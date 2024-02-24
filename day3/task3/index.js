const input_email = document.getElementById('input_email');
const submit_button=document.getElementById('submit_button')

// submit_button.addEventListener('click',function(){
//     if(input_email.value.trim()==""){
//         alert("Please enter an email address")
//     }
// })


//2rd tarberak
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



submit_button.addEventListener('click',function(){
    const email = input_email.value;
    if (isValidEmail(email)) {
        alert("Email address is valid.");
    } else {
        alert("Please enter a valid email address.");
    }
})


