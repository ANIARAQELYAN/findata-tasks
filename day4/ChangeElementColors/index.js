
const items = document.querySelectorAll('#item-list li');


items.forEach(item => {
    item.addEventListener('mouseover', () => {

        item.style.color = 'red';
    });

    item.addEventListener('mouseout', () => {
        item.style.color = 'green';
    });
});
