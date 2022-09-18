// var api = process.env.HTTP;


function updateUI(content) {
    document.querySelector('#message').innerHTML = content;
}

function updateUIRandom(content) {
    document.querySelector('#message-random').innerHTML = content;
}

fetch("https://thuyldx-api.unicloud.ai")
	.then((response) => response.json())
	.then((data) => {
		updateUI(data.message);
	});

fetch("https://api.quotable.io/random")
	.then((response) => response.json())
	.then((data) => {
		updateUIRandom(data.content);
	});