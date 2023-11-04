
const container = document.querySelector(".container");
const btn = document.createElement("button");
btn.textContent = "Start New";
container.appendChild(btn);

const sheet = document.querySelector(".sheet")

btn.addEventListener("click", (e) => {
    
    
    const dimension = prompt("Enter size of sheet. Max 100")

    sheet.innerHTML = ""

    for (let index = 0; index <  dimension; index++) {
        const row = document.createElement('div')
        row.classList.add("row")
        sheet.appendChild(row)

            for (let indexRow = 0; indexRow <  dimension; indexRow++) {

            const cell = document.createElement('div')
            cell.classList.add("cell")
            row.appendChild(cell)

            cell.addEventListener("mouseover", (cellHover) => {
                cellHover.target.style.backgroundColor = "black";
            })

            }
    }

});


