/* fx.js — motion layer. Progressive enhancement: no gsap, no motion.
   Reduced motion, ?static=1, or missing CDN all resolve to static final states. */
(function () {
  "use strict";
  var root = document.documentElement;
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var forcedStatic = root.classList.contains("is-static");
  var hasGsap = typeof window.gsap !== "undefined";
  var motionOK = !reduced && !forcedStatic;
  if (!motionOK || !hasGsap) root.classList.add("is-static");
  if (motionOK && hasGsap) root.classList.add("has-fx");
  var staticMode = root.classList.contains("is-static");

  /* ---------- Aurora canvas: ember/teal/violet drift ---------- */
  try {
    var cv = document.getElementById("aurora");
    if (cv) {
      var ctx = cv.getContext("2d");
      var W = 0, H = 0, t = 0, px = 0.5, py = 0.4, running = true;
      var DPR = Math.min(window.devicePixelRatio || 1, 1.5);
      function size() {
        var r = cv.parentElement.getBoundingClientRect();
        W = r.width; H = r.height;
        cv.width = Math.max(1, Math.floor(W * DPR));
        cv.height = Math.max(1, Math.floor(H * DPR));
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      }
      size();
      window.addEventListener("resize", size);
      function blob(x, y, r, color) {
        var g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, color);
        g.addColorStop(1, "rgba(10,10,14,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }
      function frame() {
        t += 0.008;
        ctx.clearRect(0, 0, W, H);
        var cx = W * (0.5 + (px - 0.5) * 0.3), cy = H * (0.35 + (py - 0.4) * 0.3);
        blob(cx + Math.sin(t * 1.1) * W * 0.08, cy + Math.cos(t * 0.9) * H * 0.06, Math.max(W, H) * 0.42, "rgba(255,92,26,0.20)");
        blob(W * 0.15 + Math.cos(t * 0.7) * W * 0.05, H * 0.8 + Math.sin(t) * H * 0.04, Math.max(W, H) * 0.32, "rgba(45,212,191,0.12)");
        blob(W * 0.9 + Math.sin(t * 0.6) * W * 0.05, H * 0.75 + Math.cos(t * 1.2) * H * 0.05, Math.max(W, H) * 0.3, "rgba(139,92,246,0.14)");
        if (!staticMode && running) requestAnimationFrame(frame);
      }
      frame(); // always paint at least one frame
      if (!staticMode) {
        window.addEventListener("pointermove", function (e) {
          px = e.clientX / window.innerWidth; py = e.clientY / window.innerHeight;
        }, { passive: true });
        try {
          new IntersectionObserver(function (en) { running = en[0].isIntersecting; if (running) requestAnimationFrame(frame); }).observe(cv);
        } catch (e) {}
        document.addEventListener("visibilitychange", function () {
          if (!document.hidden && running) requestAnimationFrame(frame);
        });
      }
    }
  } catch (e) {}

  /* ---------- Counters (vanilla rAF, IO-triggered) ---------- */
  try {
    var counters = document.querySelectorAll("[data-count]");
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        cio.unobserve(en.target);
        var el = en.target, end = +el.getAttribute("data-count");
        if (staticMode) { el.textContent = end; return; }
        var t0 = null;
        function tick(now) {
          if (!t0) t0 = now;
          var p = Math.min(1, (now - t0) / 1400);
          el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cio.observe(c); });
  } catch (e) {}

  /* ---------- Meters ---------- */
  try {
    var mio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        mio.unobserve(en.target);
        var f = en.target;
        var pct = f.getAttribute("data-meter");
        if (staticMode) { f.style.width = pct + "%"; return; }
        f.style.transition = "width 1.1s cubic-bezier(0.2,0.7,0.2,1)";
        requestAnimationFrame(function () { f.style.width = pct + "%"; });
      });
    }, { threshold: 0.4 });
    document.querySelectorAll(".meter-fill").forEach(function (f) { mio.observe(f); });
  } catch (e) {}

  if (staticMode || !hasGsap) return;

  /* ---------- GSAP below: cinematic layer ---------- */
  gsap.registerPlugin(ScrollTrigger);

  /* Hero intro choreography (front page only) */
  if (document.querySelector("[data-hero]")) {
    gsap.fromTo("[data-hero]",
      { y: 44, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.15 });
  }

  /* Hero scrub parallax (front page only) */
  if (document.querySelector(".hero-grid")) {
    gsap.to(".hero-grid", {
      y: -60, opacity: 0.35, ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
    });
  }

  /* Reveals — batched by kind (one ScrollTrigger per group, not per node) */
  ["up", "left", "right", "scale"].forEach(function (kind) {
    var nodes = gsap.utils.toArray('[data-reveal="' + kind + '"]');
    if (!nodes.length) return;
    ScrollTrigger.batch(nodes, {
      start: "top 88%",
      once: true,
      onEnter: function (batch) {
        var vars = { opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.08, overwrite: true };
        if (kind === "left" || kind === "right") vars.x = 0;
        else if (kind === "scale") vars.scale = 1;
        else vars.y = 0;
        gsap.to(batch, vars);
      }
    });
  });

  /* Progress rail */
  gsap.to("#progressBar", {
    scaleX: 1, ease: "none",
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 }
  });

  /* Magnetic buttons + tilt (fine pointers only) */
  try {
    if (window.matchMedia("(pointer: fine)").matches) {
      document.querySelectorAll(".magnetic").forEach(function (btn) {
        btn.addEventListener("pointermove", function (e) {
          var r = btn.getBoundingClientRect();
          gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.18, y: (e.clientY - r.top - r.height / 2) * 0.28, duration: 0.3 });
        });
        btn.addEventListener("pointerleave", function () {
          gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.5)" });
        });
      });
      document.querySelectorAll("[data-tilt]").forEach(function (card) {
        card.addEventListener("pointermove", function (e) {
          var r = card.getBoundingClientRect();
          var rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
          var ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
          gsap.to(card, { rotateX: rx, rotateY: ry, transformPerspective: 900, duration: 0.4 });
        });
        card.addEventListener("pointerleave", function () {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
        });
      });
    }
  } catch (e) {}
})();
