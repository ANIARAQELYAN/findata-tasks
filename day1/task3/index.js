const button = document.getElementById('button_id');
const div = document.getElementById('div_id');


div.style.display = "none";

button.addEventListener('click', function () {
   
    if (div.style.display === "none") {
        div.style.display = "block";
        button.textContent = "Hide";
    } else {
        div.style.display = "none";
        button.textContent = "Show";
    }
});
