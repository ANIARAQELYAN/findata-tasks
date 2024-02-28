document.addEventListener('DOMContentLoaded', function() {
    const sliderImage = document.getElementById('sliderImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const images = [
        'fedor-PtW4RywQV4s-unsplash.jpg',
        'henry-gt-dixon-sDuylE325TM-unsplash.jpg',
        'oskar-smethurst-B1GtwanCbiw-unsplash.jpg',
    ];

    let currentIndex = 0;


    function updateSlider() {
        sliderImage.src = './image/' + images[currentIndex];
    }


    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });


    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    });


    updateSlider();
});
