
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

// --------------------------------------------------------------------------------------------------

// DOM TRAVERSAL FROM SIBLING TO SIBLING


var bookList = document.querySelector('#book-list');

// This wil give you text node because of line break
console.log('book-list next sibling is', bookList.nextSibling);

// This will give you next element
console.log('book-list next element sibling is ', bookList.nextElementSibling);

// This wil give you text node because of line break
console.log('book-list previous sibling is ', bookList.previousSibling);

// This will give you next element
console.log('book-list previous element element sibling is:', bookList.previousElementSibling);

// This will going to give you previous sibling element of bookList and then select the p element from it and append the content in it
bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool for everyone else!';

// -------------------------------------------------------------------------------------------------------------

// comment below Event Bubbling part to make this code work

// DOM EVENTS AND REMOVING CONTENT


// var btns = document.querySelectorAll("#book-list .delete");

// Array.from(btns).forEach(function(btn){
//     // Adding event to every delete button
//     btn.addEventListener('click', function(e){
//         // Getting every buttons parent element
//         const li = e.target.parentElement;
//         // Removing child from parentnode (ul) 
//         li.parentNode.removeChild(li);
//     })
// })

//  // Uncomment the a tag present inside <div id = "page-banner"></div> to make this work
// // If we want to change the deault behaviour of the particulat element then we can do it using events
// var link = document.querySelector("#page-banner a");

// link.addEventListener('click', function(e){
//     // This will going to prevent the link to do its work
//     e.preventDefault();
//     console.log('navigation to ', e.target.textContent, ' was prevented');
// })


// ------------------------------------------------------------------------------

// Comment above DOM EVENTS AND REMOVING CONTENT part to make this code work

// Event bubbling

// This concept is come because if we change html from inspect element and add another li tag to it then event can't be added to that particular li because app.js is already loaded
// And one another drawback of adding events to the button is we hadd to go to every button to add a event which takes very much time

// So via event bubbling we can set even to ul and whenever we hit delete it goes to ul and the remove the paricular element whose delete is clicked

// Selecting ul tag
var list = document.querySelector('#book-list ul');

// Adding event to ul tag
list.addEventListener('click', function(e){
    // If element with className delete is clicked
    if(e.target.className == 'delete'){
        // Then go to li tag(Parent of element constaining class delete)
        var li = e.target.parentElement;

        // Remove that particular li tag from ul tag
        list.removeChild(li);
    }
})

// ------------------------------------------------------------------------------------------

// FORMS

// returns all the forms in an  array
console.log(document.forms);

// return a praticular form
console.log(document.forms[0]);

// return a form with particular id
console.log(document.forms['add-book']);

// Forms default behaviour is to refresh the page so we are going to prevent it by adding event below
var addForm = document.forms['add-book'];
var list = document.querySelector('#book-list ul');
addForm.addEventListener('submit', function(e){
    // Preventing refresh of page
    e.preventDefault();

    // Grabbing the value present inside the input box
    var value = addForm.querySelector('input[type = "text"]').value;
    
    // Prints the value present inside the input box on to the console
    // console.log(value);

    // create elements
    var li = document.createElement('li');
    var bookName = document.createElement('span');
    var deletBtn = document.createElement('span');

    // add content
    deletBtn.textContent = 'delete';
    bookName.textContent = value;

    // li.className ='test';    Adds class test to li
    // li.className += 'test1';    appends one another class named test1 to li 
    // li.classList ---> returns the list of classes

    // Add classes
    bookName.classList.add('name');
    deletBtn.classList.add('delete');

    // Appending to document
    li.appendChild(bookName);
    li.appendChild(deletBtn);
    list.appendChild(li);
})

// ---------------------------------------------------------------------------------------------


// Changing attributes of a element

// var book = document.querySelector('li: first-child .name');

// // To get a attribute value
// book.getAttribute('class');

// // To set a attribute
// book.setAttribute('class', 'name');

// // To check if a element has a paricular attribute
// book.hasAttribute('class');     //Returns boolean value

// // To remove a attribute
// book.removeAttribute('class');



// --------------------------------------------------------------------------

// CheckBox Events


var hideBox = document.querySelector('#hide');
var list = document.querySelector('#book-list ul');

hideBox.addEventListener('change', function(e){
    // Check if hideBox is checked or not
    if(hideBox.checked){
        list.style.display = "none";
    }else{
        list.style.display = "initial";
    }
})

// ---------------------------------------------------------------------------------------

// Custom Search Filter

var searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function(e){
    // Converting value written inside textbox to lower case
    const term = e.target.value.toLowerCase();

    // Taking books from tag li
    const books = list.getElementsByTagName('li');

    // Iterating thrugh array
    Array.from(books).forEach(function(books){
        // inserting text of firstElement of li in title
        var title = book.firstElementChild.textContent;

        // Making title lowercase and comparing it with term
        if(title.toLowerCase().indexOf(term)!= -1){
            // If it not returns -1 then display block
            book.style.display = 'block';
        }else{
            // Otherwise display nonr
            book.stylr.display = 'none';
        }
    })
})

// -----------------------------------------------------------------------------------------------


// Tabbed content

var tabs = document.querySelector('.tabs');
var panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            }else{
                panel.classList.remove('active');
            }
        })
    }
})