console.log('wordle v2. incoming')
//// 
document.addEventListener("DOMContentLoaded", () => {
    createGrid();
    function createGrid() {
        var gameBoard = document.getElementById("grid");
        // 30 (squares) for 5 rows of 6. 
        for(var i=0; i < 30; i++) {
            //Creating divs with a class .box and a id with a number in it.
            var box = document.createElement("div");
            box.classList.add("box"); 
            box.setAttribute("id", i + 1);
            gameBoard.appendChild(box);
        }
    }
})