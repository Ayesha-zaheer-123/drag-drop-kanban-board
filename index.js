const cards=document.querySelectorAll(".card");
        const lists=document.querySelectorAll(".list");
        for(const card of cards) {
            card.addEventListener("dragstart",dragstart);
        }
        for(const list of lists) {
            list.addEventListener("dragover",dragover)
            list.addEventListener("dragenter",dragenter)
            list.addEventListener("drop",drop)
            list.addEventListener("dragleave", dragleave);
        }
        function dragstart(e) {
e.dataTransfer.setData("text/plain",this.id);

        }
       function dragleave() {
    this.classList.remove("over");
}
        function dragenter(e) {
e.preventDefault();
this.classList.add("over");
}
function dragover(e) {
    e.preventDefault();
}
function drop(e) {
    e.preventDefault()
    const id = e.dataTransfer.getData("text/plain");
    const element = document.getElementById(id);
    this.appendChild(element);
    this.classList.remove("over");
}