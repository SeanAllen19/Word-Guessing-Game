
// Global variables
var storage = JSON.parse(localStorage.getItem('wordInfo'));
var count = storage.wordLength; 
var storageWord = storage.word;
var word = storageWord.toUpperCase();
var row = count+1;
var col = count;
var grid = row*col;
var triedWord = Array(row)
                    .fill()
                    .map(() => Array(col).fill(''))
var currentRow = 0
var currentCol = 0

// will create the grid function and chnage title color depeneding on difficulty chosen;
function getCount() {
    createGrid(count)
    titlebackgroundColor(count)
}

// changes title background base on difficulty
function titlebackgroundColor(count) {
    if(count === 5) {
       document.getElementById('title').style.color = "#06D6A0"
    } else if(count === 6) {
        document.getElementById('title').style.color  = "#FFD166"
    } else if(count === 7) {
        document.getElementById('title').style.color  = "#EF476F"
    }
}

// creates grid based on word length and labels each box
function createGrid(count) {
    var gameBoard = document.getElementById("grid");
    // 30 (squares) for 6 rows of 5. 
    for(let j = 0; j < row; j++) {
        for(var i=0; i < count; i++) {
         //Creating divs with a class .box and a id with a number in it.
             document.getElementById('grid').style.gridTemplateColumns = 'repeat('+ count +', 1fr)';
              var box = document.createElement("div");
              box.classList.add("box");
              box.style.backgroundColor = "#118AB2"
              box.setAttribute('id', `box${j}${i}`);
              gameBoard.appendChild(box);  
         }      
    }  
}

// adds functionality to letters, enter and backspace keys
function keyboardEvents() {
    document.body.onkeydown = (e) => {
        var key = e.key;        
        if (key === 'Enter'){
            if(currentCol  === count) {
                checkWord()
                animation()
                currentRow++
                currentCol = 0
            }  
            if(currentRow === count+1) {
                loseGame()
            }
        }

        if (key === 'Backspace') {
                backspace()

        }

        var pressedKey = String(e.key)
        var lettersOnly = pressedKey.match(/[a-z]/i) 
        if(lettersOnly && key.length === 1) {
            letterInput(pressedKey) 
        } else {
            return
        }
    }
}

// This adds the keyboard input into the boxes
// the if statement prevents the user from adding more input after the end of the row is reached
function letterInput(pressedKey) {
    pressedKey = pressedKey.toUpperCase()
    let box = document.getElementById(`box${[currentRow]}${[currentCol]}`)
    if (currentCol === count) {
        return
    } else {
        triedWord[currentRow][currentCol] = pressedKey
        box.textContent = pressedKey
        currentCol++

    }
}

// makes the backspace key functional
function backspace() {
    let box = document.getElementById(`box${[currentRow]}${[currentCol-1]}`)
    if(currentCol === 0) {
        box.textContent = ''
        return
    } else {
        triedWord[currentRow][currentCol] = ''
        box.textContent = ''
        currentCol--
    }
}

// This puts the letters into an array and it will check if you get the letters right and chagnge color accordingly
function checkWord() {
    var wordArr = word.split('')
    var currWord = triedWord[currentRow].join('')
    var currWordSplit = triedWord[currentRow]
    if(currWord === word) {
        winGame()
    } 

    for(let i = 0; i < count; i++) {
        if (currWordSplit[i] === wordArr[i]) {
            document.getElementById(`box${[currentRow]}${i}`).style.backgroundColor = "#06D6A0"
        } else if (word.includes(currWordSplit[i])) {
            document.getElementById(`box${[currentRow]}${i}`).style.backgroundColor = "#FFD166"
        } else {
            document.getElementById(`box${[currentRow]}${i}`).style.backgroundColor = "#d3d3d3"
        }
    } 
}

// This makes the animations run based on whether you get the word right or wrong
function animation() {
    if(triedWord[currentRow].join('') !== word) {
        for(let i = 0; i < count; i++) {
            document.getElementById(`box${[currentRow]}${i}`).classList.add('shake')
            modal.style.backgroundColor = '#EF476F'
            
        }
    } else if (triedWord[currentRow].join('') === word) {
        for(let i = 0; i < count; i++) {
            document.getElementById(`box${[currentRow]}${i}`).classList.add('bounce')
            document.getElementById(`box${[currentRow]}${i}`).classList.add(`bounce${i}`)
            modal.style.backgroundColor = '#06D6A0'
        }
    }
}

// This creates a modal
function makeModal(winLose) {
    var modal = document.getElementById('modal')
    var modalBackground = document.getElementById('modal-background')
    var winStatement = document.getElementById('winLose')
    var theWord = document.getElementById('theWord')
    winStatement.textContent = "YOU " + winLose + "!"
    theWord.textContent = 'The correct word was ' + word + '.';
    modal.classList.remove('none');
    modalBackground.classList.remove('none'); 
}

// This will casue a modal with the text of WIN to pop up after the win animation runs animation 
function winGame () {
    setTimeout(makeModal, 2000,'WIN')
    
}
// This will cuase a modal with the text of LOSE to pop up after the last guess is made
function loseGame() {
    setTimeout(makeModal, 2000,'LOSE')
     
}

    keyboardEvents();
    getCount();