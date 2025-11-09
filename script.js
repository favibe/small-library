const myLibrary = [];

//book constructor 
function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.isRead = function() {
  this.read = this.read === "Yes" ? "No" : "Yes";
};

//function for adding book into array
function addBookToLibrary(titile, author, pages, read) {
    const newBook = new Book(titile, author, pages, read);
    myLibrary.push(newBook);
    renderBooks();
};

//functions to display books
function renderBooks() {
    const libraryContainer = document.getElementById("library-container");
    libraryContainer.innerHTML = "";
    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.setAttribute("data-id", book.id);
        card.innerHTML = `
        <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read}</p>
      <button class="toggleBtn">Toggle Read</button>
      <button class="removeBtn">Remove</button>
        `;