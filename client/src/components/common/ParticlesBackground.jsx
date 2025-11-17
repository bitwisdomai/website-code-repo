import React, { useEffect, useRef } from "react";

const ParticlesBackground = ({ variant = "default" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const section = canvas.parentElement;

    const resizeCanvas = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    resizeCanvas();

    // Particle arrays
    const particles = [];
    const connections = [];
    const floatingShapes = [];

    // Configuration based on variant
    const config = {
      default: {
        particleCount: 80,
        shapeCount: 15,
        particleSpeed: 0.3,
        connectionDistance: 150,
        colors: {
          particles: ["rgba(0, 240, 255, 0.6)", "rgba(56, 189, 248, 0.5)", "rgba(14, 165, 233, 0.4)"],
          shapes: ["rgba(0, 240, 255, 0.15)", "rgba(56, 189, 248, 0.12)", "rgba(14, 165, 233, 0.1)"],
          connections: "rgba(0, 240, 255, 0.15)"
        }
      },
      cosmic: {
        particleCount: 100,
        shapeCount: 20,
        particleSpeed: 0.2,
        connectionDistance: 120,
        colors: {
          particles: ["rgba(0, 240, 255, 0.8)", "rgba(147, 51, 234, 0.6)", "rgba(236, 72, 153, 0.5)"],
          shapes: ["rgba(0, 240, 255, 0.2)", "rgba(147, 51, 234, 0.15)", "rgba(236, 72, 153, 0.12)"],
          connections: "rgba(0, 240, 255, 0.2)"
        }
      }
    };

    const settings = config[variant] || config.default;

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * settings.particleSpeed;
        this.vy = (Math.random() - 0.5) * settings.particleSpeed;
        this.radius = Math.random() * 2.5 + 1;
        this.color = settings.colors.particles[Math.floor(Math.random() * settings.colors.particles.length)];
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += this.pulseSpeed;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Keep within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.5 + 1;
        const currentRadius = this.radius * pulse;

        // Outer glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, currentRadius * 3);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "rgba(0, 240, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core particle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Floating shapes class
    class FloatingShape {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 60 + 30;
        this.vx = (Math.random() - 0.5) * 0.15;
        this.vy = (Math.random() - 0.5) * 0.15;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.type = Math.floor(Math.random() * 4); // 0: circle, 1: triangle, 2: square, 3: hexagon
        this.color = settings.colors.shapes[Math.floor(Math.random() * settings.colors.shapes.length)];
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.01 + Math.random() * 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;
        this.pulsePhase += this.pulseSpeed;

        // Wrap around edges
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 1;
        const currentSize = this.size * pulse;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.fillStyle = this.color.replace(/[\d.]+\)$/g, "0.05)"); // Very transparent fill

        ctx.beginPath();

        switch (this.type) {
          case 0: // Circle
            ctx.arc(0, 0, currentSize / 2, 0, Math.PI * 2);
            break;
          case 1: // Triangle
            ctx.moveTo(0, -currentSize / 2);
            ctx.lineTo(currentSize / 2, currentSize / 2);
            ctx.lineTo(-currentSize / 2, currentSize / 2);
            ctx.closePath();
            break;
          case 2: // Square
            ctx.rect(-currentSize / 2, -currentSize / 2, currentSize, currentSize);
            break;
          case 3: // Hexagon
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI / 3) * i;
              const x = Math.cos(angle) * currentSize / 2;
              const y = Math.sin(angle) * currentSize / 2;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
            break;
        }

        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < settings.particleCount; i++) {
      particles.push(new Particle());
    }

    // Initialize floating shapes
    for (let i = 0; i < settings.shapeCount; i++) {
      floatingShapes.push(new FloatingShape());
    }

    // Draw connections between nearby particles
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < settings.connectionDistance) {
            const opacity = (1 - distance / settings.connectionDistance) * 0.3;
            ctx.strokeStyle = settings.colors.connections.replace(/[\d.]+\)$/g, `${opacity})`);
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update floating shapes (background layer)
      floatingShapes.forEach((shape) => {
        shape.update();
        shape.draw();
      });

      // Draw connections
      drawConnections();

      // Draw and update particles (foreground layer)
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
};

export default ParticlesBackground;
