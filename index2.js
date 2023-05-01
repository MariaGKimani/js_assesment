const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

// Create a function called getAvailableBooks 
//that returns an array of all available books.

function getAvailableBooks(){
    const  arraybook = books.map((book)=> book.title)
    return arraybook
}
console.log(getAvailableBooks());

// 2. Create a function getBooksByAuthor that takes 
// an author's name as an argument and
// returns an array of all books by that author.
function getBooksByAuthor(authorN){
    return books.filter(book => book.author === authorN);
}
console.log(getBooksByAuthor('J.D. Salinger',));

// Create a function addNewBook that takes a book object 
// as an argument and adds it to the library, ensuring
// that the new book has all required properties (title, author,
// publicationYear, and isAvailable).


function addNewBook(book){
  let  x = ['title','author','publicationYear','isAvailable']
  const Properties = x.every(property => book.hasOwnProperty(property));
  
  if (Properties) {
    books.push(book);
    console.log('New book added successfully.');
  } else {
    console.log('Invalid book object. Please make sure it has all the required properties.');
  }
}
console.log(addNewBook({ title: 'born a crime',
author: 'Trevoh Noah',
publicationYear: 2000,
isAvailable: true}));
console.log(books);





// // Create a function checkoutBook that takes a book title
// //  as an argument and changes the book's isAvailable property to false.
// //  If the book is not found in the library, the
// // function should return a message indicating that the book is not available.
// // function checkoutBook(booktitle){
    x = Object.keys(isAvailable == true)
 





// // Create a function returnBook that takes a book title as an argument and changes the
// // book's isAvailable property to true. If the book is not found in the library, the function
// // should return a message indicating that the book does not belong to the library.
function returnBook (bookstitle){
    this.title = bookstitle
   if(bookstitle === bookstitle.title){
    books.isAvailable = true
   }
   else{
    console.log(`The ${this.book} does not belong to the array`)
   }
}
console.log(returnBook(books))