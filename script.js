let myLibrary = [];
let html = '', htmlLoop = '';

function Book(title, author){
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {
    let book = new Book(title, author);
    myLibrary.push(book);
}

function display(){
    myLibrary.forEach((value, index)=>{
        htmlLoop = `<div>
        <div><strong>TITLE: <\strong>${value.title}</div>
        <div><strong>AUTHOR: <\strong>${value.author}</div>
        </div>`;
        html += htmlLoop;
    });
    document.querySelector('.container').innerHTML = html;
}

document.querySelector('.new').addEventListener('click', function(){
    let htmlIn = `<div>
        <label for="book-name"><strong>Title: </strong></label>
        <input type="text" name="book-name" id="book-name">
        <label for="book-author"><strong>Author: </strong></label>
        <input type="text" name="book-author" id="book-author">
        <button class="submit">Submit</button>
    </div>`;
    document.querySelector('.form').innerHTML = htmlIn;
});

let submit = document.querySelector('.submit');
