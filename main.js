const text = document.querySelector('.text');
const answer = document.querySelector('.answer');

text.addEventListener('keyup', readInput);

function readInput() {
	answer.innerText = text.value;
}

alert('It is working');
