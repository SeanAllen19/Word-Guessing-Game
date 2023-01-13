console.log('wordle v2. incoming')

var chosenWord = JSON.parse(localStorage.getItem('wordInfo')) 
var winningWord = chosenWord.word;

document.addEventListener("DOMContentLoaded", () => {
    getCount();
    keyboardEvents();
})

function getCount() {
    var storage = JSON.parse(localStorage.getItem('wordInfo'))
    console.log(storage)
    var count = storage.wordLength
    var word = storage.word
    var row = count;
    var col = count+1
    var grid = row*col
    console.log(grid)
    createGrid(grid, count)
}

function createGrid(grid, count) {
        var gameBoard = document.getElementById("grid");
        
        for(var i=0; i < grid; i++) {
            //Creating divs with a class .box and a id with a number in it base on which difficulty was chosen.
            var box = document.createElement("div");
            var gridrows = document.getElementById('grid').style.gridTemplateColumns = 'repeat('+count +', 1fr)';
            box.classList.add("box"); 
            box.setAttribute("id", i + 1);
            box.setAttribute
            gameBoard.appendChild(box);
        }
    }
    
    function keyboardEvents() {
        document.body.onkeydown = (e) => {
            var key = e.key;

            if (key === 'Enter'){
                console.log('Enter key has been pressed')
            }

            if (key === 'Backspace') {

            }
        }
    }


 


