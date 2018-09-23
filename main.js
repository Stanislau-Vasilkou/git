const text = document.querySelector('.text');
const answer = document.querySelector('.answer');

text.addEventListener('change', readInput);

function readInput() {
	answer.innerText = text.value;
}
