document.addEventListener("DOMContentLoaded", () => {
  getBooks()


})

function getBooks () {
  fetch ("https://reststop.randomhouse.com/resources/works/?start=0&max=15&expandLevel=1&search=Austen", {
    method: GET,
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => console.log(data))
}