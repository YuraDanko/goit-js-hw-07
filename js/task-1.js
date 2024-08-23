`use strict`

// Стилізація
const itemsStyle = document.querySelectorAll('.item');

itemsStyle.forEach(item => {
    
    item.style.backgroundColor = '#f7f7fb';
    item.style.padding = '10px';
    item.style.marginBottom = '15px';
    item.style.borderRadius = '8px';

    const title = item.querySelector('h2');
    if (title) {
        title.style.fontSize = '18px';
        title.style.fontWeight = 'bold';
        title.style.marginBottom = '10px';
    }

    const listItems = item.querySelectorAll('ul > li');
    listItems.forEach(listItem => {
        listItem.style.maxWidth = '360px';
        listItem.style.padding = '5px 10px';
        listItem.style.backgroundColor = '#fff';
        listItem.style.borderRadius = '4px';
        listItem.style.marginBottom = '5px';
        listItem.style.border = '1px solid #ddd';
    });
});

//Виконання завдання


const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;

    const elementsCount = item.querySelectorAll('ul > li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsCount}`);
});