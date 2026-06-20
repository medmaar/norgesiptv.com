/**
 * NorgesIPTV — Gratis Prøveperiode Worker
 * Språk: Norsk · Panel: Norway
 */

const API_BASE    = "https://activationpanel.ru/api/api.php";
const API_KEY     = "35cf68cc83a3a82e1a0ac5361c7b6105";
const HOST        = "http://terry.thecontentnest.com";
const RESEND_KEY  = "re_KSki1Vcs_2VpnYjf1tUGCHXWiEZq6S8bc";
const FROM_EMAIL  = "NorgesIPTV <hjelp@norgesiptv.com>";
const ADMIN_EMAIL = "hjelp@norgesiptv.com";
const SITE_URL    = "https://norgesiptv.com";
const PACK_NAME   = "Norway";
const WA_NUMBER   = "17828026280";
const ACCENT      = "#c6f135";
const DARK        = "#06090f";

function jsonRes(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

async function apiGet(params) {
  const qs = new URLSearchParams({ ...params, api_key: API_KEY });
  const res = await fetch(`${API_BASE}?${qs}`);
  return { status: res.status, text: await res.text() };
}

async function sendEmail(to, subject, html) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html }),
  });
  if (!res.ok) throw new Error(`Resend (${res.status}): ${await res.text()}`);
}

function emailWrap(content) {
  return `<!DOCTYPE html>
<html lang="no">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f2f2f2;font-family:Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f2f2f2;padding:32px 16px;">
  <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
           style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
      <tr><td style="background-color:${DARK};padding:32px 40px;text-align:center;border-bottom:3px solid ${ACCENT};">
        <h1 style="margin:0;font-family:Arial,sans-serif;font-size:26px;font-weight:bold;color:#ffffff;">NorgesIPTV</h1>
        <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.70);">Premium IPTV · Norge</p>
      </td></tr>
      <tr><td style="padding:36px 40px;">${content}</td></tr>
      <tr><td style="background-color:#f8f8f8;border-top:1px solid #eeeeee;padding:18px 40px;text-align:center;">
        <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#aaaaaa;">
          © 2026 NorgesIPTV · <a href="${SITE_URL}" style="color:#888888;text-decoration:none;">norgesiptv.com</a>
        </p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

function credBox(username, password, m3uUrl) {
  const server = (() => { try { return new URL(m3uUrl).origin; } catch { return HOST; } })();
  return `
  <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;color:#333333;">Xtream Codes</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background-color:#f8f8f8;border:1px solid #e0e0e0;border-radius:6px;margin-bottom:18px;">
    <tr><td style="padding:18px 22px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr><td style="padding:0 0 11px;border-bottom:1px solid #e8e8e8;">
          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;">Server</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#333333;font-weight:bold;">${server}</p>
        </td></tr>
        <tr><td style="padding:11px 0;border-bottom:1px solid #e8e8e8;">
          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;">Brukernavn</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#333333;font-weight:bold;">${username}</p>
        </td></tr>
        <tr><td style="padding:11px 0 0;">
          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;">Passord</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#333333;font-weight:bold;">${password}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
  <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;color:#333333;">M3U-lenke</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background-color:#f8f8f8;border:1px solid #e0e0e0;border-radius:6px;margin-bottom:28px;">
    <tr><td style="padding:14px 20px;">
      <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#0071E3;word-break:break-all;">${m3uUrl}</p>
    </td></tr>
  </table>`;
}

function ctaButton(text, url) {
  return `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
    <tr><td style="background-color:${DARK};border-radius:8px;padding:14px 32px;text-align:center;">
      <a href="${url}" style="font-family:Arial,sans-serif;font-size:15px;font-weight:bold;color:${ACCENT};text-decoration:none;">${text}</a>
    </td></tr>
  </table>`;
}

function replyYesBox() {
  return `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background-color:#f8f8f8;border-left:4px solid ${DARK};border-radius:6px;margin-bottom:22px;">
    <tr><td style="padding:20px 24px;">
      <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#06090f;font-weight:bold;">
        📩 Den raskeste måten?
      </p>
      <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#555555;">
        Bare svar <strong>«JA»</strong> på denne e-posten — vi aktiverer abonnementet ditt på noen minutter, uten skjema, uten krøll.
      </p>
    </td></tr>
  </table>`;
}

function welcomeEmail(name, username, password, m3uUrl) {
  const fornavn = name && name !== "Ikke oppgitt" ? name.split(" ")[0] : "";
  const greeting = fornavn ? `Hei ${fornavn},` : "Hei,";
  return emailWrap(`
    <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:15px;color:#333333;">${greeting}</p>
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Din gratis prøveperiode er klar! 🎉
    </p>
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Vi har låst opp alle land og kanaler slik at du kan teste tjenesten fullt ut.
    </p>
    <p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:13px;line-height:1.65;color:#777777;font-style:italic;">
      Merk: Ikke bli bekymret hvis listen virker lang — senere kan du be oss skjule regioner eller kategorier du ikke trenger!
    </p>
    <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Her er påloggingsinformasjonen din:</p>
    ${credBox(username, password, m3uUrl)}
    <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Trenger du hjelp med oppsett? Kontakt oss ved å svare på denne e-posten eller via WhatsApp på
      <a href="https://wa.me/${WA_NUMBER}" style="color:#06090f;text-decoration:none;font-weight:bold;">+1 782-802-6280</a>
    </p>
    <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Med vennlig hilsen,<br><strong>NorgesIPTV-teamet</strong></p>
  `);
}

function reminderEmail(name, username, password, m3uUrl) {
  const fornavn = name && name !== "Ikke oppgitt" ? name.split(" ")[0] : "";
  const greeting = fornavn ? `Hei ${fornavn},` : "Hei,";
  return emailWrap(`
    <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:15px;color:#333333;">${greeting}</p>
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Prøveperioden din <strong>utløper om 4 timer</strong> ⏳ og ærlig talt? Vi har ikke lyst til å se deg gå.
    </p>
    <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Du har fått en smakebit av ekte streaming. Krystallklar 4K, sport live fra avspark, og et bibliotek så stort at du går tom for helger før du går tom for innhold.
    </p>
    <p style="margin:0 0 22px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      <strong>Ikke la det stoppe her.</strong>
    </p>
    <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Behold samme tilgang. Behold samme kvalitet. Gjør det rett og slett permanent.
    </p>
    ${replyYesBox()}
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Foretrekker du å sammenligne pakkene våre først?
    </p>
    ${ctaButton("Se våre pakker →", SITE_URL + "/priser.html")}
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Dine aktive innloggingsdetaljer:</p>
    ${credBox(username, password, m3uUrl)}
    <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Spørsmål? Svar på denne e-posten eller kontakt oss på WhatsApp på
      <a href="https://wa.me/${WA_NUMBER}" style="color:#06090f;text-decoration:none;font-weight:bold;">+1 782-802-6280</a> — vi er alltid her.
    </p>
    <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Med vennlig hilsen,<br><strong>NorgesIPTV-teamet</strong></p>
  `);
}

function followupEmail(name) {
  const fornavn = name && name !== "Ikke oppgitt" ? name.split(" ")[0] : "";
  const greeting = fornavn ? `Hei ${fornavn},` : "Hei,";
  return emailWrap(`
    <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:15px;color:#333333;">${greeting}</p>
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Prøveperioden er over — men her er saken: <strong>alt du nettopp opplevde venter fortsatt på deg.</strong>
    </p>
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Sporten live. Filmene sent på kvelden. Den krystallklare 4K-en som fikk din gamle streamingtjeneste til å se ut som et dårlig minne.
    </p>
    <p style="margin:0 0 22px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Alt sammen, ett klikk unna.
    </p>
    <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Her er hvordan du fortsetter — samme kvalitet, ingen avbrudd:
    </p>
    ${replyYesBox()}
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Foretrekker du å velge pakken din selv?
    </p>
    ${ctaButton("Velg abonnementet mitt →", SITE_URL + "/priser.html")}
    <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Et spørsmål? Svar på denne e-posten eller skriv til oss på WhatsApp på
      <a href="https://wa.me/${WA_NUMBER}" style="color:#06090f;text-decoration:none;font-weight:bold;">+1 782-802-6280</a> — vi vil gjerne ha deg tilbake.
    </p>
    <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Med vennlig hilsen,<br><strong>NorgesIPTV-teamet</strong></p>
  `);
}

function adminEmail(name, email, country, device, whatsapp, notes, username, password, m3uUrl) {
  return `<!DOCTYPE html><html lang="no"><head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;font-size:14px;color:#333;padding:20px;">
  <h2 style="color:#06090f;margin-top:0;">Ny gratis prøveperiode — NorgesIPTV</h2>
  <table cellpadding="6" cellspacing="0" border="0">
    <tr><td style="color:#888;width:120px;">Navn</td><td><strong>${name}</strong></td></tr>
    <tr><td style="color:#888;">E-post</td><td>${email}</td></tr>
    <tr><td style="color:#888;">Land</td><td>${country||"—"}</td></tr>
    <tr><td style="color:#888;">Enhet</td><td>${device||"—"}</td></tr>
    <tr><td style="color:#888;">WhatsApp</td><td>${whatsapp||"—"}</td></tr>
    <tr><td style="color:#888;">Notater</td><td>${notes||"—"}</td></tr>
    <tr><td colspan="2"><hr style="border:none;border-top:1px solid #eee;margin:8px 0;"></td></tr>
    <tr><td style="color:#888;">Brukernavn</td><td><strong>${username}</strong></td></tr>
    <tr><td style="color:#888;">Passord</td><td><strong>${password}</strong></td></tr>
    <tr><td style="color:#888;">M3U</td><td style="word-break:break-all;font-size:12px;">${m3uUrl}</td></tr>
  </table>
</body></html>`;
}

async function handleFetch(request, env) {
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    }});
  }

  if (request.method === "GET") {
    const u = new URL(request.url);
    if (u.searchParams.has("debug")) {
      const bq = await apiGet({ action: "bouquet" });
      const trials = await env.TRIALS.list();
      return jsonRes({ bouquet: bq.text.slice(0,400), kv_keys: trials.keys.length });
    }
    return new Response("NorgesIPTV Trial Worker — OK", { status: 200 });
  }

  if (request.method !== "POST") return jsonRes({ success: false, error: "POST only" }, 405);

  let body;
  try { body = await request.json(); }
  catch { return jsonRes({ success: false, error: "Ugyldig JSON" }, 400); }

  const { name, email, country, device, whatsapp, notes } = body;
  if (!email) return jsonRes({ success: false, error: "E-post påkrevd" }, 400);

  let step = "bouquet";
  try {
    const bqRes = await apiGet({ action: "bouquet" });
    let packId = "all";
    if (bqRes.text.trim().startsWith("[") || bqRes.text.trim().startsWith("{")) {
      const arr = JSON.parse(bqRes.text);
      const list = Array.isArray(arr) ? arr : Object.values(arr);
      const pkg = list.find(b => (b.name || "").trim().toLowerCase() === PACK_NAME.toLowerCase());
      if (pkg) packId = pkg.id;
    }

    step = "create_demo";
    const crRes = await apiGet({
      action: "new", type: "m3u", sub: "99", pack: packId,
      note: `Trial / norgesiptv.com / ${email} | ${whatsapp || ""}`,
    });
    if (!crRes.text.trim().startsWith("[") && !crRes.text.trim().startsWith("{")) {
      throw new Error(`Panel ikke-JSON: ${crRes.text.slice(0, 200)}`);
    }
    const crData = JSON.parse(crRes.text);
    const item = Array.isArray(crData) ? crData[0] : crData;
    if (!item || String(item.status) !== "true") {
      throw new Error(`Panel: ${item?.message || JSON.stringify(item)}`);
    }

    step = "extract";
    const rawUrl = item.url || "";
    let username = "", password = "";
    try { const u = new URL(rawUrl); username = u.searchParams.get("username") || ""; password = u.searchParams.get("password") || ""; } catch {}
    const m3uUrl = `${HOST}/get.php?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&type=m3u_plus&output=ts`;

    step = "email_client";
    await sendEmail(email, "Din NorgesIPTV-prøveperiode er klar — 24t gratis aktivert ✓", welcomeEmail(name, username, password, m3uUrl));

    step = "email_admin";
    await sendEmail(ADMIN_EMAIL, `Automation / norgesiptv.com / trial / ${name || "—"} / ${email}`, adminEmail(name, email, country, device, whatsapp, notes, username, password, m3uUrl));

    step = "kv_store";
    const expiry = Date.now() + 24 * 60 * 60 * 1000;
    await env.TRIALS.put(
      `trial:${email}`,
      JSON.stringify({ name, email, username, password, m3uUrl, expiry, reminder_sent: false, followup_sent: false }),
      { expirationTtl: 4 * 24 * 60 * 60 }
    );

    return jsonRes({ success: true });

  } catch (err) {
    console.error(`[step=${step}]`, err.message);
    return jsonRes({ success: false, error: `[${step}] ${err.message}` }, 500);
  }
}

async function handleScheduled(env) {
  const now = Date.now();
  const FOUR_HOURS = 4 * 60 * 60 * 1000;
  const { keys } = await env.TRIALS.list({ prefix: "trial:" });
  console.log(`[cron] ${keys.length} prøver sjekket`);

  for (const { name: key } of keys) {
    let trial;
    try { const raw = await env.TRIALS.get(key); if (!raw) continue; trial = JSON.parse(raw); } catch { continue; }
    const { name, email, username, password, m3uUrl, expiry, reminder_sent, followup_sent } = trial;

    if (!reminder_sent && now >= expiry - FOUR_HOURS && now < expiry) {
      try {
        await sendEmail(email, "⏳ Prøveperioden din utløper om 4 timer", reminderEmail(name, username, password, m3uUrl));
        trial.reminder_sent = true;
        await env.TRIALS.put(key, JSON.stringify(trial), { expirationTtl: 4 * 24 * 60 * 60 });
        console.log(`[cron] Påminnelse → ${email}`);
      } catch (e) { console.error(`[cron] Feil påminnelse:`, e.message); }
    }

    if (!followup_sent && now >= expiry) {
      try {
        await sendEmail(email, "Prøveperioden din er over — Kom tilbake når som helst 🎬", followupEmail(name));
        trial.followup_sent = true;
        await env.TRIALS.put(key, JSON.stringify(trial), { expirationTtl: 4 * 24 * 60 * 60 });
        console.log(`[cron] Oppfølging → ${email}`);
      } catch (e) { console.error(`[cron] Feil oppfølging:`, e.message); }
    }
  }
}

export default {
  async fetch(request, env) { return handleFetch(request, env); },
  async scheduled(event, env, ctx) { ctx.waitUntil(handleScheduled(env)); },
};
