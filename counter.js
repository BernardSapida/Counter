let number = document.getElementById('number');
let increase = () => number.innerText = +number.innerText + 1;
let reset = () => number.innerText = 0;
let decrease = () => number.innerText = +number.innerText - 1;