document.addEventListener("DOMContentLoaded", () => {
  getBooks()


})

function getBooks () {
  fetch("https://gutendex.com/books?search=austen%20jane", fetchParameters)
    .then(response => response.json())
    .then(data => console.log(data.results))
}

const fetchParameters = {
  method: "GET",
  headers:{
    'Content-Type': 'application/json'
  },
}