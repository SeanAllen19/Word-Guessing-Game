console.log('wordle v2. incoming')

// var chosenWord = JSON.parse(localStorage.getItem('wordInfo')) 
// var winningWord = chosenWord.word;

document.addEventListener("DOMContentLoaded", () => {
    keyboardEvents();
})


// Took these variables out of the get counr function because we need to use these variables in other functions
var storage = JSON.parse(localStorage.getItem('wordInfo'))

// for now i just set random parameters so we dont have to keep running the API
var count = 5 //storage.wordLength 
var word = 'hello' //storage.word

var numOfGuesses = count + 1
var guessesLeft = numOfGuesses
var nextLetter = 0
var row = count+1;
var col = count;
var grid = row*col

// will get the count var from local storage and change the create grid function to fit depeneding on difficulty chosen;
function getCount() {
    console.log(storage)
    createGrid(grid, count)
    backgroundColor(count)

}

function backgroundColor(count) {

    if(count === 5) {
        document.body.style.backgroundColor = "#073B4C"
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
            document.getElementById('grid').style.gridTemplateColumns = 'repeat('+ count +', 1fr)';
            var box = document.createElement("div");
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
                checkWord()
                
            }

            if (key === 'Backspace') {
                triedWord.pop()
                letterInput('')
         
                nextLetter -= 1
            }

            var pressedKey = String(e.key)

            var lettersOnly = pressedKey.match(/[a-z]/gi) 
            if(!lettersOnly) {
                return
            } else {
               letterInput(pressedKey) 
            }
        }

    }


    // This adds the keyboard input into the boxes
    // the if statement prevents the user from adding more input after the end of the row is reached
    function letterInput(pressedKey) {
            pressedKey = pressedKey.toLowerCase()
            let box =document.getElementsByClassName('box')[nextLetter]

            if (nextLetter === count) {
               return

            } else {
                box.textContent = pressedKey
                nextLetter += 1
            }
            
    }



// this puts the letters into an array and it will check if you get the letters right and chagnge color accordingly...Make sure to run the function when the enter key is pressed 
   function checkWord() {
    var box = document.getElementsByClassName('box');
    var wordArr = word.split('')
    var  triedWord = []

    
    for(let i = 0; i < count; i++) {
        triedWord.push(box[i].textContent) 
        console.log(triedWord[i])
        console.log(wordArr[i])
    
        if (triedWord[i] === wordArr[i]) {
            box[i].style.backgroundColor = "#06D6A0"
        } else if (word.includes(triedWord[i])) {
            box[i].style.backgroundColor = "#FFD166"
        }
    }
    console.log(triedWord)
   }
    
    getCount();
  