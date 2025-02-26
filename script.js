document.addEventListener('DOMContentLoaded', () => {
    const AudioPlayer = document.getElementById('music-player');
    const Volume = 0.25;
    const tracks = ['track.mp3', 'track1.mp3']; // Array of track options

    if (AudioPlayer) {
        AudioPlayer.volume = Volume;
        // Choose a random track from the array
        const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
        AudioPlayer.src = randomTrack;
        AudioPlayer.play()
            .then(() => console.log('Playing track:', AudioPlayer.src))
            .catch(err => {
                console.warn('Audio playback issue:', err);
            });
    }

    // Title Animation
    const titles = ['#', '#d', '#de', '#dea', '#dead', '#deads', '#deadsh', '#deadsho', '#deadshot', '#deadshot', '#deadsho', '#deadsh', '#deads', '#dead', '#dea', '#de', '#d', '#'];
    let index = 0;

    function changeTitle() {
        document.title = titles[index];
        index = (index + 1) % titles.length;
        setTimeout(changeTitle, 200);
    }
    changeTitle();

    // Custom Cursor
    const customCursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    // Particle Effect
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
        constructor(x, y, size, color) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.color = color;
            this.velocity = {
                x: (Math.random() - 0.5) * 0.5,
                y: (Math.random() - 0.5) * 0.5
            };
        }

        update() {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            if (this.x < 0 || this.x > canvas.width) this.velocity.x = -this.velocity.x;
            if (this.y < 0 || this.y > canvas.height) this.velocity.y = -this.velocity.y;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const particles = [];
    for (let i = 0; i < 100; i++) {
        const size = Math.random() * 3 + 1;
        const color = 'rgba(255, 0, 0, 0.5)';
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height, size, color));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();

    // Red Rain Effect
    class Raindrop {
        constructor(x, y, length, speed, opacity) {
            this.x = x;
            this.y = y;
            this.length = length;
            this.speed = speed;
            this.opacity = opacity;
        }

        draw(ctx) {
            ctx.strokeStyle = `rgba(255, 0, 0, ${this.opacity})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y + this.length);
            ctx.stroke();
        }

        update(delta) {
            this.y += this.speed * delta;
            if (this.y > canvas.height) {
                this.y = -this.length;
            }
        }
    }

    const raindrops = [];
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const length = Math.random() * 20 + 10;
        const speed = Math.random() * 200 + 100;
        const opacity = Math.random() * 0.5 + 0.5;
        raindrops.push(new Raindrop(x, y, length, speed, opacity));
    }

    let lastTime = 0;
    function rain(time) {
        const delta = time - lastTime;
        lastTime = time;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        raindrops.forEach(raindrop => {
            raindrop.update(delta);
            raindrop.draw(ctx);
        });
        requestAnimationFrame(rain);
    }
    requestAnimationFrame(rain);

    // Resize Handler
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
});
