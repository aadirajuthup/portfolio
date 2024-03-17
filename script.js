const body = document.body;
const toggle = document.getElementById('toggle')
const heroImage = document.getElementById('hero-image')

// Matrix Background Code

const canvas = document.getElementById('matrixCanvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890あいうえおカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const fontSize = 12;
const columns = canvas.width / fontSize;
const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

function draw() {
    // Check if dark mode is active
    const isDarkMode = body.classList.contains('dark');

    // Set the fill style for the background and text based on the mode
    context.fillStyle = isDarkMode ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = isDarkMode ? '#777' : '#777'; // first text for dark mode, second for light mode
    context.font = fontSize + 'px sans-serif';

    for (let i = 0; i < rainDrops.length; i++) {
        // Choose a random character from the characters string
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

setInterval(draw, 30);

// End of Matrix Background Code


function darkMode() {
  body.classList.toggle("dark")
  
  if (toggle.innerText == "switch('dark-mode')") {
    toggle.innerText = "switch('light-mode')"
    heroImage.src = 'images/hero-dark.png'
  } 
  
  else {
    toggle.innerText = "switch('dark-mode')"
    heroImage.src = 'images/hero.png'
  }
}