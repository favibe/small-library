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
    