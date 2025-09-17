class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.matrix = document.getElementById('matrix-background');
        this.matrix.appendChild(this.canvas);
        
        this.resize();
        this.initMatrix();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / 20);
        this.drops = new Array(this.columns).fill(1);
    }
    
    initMatrix() {
        this.characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?";
        this.fontSize = 14;
        this.ctx.font = this.fontSize + 'px Courier New';
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#00ff00';
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = '#00ff00';
        
        for (let i = 0; i < this.drops.length; i++) {
            const char = this.characters[Math.floor(Math.random() * this.characters.length)];
            
            if (Math.random() > 0.5) {
                this.ctx.fillStyle = '#00ff00';
            } else {
                this.ctx.fillStyle = '#00ccff';
            }
            
            this.ctx.fillText(char, i * 20, this.drops[i] * this.fontSize);
            
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MatrixRain();
});