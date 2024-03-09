
// 1. where to add
const placesList = document.getElementById('Places-list');
// 2. what to  be added
const li = document.createElement('li')
li.innerText = 'Sitakunda';
// 3. add the child
placesList.appendChild(li);





// 1.where to add
const mainContainer = document.getElementById('main-container')
// console.log(mainContainer);

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'my food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Kacchi';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Rosogullah';
ul.appendChild(li3);


section.appendChild(ul)

mainContainer.appendChild(section)


// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress sections</h1>
<ul>
    <li>T-Shirt</li>
    <li>Shirt</li>
    <li>Pent</li>
    <li>Shoe</li>
    <li>LungiBaBa</li>
</ul>
`

mainContainer.appendChild(sectionDress);