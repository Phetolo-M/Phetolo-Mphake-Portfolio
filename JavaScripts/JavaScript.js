document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio script loaded.");

  document.querySelectorAll("a.nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = ["<", "{", "}", "/", "=", ";", ":", ".", "🎮", "⚙️"];
  const particles = [];
  const max = 80;

  for (let i = 0; i < max; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 1 + 0.5,
      char: chars[Math.floor(Math.random() * chars.length)],
      size: Math.random() * 18 + 12,
      opacity: Math.random(),
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 20px Orbitron";
    ctx.fillStyle = "rgba(0, 255, 208, 0.7)";
    particles.forEach(p => {
      ctx.globalAlpha = p.opacity;
      ctx.font = `${p.size}px Orbitron`;
      ctx.fillText(p.char, p.x, p.y);
      p.y += p.speed;
      if (p.y > canvas.height) p.y = 0;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(drawParticles);
  }

  drawParticles();
});

document.querySelectorAll('.video-preview video').forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });

  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // rewind to start if needed
  });
});