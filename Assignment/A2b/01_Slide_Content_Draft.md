# A2b Slide Content Draft v2（按 tutor 官方 Suggested Structure 重排）

团队 RhodesReg｜Tutorial 23｜IDEA9106 A2b Progress Presentation
结构依据：Week 8 "A Suggested Structure for Your Progress Presentation" 截图

---

## Slide 1 — Title

**In the Meantime: Waiting for a Repair**
Shared facilities in Sydney apartment housing

RhodesReg — Wenxi Ma · Ruifen Zheng · Anda Hao · Zeyu Li
IDEA9106 Design Thinking, A2b Progress Presentation, Week 8

---

## Slide 2 — Introduction

*官方要求：具体 problem area（不是 solution）+ 背景语境 + WHY，且要由一手/二手研究支撑*

- **Problem area**: when a shared facility in an apartment building fails — a lift, hot water, a door — residents can report it, but almost never learn what happens next
- **Context**: student accommodation, social housing, and residents with access needs in Sydney apartment buildings; the law requires repairs but sets no timeframe (SSMA 2015 (NSW) s106; RTA 2010 (NSW) s63)
- **Why this**: real cases show the gap isn't capacity — a social-housing hot water outage took 9 days, then 2 hours once someone with influence intervened (Gerathy, 2024); a wheelchair user was stranded overnight by an unexplained lift outage (Coghill, 2025). What differs isn't resources, it's who can ask and be answered.

---

## Slide 3 — Research Process

*官方要求：怎么收集数据/访谈，招募了谁，访谈协议是什么*

- **~12 semi-structured interviews across the 4 team members**, each following the same core protocol: walk through the last shared-facility failure → who was told, what happened next → what they were told about duration, and what they did with that → what they did while it was broken → how they judged whether the wait was reasonable
- **Purposive sampling**: participants who had experienced a shared-facility breakdown in their building within the past 12 months, across different housing types (student accommodation, social housing, private rental) so a shared finding reflects structure, not one provider's failure
- **Recruitment**: university networks, personal contacts, student/disability support networks — no identification by impairment
- **Secondary research** ran in parallel: queueing psychology (Maister, 1985; Larson, 1987), legal repair obligations, and reported cases

---

## Slide 4 — Data Analysis

*官方要求：affinity diagram 的主要 insight 是什么、user needs 是什么、这如何帮助收敛 problem statement*

**Affinity map across ~12 interviews surfaced 7 recurring pain points:**
1. Unclear standards for how issues are detected and resolved
2. The wait disrupts other plans in residents' lives
3. Status is never updated
4. Waits run longer than residents were led to expect
5. Replies are unhelpful, or there's no reply at all
6. Who's actually responsible is unclear
7. Residents check status repeatedly, with no better information each time

**What this told us:** the pain isn't the repair delay itself — it's the absence of visible status, a named responsible party, and any expectation to hold onto. That's what narrowed our direction from "the repair" to "the information and influence around the wait."

---

## Slide 5 — Data Synthesis: Personas

*官方要求：清晰的 needs/pain points/motivations，来自 variable mapping；解释为什么这是你的 persona*

Variable mapping across three interviewees showed a two-cluster pattern, not a spread — engagement stance (keep raising it vs. give up) and expectation framing (one-off event vs. ongoing condition) sorted the same two ways across every axis. Rather than average that into one persona, we built two:

**Persona A — BC, apartment tenant (international student, 25, male)**
- Backstory: an international student who has lived in the UK, Hong Kong SAR and Australia, mostly in apartments near campus, and has met repair problems occasionally
- Motivation: limited money and time to take care of a house — repair issues happen "more or less" to everyone in this position
- Frustration: doesn't know who's responsible or whether asking again would help — nothing is ever confirmed, so continuing to raise it starts to feel pointless
- Ideal experience: wants to know roughly where his repair sits and who's dealing with it, without having to ask
- *Quote*: "I reported it once. After that I just stopped asking — I didn't know who to ask, or if it would even matter."
- Pattern: gives up raising the issue, waits it out until the lease ends, treats the fault as a continuous background condition

**Persona B — [Name TBD], [housing type TBD] resident (female)**
- Frustration: keeps raising the issue and keeps hearing "we're looking into it" — no timeframe, no name attached; the effort of repeatedly asking never converts into clarity
- Ideal experience: wants a straight answer — what's happening, who's responsible, when she'll hear next, even if it isn't fixed yet
- *Quote*: "I called three times. Every time it was 'someone will look into it.' Nobody ever told me who, or when."
- Pattern: keeps raising the issue, expects a fix, but gets an ambiguous response despite persisting

*Why two personas: A and B look like opposite behaviours — silence vs. persistence — but both come from the same gap: no visible status, no named responsible party. That contrast is the argument for our reframed brief.*

---

## Slide 6 — Data Synthesis: Reframed Problem Statement & HMW

*官方要求：连接一手+二手研究，明确 DO NOT 在这页提出 solution*

**Our problem/opportunity space**
> Residents in shared apartment buildings — across student accommodation, social housing, and residents with access needs — who report a shared-facility fault but cannot see its status, who is responsible, or when they'll next hear anything, for the entire undefined period between reporting and resolution. Left without that visibility, residents either disengage and wait it out (Persona A), or repeatedly chase a response that stays ambiguous (Persona B) — either way, the uncertainty disrupts their ability to plan the rest of their lives around it.

- Capacity stays fixed — we're redesigning the *information and influence* around the wait, not the repair itself
- At least two stakeholder groups: **residents** (who wait) and **building management/landlord** (who control the sequence)

**How Might We**
> How might we reduce the disruption that uncertain waits cause to people's daily lives?
>
> *(working definition: How might we make the status, timeline and responsible party of a reported issue visible — for residents who currently have no way to know where their case stands or who is acting on it?)*

---

## Slide 7 — Proposed Solution

*官方要求：用了什么 ideation 方法、为什么，如何从多个想法收敛到一个*

- **Method: Brainwriting 6-3-5.** Chosen because reporting-and-waiting is something every team member has personally experienced differently (as a tenant, as someone managing a shared space) — silent parallel writing meant no one's first idea anchored the group, and every round built on ideas already on the page rather than restarting from a blank one
- Ideas generated across rounds were clustered by what they actually changed: *visibility* (make status visible), *communication* (guarantee a reply), *scheduling influence* (let residents affect order)
- **Converged on**: a low-tech combination that improves visibility and communication without adding to management's workload or touching capacity — the "visibility" and "communication" clusters were the most testable at a 5-minute prototype fair, so we developed those; the "scheduling influence" cluster became a future extension, since it needs longer validation before we could prototype it responsibly

---

## Slide 8 — Lo-fi Prototype: Visible Queue + Receipt

*官方要求：展示原型（带实物）、演示功能、说明核心 features 即使还没 100% 定型*

**1. Visible Repair Queue Board**
Lobby display / simple shared page showing anonymised ticket stages:
Reported → Assessed → Scheduled → In progress → Done
— plus an estimated stage *range* (not a promised date) and who's currently responsible.

**2. Repair Receipt Card**
Given at the moment a fault is reported. States: what was reported, who owns the next step, and *when the next update will come* — not when it'll be fixed.

*Both reuse information building staff already hold — they don't ask management to produce anything new, just to make it visible.*

> **[PLACEHOLDER — team to bring physical prototype to tutorial]**
> Slide shows the concept description only. Insert a photo of the paper board + receipt card here once built, or present the physical prototype live alongside this slide.

---

## Slide 9 — Reflection

*官方要求：developing concept 如何创造改变、为什么满足 user needs（连接研究洞察）+ next steps*

**Why this creates change** (pain point → feature)

| Pain point | Addressed by |
|---|---|
| Unclear standards / status never updated | Visible Queue Board — stage always shown |
| Checking status repeatedly | Board removes the need to ask — status is ambient |
| Reply not useful / no reply | Receipt Card guarantees a defined next update |
| Relevant parties unclear | Both show current responsible party |
| Longer than expected | Stage ranges replace silence — closer to an "explained" wait (Maister, 1985) |
| Disrupts other life plans | A known next check-in replaces an unknown end date |

**Next steps toward A2c**
- Build the lo-fi prototype into a testable 5-minute station (paper board + ticket stub)
- Test with strangers at the mid-semester fair: does seeing a stage change how long the wait *feels*?
- Open question to test: does the receipt card's "next update" promise hold up if management can't keep the cadence?
- Explore the Resident Constraints Input extension once the core loop is validated

---

## Slide 10 — References & AI Appendix

**References (APA7)**

Coghill, S. (2025, June 25). Aussie's $230 hotel bill after being stranded outside home highlights 'sad' problem. *Yahoo News Australia*. https://au.news.yahoo.com/aussies-230-hotel-bill-after-being-stranded-outside-home-highlights-sad-problem-073137113.html

Gerathy, S. (2024, June 7). Social housing residents going without hot water as maintenance repair backlog builds. *ABC News*. https://www.abc.net.au/news/2024-06-07/nsw-sydney-social-housing-hot-water-issues-maintenance/103945848

Larson, R. C. (1987). OR Forum—Perspectives on queues: Social justice and the psychology of queueing. *Operations Research, 35*(6), 895–905.

Maister, D. H. (1985). The psychology of waiting lines. In J. A. Czepiel, M. R. Solomon, & C. F. Surprenant (Eds.), *The service encounter* (pp. 113–123). Lexington Books.

*Residential Tenancies Act 2010* (NSW). https://legislation.nsw.gov.au/view/html/inforce/current/act-2010-0042

*Strata Schemes Management Act 2015* (NSW). https://legislation.nsw.gov.au/view/html/inforce/current/act-2015-050

*(待补：其他三位组员各自访谈/二手研究中需要引用的文献)*

**AI Appendix**

Generative AI (Claude) was used in preparing this presentation to: structure the planning process and organise research the team had already gathered into a slide sequence following the tutor's suggested structure; draft alternative phrasings of the reframed brief and HMW question from insights the team identified in its own affinity mapping; help generate and evaluate concept directions grounded in the team's research and the brief's constraints, with the team selecting and confirming the final direction; and locate/verify primary legal sources (SSMA 2015, RTA 2010) carried over from earlier individual research. It was not used to conduct interviews, perform affinity analysis, or generate the lo-fi prototype itself.

---

## 待你确认/补充的清单

1. **Slide 5 Persona B** — name / housing type 仍是占位，方便的话对照转录补上；不补的话 pptx 里先留 "TBD"，不影响这周先出稿
2. **Slide 8 原型** — 你手搓实物，pptx 里先放占位说明，到时现场展示
3. **Slide 10 references** — 其他三位组员是否有要补的引用
4. Presenter 分工仍留空，需要的话告诉我怎么分，我标注到每页
