// DIV CREATION

// Big Container location
const container = document.querySelector(".container");

//Create 16x16 divs
function byDefault() {
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
// Mouseleave Event
newDivs.addEventListener("mouseleave", bgColor)
}
}

function userDivs() {
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", function(event){
    event.preventDefault();

    const number = prompt("Enter number!")
    for(let i = 1; i <= Number(number); i++) {
        const newDivs100 = document.createElement("div");
        newDivs100.classList.add("newDivs100");
        container.appendChild(newDivs100);

        //random color
        function bgColor() {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            newDivs100.style.backgroundColor = "#" + randomColor;
        }

        //Mouseenter Event
        newDivs100.addEventListener("mouseenter", bgColor)
        // Mouseleave Event
        newDivs100.addEventListener("mouseleave", bgColor)
    }
    });
}

userDivs();
// byDefault();























