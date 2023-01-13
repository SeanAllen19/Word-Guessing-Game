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
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));

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
	
	fetch('https://genius-song-lyrics1.p.rapidapi.com/search/?q=%3CREQUIRED%3E&per_page=10&page=1', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));

}

    fetchButton2.addEventListener('click', getApi2);

var fetchButton3 = document.getElementById('fetch-button3');

function getApi3() {
	var requestUrl = 'https://quotel-quotes.p.rapidapi.com/search/quotes';



	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '6b1367e603msh5a07f6c31f94f44p17225cjsn43948ef1453a',
			'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
		},
		body: '{"pageSize":25,"page":0,"searchString":"Float like a butterfly sting like a bee"}'
	};
	
	fetch('https://quotel-quotes.p.rapidapi.com/search/quotes', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));

}

    fetchButton3.addEventListener('click', getApi3);