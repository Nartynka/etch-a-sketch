let currentSize = 16;
let isEraser = false;
let currentColor = 'var(--main-color)';
const grid = document.getElementById('grid');
const clearBtn = document.getElementById('clearBtn');
const sizeInput = document.getElementById('sizeInput');
const sizeLabel = document.getElementById('sizeLabel');
const eraserBtn = document.getElementById('eraserBtn');

clearBtn.addEventListener('click', reloadGrid);
sizeInput.addEventListener('mousemove', changeSizeLabel);
sizeInput.addEventListener('change', changeSize);
eraserBtn.addEventListener('click', toggleEraser);

function createGrid() {
	grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
	grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
	for (let i = currentSize * currentSize; i--; i > 0) {
		const gridElement = document.createElement('div');
		gridElement.classList.add('grid__element');
		gridElement.addEventListener('mouseover', () => {
			gridElement.style.background = currentColor;
		});
		grid.appendChild(gridElement);
	}
}

function clearGrid() {
	grid.innerHTML = '';
}

//idk doesn't work on mobile
function changeSizeLabel({ target: { value } }) {
	sizeLabel.innerText = `${value}x${value}`;
}

function changeSize({ target: { value } }) {
	currentSize = value;
	reloadGrid();
}

function toggleEraser(){
	isEraser=!isEraser;
	eraserBtn.classList.toggle("isEraser");
	currentColor= !isEraser ? 'var(--main-color)' : '';
}

function reloadGrid() {
	clearGrid();
	createGrid();
}

window.onload = () => createGrid();
