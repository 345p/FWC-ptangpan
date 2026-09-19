const box = document.getElementById('ball0');
const colors = ["#b83518", "#5b6d18", "#3f4560"];

let index = 0;

box.addEventListener('click', () => {
    let current_width = box.offsetWidth;
    let current_height = box.offsetHeight;

    box.style.width = (current_width + 10) + 'px';
    box.style.height = (current_height + 10) + 'px';
    
    if (box.style.width > '420px'){
        box.style.width = '200px';
        box.style.height = '200px';    
    }
    index = (index + 1) % colors.length;
    box.style.backgroundColor = colors[index];

});
box.addEventListener('mouseleave',() => {
    let current_width = box.offsetWidth;
    let current_height = box.offsetHeight;

    if (box.style.width >= '205px'){  
        box.style.width = (current_width - 5) + 'px';
        box.style.height = (current_height - 5) + 'px';
    }

    index = (index + 2) % colors.length;
    box.style.backgroundColor = colors[index];

})