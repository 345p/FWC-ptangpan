const button = document.getElementById('bob');

function ButtonClick() {
    const randomColor = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = "#" + randomColor;
}

button.addEventListener('click', ButtonClick);