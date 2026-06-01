document.getElementById('generate-btn').addEventListener('click', generateLottoNumbers);

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
