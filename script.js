let myLibrary = [];
let html = '';

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
        let htmlLoop = `<div>
        <div><strong>TITLE: <\strong>${value.title}<\div>
        <div><strong>AUTHOR: <\strong>${value.author}<\div>
        <\div>`;
        html += htmlLoop;
    });
    document.querySelector('.container').innerHTML = html;
}