document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio script loaded.");

  // Smooth scroll
  document.querySelectorAll("a.nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Particle canvas setup
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas(); // Initial size
  window.addEventListener("resize", resizeCanvas); // Resize on window change

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

  // Hover to play video
  document.querySelectorAll('.video-preview video').forEach(video => {
    video.addEventListener('mouseenter', () => {
      if (!video.hasAttribute('autoplay')) video.play();
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });

  // Floating CV Button
  const btn = document.querySelector(".cv-float-btn");
  if (btn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        btn.classList.add("show");
        btn.classList.remove("hidden");
      } else {
        btn.classList.remove("show");
        btn.classList.add("hidden");
      }
    });
  }
});
