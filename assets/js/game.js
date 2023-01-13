console.log('wordle v2. incoming')

var chosenWord = JSON.parse(localStorage.getItem('wordInfo')) 
var winningWord = chosenWord.word;

document.addEventListener("DOMContentLoaded", () => {
    getCount();
    keyboardEvents();
})


// will get the count var from local storage and change the create grid function to fit depeneding on difficulty chosen;
function getCount() {
    var storage = JSON.parse(localStorage.getItem('wordInfo'))
    console.log(storage)
    var count = storage.wordLength
    var word = storage.word
    var row = count;
    var col = count+1
    var grid = row*col
    createGrid(grid, count)
    backgroundColor(count)

}

function backgroundColor(count) {

    if(count === 5) {
        document.body.style.backgroundColor = "#06D6A0"
    } else if(count === 6) {
        document.body.style.backgroundColor = "#FFD166"
    } else if(count === 7) {
        document.body.style.backgroundColor = "#EF476F"
    }

}

  function createGrid(grid, count) {
        var gameBoard = document.getElementById("grid");
        // 30 (squares) for 5 rows of 6. 
        for(var i=0; i < grid; i++) {
            //Creating divs with a class .box and a id with a number in it.
            var box = document.createElement("div");
            var gridrows = document.getElementById('grid').style.gridTemplateColumns = 'repeat('+count +', 1fr)';
            box.classList.add("box"); 
            box.setAttribute("id", i + 1);
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
    
    getCount();
  