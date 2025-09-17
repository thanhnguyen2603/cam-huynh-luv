class CodeBackground {
    constructor() {
        this.container = document.getElementById('code-background');
        this.codeLines = [
            'function love() { return "Cẩm Huỳnh xinh đẹp"; }',
            'const beautiful = true; // always true for em',
            'if (CamHuynh.isBeautiful()) { return "perfect"; }',
            'while(true) { console.log("Em là người đẹp nhất"); }',
            'let happiness = CamHuynh.smile() * infinity;',
            'const myLove = new Promise(resolve => resolve("forever"));',
            'document.querySelector(".heart").style.color = "pink";',
            'Array.from(hearts).forEach(heart => heart.beat());',
            'class Beauty extends CamHuynh { constructor() { super(); } }',
            'const cuteness = Math.max(...allGirls) + 1; // em vẫn hơn',
            'try { findSomeoneMoreBeautiful() } catch(e) { impossible }',
            'export default CamHuynh; // the most beautiful one',
            'async function admireCamHuynh() { await forever; }',
            'const isAngel = CamHuynh.wings ? true : true;',
            'localStorage.setItem("mostBeautiful", "Cẩm Huỳnh");'
        ];
        this.createCodeRain();
    }
    
    createCodeRain() {
        setInterval(() => {
            if (document.querySelectorAll('.code-line').length < 8) {
                this.createCodeLine();
            }
        }, 2000);
        
        // Create initial lines
        for (let i = 0; i < 5; i++) {
            setTimeout(() => this.createCodeLine(), i * 500);
        }
    }
    
    createCodeLine() {
        const line = document.createElement('div');
        line.className = 'code-line';
        line.textContent = this.codeLines[Math.floor(Math.random() * this.codeLines.length)];
        line.style.top = Math.random() * 100 + '%';
        line.style.animationDuration = (8 + Math.random() * 4) + 's';
        
        this.container.appendChild(line);
        
        setTimeout(() => {
            if (line.parentNode) {
                line.parentNode.removeChild(line);
            }
        }, 12000);
    }
}

class HeartAnimation {
    constructor() {
        this.container = document.querySelector('.floating-hearts');
        this.hearts = ['❤️', '💖', '💕', '💗', '💓', '💝', '💘'];
        this.createHearts();
    }
    
    createHearts() {
        setInterval(() => {
            this.createHeart();
        }, 1500);
    }
    
    createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = this.hearts[Math.floor(Math.random() * this.hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (3 + Math.random() * 2) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        this.container.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 6000);
    }
}

class SparkleEffect {
    constructor() {
        this.sparkles = ['✨', '⭐', '🌟', '💫', '⚡'];
        this.createSparkles();
    }
    
    createSparkles() {
        setInterval(() => {
            this.createSparkle();
        }, 800);
    }
    
    createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = this.sparkles[Math.floor(Math.random() * this.sparkles.length)];
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize background effects
    new CodeBackground();
    new HeartAnimation();
    new SparkleEffect();
    
    // Text animation sequence
    const timeline = gsap.timeline();
    
    timeline
        .to('#text1', {
            duration: 0.6,
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'back.out(1.7)'
        })
        .to('#text1', {
            duration: 0.3,
            scale: 1.1,
            ease: 'power2.inOut'
        }, '+=0.2')
        .to('#text1', {
            duration: 0.3,
            scale: 1,
            ease: 'power2.inOut'
        })
        .to('#text2', {
            duration: 0.8,
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'elastic.out(1, 0.3)'
        }, '+=0.1')
        .to('#text2', {
            duration: 0.6,
            rotation: 5,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, '+=0.1')
        .to('#text3', {
            duration: 0.6,
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'bounce.out'
        }, '+=0.1')
        .to('#image-container', {
            duration: 1,
            opacity: 1,
            scale: 1,
            ease: 'elastic.out(1, 0.5)'
        }, '+=0.2')
        .to('#continue-btn', {
            duration: 0.6,
            opacity: 1,
            y: 0,
            ease: 'back.out(1.7)'
        }, '+=0.5');
    
    // Add floating animation to image
    gsap.to('#main-image', {
        duration: 3,
        y: -10,
        yoyo: true,
        repeat: -1,
        ease: 'power2.inOut'
    });
    
    // Continue button functionality
    document.getElementById('continue-btn').addEventListener('click', function() {
        gsap.to('.content-container', {
            duration: 1,
            opacity: 0,
            scale: 0.8,
            ease: 'power2.inOut'
        });
        
        setTimeout(() => {
            window.location.href = 'galaxy.html';
        }, 1000);
    });
    
    // Add click effects
    document.addEventListener('click', function(e) {
        createClickEffect(e.clientX, e.clientY);
    });
    
    function createClickEffect(x, y) {
        const effect = document.createElement('div');
        effect.style.position = 'fixed';
        effect.style.left = x + 'px';
        effect.style.top = y + 'px';
        effect.style.width = '20px';
        effect.style.height = '20px';
        effect.style.background = 'radial-gradient(circle, #ff69b4, transparent)';
        effect.style.borderRadius = '50%';
        effect.style.pointerEvents = 'none';
        effect.style.zIndex = '1000';
        effect.style.transform = 'translate(-50%, -50%)';
        
        document.body.appendChild(effect);
        
        gsap.to(effect, {
            duration: 0.6,
            scale: 3,
            opacity: 0,
            ease: 'power2.out',
            onComplete: () => {
                if (effect.parentNode) {
                    effect.parentNode.removeChild(effect);
                }
            }
        });
    }
});