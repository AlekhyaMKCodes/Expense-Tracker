console.dir(document);
console.log(document.URL);
console.log(document.title);
document.title = 123 ;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
var header = document.getElementById('main-header');
header.style['border-bottom'] = "3px solid black";
var title= document.getElementById('header-title');
title.style.fontWeight = 'bold';

var items = document.querySelectorAll('#items li');

// Loop through the list items and apply styles
for (var i = 0; i < items.length; i++) {
  items[i].style.fontWeight = 'bold';

  if (i === 2) {
    items[i].style.backgroundColor = 'green';
  }
}