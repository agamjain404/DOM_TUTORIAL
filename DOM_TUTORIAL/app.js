
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

// These woll going to return NodeList not HTMLCollection

// QuerySelector

// Always returns single element
var book = document.querySelector("#book-list>ul>li>.name");
// It prints the first element matched with the selector
console.log(book);

// It will going to return a NodeList containing elements matched with the provided selector
var books = document.querySelectorAll("#book-list>ul>li>.name");
console.log(books);

// Now to iterate it we can use normal for loop but if we want to iterate with forEach then we had to convert this NodeList into array
Array.from(books).forEach(function(item){
    console.log(item);
})

// -----------------------------------------------------------------------------

//Editing HTML

var books = document.querySelectorAll("#book-list li .name");
Array.from(books).forEach(function(book){
    // book.textContent = 'text';      // This will change the content of the elements present inside the books
    // book.textContent += '(book title)'; //This will going to append the content in the elements present inside the books 
})


var bookList = document.querySelector("#book-list");
console.log(bookList.innerHTML);    //This will print all the HTML of elements present inside bookList
// bookList.innerHTML = "<h2>Agam Jain is here</h2>";  //This will going to change the innerHTML of the elements present inside it
// bookList.innerHTML += "<p> Agam jain is so cool </p>";  //This will apprnd this HTML to the already present html


// --------------------------------------------------------------------------

// DOM NODES

// Nodes can be of many types like
// Attribute node , Element Node, Text Node
// Study regarding this on => https://www.w3schools.com/jsref/prop_node_nodetype.asp

const banner = document.querySelector('#page-banner');

// Node type will be type number 
console.log("#page-banner node type is ",banner.nodeType);

// Node name will be element name
console.log("#page-banner node name is ",banner.nodeName);

// Always gives boolean if node has child nodes then true otherwise false
console.log("#page-banner has child nodes ", banner.hasChildNodes());

// If we want to clone a node with its child the we can use this command
const clonedBannerWithChild = banner.cloneNode(true);
console.log(clonedBannerWithChild);

// If we want to clone a node without its child then use this command
const clonedBannerWithoutChild = banner.cloneNode(false);
console.log(clonedBannerWithoutChild);

// ---------------------------------------------------------------------------------------


// DOM TRAVERSAL FROM PARENT TO CHILD AND VICE VERSA

// This is from child to parent

var bookList = document.querySelector('#book-list');

// This will going to give us the parentNode of the element present inside bookList;
console.log('The parent node is ', bookList.parentNode);

// This also works same as parentNode
console.log('The parent element is ', bookList.parentElement);

// We can als do it like this to parent's parent
console.log('The grand-parent element is ', bookList.parentElement.parentElement);


// This is from parent to child

// When we hit this we get some extra nodes in array named text
// Those are line-breaks in html 
console.log(bookList.childNodes);

// So to avoid line-breaks we can hit this command  
console.log(bookList.children);

// -------------------------------------------------