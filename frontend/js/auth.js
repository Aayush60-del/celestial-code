// ================================
// ⭐ CANVAS SETUP
// ================================
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;
}

// ================================
// ⭐ DATA
// ================================
const stars = [];
const shootingStars = [];

// ================================
// ⭐ CREATE STARS
// ================================
function createStars() {
  stars.length = 0;

  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.2,
      o: Math.random() * 0.8 + 0.2,
      s: Math.random() * 0.8 + 0.2,
      p: Math.random() * Math.PI * 2
    });
  }
}

// ================================
// ⭐ CREATE SHOOTING STAR
// ================================

function createShootingStar() {
  const angle = Math.PI / 4 + (Math.random() * 0.4 - 0.2); 

  const speed = Math.random() < 0.2 ? 6 : 2.5

  shootingStars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height / 2,

    vx: Math.cos(angle) * speed, 
    vy: Math.sin(angle) * speed, 

    length: Math.random() * 150 + 100,
    opacity: 1
  });
}

function drawShootingStars() {
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const star = shootingStars[i];

    ctx.beginPath();
    ctx.arc(star.x, star.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;

    ctx.shadowBlur = 25;
    ctx.shadowColor = "white";
    ctx.fill();

    const tailX = star.x - star.vx * 50; 
    const tailY = star.y - star.vy * 50;

    const gradient = ctx.createLinearGradient(
      star.x, star.y,
      tailX, tailY
    );

    gradient.addColorStop(0, `rgba(255,255,255,${star.opacity})`);
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.beginPath();
    ctx.moveTo(star.x, star.y);
    ctx.lineTo(tailX, tailY);

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.shadowBlur = 0;

    // 🚀 MOVE (true diagonal velocity)
    star.x += star.vx;
    star.y += star.vy;

    // fade out
    star.opacity -= 0.015;

    if (star.opacity <= 0) {
      shootingStars.splice(i, 1);
    }
  }
}

// ================================
// ⭐ DRAW STARS
// ================================
let t = 0;

function drawStars() {
  t += 0.016;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    const twinkle = (Math.sin(t * star.s + star.p) + 1) / 2;
    const opacity = star.o * (0.3 + twinkle * 0.7);

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${opacity})`;
    ctx.fill();
  });

  drawShootingStars();

  requestAnimationFrame(drawStars);
}

// ================================
// ⭐ INIT
// ================================
resizeCanvas();
createStars();
drawStars();

// Shooting star every 2 sec
setInterval(createShootingStar, 2000);

// Resize handling
window.addEventListener('resize', () => {
  resizeCanvas();
  createStars();
});

// ================================
// 🔐 LOGIN FORM
// ================================
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;
  const error = document.getElementById('errorMsg');
  const btn = document.getElementById('submitBtn');

  error.classList.add('hidden');

  btn.textContent = "Signing in...";
  btn.disabled = true;

  setTimeout(() => {
    if (!email || !password) {
      return showError("Fill all fields");
    }

    if (password.length < 6) {
      return showError("Password too short");
    }

    window.location.href = "dashboard.html";

  }, 1200);

  function showError(msg) {
    error.textContent = msg;
    error.classList.remove('hidden');
    btn.textContent = "Sign In";
    btn.disabled = false;
  }
});

// ================================
// 🌐 SOCIAL LOGIN
// ================================
function socialLogin(provider) {
  alert(provider + " login coming soon");
}