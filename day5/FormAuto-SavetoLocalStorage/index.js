document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');


    function restoreFormData() {
        const savedData = JSON.parse(localStorage.getItem('formData'));
        if (savedData) {
            nameInput.value = savedData.name;
            emailInput.value = savedData.email;
        }
    }


    function saveFormData() {
        const formData = {
            name: nameInput.value,
            email: emailInput.value
        };
        localStorage.setItem('formData', JSON.stringify(formData));
    }


    let timer;
    function throttleSaveFormData() {
        clearTimeout(timer);
        timer = setTimeout(saveFormData, 1000); 
    }


    nameInput.addEventListener('input', throttleSaveFormData);
    emailInput.addEventListener('input', throttleSaveFormData);


    restoreFormData();
});
