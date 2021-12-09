console.log("Javascript File is happening")
document.addEventListener("DOMContentLoaded", () => {
  getBooks()


})

const fetchParameters = {
  method: "GET",
  headers:{
    'Content-Type': 'application/json'
  },
}

function getBooks () {
  fetch("https://gutendex.com/books", fetchParameters)
    .then(response => response.json())
    .then(data => console.log(data))
}