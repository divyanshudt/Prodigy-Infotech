// script.js

const productList = document.getElementById('product-list');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const description = e.target.nextElementSibling;
        description.classList.toggle('show');
    });
});

// Add event listener to product list items
productList.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.backgroundColor = '#f7f7f7';
    }
});

productList.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.backgroundColor = '';
    }
});