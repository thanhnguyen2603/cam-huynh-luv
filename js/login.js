document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password-input');
    const enterBtn = document.getElementById('enter-btn');
    const errorMessage = document.getElementById('error-message');
    const correctPassword = '05082000';
    
    function checkPassword() {
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword === correctPassword) {
            // Correct password - transition to main page
            document.body.style.transition = 'opacity 1s ease';
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                window.location.href = 'main.html';
            }, 1000);
        } else if (enteredPassword.length >= 8) {
            // Wrong password
            errorMessage.textContent = 'Sai rồi em ơi! Thử lại đi ❤️';
            passwordInput.value = '';
            
            // Add shake animation
            document.querySelector('.login-container').style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                document.querySelector('.login-container').style.animation = '';
                errorMessage.textContent = '';
            }, 2000);
        }
    }
    
    enterBtn.addEventListener('click', checkPassword);
    
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    // Add shake animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
});