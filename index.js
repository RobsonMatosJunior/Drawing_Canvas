const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('ferramentas');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

ferramentas.addEventListener('click', e => {
    if (e.target.id === 'limpar') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

ferramentas.addEventListener('change', e => {
    if(e.target.id === 'paleta') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});

const draw = (e) => {
    if(!isPainting) {
        return;
    }