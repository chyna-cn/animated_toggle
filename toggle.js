let one = document.getElementById('part_one');
let two = document.getElementById('part_two');

function exchange() {
    if (two.style.display= 'none') {
        two.style.display = 'block';
    } else {
        two.style.display = 'none'
    }
    if (one.style.display = 'block') {
        one.style.display = 'none';
    } else {
        one.style.display= 'block'
    }
}

function exchange_back() {
    if (two.style.display= 'block') {
        two.style.display = 'none'
    } else {
        two.style.display = 'block'
    }
    if (one.style.display = 'none') {
        one.style.display = 'block';
    } else {
        one.style.display = 'none'
    }
}


let ham = document.getElementsByClassName('fa-bars');
for (let i = 0; i < ham.length; i++) {
    ham[i].addEventListener('click', exchange, false);
}
let cross = document.getElementsByClassName('fa-times');
for (let i = 0; i < cross.length; i++) {
    cross[i].addEventListener('click', exchange_back, false);
}
