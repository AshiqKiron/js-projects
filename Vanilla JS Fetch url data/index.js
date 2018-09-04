 

function createNode(element) {
    return document.createElement(element);  // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}

//target author element
const ul = document.getElementById('authors');
//fetching url
const url = 'https://randomuser.me/api/?results=10';

//start the fetching
fetch(url)
//start chaining response and convert to json
.then((resp) => resp.json())
//pipe through function 
.then(function(data){
    //get the data results and assing to authors
    let authors = data.results;
    return authors.map(function(author) {  // Map through the results and for each run the code below
        let li = createNode('li'), //  Create the elements we need
            img = createNode('img'),
            span = createNode('span');
        img.src = author.picture.medium;  // Add the source of the image to be the src of the img element
        span.innerHTML = `${author.name.title} ${author.name.first} ${author.name.last} `; // Make the HTML of our span to be the first and last name of our author

        append(li, img);  // Append all our elements
        append(li, span);
        append(ul, li);
    })
})

.catch(function(error){
    console.log(JSON.stringify(error));
})