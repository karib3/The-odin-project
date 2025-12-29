const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "flex-row";
container.style.flexWrap = "wrap";
container.style.justifySelf = "center";
container.style.border = "2px, solid, black";
container.style.marginTop = "30px";

document.body.appendChild(container);

function createGrid(x){
    container.innerHTML = "";

    container.style.width = container.style.height = `${x*24}px`;

    for(let i = 0; i < x**2; i++){
        const square = document.createElement("div");
        square.style.width = "20px";
        square.style.height = "20px";
        square.style.border = "2px, solid, gray";

        square.addEventListener("mouseenter",()=>{
            let symbols = '0123456789ABCDEF'
            let color = '#'
            for(let i = 0; i < 6; i++){
                color += symbols[Math.floor(Math.random()*16)];
            };
            square.style.backgroundColor = color;
        });

        container.appendChild(square);
    }
}

createGrid(16);

const button = document.createElement("button");
button.textContent = "Create a grid";
button.style.backgroundColor = "aqua";
button.style.color = "black";
button.style.width = "max-width";
button.style.height = "max-height";
button.style.marginInlineStart = "47%";
button.style.marginBlockStart = "20px";

document.body.insertBefore(button, container);

button.addEventListener("click", ()=>{
    let num = prompt("Enter no of squares in a row: (Limit 50)")
    createGrid(num);
});
