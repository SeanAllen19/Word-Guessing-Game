// Api section ---------------------------------------------------------------
var fetchButton = document.getElementById('fetch-button');

function getApi() {
	var requestUrl = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright';



	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '6b1367e603msh5a07f6c31f94f44p17225cjsn43948ef1453a',
			'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
		}
	};
		
	fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright', options)
	.then((response) => {
	  if (response.ok) {
		return response.json();
	  } else {
		throw new Error("NETWORK RESPONSE ERROR");
	  }
	})
	.then(data => {
	  console.log(data);
	  displayDefinition(data)
	})
	.catch((error) => console.error("FETCH ERROR:", error));
}
function displayDefinition(data) {
		const definition = data.definition;
		const definitionDiv = document.getElementById("definition");
		const wordDef = definition.definition;
		const heading = document.createElement("p");
  		heading.innerHTML = definition;
  		definitionDiv.appendChild(heading);
	} 

    fetchButton.addEventListener('click', getApi);

var fetchButton2 = document.getElementById('fetch-button2');

function getApi2() {
	var requestUrl = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=%3CREQUIRED%3E&per_page=10&page=1';



	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '6b1367e603msh5a07f6c31f94f44p17225cjsn43948ef1453a',
			'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
		}
	};


	fetch('https://genius-song-lyrics1.p.rapidapi.com/search/?q=%3CREQUIRED%3E&per_page=1&page=1', options)
	.then((response) => {
	  if (response.ok) {
		return response.json();
	  } else {
		throw new Error("NETWORK RESPONSE ERROR");
	  }
	})
	.then(data => {
	  console.log(data);
	  displaySong(data)
	})
	.catch((error) => console.error("FETCH ERROR:", error));
}
function displaySong(data) {
		const song = data.hits[0];
		const songDiv = document.getElementById("song");
		const songName = song.result.full_title;
		const heading = document.createElement("p");
  		heading.innerHTML = songName;
  		songDiv.appendChild(heading);
	} 

    fetchButton2.addEventListener('click', getApi2);

var fetchButton3 = document.getElementById('fetch-button3');

function getApi3() {
	var requestUrl = 'https://quotel-quotes.p.rapidapi.com/search/';



	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/JSON',
			'X-RapidAPI-Key': '6b1367e603msh5a07f6c31f94f44p17225cjsn43948ef1453a',
			'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
		},
		body: '{"pageSize":1,"page":0,"searchString":"Friedrich Nietzsche"}'
	};

	fetch('https://quotel-quotes.p.rapidapi.com/search', options)
	.then((response) => {
	  if (response.ok) {
		return response.json();
	  } else {
		throw new Error("NETWORK RESPONSE ERROR");
	  }
	})
	.then(data => {
	  console.log(data);
	  displayQuote(data)
	})
	.catch((error) => console.error("FETCH ERROR:", error));
}
function displayQuote(data) {
		const wordUse = data.quote;
		const quoteDiv = document.getElementById("quote");
		const wordQuote = quote.quote;
		const heading = document.createElement("p");
  		heading.innerHTML = wordUse;
  		quoteDiv.appendChild(heading);
	} 

// Color change -------------------------------------------------------------
var easyChange = document.getElementById('colorChange2');
var background = document.getElementById('body');


fetchButton.addEventListener("mouseover", function() {
    easyChange.style.color = '#06D6A0'
	background.style.backgroundColor = '#EF476F'
});

fetchButton2.addEventListener("mouseover", function() {
    easyChange.style.color = '#FFD166'
	background.style.backgroundColor = '#06D6A0'
});