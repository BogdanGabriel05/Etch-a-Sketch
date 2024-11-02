// DIV CREATION

// Big Container location
const container = document.querySelector(".container");

//Create 16x16 divs
for(let i = 1; i <= 256; i++) {
    const newDivs = document.createElement("div");
    newDivs.classList.add("newDivs");
    container.appendChild(newDivs);
}

//button 
const btn = document.querySelector(".btn");
btn.addEventListener("click", userNumber);
function userNumber() {
    prompt("Enter number!")
}

// // //user input > 16
// if(prompt > 16) {
//     for(let i = 16; i <= prompt; i++) {
//         divCreation();
//     }
// }

// // div creation function
// function divCreation() {
//     const newDivs100 = document.createElement("div");
//     newDivs100.classList.add("newDivs100");
//     container.appendChild(newDivs100);
// }







