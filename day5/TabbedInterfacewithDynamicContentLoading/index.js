document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Initialize the first tab as active
    tabButtons[0].classList.add('active');
    tabContents[0].classList.add('active');


    function loadTabContent(tabId) {

        setTimeout(() => {
            const tabContent = document.getElementById(tabId);
            tabContent.textContent = `Content for ${tabId}`;
        }, 500); // Adjust the delay as needed
    }


    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');


            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));


            this.classList.add('active');


            const tabContent = document.getElementById(tabId);
            tabContent.classList.add('active');


            loadTabContent(tabId);
        });
    });
});
