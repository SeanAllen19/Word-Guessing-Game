var play = document.getElementById('submit');
var easy = document.getElementById('easy');
var medium = document.getElementById('medium');
var hard = document.getElementById('hard');


function diffLevel() {
    if(easy.checked) {
    var count = 5
    }  
    if(medium.checked) {
     var count = 7
    }
    if(hard.checked) {
         var count = 10
    } 
    console.log(count)
    getRandomWord(count)
} 


function getRandomWord(count) {  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b6d485f8fmsh50bf76457d041a0p1dc699jsna10e333f90d7',
		'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
	}
};
var requestUrl = 'https://random-words5.p.rapidapi.com/getRandom?wordLength='+ count
fetch(requestUrl, options)
	.then(response => response.text())
	.then(data => {
        console.log(data);
        setItemInStorage(data, count);
    }
                    )
    .catch(err => console.error(err));
}

function setItemInStorage(data, count) {
    var wordInfo = {
        wordLength: count, 
        word: data
    }
    localStorage.setItem("wordInfo", JSON.stringify(wordInfo))
}



play.addEventListener('click', (e) => {
    e.preventDefault()
    // diffLevel()
    // window.location.assign('./game.html')
})