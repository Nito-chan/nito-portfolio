/* main.js — menu, nav, form, badges, year. Works with zero animation libs. */
(function () {
  "use strict";
  try { document.getElementById("footYear").textContent = new Date().getFullYear(); } catch (e) {}

  /* ?static=1 forces the no-motion path (also used by tests) */
  try {
    if (new URLSearchParams(location.search).has("static")) document.documentElement.classList.add("is-static");
  } catch (e) {}

  /* Mobile menu */
  var menuBtn = document.getElementById("menuBtn");
  var panel = document.getElementById("mobilePanel");
  var lastFocus = null;
  function setMenu(open) {
    if (!menuBtn || !panel) return;
    panel.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (open) {
      lastFocus = document.activeElement;
      var f = panel.querySelector("a");
      if (f) f.focus();
      document.addEventListener("keydown", trap);
    } else {
      document.removeEventListener("keydown", trap);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
  }
  function trap(e) {
    if (e.key === "Escape") { setMenu(false); menuBtn.focus(); return; }
    if (e.key !== "Tab") return;
    var items = panel.querySelectorAll("a");
    if (!items.length) return;
    var first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  if (menuBtn && panel) {
    menuBtn.addEventListener("click", function () { setMenu(!panel.classList.contains("open")); });
    panel.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  }

  /* Modal: Esc is native; return focus to opener */
  var modal = document.getElementById("caseModal");
  var opener = null;
  document.addEventListener("click", function (e) {
    var t = e.target.closest(".case-btn, .case-arch");
    if (t) opener = t;
  });
  if (modal) modal.addEventListener("close", function () { if (opener && opener.focus) opener.focus(); });

  /* Badges — filled after audit (BUILD_REPORT) */
  try {
    document.getElementById("badgePerf").textContent = "—";
    document.getElementById("badgeA11y").textContent = "—";
    document.getElementById("badgeWeight").textContent = "—";
  } catch (e) {}

  /* Form (Formspree AJAX, same contract as v1) */
  var form = document.getElementById("contactForm");
  if (form) {
    var status = document.getElementById("formStatus");
    var sendBtn = document.getElementById("sendBtn");
    function setErr(input, id, msg) {
      var el = document.getElementById(id);
      if (el) el.textContent = msg || "";
      if (input) input.setAttribute("aria-invalid", msg ? "true" : "false");
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("fName");
      var email = document.getElementById("fEmail");
      var msg = document.getElementById("fMsg");
      var ok = true;
      if (!name.value.trim() || name.value.trim().length < 2) { setErr(name, "eName", "Add your name so I know who is writing."); ok = false; }
      else setErr(name, "eName", "");
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { setErr(email, "eEmail", "Add your email so I can reply."); ok = false; }
      else setErr(email, "eEmail", "");
      if (!msg.value.trim() || msg.value.trim().length < 10) { setErr(msg, "eMsg", "Tell me a little about the project (10+ characters)."); ok = false; }
      else setErr(msg, "eMsg", "");
      if (!ok) { if (status) status.textContent = ""; return; }
      var endpoint = (window.SITE && window.SITE.form && window.SITE.form.endpoint) || "";
      if (!endpoint) {
        if (status) status.textContent = "This form isn't connected yet — email me directly.";
        return;
      }
      if (sendBtn) { sendBtn.disabled = true; sendBtn.textContent = "Sending…"; }
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json" },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(function (res) {
        if (!res.ok) throw new Error("bad");
        if (status) status.textContent = "Thanks — message sent. I reply within 24 hours.";
        form.reset();
      }).catch(function () {
        if (status) status.textContent = "Couldn't send just now — email me directly and I'll reply within 24 hours.";
      }).finally(function () {
        if (sendBtn) { sendBtn.disabled = false; sendBtn.textContent = "Send message"; }
      });
    });
  }
})();
