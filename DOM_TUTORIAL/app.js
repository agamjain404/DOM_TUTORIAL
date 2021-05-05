// document methods will always going to return HTMLCollection 
// It will never return arrays

// -------------------------------------------------------

// getElemntById()

// Will get the particular element by its id

var elemById = document.getElementById('page-banner');
console.log(elemById);

// --------------------------------------------------------

// getElementByClassName()

// Will get the particular elements by their class name
var elemByClass = document.getElementsByClassName('title');
console.log(elemByClass);

// We can iterate through elemByClass using normal for loop
for(let i=0; i<elemByClass.length; i++){
    console.log(elemByClass[i]);
}

// We can't iterate through elemByClass ussing forEach loop because its not an array
// Below written code will give error
// elemByClass.forEach(function(item){
//     console.log(item);
// })

// We can apply for each after converting elemByClass into array
// Method to convert collection into array is written below
console.log(Array.isArray(elemByClass));    //False
console.log(Array.isArray(Array.from(elemByClass)));        //Will return true

// To convert collection into array we use above written method
Array.from(elemByClass).forEach(function(item){
    console.log(item);
});

// ------------------------------------------------------------------------

// getElementByTagName()

// Will return particular tagged elements
var elemByTags = document.getElementsByTagName('li');
console.log(elemByTags);

// We can iterate through elemByTags using normal for loop
for(let i=0; i<elemByTags.length; i++){
    console.log(elemByTags[i]);
}

// We can't iterate through elemByTags ussing forEach loop because its not an array
// Below written code will give error
// elemByTags.forEach(function(item){
//     console.log(item);
// })

// To convert collection into array we use above written method
Array.from(elemByTags).forEach(function(item){
    console.log(item);
});

// -------------------------------------------------------------------------

// QuerySelector

// Always returns single element
var book = document.querySelector("#book-list>ul>li>.name");
// It prints the first element matched with the selector
console.log(book);

// It will going to return a HTMLCollection containing elements matched with the provided selector
var books = document.querySelectorAll("#book-list>ul>li>.name");
console.log(books);

// Now to iterate it we can use normal for loop but if we want to iterate with forEach then we had to convert this collection into array
Array.from(books).forEach(function(item){
    console.log(item);
})

// -----------------------------------------------------------------------------