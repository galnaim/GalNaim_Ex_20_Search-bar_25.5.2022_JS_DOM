// אין לי הצעות ייעול מבחינת קוד, זה לדעתי מושלם. רק על עיצוב יש מה לעשות
const menu = document.querySelector(".menu");
const inputWindow = document.querySelector(".input-Window");
let fruits = ["apple", "banana", "orange", "peach", "applebees", "bananasplit"];

function displayitems(arr) {
  menu.textContent = "";
  if (arr.length === 0) {
    const noResultsMessege = document.createElement("div");
    noResultsMessege.classList.add("no-result");
    noResultsMessege.textContent = "No Results Found";
    noResultsMessege.classList.add("noResultsMessege")
    menu.append(noResultsMessege);
  } else {
    arr.forEach(function (item) {
      console.log(item);
      const liItem = document.createElement("div");
      liItem.classList.add("item");
      liItem.textContent = item;
      menu.append(liItem);
    });
  }
}
displayitems(fruits);

inputWindow.oninput = checkwords;
function checkwords() {
  let input = inputWindow.value;
  let filtered = fruits.filter(function (el) {
    return el.startsWith(input);
  });

  displayitems(filtered);
}
