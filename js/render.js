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
  try { document.title = (document.querySelector("h1") && location.pathname.indexOf("work") > -1) ? "All work — Nitō" : S.meta.title; } catch (e) { document.title = S.meta.title; }
  function chips(arr) { return (arr || []).map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join(""); }

  /* Hero */
  try {
    var h = $("hero-h");
    if (h && S.hero) h.innerHTML = esc(S.hero.headline) + ' <span class="ember-word">' + esc(S.hero.accent || "") + "</span>";
    var k = document.querySelector(".hero .kicker");
    if (k && S.hero.kicker) k.textContent = S.hero.kicker;
    var sub = $("heroSub");
    if (sub && S.hero.subline) sub.textContent = S.hero.subline;
    var st = $("heroStats");
    if (st && S.hero.stats) {
      st.innerHTML = S.hero.stats.map(function (x) {
        return "<div><b><span data-count=\"" + x.value + "\">" + x.value + "</span>" +
          (x.suffix ? "<em>" + esc(x.suffix) + "</em>" : "") + "</b><span>" + esc(x.label) + "</span></div>";
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

  /* Bento: 6 featured + view-all */
  var artFor = {
    ember: "radial-gradient(80% 90% at 70% 20%,rgb(255 92 26/.5),transparent),radial-gradient(60% 60% at 20% 90%,rgb(255 92 26/.25),transparent)",
    pulse: "repeating-linear-gradient(115deg,transparent 0 18px,rgb(45 212 191/.14) 18px 20px),radial-gradient(70% 80% at 30% 20%,rgb(45 212 191/.3),transparent)",
    studio: "radial-gradient(60% 70% at 80% 10%,rgb(139 92 246/.45),transparent),radial-gradient(50% 50% at 15% 90%,rgb(255 92 26/.3),transparent)",
    field: "linear-gradient(180deg,transparent 55%,rgb(255 92 26/.25)),repeating-linear-gradient(0deg,transparent 0 26px,rgb(255 255 255/.05) 26px 27px)",
    fire: "radial-gradient(70% 80% at 50% 100%,rgb(255 92 26/.4),transparent),radial-gradient(40% 40% at 80% 10%,rgb(255 180 80/.25),transparent)"
  };
  var spans = ["span-4 cell-ember", "span-2 cell-teal", "span-3 cell-violet", "span-3 cell-fire", "span-2 cell-teal", "span-4 cell-ember"];
  try {
    var b = $("bento");
    if (b && S.projects) {
      b.innerHTML = S.projects.slice(0, 6).map(function (p, i) {
        return '<article class="cell ' + spans[i % 6] + '" data-reveal="up" data-tilt>' +
          '<div class="cell-art" style="background:' + (artFor[p.thumb] || artFor.ember) + '" aria-hidden="true"></div>' +
          '<div class="cell-body"><h3>' + esc(p.title) + "</h3><p>" + esc(p.summary) + "</p>" +
          '<div style="display:flex;gap:.45rem;flex-wrap:wrap;margin-top:.6rem">' + chips(p.stack) + "</div>" +
          '<div class="cell-cta"><button class="btn btn-ghost btn-small case-btn" data-case="' + i + '">Open case study</button>' +
          (p.liveUrl ? '<a class="text-link" href="' + esc(p.liveUrl) + '">Live →</a>' : '<span class="chip">' + esc(p.note || "Private") + "</span>") +
          "</div></div></article>";
      }).join("") +
      '<a class="cell span-6 view-all" data-reveal="up" href="work.html"><div class="cell-body">' +
      "<h3>View the lifetime collection →</h3><p>Demos, concepts, automation and experiments — " + (S.archive ? S.archive.length + 6 : "17") + " projects and counting.</p>" +
      "</div></a>";
    }
  } catch (e) {}

  /* Case modal (index) */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".case-btn");
    if (!btn || !S.projects) return;
    var p = S.projects[+btn.getAttribute("data-case")];
    if (!p) return;
    $("modalTitle").textContent = p.title;
    $("modalSummary").textContent = p.summary;
    $("modalProblem").textContent = p.problem;
    $("modalRole").textContent = p.role;
    $("modalResult").textContent = p.result;
    $("modalStack").innerHTML = chips(p.stack);
    var links = $("modalLinks");
    links.innerHTML = p.liveUrl
      ? '<a class="text-link" href="' + esc(p.liveUrl) + '">Live site →</a>' + (p.codeUrl ? ' <a class="text-link" href="' + esc(p.codeUrl) + '">Code →</a>' : "")
      : '<span class="chip">' + esc(p.note || "Private build") + "</span>";
    var shot = $("modalShot");
    if (shot) {
      if (p.shot) { shot.src = "assets/" + p.shot + ".webp"; shot.alt = p.title + " screenshot"; shot.hidden = false; }
      else shot.hidden = true;
    }
    var m = $("caseModal");
    if (m && m.showModal) m.showModal();
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
      copy.innerHTML = S.about.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
        '<p><a class="text-link" href="' + esc(S.person.resumeUrl) + '">Download resume →</a></p>';
    }
    var ex = $("expList");
    if (ex && S.experience) {
      ex.innerHTML = S.experience.map(function (x) {
        return "<li><span>" + esc(x.period) + "</span><div><strong>" + esc(x.role) + "</strong><br><span style='color:var(--text-muted)'>" + esc(x.org) + "</span></div></li>";
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
      var cats = ["All", "Web", "AI & Automation", "Video", "Design"];
      var active = "All";
      function itemCat(x) { return x.cat || "Web"; }
      function allItems() {
        var feat = (S.projects || []).map(function (p) {
          return { title: p.title, desc: p.summary, stack: p.stack, liveUrl: p.liveUrl, note: p.note, cat: p.cat || "Web", year: p.year || "2026" };
        });
        return feat.concat(S.archive);
      }
      function card(x) {
        return '<article class="cell acell" data-cat="' + esc(itemCat(x)) + '">' +
          '<div class="cell-body"><p class="ameta"><span>' + esc(itemCat(x)) + '</span><span> · </span><span>' + esc(x.year || "") + "</span>" +
          (x.note ? ' <span class="chip">' + esc(x.note) + "</span>" : "") + "</p>" +
          "<h2>" + esc(x.title) + "</h2><p>" + esc(x.desc) + "</p>" +
          '<div style="display:flex;gap:.45rem;flex-wrap:wrap;margin-top:.6rem">' + chips(x.stack) + "</div>" +
          '<div class="cell-cta">' + (x.liveUrl ? '<a class="text-link" href="' + esc(x.liveUrl) + '">Visit live →</a>' : "") + "</div>" +
          "</div></article>";
      }
      function paint() {
        var items = allItems().filter(function (x) { return active === "All" || itemCat(x) === active; });
        grid.innerHTML = items.map(card).join("");
        var c = $("archCount");
        if (c) c.textContent = items.length + " projects — filter, read, visit.";
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
})();
