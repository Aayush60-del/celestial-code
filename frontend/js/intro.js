const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

// ================================
// CANVAS SIZE
// ================================
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

window.addEventListener('resize', () => {
  resizeCanvas();
  createStars(); // refresh stars
});

// ================================
// DATA
// ================================
const stars = [];
const shootingStars = [];

// ================================
// ⭐ CREATE STARS (FIXED)
// ================================
function createStars() {
  stars.length = 0;

  const density = Math.floor((canvas.width * canvas.height) / 8000);

  for (let i = 0; i < density; i++) { // ✅ FIXED
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.3,
      opacity: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.8 + 0.2,
      phase: Math.random() * Math.PI * 2
    });
  }
}

// ================================
// ⭐ CREATE SHOOTING STAR
// ================================
function createShootingStar() {
  const angle = Math.PI / 4 + (Math.random() * 0.4 - 0.2);
  const speed = Math.random() < 0.2 ? 6 : 2.5;

  shootingStars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height / 2,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    opacity: 1
  });
}

// ================================
// ⭐ DRAW SHOOTING STARS
// ================================
function drawShootingStars() {
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const star = shootingStars[i];

    ctx.beginPath();
    ctx.arc(star.x, star.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;

    ctx.shadowBlur = 30;
    ctx.shadowColor = "white";
    ctx.fill();

    // tail
    const tailX = star.x - star.vx * 80;
    const tailY = star.y - star.vy * 80;

    const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
    gradient.addColorStop(0, `rgba(255,255,255,${star.opacity})`);
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.beginPath();
    ctx.moveTo(star.x, star.y);
    ctx.lineTo(tailX, tailY);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.shadowBlur = 0; // ✅ important reset

    // move
    star.x += star.vx;
    star.y += star.vy;

    // fade
    star.opacity -= 0.008;

    if (star.opacity <= 0) {
      shootingStars.splice(i, 1);
    }
  }
}

// ================================
// ⭐ ANIMATION LOOP (FIXED)
// ================================
let t = 0;
let lastSpawn = 0;

function animate(time = 0) {
  t += 0.016;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ⭐ draw stars
  stars.forEach(star => {
    const twinkle = (Math.sin(t * star.speed + star.phase) + 1) / 2;
    const opacity = star.opacity * (0.3 + twinkle * 0.7);

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(245,240,232,${opacity})`;
    ctx.fill();
  });

  // ⭐ shooting stars
  drawShootingStars();

  // ⭐ FIXED: time-based spawning (smooth)
  if (time - lastSpawn > 3000) { 
    if (Math.random() < 0.5) {
      createShootingStar();
    }
    lastSpawn = time;
  }

  requestAnimationFrame(animate);
}

// INIT
createStars();
animate();


// ================================
// UI ANIMATIONS (UNCHANGED)
// ================================
const wait = ms => new Promise(r => setTimeout(r, ms));

function fadeIn(el, duration = 700) {
  return new Promise(resolve => {
    el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
    setTimeout(resolve, duration);
  });
}

function animateLoadingBar() {
  return new Promise(resolve => {
    const fill = document.getElementById('loadingBarFill');
    let progress = 0;

    const interval = setInterval(() => {
      progress += 2;
      fill.style.width = progress + '%';

      if (progress >= 100) {
        clearInterval(interval);
        resolve();
      }
    }, 40);
  });
}

async function startIntroAnimation() {
  await wait(400);

  const content = document.getElementById('introContent');
  content.style.opacity = '1';

  await wait(400);

  const ring = document.getElementById('orbitRing');
  ring.style.transition = 'all 900ms cubic-bezier(0.34,1.56,0.64,1)';
  ring.style.transform = 'scale(1)';
  ring.style.opacity = '1';

  await wait(1000);

  ring.style.animation = 'orbitSpin 8s linear infinite';

  await fadeIn(document.getElementById('logoText'));
  await fadeIn(document.getElementById('tagline'));

  document.getElementById('loadingBar').style.opacity = '1';

  await animateLoadingBar();

  document.getElementById('enterBtn').style.opacity = '1';
}

startIntroAnimation();

function enterPlatform() {
  document.getElementById('introWrapper').classList.add('fadeOut');
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 800);
}