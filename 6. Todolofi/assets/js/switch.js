const modoSwitch = document.getElementById('modoSwitch');
const h1 = document.querySelector('.h1');
const img = document.querySelector('.icon-principal');
const container = document.querySelector('.container');
modoSwitch.addEventListener('change', () => {
  if (modoSwitch.checked) {
    document.body.style.backgroundColor = '#202020';
    container.style.backgroundColor = '#c0c0c0'
    h1.style.color = '#fff';
    img.style.boxShadow = '2px 2px 2px rgba(255, 255, 255, 0.5)';
  } else {
    document.body.style.backgroundColor = '#f4f4f5';
    h1.style.color = '#000'
  }
});