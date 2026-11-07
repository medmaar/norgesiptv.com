/* Full-screen success screen after a free-trial request or a plan order.
   Called by gratis-proveperiode.js and bestill.js: window.nipCelebrate("trial" | "order", email).
   Preview without submitting: add ?celebrate=trial or ?celebrate=order to the page URL.
   The screen cannot be dismissed: its only button takes the visitor to the homepage.
   Edit the texts in CELEBRATE below. */
(function () {
  var CELEBRATE = {
    trial: {
      title: "Gratis prøveperiode er på vei!",
      lines: [
        "Våre tekniske troll padler påloggingen din over fjorden til <b data-c-email></b> så fort de små beina tillater. 🧌",
        "Den kommer vanligvis innen 2 minutter. Sjekk <b>innboksen</b> OG <b>søppelposten</b> (spam), for noen ganger blir e-posten vår sjenert og gjemmer seg der.",
        "Din eneste jobb de neste 24 timene: sofakos og popcorn. 🍿"
      ],
      btn: "Skjønner, til forsiden →"
    },
    order: {
      title: "Du klarte det! Bestillingen er sendt.",
      lines: [
        "Legendarisk trekk. Sofaen din er informert, og den er stolt av deg. 🛋️",
        "Fakturaen kommer til <b data-c-email></b> innen kort tid. Sjekk <b>innboksen</b> OG <b>søppelposten</b> (spam), for e-poster elsker en god runde gjemsel.",
        "Betal fakturaen, så ruller kanalene dine raskere enn en vikingbåt i medvind. ⛵"
      ],
      btn: "Rått, til forsiden →"
    }
  };
  var FALLBACK_EMAIL = "e-postadressen din";
  var HOME = "/";

  var css =
    ".nip-celebrating,.nip-celebrating body{overflow:hidden}" +
    ".nip-cel{position:fixed;inset:0;z-index:100000;display:flex;padding:max(16px,env(safe-area-inset-top)) max(16px,env(safe-area-inset-right)) max(16px,env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left));overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;font-family:'Josefin Sans',sans-serif;" +
    "background:radial-gradient(circle at 50% 35%,rgba(34,197,94,.22),transparent 60%),rgba(6,9,15,.93);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);animation:nipcel-in .3s ease both}" +
    ".nip-cel.is-out{animation:nipcel-out .25s ease forwards}" +
    ".nip-cel-box{position:relative;margin:auto;flex:none;width:min(560px,100%);text-align:center;padding:clamp(28px,6vw,48px) clamp(18px,5vw,40px);background:#0b1120;border:1px solid rgba(74,222,128,.45);border-radius:22px;" +
    "box-shadow:0 0 0 1px rgba(74,222,128,.2),0 40px 120px -30px rgba(74,222,128,.45);animation:nipcel-pop .55s .05s cubic-bezier(.2,.9,.3,1.3) both}" +
        ".nip-cel-mark{display:block;width:clamp(130px,38vw,180px);height:auto;margin:0 auto 22px;fill:none;stroke:#4ade80;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 24px rgba(74,222,128,.5))}" +
    ".nip-cel-mark circle{stroke-width:6;stroke-dasharray:340;stroke-dashoffset:340;fill:rgba(34,197,94,.1);animation:nipcel-draw .7s .2s ease forwards}" +
    ".nip-cel-mark path{stroke-width:9;stroke-dasharray:80;stroke-dashoffset:80;transform-origin:center;animation:nipcel-draw .45s .8s ease forwards,nipcel-bounce .5s 1.2s ease}" +
    ".nip-cel h2{font-size:clamp(26px,6vw,38px);line-height:1.15;margin:0 0 16px;color:#4ade80;font-weight:700}" +
    ".nip-cel p{color:#c8cfe3;font-size:clamp(16px,2.2vw,18px);line-height:1.55;margin:0 auto 12px;max-width:460px}" +
    ".nip-cel p b{color:#eef2ff;word-break:break-word}" +
    ".nip-cel-go{display:block;text-decoration:none;box-sizing:border-box;margin:18px auto 0;width:100%;max-width:360px;border:0;cursor:pointer;background:#c6f135;color:#06090f;font-family:inherit;font-weight:700;font-size:.95rem;letter-spacing:.04em;text-transform:uppercase;padding:1rem 1.6rem;border-radius:100px;box-shadow:0 10px 30px -10px rgba(198,241,53,.6)}" +
    ".nip-cel-go:hover,.nip-cel-go:focus-visible{filter:brightness(1.08)}" +
    ".nip-cel-bits{position:fixed;inset:0;pointer-events:none;overflow:hidden}" +
    ".nip-cel-bits i{position:absolute;top:-40px;left:var(--x);width:10px;height:16px;border-radius:3px;font-style:normal;font-size:22px;line-height:1;background:#14d9f5;animation:nipcel-fall var(--t) var(--d) linear infinite}" +
    ".nip-cel-bits i:nth-child(4n+1){background:#4ade80}" +
    ".nip-cel-bits i:nth-child(4n+2){background:#c6f135}" +
    ".nip-cel-bits i:nth-child(5n+3){background:#ff4060}" +
    ".nip-cel-bits i:nth-child(3n+1){width:auto;height:auto;background:none}" +
    "@media (max-width:360px){.nip-cel h2{font-size:24px}.nip-cel p{font-size:15px}.nip-cel-go{font-size:.85rem;padding:.9rem 1rem}}" +
    "@media (max-height:700px){.nip-cel-mark{width:100px;margin-bottom:14px}}" +
    "@media (max-height:560px){.nip-cel-box{padding:20px 22px}.nip-cel-mark{width:84px;margin-bottom:10px}.nip-cel h2{font-size:24px;margin-bottom:10px}.nip-cel p{font-size:15px;margin-bottom:8px}.nip-cel-go{margin-top:10px}}" +
    "@keyframes nipcel-in{from{opacity:0}}@keyframes nipcel-out{to{opacity:0}}" +
    "@keyframes nipcel-pop{from{opacity:0;transform:scale(.85) translateY(20px)}}" +
    "@keyframes nipcel-draw{to{stroke-dashoffset:0}}" +
    "@keyframes nipcel-bounce{50%{transform:scale(1.15)}}" +
    "@keyframes nipcel-fall{from{transform:translateY(0) rotate(var(--r))}to{transform:translateY(110vh) rotate(calc(var(--r) + 540deg))}}" +
    "@media (prefers-reduced-motion:reduce){.nip-cel,.nip-cel-box{animation:none}.nip-cel-bits{display:none}.nip-cel-mark circle,.nip-cel-mark path{animation:none;stroke-dashoffset:0}}";

  function addCss() {
    if (document.getElementById("nip-cel-css")) return;
    var s = document.createElement("style");
    s.id = "nip-cel-css";
    s.textContent = css;
    document.head.appendChild(s);
  }

  function celebrate(kind, email) {
    var c = CELEBRATE[kind];
    if (!c) return;
    addCss();
    var old = document.querySelector(".nip-cel");
    if (old) old.remove();
    var el = document.createElement("div");
    el.className = "nip-cel";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-labelledby", "nip-cel-title");
    var emo = ["🇳🇴", "🎉", "❄️"], bits = "";
    for (var i = 0; i < 28; i++) {
      bits += '<i style="--x:' + ((i * 37) % 100) + "%;--d:" + ((i % 7) * 0.35) + "s;--t:" + (3.2 + (i % 5) * 0.5) + "s;--r:" + ((i * 53) % 360) + 'deg">' +
        (i % 3 ? "" : emo[(i / 3) % 3]) + "</i>";
    }
    el.innerHTML = '<div class="nip-cel-bits" aria-hidden="true">' + bits + "</div>" +
      '<div class="nip-cel-box">' +
      '<svg class="nip-cel-mark" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="54"/><path d="M36 62 53 79 86 44"/></svg>' +
      '<h2 id="nip-cel-title">' + c.title + "</h2>" +
      c.lines.map(function (l) { return "<p>" + l + "</p>"; }).join("") +
      '<a class="nip-cel-go" href="' + HOME + '">' + c.btn + "</a>" +
      "</div>";
    Array.prototype.forEach.call(el.querySelectorAll("[data-c-email]"), function (b) {
      b.textContent = email || FALLBACK_EMAIL; /* textContent: the address is never parsed as HTML */
    });
    var go = el.querySelector(".nip-cel-go");
    /* no X, no Escape, no backdrop click: keep focus inside on the one button */
    function onKey(e) {
      if (e.key === "Tab") { e.preventDefault(); go.focus(); }
      if (e.key === "Escape") e.preventDefault();
    }
    document.addEventListener("keydown", onKey);
    document.body.appendChild(el);
    document.documentElement.classList.add("nip-celebrating");
    go.focus({ preventScroll: true });
  }

  window.nipCelebrate = celebrate;

  var q = new URLSearchParams(location.search).get("celebrate");
  if (q) {
    var run = function () { celebrate(q === "order" ? "order" : "trial", "deg@example.no"); };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
  }
})();
