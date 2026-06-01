document.getElementById('generate-btn').addEventListener('click', generateLottoNumbers);

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const icon = themeBtn.querySelector('.icon');

// Load saved theme
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    icon.textContent = '☀️';
}

themeBtn.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        body.removeAttribute('data-theme');
        icon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

function generateLottoNumbers() {
    const display = document.getElementById('lotto-display');
    const numbers = [];
    
    // Generate 6 unique random numbers between 1 and 45
    while(numbers.length < 6) {
        const r = Math.floor(Math.random() * 45) + 1;
        if(numbers.indexOf(r) === -1) numbers.push(r);
    }
    
    // Sort numbers numerically
    numbers.sort((a, b) => a - b);
    
    // Clear display
    display.innerHTML = '';
    
    // Add balls with animation delay
    numbers.forEach((num, index) => {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.textContent = num;
        
        // Add color class based on number range
        if (num <= 10) ball.classList.add('ball-1');
        else if (num <= 20) ball.classList.add('ball-11');
        else if (num <= 30) ball.classList.add('ball-21');
        else if (num <= 40) ball.classList.add('ball-31');
        else ball.classList.add('ball-41');
        
        // Animation
        ball.style.opacity = '0';
        ball.style.transform = 'scale(0)';
        display.appendChild(ball);
        
        setTimeout(() => {
            ball.style.opacity = '1';
            ball.style.transform = 'scale(1)';
        }, index * 100);
    });
}
