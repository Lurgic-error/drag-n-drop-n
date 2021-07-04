let fill = document.querySelector(".fill")

let emptyBoxes = document.querySelectorAll(".box")


// Fill Listeners
fill.addEventListener('dragstart', dragStart)

fill.addEventListener('dragend', dragEnd)

// Loop through empty boxes
emptyBoxes.forEach(box => {
    box.addEventListener('dragover', dragOver)
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', dragDrop)


});


// Drag Functions

function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = "invisible", 0)
    console.log(`this`, this)
}


function dragEnd() {
    this.className = 'fill'
}


function dragOver(e){
    e.preventDefault()
}


function dragEnter(e){
    e.preventDefault()
    this.className += ' hovered'
}


function dragLeave(){
    this.className = "box"
}


function dragDrop(){
    this.className = 'box'
    this.append(fill)
}