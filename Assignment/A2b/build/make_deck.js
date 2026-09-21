const pptxgen = require("pptxgenjs");

const NAVY = "1C2541";
const NAVY_DARK = "141A30";
const SLATE = "5C7A99";
const AMBER = "D9782D";
const ICE = "CFE0E8";
const WHITE = "FFFFFF";
const CARD = "F4F5F7";
const TEXT_DARK = "222831";
const TEXT_MUTED = "5B6472";

const ICON = (n) => __dirname + "/icons/" + n + ".png";

function circleIcon(slide, { x, y, d = 0.5, color = AMBER, icon }) {
  slide.addShape("ellipse", { x, y, w: d, h: d, fill: { color }, line: { type: "none" } });
  const pad = d * 0.26;
  slide.addImage({ path: ICON(icon), x: x + pad, y: y + pad, w: d - pad * 2, h: d - pad * 2 });
}

function footer(slide, pageNum, opts = {}) {
  const dark = opts.dark;
  slide.addText("RhodesReg · IDEA9106 A2b Progress Presentation", {
    x: 0.5, y: 7.15, w: 8, h: 0.3, fontFace: "Calibri", fontSize: 9,
    color: dark ? "8894A8" : "A2ABB8", align: "left",
  });
  slide.addText(String(pageNum), {
    x: 12.5, y: 7.15, w: 0.4, h: 0.3, fontFace: "Calibri", fontSize: 9,
    color: dark ? "8894A8" : "A2ABB8", align: "right",
  });
}

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
pres.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
pres.layout = "WIDE";

// ---------------------------------------------------------------- Slide 1
{
  const s = pres.addSlide();
  s.background = { color: NAVY };

  // queue-ticket motif: stack of fading circles top right
  const stops = [
    { x: 10.7, y: 0.7, d: 1.5, o: 90 },
    { x: 11.5, y: 1.9, d: 1.05, o: 55 },
    { x: 12.15, y: 2.85, d: 0.7, o: 30 },
  ];
  stops.forEach((c) => {
    s.addShape("ellipse", { x: c.x, y: c.y, w: c.d, h: c.d, fill: { color: AMBER, transparency: 100 - c.o }, line: { type: "none" } });
  });

  s.addText("IN THE MEANTIME", {
    x: 0.7, y: 1.55, w: 8, h: 0.4, fontFace: "Calibri", fontSize: 14, color: AMBER, bold: true, charSpacing: 3,
  });
  s.addText("Waiting for a Repair", {
    x: 0.65, y: 1.95, w: 9.8, h: 1.3, fontFace: "Cambria", fontSize: 44, bold: true, color: WHITE,
  });
  s.addText("Shared facilities in Sydney apartment housing", {
    x: 0.7, y: 3.05, w: 9, h: 0.55, fontFace: "Calibri", fontSize: 19, color: ICE,
  });

  s.addShape("roundRect", {
    x: 0.7, y: 4.1, w: 8.6, h: 1.15, rectRadius: 0.08,
    fill: { color: NAVY_DARK }, line: { type: "none" },
  });
  s.addText([
    { text: "“", options: { fontSize: 26, color: AMBER, fontFace: "Cambria", italic: true } },
    { text: "How might we reduce the disruption that uncertain waits cause to people’s daily lives?", options: { fontSize: 17, color: WHITE, fontFace: "Cambria", italic: true } },
  ], { x: 1.0, y: 4.28, w: 8.0, h: 0.85, valign: "middle" });

  s.addText("RhodesReg  —  Wenxi Ma  ·  Ruifen Zheng  ·  Anda Hao  ·  Zeyu Li", {
    x: 0.7, y: 6.35, w: 8, h: 0.35, fontFace: "Calibri", fontSize: 13, color: ICE, bold: true,
  });
  s.addText("IDEA9106 Design Thinking  |  A2b Progress Presentation  |  Tutorial 23", {
    x: 0.7, y: 6.68, w: 8, h: 0.3, fontFace: "Calibri", fontSize: 11, color: "8894A8",
  });
}

// ---------------------------------------------------------------- Slide 2 — Introduction
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  s.addText("Introduction", { x: 0.7, y: 0.5, w: 8, h: 0.55, fontFace: "Cambria", fontSize: 28, bold: true, color: NAVY });
  s.addText("The problem area we're focused on — not a solution yet", { x: 0.7, y: 1.02, w: 8, h: 0.35, fontFace: "Calibri", fontSize: 13, italic: true, color: TEXT_MUTED });

  const items = [
    { t: "Problem area", d: "When a shared facility in an apartment building fails — a lift, hot water, a door — residents can report it, but almost never learn what happens next." },
    { t: "Context", d: "Student accommodation, social housing, and residents with access needs in Sydney apartment buildings. The law requires repairs but sets no timeframe (SSMA 2015 (NSW) s106; RTA 2010 (NSW) s63)." },
    { t: "Why this", d: "What differs between a fast fix and a slow one usually isn’t resources — it’s who can ask, and be answered." },
  ];
  let y = 1.7;
  items.forEach((it) => {
    s.addShape("roundRect", { x: 0.7, y, w: 0.09, h: 0.85, rectRadius: 0.02, fill: { color: AMBER }, line: { type: "none" } });
    s.addText(it.t, { x: 0.95, y: y - 0.02, w: 6.6, h: 0.32, fontFace: "Calibri", fontSize: 15, bold: true, color: NAVY });
    s.addText(it.d, { x: 0.95, y: y + 0.3, w: 6.7, h: 0.6, fontFace: "Calibri", fontSize: 12.5, color: TEXT_DARK, lineSpacingMultiple: 1.15 });
    y += 1.15;
  });

  // right stat card
  s.addShape("roundRect", { x: 8.0, y: 1.7, w: 4.6, h: 4.6, rectRadius: 0.1, fill: { color: NAVY }, line: { type: "none" } });
  s.addText("A CASE FROM THE RESEARCH", { x: 8.35, y: 1.98, w: 4, h: 0.3, fontFace: "Calibri", fontSize: 10.5, color: AMBER, bold: true, charSpacing: 1.5 });
  s.addText("9 days", { x: 8.35, y: 2.35, w: 4, h: 0.85, fontFace: "Cambria", fontSize: 44, bold: true, color: WHITE });
  s.addText("waiting for hot water in social housing — no update, no timeframe", { x: 8.35, y: 3.18, w: 3.9, h: 0.65, fontFace: "Calibri", fontSize: 11.5, color: ICE });
  s.addShape("line", { x: 8.35, y: 3.95, w: 3.9, h: 0, line: { color: "34405E", width: 1 } });
  s.addText("2 hours", { x: 8.35, y: 4.1, w: 4, h: 0.7, fontFace: "Cambria", fontSize: 34, bold: true, color: AMBER });
  s.addText("once a minister’s office intervened — same repair, same capacity", { x: 8.35, y: 4.72, w: 3.9, h: 0.65, fontFace: "Calibri", fontSize: 11.5, color: ICE });
  s.addText("Gerathy (2024); Coghill (2025)", { x: 8.35, y: 5.75, w: 3.9, h: 0.3, fontFace: "Calibri", fontSize: 9.5, italic: true, color: "8894A8" });

  footer(s, 2);
}

// ---------------------------------------------------------------- Slide 3 — Research Process
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  s.addText("Research Process", { x: 0.7, y: 0.5, w: 8, h: 0.55, fontFace: "Cambria", fontSize: 28, bold: true, color: NAVY });
  s.addText("How we collected the data behind this presentation", { x: 0.7, y: 1.02, w: 8, h: 0.35, fontFace: "Calibri", fontSize: 13, italic: true, color: TEXT_MUTED });

  const rows = [
    { icon: "mic", t: "~12 semi-structured interviews", d: "Across the 4 team members, each following the same protocol: last failure → who was told → what they were told about duration → what they did while it was broken → how they judged whether the wait was reasonable." },
    { icon: "users", t: "Purposive sampling", d: "Participants who had experienced a shared-facility breakdown in the past 12 months, across housing types — so a shared finding reflects structure, not one provider’s failure." },
    { icon: "home", t: "Recruitment", d: "University networks, personal contacts, and student/disability support networks — without identifying anyone by impairment." },
    { icon: "book", t: "Secondary research in parallel", d: "Queueing psychology (Maister, 1985; Larson, 1987), legal repair obligations, and reported cases." },
  ];
  let y = 1.75;
  rows.forEach((r) => {
    circleIcon(s, { x: 0.7, y, d: 0.62, color: NAVY, icon: r.icon });
    s.addText(r.t, { x: 1.55, y: y - 0.03, w: 10.6, h: 0.32, fontFace: "Calibri", fontSize: 14.5, bold: true, color: NAVY });
    s.addText(r.d, { x: 1.55, y: y + 0.3, w: 10.8, h: 0.55, fontFace: "Calibri", fontSize: 12, color: TEXT_DARK, lineSpacingMultiple: 1.1 });
    y += 1.28;
  });

  footer(s, 3);
}

// ---------------------------------------------------------------- Slide 4 — Data Analysis
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  s.addText("Data Analysis", { x: 0.7, y: 0.45, w: 8, h: 0.55, fontFace: "Cambria", fontSize: 28, bold: true, color: NAVY });
  s.addText("What the affinity map, across ~12 interviews, surfaced", { x: 0.7, y: 0.97, w: 9, h: 0.35, fontFace: "Calibri", fontSize: 13, italic: true, color: TEXT_MUTED });

  const points = [
    "Unclear standards for how issues are detected and resolved",
    "The wait disrupts other plans in residents’ lives",
    "Status is never updated",
    "Waits run longer than residents were led to expect",
    "Replies are unhelpful, or there’s no reply at all",
    "Who’s actually responsible is unclear",
    "Residents check status repeatedly, with no better information each time",
  ];
  const cols = 4;
  const cw = 2.95, ch = 1.28, gx = 0.18, gy = 0.18;
  const startX = 0.7, startY = 1.55;
  points.forEach((p, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const x = startX + col * (cw + gx);
    const y = startY + row * (ch + gy);
    s.addShape("roundRect", { x, y, w: cw, h: ch, rectRadius: 0.08, fill: { color: CARD }, line: { type: "none" } });
    s.addShape("ellipse", { x: x + 0.15, y: y + 0.15, w: 0.4, h: 0.4, fill: { color: AMBER }, line: { type: "none" } });
    s.addText(String(i + 1), { x: x + 0.15, y: y + 0.15, w: 0.4, h: 0.4, align: "center", valign: "middle", fontFace: "Calibri", fontSize: 13, bold: true, color: WHITE });
    s.addText(p, { x: x + 0.15, y: y + 0.62, w: cw - 0.3, h: ch - 0.7, fontFace: "Calibri", fontSize: 10.5, color: TEXT_DARK, lineSpacingMultiple: 1.05 });
  });

  s.addShape("roundRect", { x: 0.7, y: startY + 2 * (ch + gy) + 0.06, w: cw, h: ch - 0.35, rectRadius: 0.08, fill: { color: NAVY }, line: { type: "none" } });
  s.addText("7 patterns from real interviews", { x: 0.85, y: startY + 2 * (ch + gy) + 0.18, w: cw - 0.3, h: 0.6, fontFace: "Calibri", fontSize: 11, bold: true, color: AMBER, lineSpacingMultiple: 1.05 });

  s.addShape("roundRect", { x: 9.75, y: 1.55, w: 2.9, h: 5.05, rectRadius: 0.1, fill: { color: NAVY }, line: { type: "none" } });
  s.addText("WHAT THIS TOLD US", { x: 10.0, y: 1.85, w: 2.4, h: 0.3, fontFace: "Calibri", fontSize: 10.5, bold: true, color: AMBER, charSpacing: 1 });
  s.addText("The pain isn’t the repair delay itself — it’s the absence of visible status, a named responsible party, and any expectation to hold onto.", {
    x: 10.0, y: 2.2, w: 2.45, h: 2.1, fontFace: "Cambria", fontSize: 13.5, italic: true, color: WHITE, lineSpacingMultiple: 1.25,
  });
  s.addText("This narrowed our direction from “the repair” to “the information and influence around the wait.”", {
    x: 10.0, y: 4.4, w: 2.45, h: 1.9, fontFace: "Calibri", fontSize: 11.5, color: ICE, lineSpacingMultiple: 1.2,
  });

  footer(s, 4);
}

// ---------------------------------------------------------------- Slide 5 — Personas
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  s.addText("Data Synthesis — Personas", { x: 0.7, y: 0.42, w: 9, h: 0.55, fontFace: "Cambria", fontSize: 26, bold: true, color: NAVY });
  s.addText("Two clusters, not a spread — opposite behaviours, same root gap", { x: 0.7, y: 0.94, w: 10, h: 0.35, fontFace: "Calibri", fontSize: 12.5, italic: true, color: TEXT_MUTED });

  function personaCard(x, label, name, sub, backstory, frustration, quote) {
    const w = 5.85;
    s.addShape("roundRect", { x, y: 1.5, w, h: 5.25, rectRadius: 0.1, fill: { color: CARD }, line: { type: "none" } });
    s.addShape("ellipse", { x: x + 0.35, y: 1.85, w: 0.9, h: 0.9, fill: { color: NAVY }, line: { type: "none" } });
    s.addImage({ path: ICON("users"), x: x + 0.57, y: 2.07, w: 0.46, h: 0.46 });
    s.addText(label, { x: x + 1.45, y: 1.85, w: w - 1.7, h: 0.28, fontFace: "Calibri", fontSize: 10.5, bold: true, color: AMBER, charSpacing: 1 });
    s.addText(name, { x: x + 1.45, y: 2.1, w: w - 1.7, h: 0.4, fontFace: "Cambria", fontSize: 18, bold: true, color: NAVY });
    s.addText(sub, { x: x + 1.45, y: 2.47, w: w - 1.7, h: 0.35, fontFace: "Calibri", fontSize: 11, color: TEXT_MUTED });

    s.addText([{ text: "Backstory  ", options: { bold: true, color: NAVY } }, { text: backstory, options: { color: TEXT_DARK } }], {
      x: x + 0.35, y: 3.0, w: w - 0.7, h: 1.05, fontFace: "Calibri", fontSize: 10.8, lineSpacingMultiple: 1.15,
    });
    s.addText([{ text: "Frustration  ", options: { bold: true, color: NAVY } }, { text: frustration, options: { color: TEXT_DARK } }], {
      x: x + 0.35, y: 4.1, w: w - 0.7, h: 1.15, fontFace: "Calibri", fontSize: 10.8, lineSpacingMultiple: 1.15,
    });
    s.addShape("roundRect", { x: x + 0.35, y: 5.35, w: w - 0.7, h: 1.15, rectRadius: 0.06, fill: { color: NAVY }, line: { type: "none" } });
    s.addText(`“${quote}”`, { x: x + 0.55, y: 5.42, w: w - 1.1, h: 1.0, fontFace: "Cambria", fontSize: 11, italic: true, color: WHITE, valign: "middle", lineSpacingMultiple: 1.15 });
  }

  personaCard(0.7, "PERSONA A — THE QUIET ENDER", "BC", "International student, 25, apartment tenant",
    "Has lived in the UK, Hong Kong SAR and Australia, mostly in apartments near campus; meets repair problems occasionally.",
    "Doesn’t know who’s responsible or whether asking again would help — nothing is ever confirmed, so continuing to raise it starts to feel pointless.",
    "I reported it once. After that I just stopped asking — I didn’t know who to ask, or if it would even matter.");

  personaCard(6.8, "PERSONA B — THE PERSISTENT ASKER", "[Name TBD]", "[Housing type TBD], resident",
    "Keeps raising the fault through the proper channels rather than letting it go — treats it as something that should be resolved, not lived with.",
    "Keeps raising the issue and keeps hearing “we’re looking into it” — no timeframe, no name attached; the effort never converts into clarity.",
    "I called three times. Every time it was ‘someone will look into it.’ Nobody ever told me who, or when.");

  footer(s, 5);
}

// ---------------------------------------------------------------- Slide 6 — Reframed brief + HMW
{
  const s = pres.addSlide();
  s.background = { color: NAVY };
  s.addText("Data Synthesis — Reframed Brief", { x: 0.7, y: 0.5, w: 10, h: 0.55, fontFace: "Cambria", fontSize: 28, bold: true, color: WHITE });
  s.addText("Grounded in the research above — not a proposed solution", { x: 0.7, y: 1.03, w: 10, h: 0.35, fontFace: "Calibri", fontSize: 13, italic: true, color: ICE });

  s.addShape("roundRect", { x: 0.7, y: 1.6, w: 11.9, h: 2.05, rectRadius: 0.08, fill: { color: NAVY_DARK }, line: { type: "none" } });
  s.addText("OUR PROBLEM / OPPORTUNITY SPACE", { x: 1.0, y: 1.78, w: 6, h: 0.3, fontFace: "Calibri", fontSize: 10.5, bold: true, color: AMBER, charSpacing: 1.5 });
  s.addText(
    "Residents across student accommodation, social housing, and residents with access needs who report a shared-facility fault but cannot see its status, who is responsible, or when they’ll next hear anything, for the entire undefined period between reporting and resolution. Left without that visibility, residents either disengage and wait it out, or repeatedly chase a response that stays ambiguous — either way, the uncertainty disrupts their ability to plan the rest of their lives around it.",
    { x: 1.0, y: 2.12, w: 11.3, h: 1.45, fontFace: "Cambria", fontSize: 14, italic: true, color: WHITE, lineSpacingMultiple: 1.25 }
  );

  s.addShape("roundRect", { x: 0.7, y: 3.85, w: 11.9, h: 1.55, rectRadius: 0.08, fill: { color: AMBER }, line: { type: "none" } });
  s.addText("HOW MIGHT WE", { x: 1.0, y: 3.98, w: 6, h: 0.28, fontFace: "Calibri", fontSize: 10.5, bold: true, color: NAVY_DARK, charSpacing: 1.5 });
  s.addText(
    "Make the status, timeline and responsible party of a reported issue visible — for residents who currently have no way to know where their case stands or who is acting on it?",
    { x: 1.0, y: 4.28, w: 11.3, h: 1.0, fontFace: "Cambria", fontSize: 17, bold: true, color: NAVY_DARK, lineSpacingMultiple: 1.2 }
  );

  const tags = [
    { icon: "home", t: "Residents", d: "who wait" },
    { icon: "key", t: "Building management / landlord", d: "who control the sequence" },
  ];
  let tx = 0.7;
  tags.forEach((tg) => {
    circleIcon(s, { x: tx, y: 5.75, d: 0.55, color: AMBER, icon: tg.icon });
    s.addText(tg.t, { x: tx + 0.68, y: 5.73, w: 3.6, h: 0.3, fontFace: "Calibri", fontSize: 12.5, bold: true, color: WHITE });
    s.addText(tg.d, { x: tx + 0.68, y: 6.02, w: 3.6, h: 0.3, fontFace: "Calibri", fontSize: 10.5, color: ICE });
    tx += 4.6;
  });
  s.addText("Capacity stays fixed — we’re redesigning the information and influence around the wait, not the repair itself.", {
    x: 0.7, y: 6.55, w: 11.6, h: 0.4, fontFace: "Calibri", fontSize: 10.5, italic: true, color: "8894A8",
  });

  footer(s, 6, { dark: true });
}

// ---------------------------------------------------------------- Slide 7 — Proposed Solution
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  s.addText("Proposed Solution", { x: 0.7, y: 0.5, w: 8, h: 0.55, fontFace: "Cambria", fontSize: 28, bold: true, color: NAVY });
  s.addText("How we went from many ideas to one direction", { x: 0.7, y: 1.02, w: 8, h: 0.35, fontFace: "Calibri", fontSize: 13, italic: true, color: TEXT_MUTED });

  circleIcon(s, { x: 0.7, y: 1.65, d: 0.6, color: NAVY, icon: "target" });
  s.addText("Method: Brainwriting 6-3-5", { x: 1.5, y: 1.68, w: 10, h: 0.35, fontFace: "Calibri", fontSize: 15.5, bold: true, color: NAVY });
  s.addText("Chosen because reporting-and-waiting is something every team member has experienced differently. Silent, parallel writing meant no one’s first idea anchored the group — every round built on what was already on the page.", {
    x: 1.5, y: 2.08, w: 11.0, h: 0.65, fontFace: "Calibri", fontSize: 11.5, color: TEXT_DARK, lineSpacingMultiple: 1.15,
  });

  s.addText("IDEAS CLUSTERED INTO THREE DIRECTIONS", { x: 0.7, y: 2.95, w: 8, h: 0.3, fontFace: "Calibri", fontSize: 11, bold: true, color: TEXT_MUTED, charSpacing: 1 });

  const clusters = [
    { icon: "eye", t: "Visibility", d: "Make status visible to residents.", chosen: true },
    { icon: "message", t: "Communication", d: "Guarantee a defined reply.", chosen: true },
    { icon: "shuffle", t: "Scheduling influence", d: "Let residents affect order.", chosen: false },
  ];
  const cw = 3.75, gx = 0.25;
  clusters.forEach((c, i) => {
    const x = 0.7 + i * (cw + gx);
    const y = 3.35;
    s.addShape("roundRect", { x, y, w: cw, h: 2.55, rectRadius: 0.1, fill: { color: c.chosen ? NAVY : CARD }, line: { type: "none" } });
    circleIcon(s, { x: x + 0.3, y: y + 0.3, d: 0.55, color: c.chosen ? AMBER : SLATE, icon: c.icon });
    s.addText(c.t, { x: x + 0.3, y: y + 1.0, w: cw - 0.6, h: 0.4, fontFace: "Calibri", fontSize: 15, bold: true, color: c.chosen ? WHITE : NAVY });
    s.addText(c.d, { x: x + 0.3, y: y + 1.42, w: cw - 0.6, h: 0.6, fontFace: "Calibri", fontSize: 11, color: c.chosen ? ICE : TEXT_MUTED, lineSpacingMultiple: 1.1 });
    s.addText(c.chosen ? "✓ DEVELOPED NOW" : "FUTURE EXTENSION", {
      x: x + 0.3, y: y + 2.08, w: cw - 0.6, h: 0.35, fontFace: "Calibri", fontSize: 9.5, bold: true, color: c.chosen ? AMBER : TEXT_MUTED, charSpacing: 0.5,
    });
  });

  s.addText("The “visibility” and “communication” clusters were the most testable at a 5-minute prototype fair, so we developed those. “Scheduling influence” needs longer validation, so it became a future extension.", {
    x: 0.7, y: 6.15, w: 11.9, h: 0.6, fontFace: "Calibri", fontSize: 11, italic: true, color: TEXT_MUTED, lineSpacingMultiple: 1.15,
  });

  footer(s, 7);
}

// ---------------------------------------------------------------- Slide 8 — Lo-fi Prototype
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  s.addText("Lo-fi Prototype", { x: 0.7, y: 0.45, w: 8, h: 0.55, fontFace: "Cambria", fontSize: 28, bold: true, color: NAVY });
  s.addText("Visible Queue + Receipt — both low-tech, both reuse information staff already hold", { x: 0.7, y: 0.97, w: 11, h: 0.35, fontFace: "Calibri", fontSize: 13, italic: true, color: TEXT_MUTED });

  // Left: queue board
  s.addShape("roundRect", { x: 0.7, y: 1.55, w: 6.0, h: 3.5, rectRadius: 0.1, fill: { color: CARD }, line: { type: "none" } });
  circleIcon(s, { x: 0.95, y: 1.78, d: 0.55, color: NAVY, icon: "eye" });
  s.addText("1. Visible Repair Queue Board", { x: 1.65, y: 1.82, w: 5, h: 0.45, fontFace: "Calibri", fontSize: 14.5, bold: true, color: NAVY });
  s.addText("Lobby display or simple shared page, showing anonymised ticket stages plus an estimated stage range and who’s currently responsible.", {
    x: 0.95, y: 2.42, w: 5.5, h: 0.75, fontFace: "Calibri", fontSize: 11, color: TEXT_DARK, lineSpacingMultiple: 1.15,
  });

  const stages = ["Reported", "Assessed", "Scheduled", "In progress", "Done"];
  const sx = 0.95, sw = 5.5, sd = 0.55;
  const gap = (sw - sd) / (stages.length - 1);
  stages.forEach((st, i) => {
    const x = sx + i * gap;
    const active = i === 2;
    s.addShape("ellipse", { x, y: 3.35, w: sd, h: sd, fill: { color: active ? AMBER : "D9DEE6" }, line: { type: "none" } });
    s.addText(String(i + 1), { x, y: 3.35, w: sd, h: sd, align: "center", valign: "middle", fontFace: "Calibri", fontSize: 12, bold: true, color: active ? WHITE : TEXT_MUTED });
    s.addText(st, { x: x - 0.25, y: 3.95, w: sd + 0.5, h: 0.3, align: "center", fontFace: "Calibri", fontSize: 8.5, color: active ? NAVY : TEXT_MUTED, bold: active });
    if (i < stages.length - 1) {
      s.addShape("line", { x: x + sd, y: 3.35 + sd / 2, w: gap - sd, h: 0, line: { color: "D9DEE6", width: 1.5 } });
    }
  });
  s.addText("Currently: Scheduled — facility manager · est. 3–6 days", { x: 0.95, y: 4.4, w: 5.5, h: 0.35, fontFace: "Calibri", fontSize: 10.5, italic: true, color: TEXT_MUTED });

  // Right: receipt card
  s.addShape("roundRect", { x: 7.0, y: 1.55, w: 5.6, h: 3.5, rectRadius: 0.1, fill: { color: NAVY }, line: { type: "none" } });
  circleIcon(s, { x: 7.25, y: 1.78, d: 0.55, color: AMBER, icon: "file" });
  s.addText("2. Repair Receipt Card", { x: 7.95, y: 1.82, w: 4.4, h: 0.45, fontFace: "Calibri", fontSize: 14.5, bold: true, color: WHITE });
  s.addText("Given the moment a fault is reported.", { x: 7.25, y: 2.42, w: 5, h: 0.3, fontFace: "Calibri", fontSize: 11, color: ICE });

  s.addShape("roundRect", { x: 7.25, y: 2.85, w: 5.1, h: 1.95, rectRadius: 0.06, fill: { color: WHITE }, line: { type: "none" } });
  const fields = [
    ["Reported:", "Lift — Building B, Level 2"],
    ["Next step owned by:", "Facility manager"],
    ["Next update by:", "Thursday, 5pm"],
  ];
  let fy = 3.02;
  fields.forEach(([k, v]) => {
    s.addText(k, { x: 7.45, y: fy, w: 1.9, h: 0.3, fontFace: "Calibri", fontSize: 10, bold: true, color: TEXT_MUTED });
    s.addText(v, { x: 9.3, y: fy, w: 2.9, h: 0.3, fontFace: "Calibri", fontSize: 10.5, color: NAVY });
    fy += 0.48;
  });
  s.addText("Not when it’ll be fixed — when you’ll next hear something.", { x: 7.45, y: fy + 0.05, w: 4.7, h: 0.5, fontFace: "Calibri", fontSize: 9.5, italic: true, color: TEXT_MUTED, lineSpacingMultiple: 1.1 });

  // placeholder note
  s.addShape("roundRect", { x: 0.7, y: 5.3, w: 11.9, h: 0.85, rectRadius: 0.08, fill: { color: "FBEFE1" }, line: { color: AMBER, width: 1 } });
  s.addImage({ path: ICON("check"), x: 0.95, y: 5.55, w: 0.35, h: 0.35 });
  s.addText("Physical prototype — paper board + receipt card — brought to tutorial and demonstrated live alongside this slide.", {
    x: 1.45, y: 5.5, w: 10.9, h: 0.5, fontFace: "Calibri", fontSize: 11.5, italic: true, color: "8A5A1E", valign: "middle",
  });

  footer(s, 8);
}

// ---------------------------------------------------------------- Slide 9 — Reflection
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  s.addText("Reflection", { x: 0.7, y: 0.42, w: 8, h: 0.55, fontFace: "Cambria", fontSize: 28, bold: true, color: NAVY });
  s.addText("Why this creates change, and what we test next", { x: 0.7, y: 0.94, w: 9, h: 0.35, fontFace: "Calibri", fontSize: 13, italic: true, color: TEXT_MUTED });

  const rows = [
    ["Unclear standards / status never updated", "Visible Queue Board — stage always shown"],
    ["Checking status repeatedly", "Board removes the need to ask — status is ambient"],
    ["Reply not useful / no reply", "Receipt Card guarantees a defined next update"],
    ["Relevant parties unclear", "Both show the current responsible party"],
    ["Longer than expected", "Stage ranges replace silence — an “explained” wait"],
    ["Disrupts other life plans", "A known next check-in replaces an unknown end date"],
  ];
  let y = 1.5;
  rows.forEach((r) => {
    s.addShape("roundRect", { x: 0.7, y, w: 7.1, h: 0.68, rectRadius: 0.05, fill: { color: CARD }, line: { type: "none" } });
    s.addText(r[0], { x: 0.9, y: y + 0.06, w: 3.1, h: 0.56, fontFace: "Calibri", fontSize: 10.5, color: TEXT_DARK, valign: "middle", lineSpacingMultiple: 1.05 });
    s.addImage({ path: ICON("trend"), x: 4.05, y: y + 0.21, w: 0.26, h: 0.26 });
    s.addText(r[1], { x: 4.45, y: y + 0.06, w: 3.25, h: 0.56, fontFace: "Calibri", fontSize: 10.5, bold: true, color: NAVY, valign: "middle", lineSpacingMultiple: 1.05 });
    y += 0.78;
  });

  s.addShape("roundRect", { x: 8.1, y: 1.5, w: 4.55, h: 5.1, rectRadius: 0.1, fill: { color: NAVY }, line: { type: "none" } });
  s.addText("NEXT STEPS TOWARD A2C", { x: 8.4, y: 1.75, w: 4, h: 0.3, fontFace: "Calibri", fontSize: 10.5, bold: true, color: AMBER, charSpacing: 1 });
  const steps = [
    "Build the lo-fi prototype into a testable 5-minute station",
    "Test with strangers: does seeing a stage change how long the wait feels?",
    "Open question: does the “next update” promise hold up under real workload?",
    "Explore Resident Constraints Input once the core loop is validated",
  ];
  let sy = 2.15;
  steps.forEach((st, i) => {
    s.addShape("ellipse", { x: 8.4, y: sy, w: 0.34, h: 0.34, fill: { color: AMBER }, line: { type: "none" } });
    s.addText(String(i + 1), { x: 8.4, y: sy, w: 0.34, h: 0.34, align: "center", valign: "middle", fontFace: "Calibri", fontSize: 11, bold: true, color: NAVY });
    s.addText(st, { x: 8.88, y: sy - 0.05, w: 3.6, h: 0.85, fontFace: "Calibri", fontSize: 10.8, color: WHITE, lineSpacingMultiple: 1.15 });
    sy += 1.05;
  });

  footer(s, 9);
}

// ---------------------------------------------------------------- Slide 10 — References & AI Appendix
{
  const s = pres.addSlide();
  s.background = { color: NAVY };
  s.addText("References & AI Appendix", { x: 0.7, y: 0.5, w: 10, h: 0.55, fontFace: "Cambria", fontSize: 28, bold: true, color: WHITE });

  s.addText("REFERENCES (APA7)", { x: 0.7, y: 1.25, w: 5.5, h: 0.3, fontFace: "Calibri", fontSize: 11, bold: true, color: AMBER, charSpacing: 1 });
  const refs = [
    "Coghill, S. (2025, June 25). Aussie’s $230 hotel bill after being stranded outside home highlights ‘sad’ problem. Yahoo News Australia.",
    "Gerathy, S. (2024, June 7). Social housing residents going without hot water as maintenance repair backlog builds. ABC News.",
    "Larson, R. C. (1987). OR Forum—Perspectives on queues: Social justice and the psychology of queueing. Operations Research, 35(6), 895–905.",
    "Maister, D. H. (1985). The psychology of waiting lines. In J. A. Czepiel, M. R. Solomon, & C. F. Surprenant (Eds.), The service encounter (pp. 113–123). Lexington Books.",
    "Residential Tenancies Act 2010 (NSW).",
    "Strata Schemes Management Act 2015 (NSW).",
  ];
  s.addText(refs.map((r) => ({ text: r, options: { breakLine: true, paraSpaceAfter: 8 } })), {
    x: 0.7, y: 1.62, w: 5.9, h: 5.0, fontFace: "Calibri", fontSize: 9.3, color: ICE, lineSpacingMultiple: 1.15,
  });

  s.addShape("roundRect", { x: 6.95, y: 1.25, w: 5.7, h: 5.4, rectRadius: 0.1, fill: { color: NAVY_DARK }, line: { type: "none" } });
  s.addText("AI APPENDIX", { x: 7.25, y: 1.5, w: 5, h: 0.3, fontFace: "Calibri", fontSize: 11, bold: true, color: AMBER, charSpacing: 1 });
  s.addText(
    "Generative AI (Claude) was used in preparing this presentation to: structure the planning process and organise research the team had already gathered into this slide sequence; draft alternative phrasings of the reframed brief and How Might We question from insights the team identified in its own affinity mapping; help generate and evaluate concept directions grounded in the team’s research and the brief’s constraints, with the team selecting and confirming the final direction; and locate/verify primary legal sources (SSMA 2015, RTA 2010) carried over from earlier individual research.\n\nIt was not used to conduct interviews, perform affinity analysis, or generate the lo-fi prototype itself. The reframed brief, concept decisions and final content are the team’s own.",
    { x: 7.25, y: 1.9, w: 5.15, h: 4.6, fontFace: "Calibri", fontSize: 11, color: ICE, lineSpacingMultiple: 1.25 }
  );

  footer(s, 10, { dark: true });
}

pres.writeFile({ fileName: __dirname + "/A2b_Progress_Presentation.pptx" }).then(() => {
  console.log("done");
});
