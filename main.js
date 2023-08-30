document.querySelector('.menu-btn').addEventListener('click', open);
document.querySelector('.close-btn').addEventListener('click', close);


function open(e){
    document.querySelector('.main-menu').classList.add('show');
}

function close(e){
    document.querySelector('.main-menu').classList.remove('show')
}


document.querySelector('.features').addEventListener('click', menuOne);
document.querySelector('.company').addEventListener('click', menuTwo);

function menuOne(e){
    document.querySelector('.menu-sm-desktop-1').classList.toggle('show');
    document.querySelector('.arrowOne').classList.toggle('rotate')
}

function menuTwo(e){
    document.querySelector('.menu-sm-desktop-2').classList.toggle('show');
    document.querySelector('.arrowTwo').classList.toggle('rotate')
}

document.querySelector('.features-sm').addEventListener('click', toggleSmOne);
document.querySelector('.company-sm').addEventListener('click', toggleSmTwo);

function toggleSmOne(e){
    document.querySelector('.arrow-sm-1').classList.toggle('rotate');
    document.querySelector('.sm-menu-1').classList.toggle('show')
}

function toggleSmTwo(e){
    document.querySelector('.arrow-sm-2').classList.toggle('rotate');
    document.querySelector('.sm-menu-2').classList.toggle('show')
}