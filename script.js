let myLibrary = [];

function Book(title, author){
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {
    let book = new Book(title, author);
    myLibrary.push(book);
}