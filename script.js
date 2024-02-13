

// Array to store book objects
const myLibrary = [];

// Constructor function to create Book objects
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add a new book to the library array
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// Function to display all books in the library
function displayBooks() {
  const bookContainer = document.getElementById('book-container');
  bookContainer.innerHTML = ''; // Clear previous content

  // Loop through each book in the library array
  myLibrary.forEach((book, index) => {
    // Create a div element for the book card
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.dataset.index = index; // Set data-index attribute for later reference

    // Create elements to display book information
    const title = document.createElement('h2');
    title.textContent = book.title;
    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;
    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;
    const read = document.createElement('p');
    read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
    const div = document.createElement('div');
    div.classList.add('btn-group');

    // Create buttons to remove or toggle read status of the book
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => removeBook(index));

    const toggleReadBtn = document.createElement('button');
    toggleReadBtn.textContent = book.read ? 'Read' : 'Unread';
    toggleReadBtn.classList.add(book.read ? 'btn-green' : 'btn-red');
    toggleReadBtn.addEventListener('click', () => toggleReadStatus(index));

    // Append elements to the book card
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(div);
    div.appendChild(toggleReadBtn);
    div.appendChild(removeBtn);

    // Append the book card to the book container
    bookContainer.appendChild(bookCard);
  });
}

// Function to remove a book from the library
function removeBook(index) {
  myLibrary.splice(index, 1); // Remove book from the array
  displayBooks(); // Update the display
}

// Function to toggle the read status of a book
function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read; // Toggle read status
  displayBooks(); // Update the display
}

// Function to show the modal
function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
  }
  
  // Function to hide the modal
  function hideModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
  }
  
  // Event listener for the "New Book" button to show the modal
const newBookBtn = document.getElementById('new-book-btn');
newBookBtn.addEventListener('click', () => {
  showModal(); // Call the showModal function to display the modal
});
  
  // Event listener for the close button in the modal to hide the modal
  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
    hideModal();
  });
  
  // Event listener for clicking outside the modal to close it
  window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
      hideModal();
    }
  });
  
  // Event listener for the book form submission
  const bookForm = document.getElementById('book-form');
  
  bookForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Retrieve values from form inputs
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  // Add book to the library with retrieved values
  addBookToLibrary(title, author, pages, read);
  
  // Update display
  displayBooks();
    // Reset form fields and hide the modal
    bookForm.reset();
    hideModal();
  });

// Manually add some books for testing
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, true);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, false);

// Display the initial set of books
displayBooks();
