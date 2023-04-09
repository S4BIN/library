let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

function render() {
  let bookshelf = document.getElementById("bookshelf");
  bookshelf.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-index", i);

    let title = document.createElement("h2");
    title.textContent = book.title;
    bookCard.appendChild(title);

    let author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    bookCard.appendChild(author);

    let pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;
    bookCard.appendChild(pages);

    let read = document.createElement("p");
    read.textContent = `Read: ${book.read ? "Yes" : "No"}`;
    bookCard.appendChild(read);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", removeBook);
    bookCard.appendChild(removeButton);

    let readButton = document.createElement("button");
    readButton.textContent = "Toggle Read";
    readButton.addEventListener("click", toggleRead);
    bookCard.appendChild(readButton);

    bookshelf.appendChild(bookCard);
  }
}

function removeBook(e) {
  let bookCard = e.target.parentElement;
  let index = bookCard.getAttribute("data-index");
  myLibrary.splice(index, 1);
  render();
}

function toggleRead(e) {
  let bookCard = e.target.parentElement;
  let index = bookCard.getAttribute("data-index");
  myLibrary[index].read = !myLibrary[index].read;
  render();
}

let newBookForm = document.getElementById("new-book-btn");
newBookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addBookToLibrary();
});
