const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '7px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}


// const placesContainer = document.getElementById('Places-Cotainer');
// placesContainer.style.backgroundColor = 'yellow';


const placesContainer = document.getElementById('Places-Cotainer');
placesContainer.classList.add('yellow-bg', 'text-center');
placesContainer.classList.remove('large-text');