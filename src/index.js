import "./style.css"; 
// get dom elements
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownDiv = document.querySelector(".dropdown");
const dropdownContentDiv = document.querySelector(".dropdown-content");

// add cursor: pointer to button
dropdownBtn.style.cursor = "pointer";

// add event listener to show dropdown menu
dropdownBtn.addEventListener("click", ()=> {
    // show menu, toggle .show style class
    dropdownContentDiv.classList.toggle("show");
});  
