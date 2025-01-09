"use strict";

let numbers = document.getElementById("numbers");

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element % 2 == 0) {
    console.log(element);
  }
}

let posts = {
  id: 1,
  title: "Blog Post 1",
  author: "Author A",
  date: "11-15-2023",
};

let myBoostrapCards = `
<li class="card" style="width: 18rem;"
<img src="https://placeholder.co/100x100" class="card-img-top" alt="placeholder img">
<div class="card-body">
<h2 class="card title">${posts.title}</h2>
<p class="card-text">${posts.date}</p>
</div>
</li>
`;

numbers.innerHTML = myBoostrapCards;
