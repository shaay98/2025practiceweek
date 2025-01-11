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

let posts = {
  id: 1,
  title: "Blog Post 1",
  author: "Author A",
  date: "11-15-2023",
};

let myBoostrapCards = `
<div class="card" style="width: 18rem;"
<img src="https://placeholder.co/100x100" class="card-img-top" alt="placeholder img">
<div class="card-body">
<h5 class="card title">${posts.title}</h5>
<p class="card-text">${posts.date}</p>
<p class="card-tet">${posts.author}</p>
</div>
</div>
`;

bootstrap.innerHTML = (myBoostrapCards)

