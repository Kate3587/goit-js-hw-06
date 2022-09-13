const categoriesEl = document.querySelector('#categories').children;
console.log('Number of categories:', categoriesEl.length);

for (const element of categoriesEl) {
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Elements: ', element.lastElementChild.children.length);
}

