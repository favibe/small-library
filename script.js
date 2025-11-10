const myLibrary = [];

// 📘 Book class
class Book {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  // replaces Book.prototype.isRead
  isRead() {
    this.read = this.read === "Read" ? "Not Read" : "Read";
  }
}

// 📘 Add book to library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  renderBooks();
}

// 📘 Render books
function renderBooks() {
  const libraryContainer = document.getElementById("libraryContainer");
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
      <button class="toggleBtn">Read</button>
      <button class="removeBtn">Remove</button>
    `;

    // Toggle read status
    card.querySelector(".toggleBtn").addEventListener("click", () => {
      book.isRead();
      renderBooks();
    });

    // Remove book
    card.querySelector(".removeBtn").addEventListener("click", () => {
      removeBook(book.id);
    });

    libraryContainer.appendChild(card);
  });
}

// ❌ Remove book
function removeBook(id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    renderBooks();
  }
}

// 📘 Form handling
const dialog = document.getElementById("bookDialog");
const newBookBtn = document.getElementById("newBookBtn");
const cancelBtn = document.getElementById("cancelBtn");
const form = document.getElementById("bookForm");

newBookBtn.addEventListener("click", () => dialog.showModal());
cancelBtn.addEventListener("click", () => dialog.close());

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("readStatus").value;

  addBookToLibrary(title, author, pages, read);
  form.reset();
  dialog.close();
});

//  adding test books
addBookToLibrary("The Alchemist", "Paulo Coelho", 197, "Read");
addBookToLibrary("1984", "George Orwell", 328, "Not Read");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "Read");
