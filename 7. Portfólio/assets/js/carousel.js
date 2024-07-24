document.addEventListener('DOMContentLoaded', function() {
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
    const first = document.querySelector('.first-projeto');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');
    const five = document.querySelector('.five');
    const six = document.querySelector('.six');
    const images = [first, two, three, four, five, six];
    let currentIndex = 0; 
    const showImage = () => {
        images.forEach(img => {
            img.style.display = 'none'; 
        });
        images[currentIndex].style.display = 'block';
    };
    showImage();
    btnAnterior.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        showImage();
    });
    btnProximo.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage();
    });
});