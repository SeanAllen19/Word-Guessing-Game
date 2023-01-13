var fetchButton = document.getElementById('fetch-button');

function getApi() {
	var requestUrl = 'https://wordsapiv1.p.rapidapi.com/words/advil/usageOf';



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6b1367e603msh5a07f6c31f94f44p17225cjsn43948ef1453a',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

fetch(requestUrl, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}

    fetchButton.addEventListener('click', getApi);