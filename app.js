const item = document.querySelector(".item")
const placeholders = document.querySelectorAll(".placeholder")

item.addEventListener("dragstart", dragstart)
item.addEventListener("dragend", dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener("dragover", dragover)
    placeholder.addEventListener("dragenter", dragenter)
    placeholder.addEventListener("dragleave", dragleave)
    placeholder.addEventListener("drop", dragDrop)

}

function dragstart(event) {
    event.target.classList.add("hold")
    setTimeout(() => event.target.classList.add("ghost"), 0)
}
function dragend(event) {
    event.target.className = "item"
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    const existsItems = event.target.contains(item)
    if (!existsItems) {
        event.target.classList.add("hovered")
    }
}

function dragleave(event) {
    event.target.classList.remove("hovered")
}

function dragDrop(event) {
    event.target.append(item)
    event.target.classList.remove("hovered")

}