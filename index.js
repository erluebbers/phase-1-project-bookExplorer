document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("travel_input").addEventListener('submit', getBooks)

})

function getBooks (e) {
  e.preventDefault()
  const place = (e.target.place.value)
  fetch(`https://gutendex.com/books?search=${place}%20`, fetchParameters)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(book => createBookList(book))
      console.log(data.results)
    })
  document.getElementById("travel_input").reset()
}

const fetchParameters = {
  method: "GET",
  headers:{
    'Content-Type': 'application/json'
  },
}

function createBookList (book) {
  let bookItem = document.createElement('li')
  bookItem.innerText = book.title
  document.getElementById("book_container").appendChild(bookItem)
  bookItem.addEventListener('click', () => {
    
  })
}