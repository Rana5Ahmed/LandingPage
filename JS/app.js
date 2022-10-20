  // Catching elements from html file by IDs and Classes 
  let elements = document.querySelectorAll('section');
  let navbarUl = document.getElementById('list');
  let title = document.getElementById('landing'); 
  let navList = '';
  title.textContent = `Landing Page`;

// adding Navbar dynamically by adding new sections into navbar automatically 
  function dynamicNav() {
        elements.forEach((section) => {
          // fill an empty navlist
        navList= navList + `<li> <a class=" menu__link " href="#${section.id}" id="navli">
        ${section.dataset.nav}</a></li>`;
        navbarUl.innerHTML = navList; });}
// Calling function
dynamicNav();
// Smooth motion in page 
// you have anther static methode(html{behivor:smooth})
const smoothing = document.querySelectorAll(".menu__link");
// for loop for each section in page
for (const item of smoothing) {
  item.addEventListener("click", smooth);
}
function smooth(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  // find each link and make it's motion smooth
  document.querySelector(href).scrollIntoView({behavior: "smooth"});
}

// Active navbar with color remains in page leading you to the section you are in 

// get both nav & li by id and class name 
var navigation = document.getElementById("navbar");
 var liActive = navigation.getElementsByClassName("menu__link");
//  for loop to the number of items in list(Sections) to add eventlistner to each one of them
 for (var i = 0; i < liActive.length; i++) {
   liActive[i].addEventListener("click", function() {
   var activation = document.getElementsByClassName("active");
   if (activation.length > 0) { 
    // Activation of this section
   activation[0].className = activation[0].className.replace(" active", "");}
   this.className += " active";
   });
 }

// while scrolling showing that your current section is an active section 
  function activeClass(section) {
    const id = section.getAttribute('id');
    document.querySelector(`#${id}`).classList.add('your-active-class');
}
// while scroll up or down the previous section became deactivated
  function delactiveClass(section) {
    const id = section.getAttribute('id');
    document.querySelector(`#${id}`).classList.remove('your-active-class');
}
//The acurate calculations of activation and deactivation
  function activeSection() {
    elements.forEach((section) => {
    let active = section.getBoundingClientRect();
      if (active.top <= 125 && active.bottom >= 125) {
       activeClass(section);} 
      else {
       delactiveClass(section);
     }
   });
  }
 
 document.addEventListener('scroll', activeSection);

 