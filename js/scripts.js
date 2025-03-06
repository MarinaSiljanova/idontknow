document.addEventListener('DOMContentLoaded', function() {
    // Create floating flowers
    for (let i = 0; i < 20; i++) {
        let flower = document.createElement('div');
        flower.className = 'flower';
        flower.textContent = '🌸'; // Use flower emoji
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';
        flower.style.animationDuration = (Math.random() * 5 + 5) + 's';
        document.body.appendChild(flower);
    }
});