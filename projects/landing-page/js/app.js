// builds the navigation menu dynamically
function buildNav() {
    const sectionsCollection = document.getElementsByTagName('section');
    let navList = document.getElementById('navbar__list');
    sectionsArray = Array.from(sectionsCollection);
    for (const [i, section] of sectionsArray.entries()) {
        navListItem = document.createElement('li');
        navListItem.innerText = section.dataset['nav'];
        navListItem.classList.add('menu__link');
        const sectionId = section.id;
        navListItem.classList.add(sectionId);
        navListItem.addEventListener('click', () => {
            sectionsArray[i].scrollIntoView({behavior: 'smooth'});
        });
        navList.appendChild(navListItem);
    }
}
buildNav();

// toggles active states on scroll across sections
 function toggleActiveStatesOnScroll() {
    const sections = document.getElementsByTagName('section');
    for(const section of sections) {
        const sectionBoundary = section.getBoundingClientRect();
        if (sectionBoundary.top <= 55 && sectionBoundary.bottom >= 100) {
            section.classList.add('your-active-class');
            listItemClass = section.id;
            listItem = document.getElementsByClassName(listItemClass)[0];
            listItem.classList.add('active');
        } else {
            section.classList.remove('your-active-class');
            listItemClass = section.id;
            listItem = document.getElementsByClassName(listItemClass)[0];
            listItem.classList.remove('active');
        }
    }
 }

 document.addEventListener('scroll', function() {
    toggleActiveStatesOnScroll();
});


