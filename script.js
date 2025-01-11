"use strict";

let numbers = [100, 456, 98, 45, 43, 73]

let firstUL = document.getElementById("allNumbers")

let secondUL = document.getElementById("evenNumbers")

for (let i = 0; i < numbers.length; i++) {
  firstUL.innerHTML += `<p class="mt-3"> My Cards: </p>`;
}
for (let i = 0; i < numbers.length; i++) {
 if (numbers[i] % 2 === 0) 
secondUL.innerHTML += `<li>${numbers[i]}</li>`
}

let posts = [
  { id: 1, title: "Blog Post 1", author: "Author A", date: "11-15-2023" },
  { id: 2, title: "Blog Post 2", author: "Author B", date: "12-1-2023" },
  { id: 3, title: "Blog Post 3", author: "Author C", date: "6-15-2020" },
  { id: 4, title: "Blog Post 4", author: "Author D", date: "10-9-2003" },
  { id: 5, title: "Blog Post 5", author: "Author E", date: "3-17-2000" },
  { id: 6, title: "Blog Post 6", author: "Author F", date: "1-1-2017" },
  { id: 7, title: "Blog Post 7", author: "Author G", date: "9-14-2007" },
];

for (let i = 0; i < posts.length; i++) {
  let myBoostrapCards = `
<div class="card" style="width: 18rem;"
<img src=${posts[i].src} "class="card-img-top" alt="${posts[i].title}">
<div class="card-body">
<h5 class="card title">${posts[i].title}</h5>
<p class="card-text">${posts[i].date}</p>
<p class="card-tet">${posts[i].author}</p>
</div>
</div>`;
bootstrap.innerHTML += (myBoostrapCards)
}




