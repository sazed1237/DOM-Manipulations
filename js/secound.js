console.log('this is second js file of summery');



const secondList = document.getElementById('second-list');

// adding
const li = document.createElement('li');
li.innerText = 'this is dynamic item'

secondList.appendChild(li)




// sections adding
const mainSection = document.getElementById('main-section');


const newSection = document.createElement('section');
const newH1 = document.createElement('h1');
newH1.innerText = 'This is Dynamic Heading'
newSection.appendChild(newH1)

const newUl = document.createElement('ul');
newSection.appendChild(newUl);

const newLi1 = document.createElement('li')
newLi1.innerText = 'dynamic li- 1'
newUl.appendChild(newLi1)

const newLi2 = document.createElement('li')
newLi2.innerText = 'dynamic li- 2'
newUl.appendChild(newLi2)

const newLi3 = document.createElement('li')
newLi3.innerText = 'dynamic li- 3'
newUl.appendChild(newLi3)

const newLi4 = document.createElement('li')
newLi4.innerText = 'dynamic li- 4'
newUl.appendChild(newLi4)


mainSection.appendChild(newSection)




// set HTML Directly
const directlyAdding = document.createElement('section');
directlyAdding.innerHTML = `
<h1>Directly adding</h1>
            <ul>
                <li>List item-1</li>
                <li>List item-2</li>
                <li>List item-3</li>
                <li>List item-4</li>
            </ul>
`

mainSection.appendChild(directlyAdding);