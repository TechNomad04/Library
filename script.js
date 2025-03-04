let myLibrary = [];
let html = '', htmlLoop = '';

display();
function Book(title, author){
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {
    let book = new Book(title, author);
    myLibrary.push(book);
}

function display(){
    html='';
    myLibrary.forEach((value, index)=>{
        htmlLoop = `<div>
        <div><strong>TITLE: <\strong>${value.title}</div>
        <div><strong>AUTHOR: <\strong>${value.author}</div>
        </div>`;
        html += htmlLoop;
    });
    document.querySelector('.container').innerHTML = html;
}

let modal = document.querySelector('.form-dialog');
document.querySelector('.new').addEventListener('click', ()=>{
    modal.showModal();
});

document.querySelector('.x').addEventListener('click', ()=>{
    modal.close();
});

document.querySelector('.submit').addEventListener('click', ()=>{
    let title = document.querySelector('#book-name');
    let author = document.querySelector('#book-author');
    if(title.value.trim() !== "" && author.value.trim() !== ""){
        addBookToLibrary(title.value, author.value);
        display();
    }
    title.value = '';
    author.value = '';
})

display();