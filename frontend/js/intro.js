const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const stars = [];

function createStars() {
  for (let i = 0; i < 220; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.4 + 0.2,
      opacity: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.8 + 0.2,
      phase: Math.random() * Math.PI * 2
    });
  }
}

function drawStars(time) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    const twinkle = (Math.sin(time * star.speed + star.phase) + 1) / 2;
    const opacity = star.opacity * (0.3 + twinkle * 0.7);

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(245,240,232,${opacity})`;
    ctx.fill();
  });
}

let t = 0;
function animateStars() {
  t += 0.016;
  drawStars(t);
  requestAnimationFrame(animateStars);
}

createStars();
animateStars();

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
  await wait(200);
  await fadeIn(document.getElementById('tagline'));

  const bar = document.getElementById('loadingBar');
  bar.style.opacity = '1';
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