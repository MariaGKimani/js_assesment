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
function getBooksByAuthor(author){
    // const Allbooks =books.map({name:name.title})
    const Allbooks = books.forEach((title)=>{
        return title.author})
    }
console.log(getBooksByAuthor('J.D. Salinger'));
// Create a function addNewBook that takes a book object 
// as an argument and adds it to the library, ensuring
// that the new book has all required properties (title, author,
// publicationYear, and isAvailable).


function addNewBook(book)
    // Object.assign(

        
    //     author:
    //     publicationYear:
    //     isAvailable:
    //     title:
    //     )
    // }




// Create a function checkoutBook that takes a book title
//  as an argument and changes the book's isAvailable property to false.
//  If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(booktitle){
    x = Object.keys(isAvailable == true)
    if(){

    }else{

    }
 }
 




// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.