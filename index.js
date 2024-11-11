// // DIV CREATION

// // Big Container location
// const container = document.querySelector(".container");

// //Create 16x16 divs
// function byDefault() {
// for(let i = 1; i <= 256; i++) {
//     const newDivs = document.createElement("div");
//     newDivs.classList.add("newDivs");
//     container.appendChild(newDivs);

// //random color
// function bgColor() {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     newDivs.style.backgroundColor = "#" + randomColor;
// }

// //Mouseenter Event
// newDivs.addEventListener("mouseenter", bgColor)
// // Mouseleave Event
// newDivs.addEventListener("mouseleave", bgColor)
// }
// }

// function userDivs() {
//     const btn = document.querySelector(".btn");
//     btn.addEventListener("click", function(event){
//     event.preventDefault()
//     const number = prompt("Enter number!")
//     for(let i = 1; i <= Number(number) * Number(number); i++) {
//         const newDivs100 = document.createElement("div");
//         newDivs100.classList.add("newDivs100");
//         container.appendChild(newDivs100);

//         //random color
//         function bgColor() {
//             const randomColor = Math.floor(Math.random()*16777215).toString(16);
//             newDivs100.style.backgroundColor = "#" + randomColor;
//         }

//         //Mouseenter Event
//         newDivs100.addEventListener("mouseenter", bgColor)
//         // Mouseleave Event
//         newDivs100.addEventListener("mouseleave", bgColor)
//     }
// });
// }

// userDivs();
// // byDefault();




// Big Container location
const container = document.querySelector(".container");

// Default grid size
const DEFAULT_SIZE = 16;

// Function to clear existing grid
function clearGrid() {
    container.innerHTML = '';
}

// Function to create grid
function createGrid(size) {
    clearGrid(); // Clear previous grid
    const squareSize = 602 / size; // Calculate the size of each square
    
    for (let i = 1; i <= size * size; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.width = `${squareSize}px`;
        newDiv.style.height = `${squareSize}px`;
        newDiv.style.border = "1px solid black"; // Add border to each square
        newDiv.classList.add("newDivs");

        // Random color on hover
        newDiv.addEventListener("mouseenter", () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            newDiv.style.backgroundColor = `#${randomColor}`;
        });

        container.appendChild(newDiv);
    }
}

// Function to handle user input and regenerate grid
function userDivs() {
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        let number = prompt("Enter the number of squares per side (max 100):");

        if (number === null) return; // User cancels prompt

        number = parseInt(number);
        if (isNaN(number) || number <= 0 || number > 100) {
            alert("Please enter a valid number between 1 and 100.");
        } else {
            createGrid(number); // Create new grid with user input size
        }
    });
}

// Initialize default grid
createGrid(DEFAULT_SIZE);
userDivs();



















