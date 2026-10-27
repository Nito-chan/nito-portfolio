/* render.js — Nitō portfolio. Guards: runs on index.html AND work.html. */
(function () {
  "use strict";
  var S = window.SITE;
  if (!S) return;
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  try {
    var path = location.pathname;
    if (path.indexOf("work") > -1) document.title = "All work — Nitō";
    else if (path.indexOf("lab") > -1) document.title = "Lab — Nitō";
    else document.title = S.meta.title;
  } catch (e) { document.title = S.meta.title; }
  function chips(arr) { return (arr || []).map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join(""); }

  /* Hero */
  try {
    var h = $("hero-h");
    if (h && S.hero) h.innerHTML = esc(S.hero.headline) + ' <span class="ember-word">' + esc(S.hero.accent || "") + "</span>";
    var k = document.querySelector(".hero .kicker");
    if (k && S.hero.kicker) k.textContent = S.hero.kicker;
    var sub = $("heroSub");
    if (sub && S.hero.subline) sub.textContent = S.hero.subline;
    var reel = $("heroReel");
    if (reel && S.hero.reel) {
      reel.innerHTML = S.hero.reel.map(function (x, i) {
        return '<div class="hero-reel-frame" style="--r:' + (i - 1) + '">' +
          '<img src="assets/' + esc(x.img) + '.webp" alt="" loading="lazy" decoding="async" width="640" height="400">' +
          '<span>' + esc(x.label) + "</span></div>";
      }).join("");
    }
  } catch (e) {}

  /* Marquee */
  try {
    var mt = $("marqueeTrack");
    if (mt && S.marquee) {
      var items = S.marquee.map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("");
      mt.innerHTML = items + items;
    }
  } catch (e) {}

  /* Services */
  try {
    var sg2 = $("servicesGrid");
    if (sg2 && S.services) {
      sg2.innerHTML = S.services.map(function (s) {
        return '<div class="svc"><h3>' + esc(s.name) + "</h3><p>" + esc(s.desc) + '</p><div style="display:flex;gap:.45rem;flex-wrap:wrap">' + chips(s.tags) + "</div></div>";
      }).join("");
    }
  } catch (e) {}

  /* Work scrub: 6 case-study panels */
  try {
    var wd = $("workDeck");
    if (wd && S.projects) {
      var total = S.projects.length;
      wd.innerHTML = S.projects.map(function (p, i) {
        return '<article class="work-panel" data-accent="' + esc(p.accent || "ember") + '" style="--z:' + (10 + i) + '" aria-labelledby="scene-' + i + '">' +
          '<div class="work-panel-media">' +
            '<div class="work-frame">' +
              '<div class="work-frame-bar" aria-hidden="true"><span class="work-dots"><i></i><i></i><i></i></span><span class="work-url">' + esc(p.domain || "live") + '</span><span class="work-live">LIVE</span></div>' +
              '<img src="assets/' + esc(p.img) + '.webp" alt="' + esc(p.title) + ' screenshot" loading="' + (i === 0 ? "eager" : "lazy") + '" decoding="async" width="1200" height="750">' +
            '</div>' +
            '<span class="work-scene-no" aria-hidden="true">0' + (i + 1) + ' / 0' + total + '</span>' +
          '</div>' +
          '<div class="work-panel-copy">' +
            '<p class="work-cat">' + esc(p.cat) + '</p>' +
            '<h3 id="scene-' + i + '">' + esc(p.title) + '</h3>' +
            '<p class="work-sub">' + esc(p.subtitle) + '</p>' +
            '<p class="work-summary">' + esc(p.summary) + '</p>' +
            '<dl class="work-case">' +
              '<div><dt>Strength</dt><dd>' + esc(p.strength) + '</dd></div>' +
              '<div><dt>Goal</dt><dd>' + esc(p.goal) + '</dd></div>' +
              '<div><dt>Vision</dt><dd>' + esc(p.vision) + '</dd></div>' +
            '</dl>' +
            '<div class="work-tags">' + chips(p.stack) + '</div>' +
            '<div class="work-actions">' +
              (p.liveUrl ? '<a class="btn btn-ember btn-small" href="' + esc(p.liveUrl) + '" target="_blank" rel="noopener">Visit live →</a>' : "") +
              '<button type="button" class="btn btn-ghost btn-small case-btn" data-case="' + i + '">Open case study</button>' +
              '<span class="chip work-label">' + esc(p.label) + '</span>' +
            '</div>' +
          '</div></article>';
      }).join("");
    }
  } catch (e) {}

  /* Case modal (both pages): fills shared #caseModal */
  function fillModal(p) {
    $("modalTitle").textContent = p.title;
    $("modalSummary").textContent = p.summary || p.desc || "";
    var hasCase = !!(p.strength || p.goal || p.vision);

    if ($("modalStrength")) $("modalStrength").textContent = p.strength || "";
    if ($("modalGoal")) $("modalGoal").textContent = p.goal || "";
    if ($("modalVision")) $("modalVision").textContent = p.vision || "";
    ["modalRowStrength", "modalRowGoal", "modalRowVision"].forEach(function (id) {
      if ($(id)) $(id).hidden = !hasCase || !p[id.replace("modalRow", "").toLowerCase()];
    });

    if ($("modalPurpose")) $("modalPurpose").textContent = p.purpose || "";
    if ($("modalProblem")) $("modalProblem").textContent = p.problem || "";
    if ($("modalRole")) $("modalRole").textContent = p.role || "";
    if ($("modalResult")) $("modalResult").textContent = p.result || "";
    ["modalRowPurpose", "modalRowProblem", "modalRowResult"].forEach(function (id) {
      if ($(id)) $(id).hidden = hasCase || !(p.problem && p.role && p.result);
    });
    if ($("modalRowRole")) $("modalRowRole").hidden = !p.role;

    $("modalStack").innerHTML = chips(p.stack);
    var links = $("modalLinks");
    links.innerHTML = p.liveUrl
      ? '<a class="text-link" href="' + esc(p.liveUrl) + '" target="_blank" rel="noopener">Live site →</a>' + (p.codeUrl ? ' <a class="text-link" href="' + esc(p.codeUrl) + '">Code →</a>' : "")
      : '<span class="chip">' + esc(p.note || "Private build") + "</span>";
    var shot = $("modalShot");
    var img = p.shot || p.img;
    if (shot) {
      if (img) { shot.src = "assets/" + img + ".webp"; shot.alt = p.title + " screenshot"; shot.hidden = false; }
      else shot.hidden = true;
    }
    var m = $("caseModal");
    if (m && m.showModal) m.showModal();
  }
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".case-btn");
    if (btn && S.projects) {
      var p = S.projects[+btn.getAttribute("data-case")];
      if (p) fillModal(p);
    }
  });

  /* Process / skills / tiers / quotes / faq */
  try {
    var ps = $("processStack");
    if (ps && S.process) {
      ps.innerHTML = S.process.map(function (s, i) {
        return '<div class="scard" data-reveal="up"><span class="num">0' + (i + 1) + '</span><h3>' + esc(s.step) + "</h3><p>" + esc(s.text) + '</p><p class="got">DELIVERABLE → ' + esc(s.deliverable) + "</p></div>";
      }).join("");
    }
  } catch (e) {}
  var levelPct = { Daily: 92, Comfortable: 68, Learning: 38 };
  try {
    var sk = $("skillsGrid");
    if (sk && S.skills) {
      sk.innerHTML = S.skills.map(function (g) {
        return "<div class='skill-group'><h3>" + esc(g.group) + "</h3>" + (g.items || []).map(function (it) {
          return '<div class="meter"><div class="meter-head"><span>' + esc(it.name) + "</span><span>" + esc(it.level) + "</span></div>" +
            '<div class="meter-track"><span class="meter-fill" data-meter="' + (levelPct[it.level] || 50) + '"></span></div></div>';
        }).join("") + "</div>";
      }).join("");
    }
    var tr = $("toolRow");
    if (tr && S.trusted) tr.innerHTML = chips(S.trusted);
  } catch (e) {}
  try {
    var t = $("tiers");
    if (t && S.tiers) {
      t.innerHTML = S.tiers.map(function (x) {
        return '<div class="tier' + (x.featured ? " featured" : "") + '">' +
          (x.featured ? '<span class="flag">MOST BOOKED</span>' : "") +
          "<h3>" + esc(x.name) + "</h3>" +
          '<p class="price">' + esc(x.price) + ' <small class="inr">' + esc(x.inr) + "</small></p>" +
          '<p style="color:var(--text-muted)">' + esc(x.blurb) + "</p>" +
          "<ul>" + (x.features || []).map(function (f) {
            return '<li class="' + (f.yes ? "yes" : "no") + '">' + esc(f.text) + "</li>";
          }).join("") + "</ul>" +
          '<a class="btn ' + (x.featured ? "btn-ember" : "btn-ghost") + ' magnetic" href="' + esc(x.cta.href) + '">' + esc(x.cta.label) + "</a></div>";
      }).join("");
    }
  } catch (e) {}
  try {
    var q = $("quotesTrack");
    if (q) {
      if (!S.testimonials || !S.testimonials.length) { $("kind-words").hidden = true; }
      else {
        var one = S.testimonials.map(function (x) {
          return "<figure class='quote'><blockquote><p>“" + esc(x.quote) + "”</p></blockquote><footer><span><strong>" + esc(x.name) + "</strong> · " + esc(x.role) + "</span>" + (x.sample ? '<span class="sample-tag">Sample</span>' : "") + "</footer></figure>";
        }).join("");
        q.innerHTML = one + one;
      }
    }
  } catch (e) {}
  try {
    var f = $("faqList");
    if (f && S.faq) {
      f.innerHTML = S.faq.map(function (x) {
        return "<details class='faq-item'><summary>" + esc(x.q) + "</summary><p class='ans'>" + esc(x.a) + "</p></details>";
      }).join("");
    }
  } catch (e) {}

  /* About + experience */
  try {
    var copy = $("aboutCopy");
    if (copy && S.about) {
      var aboutMeta = [S.person.location, "Web / AI / Design / Video", S.person.availability && S.person.availability.text]
        .filter(Boolean)
        .map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; })
        .join("");
      copy.innerHTML = S.about.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
        '<p class="about-meta">' + aboutMeta + "</p>" +
        '<p><a class="text-link" href="mailto:' + esc(S.person.email) + '">Ask for my CV →</a></p>';
    }
    var ex = $("expList");
    if (ex && S.experience) {
      ex.innerHTML = S.experience.map(function (x, i) {
        var n = String(i + 1).padStart(2, "0");
        return "<li><span>" + n + "</span><div><strong>" + esc(x.role) + "</strong><br><span style='color:var(--text-muted)'>" + esc(x.org) + "</span></div></li>";
      }).join("");
    }
  } catch (e) {}

  /* Contact wiring */
  try {
    if ($("emailLink")) { $("emailLink").textContent = S.person.email; $("emailLink").href = "mailto:" + S.person.email; }
    if ($("waLink")) $("waLink").href = "https://wa.me/" + S.person.whatsapp + "?text=" + encodeURIComponent(S.person.waText);
    if ($("calLink")) $("calLink").href = S.person.calendly;
    var fsv = $("fService");
    if (fsv && S.formServices) fsv.innerHTML = S.formServices.map(function (s) { return "<option>" + esc(s) + "</option>"; }).join("");
    var fbg = $("fBudget");
    if (fbg && S.formBudgets) fbg.innerHTML = S.formBudgets.map(function (s) { return "<option>" + esc(s) + "</option>"; }).join("");
    var gig = $("gigRow");
    var isGig = function (s) { return /fiverr|upwork/i.test(s.label); };
    if (gig) gig.innerHTML = S.social.filter(isGig).map(function (s) { return '<a class="btn btn-ghost btn-small" href="' + esc(s.href) + '" rel="noopener">' + esc(s.label) + "</a>"; }).join("");
    var sr = $("socialRow");
    if (sr) sr.innerHTML = S.social.filter(function (s) { return !isGig(s); }).map(function (s) { return '<a class="btn btn-ghost btn-small" href="' + esc(s.href) + '" rel="noopener">' + esc(s.label) + "</a>"; }).join("");
    var fs = $("footSocial");
    if (fs) fs.innerHTML = S.social.map(function (s) { return '<li><a href="' + esc(s.href) + '" rel="noopener">' + esc(s.label) + "</a></li>"; }).join("");
    if ($("footName")) $("footName").textContent = S.person.name;
  } catch (e) {}

  /* Archive page */
  try {
    var grid = $("archiveGrid");
    var bar = $("filterBar");
    if (grid && S.archive) {
      var cats = ["All", "Web", "AI & Automation", "Video", "Design", "Games"];
      var active = "All";
      var lastPainted = [];
      function itemCat(x) { return x.cat || "Web"; }
      function allItems() {
        var seen = new Set();
        var out = [];
        (S.archive || []).forEach(function (x) {
          var key = (x.title + "|" + (x.liveUrl || "")).toLowerCase();
          if (!seen.has(key)) { seen.add(key); out.push(x); }
        });
        return out;
      }
      function shotImg(x) {
        if (!x.img) return "";
        return '<img class="cell-shot" src="assets/' + esc(x.img) + '.webp" alt="Screenshot of ' + esc(x.title) + '" loading="lazy" decoding="async" fetchpriority="low" width="640" height="360">';
      }
      function card(x, i) {
        return '<article class="cell acell" data-cat="' + esc(itemCat(x)) + '">' +
          shotImg(x) +
          '<div class="cell-body"><p class="ameta"><span>' + esc(itemCat(x)) + '</span><span> · </span><span>' + esc(x.year || "") + "</span>" +
          (x.label ? ' <span class="chip">' + esc(x.label) + "</span>" : "") +
          (x.note ? ' <span class="chip">' + esc(x.note) + "</span>" : "") + "</p>" +
          "<h2>" + esc(x.title) + "</h2><p>" + esc(x.desc) + "</p>" +
          '<div style="display:flex;gap:.45rem;flex-wrap:wrap;margin-top:.6rem">' + chips(x.stack) + "</div>" +
          '<div class="cell-cta"><button type="button" class="cell-open case-arch" data-arch="' + i + '">Details</button>' +
          (x.liveUrl ? '<a class="text-link arch-visit" href="' + esc(x.liveUrl) + '" target="_blank" rel="noopener">Visit live →</a>' : "") + "</div>" +
          "</div></article>";
      }
      function paint() {
        lastPainted = allItems().filter(function (x) { return active === "All" || itemCat(x) === active; });
        window.__lastPainted = lastPainted;
        grid.innerHTML = lastPainted.map(card).join("");
        var c = $("archCount");
        if (c) c.textContent = lastPainted.length + " projects with live links — tap a card for details.";
      }
      if (bar) {
        bar.innerHTML = cats.map(function (c) {
          return '<button type="button" class="fbtn' + (c === active ? " on" : "") + '" data-f="' + esc(c) + '" aria-pressed="' + (c === active) + '">' + esc(c) + "</button>";
        }).join("");
        bar.addEventListener("click", function (e) {
          var b = e.target.closest(".fbtn");
          if (!b) return;
          active = b.getAttribute("data-f");
          bar.querySelectorAll(".fbtn").forEach(function (x) {
            var on = x === b;
            x.classList.toggle("on", on);
            x.setAttribute("aria-pressed", on);
          });
          paint();
        });
      }
      paint();
    }
  } catch (e) {}

  /* Lab page: arcade cabinets */
  try {
    var labGrid = $("labGrid");
    if (labGrid && S.lab) {
      labGrid.innerHTML = S.lab.map(function (g, i) {
        var isLive = g.status === "live" && g.liveUrl;
        var action = isLive
          ? '<a class="btn btn-arcade" href="' + esc(g.liveUrl) + '" target="_blank" rel="noopener" aria-label="Play ' + esc(g.title) + ' (opens live site)">' + esc(g.action) + " →</a>"
          : '<span class="btn btn-arcade is-disabled" aria-disabled="true">' + esc(g.action) + "</span>";
        return '<article class="cabinet" data-status="' + esc(g.status) + '" style="--cab-accent:' + esc(g.accent) + '">' +
          '<div class="cabinet-marquee">' +
            '<span class="cabinet-led" aria-hidden="true"></span>' +
            '<h3 class="cabinet-title">' + esc(g.title) + "</h3>" +
            '<span class="cabinet-badge ' + (isLive ? "is-live" : "is-local") + '">' + esc(g.statusLabel) + "</span>" +
          "</div>" +
          '<div class="cabinet-screen">' +
            '<img src="assets/' + esc(g.img) + '.webp" alt="' + esc(g.title) + ' game screenshot" loading="' + (i === 0 ? "eager" : "lazy") + '" decoding="async" width="1200" height="750">' +
            '<span class="cabinet-scan" aria-hidden="true"></span>' +
            '<span class="cabinet-play" aria-hidden="true">▶</span>' +
          "</div>" +
          '<div class="cabinet-body">' +
            '<p class="cabinet-genre">' + esc(g.genre) + "</p>" +
            '<p class="cabinet-desc">' + esc(g.desc) + "</p>" +
            '<div class="cabinet-tags">' + chips(g.stack) + "</div>" +
            '<div class="cabinet-actions">' + action +
              '<span class="cabinet-note">' + esc(g.note) + "</span>" +
            "</div>" +
          "</div>" +
          '<div class="cabinet-foot" aria-hidden="true"><span>INSERT COIN</span><span>1 PLAYER</span></div>' +
        "</article>";
      }).join("");
    }
  } catch (e) {}

  /* Archive Details buttons → shared modal */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".case-arch");
    if (!btn) return;
    var list = window.__lastPainted || [];
    var p = list[+btn.getAttribute("data-arch")];
    if (p) fillModal(p);
  });
})();
