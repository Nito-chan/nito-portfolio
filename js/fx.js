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

  /* ---------- Marquee: pause when offscreen or tab hidden ---------- */
  try {
    var marquee = document.querySelector(".marquee");
    if (marquee) {
      var marqueeVisible = true;
      var setMarqueePaused = function (paused) { marquee.classList.toggle("is-paused", paused); };
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(function (entries) {
          marqueeVisible = entries[0].isIntersecting;
          setMarqueePaused(!marqueeVisible || document.hidden);
        }, { rootMargin: "120px 0px" }).observe(marquee);
      }
      document.addEventListener("visibilitychange", function () {
        setMarqueePaused(document.hidden || !marqueeVisible);
      });
    }
  } catch (e) {}

  if (staticMode || !hasGsap) return;

  /* ---------- GSAP below: cinematic layer ---------- */
  gsap.registerPlugin(ScrollTrigger);

  /* Work deck: sticky panels + progress scrub */
  try {
    var workDeck = document.querySelector(".work-deck");
    var workBar = document.getElementById("workProgress");
    if (workDeck) {
      var workMM = gsap.matchMedia();
      workMM.add("(min-width: 960px)", function () {
        var panels = gsap.utils.toArray(".work-panel");
        panels.forEach(function (panel) {
          gsap.fromTo(panel,
            { y: 70, rotateX: 3, transformPerspective: 1200, opacity: 0.3 },
            {
              y: 0, rotateX: 0, opacity: 1, ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top 95%",
                end: "top 35%",
                scrub: true
              }
            });
        });
        if (workBar) {
          ScrollTrigger.create({
            trigger: workDeck,
            start: "top 85%",
            end: "bottom bottom",
            scrub: true,
            onUpdate: function (self) {
              workBar.style.transform = "scaleX(" + self.progress + ")";
            }
          });
        }
        return function () {
          if (workBar) workBar.style.transform = "";
        };
      });
    }
  } catch (e) {}

  /* Reveals — IntersectionObserver, not ScrollTrigger. This stays reliable
     when a visitor lands mid-page (hash link, refresh, fast jump) instead of
     scrolling there from the top. */
  try {
    ["up", "left", "right", "scale"].forEach(function (kind) {
      var nodes = gsap.utils.toArray('[data-reveal="' + kind + '"]');
      if (!nodes.length) return;
      if (!("IntersectionObserver" in window)) {
        gsap.set(nodes, { opacity: 1, x: 0, y: 0, scale: 1 });
        return;
      }
      var io = new IntersectionObserver(function (entries) {
        var batch = entries.filter(function (en) { return en.isIntersecting; }).map(function (en) {
          io.unobserve(en.target);
          return en.target;
        });
        if (!batch.length) return;
        var vars = { opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.08, overwrite: true };
        if (kind === "left" || kind === "right") vars.x = 0;
        else if (kind === "scale") vars.scale = 1;
        else vars.y = 0;
        gsap.to(batch, vars);
      }, { rootMargin: "0px 0px -12% 0px", threshold: 0.01 });
      nodes.forEach(function (node) { io.observe(node); });
    });
  } catch (e) {
    try { gsap.set('[data-reveal]', { opacity: 1, x: 0, y: 0, scale: 1 }); } catch (err) {}
  }

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
