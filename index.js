// DIV CREATION

// Big Container location
const container = document.querySelector(".container");

//Create 16x16 divs
for(let i = 1; i <= 256; i++) {
    const newDivs = document.createElement("div");
    newDivs.classList.add("newDivs");
    container.appendChild(newDivs);

//random color
function bgColor() {
const randomColor = Math.floor(Math.random()*16777215).toString(16);
newDivs.style.backgroundColor = "#" + randomColor;
}

 //Mouseenter Event
newDivs.addEventListener("mouseenter", bgColor)
// //Mouseleave Event
newDivs.addEventListener("mouseleave", bgColor)

}
    










//button 
const btn = document.querySelector(".btn");
btn.addEventListener("click", userNumber);
function userNumber() {
    prompt("Enter number!")
}







