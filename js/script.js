const questionPage = document.getElementById('questionPage');
const yesPage = document.getElementById('yesPage');
const noPage = document.getElementById('noPage');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const attemptCounter = document.getElementById('attemptCounter');
const countSpan = document.getElementById('count');
const buttonContainer = document.querySelector('.button-container');

let attempts = 0;
const PADDING = 10; // Margen de seguridad en píxeles

// Función para mover el botón NO
function moveNoButton() {
    attempts++;
    countSpan.textContent = attempts;
    attemptCounter.classList.remove('hidden');

    const containerRect = buttonContainer.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Calculamos el espacio disponible con padding
    const maxX = containerRect.width - btnWidth - PADDING;
    const maxY = containerRect.height - btnHeight - PADDING;

    // Aseguramos que los valores sean positivos
    const safeMaxX = Math.max(PADDING, maxX);
    const safeMaxY = Math.max(PADDING, maxY);

    // Generamos posición aleatoria dentro de los límites seguros
    const newX = PADDING + Math.random() * (safeMaxX - PADDING);
    const newY = PADDING + Math.random() * (safeMaxY - PADDING);

    // Añadimos clase para transición suave
    noBtn.classList.add('moving');

    // Aplicamos la nueva posición
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
    noBtn.style.transform = 'none';
}

// Evento para escritorio (mouseover)
noBtn.addEventListener('mouseover', moveNoButton);

// Evento para dispositivos táctiles (touchstart)
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Click en NO (por si logra hacer click)
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    questionPage.classList.add('hidden');
    noPage.classList.remove('hidden');
});

// Click en SÍ
yesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    questionPage.classList.add('hidden');
    yesPage.classList.remove('hidden');
});