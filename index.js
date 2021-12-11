document.addEventListener("DOMContentLoaded", () => {
  getBooks()


})

function getBooks () {
  fetch("https://gutendex.com/books?search=Japan%20", fetchParameters)
    .then(response => response.json())
    .then(data => console.log(data.results))
}

const fetchParameters = {
  method: "GET",
  headers:{
    'Content-Type': 'application/json'
  },
}

function createBookCard (book) {
  let bookItem = document.createElement(li)
  bookItem.innerHTML = `
  <h2>
  `
  
}