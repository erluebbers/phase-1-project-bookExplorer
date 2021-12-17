document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("travel_input").addEventListener('submit', getBooks)
})

function getBooks (e) {
  e.preventDefault()
  const place = (e.target.place.value)
  fetch(`https://gutendex.com/books?search=${place}%20`)
    .then(response => response.json())
    .then(({results}) => {
      results.forEach(book => createBookList(book))
    })
  document.getElementById("travel_input").reset()
}

function createBookList (book) {
  const bookItem = document.createElement('li')
  bookItem.innerText = book.title
  document.getElementById("book_container").appendChild(bookItem)
  bookItem.addEventListener('click', () => {
    let list = document.createElement("ul")
    list.innerHTML = `
    <li>Author: ${book.authors.length != 0 ? book.authors[0].name : 'none listed'}</li>
    <li id="${book.id}">Subjects: </li>
    `
    bookItem.appendChild(list)
    document.getElementById(`${book.id}`).appendChild(subjectList(book.subjects))
  }, {once : true})
}

function subjectList (array) {
  const subList = document.createElement('ul')
  array.forEach(subject => {
    let item = document.createElement('li')
    item.innerText = subject
    subList.appendChild(item)
  })
  return subList
}