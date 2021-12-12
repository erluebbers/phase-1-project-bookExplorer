document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("travel_input").addEventListener('submit', getBooks)


})

function getBooks (e) {
  e.preventDefault()
  console.log(e.target.place.value)
  // fetch("https://gutendex.com/books?search=Japan%20", fetchParameters)
  //   .then(response => response.json())
  //   .then(data => console.log(data.results))
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