let menuToggle = document.querySelector('.toggle');

let naBar = document.querySelector('.navbar')
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    naBar.classList.toggle('visible');
}

