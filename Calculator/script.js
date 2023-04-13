let input = document.getElementById('input');

function addToInput(value) {
	input.value += value;
}

function clearInput() {
	input.value = '';
}

function backspace() {
	input.value = input.value.slice(0, -1);
}

function operate(operator) {
	if (input.value.slice(-1) == operator) {
		return;
	}

	input.value += operator;
}

function calculate() {
	input.value = eval(input.value);
}
