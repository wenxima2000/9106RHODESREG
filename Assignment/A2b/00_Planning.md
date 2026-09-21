# A2b Progress Presentation — 规划文档 v1

团队：RhodesReg（Wenxi Ma / Ruifen Zheng / Anda Hao / Zeyu Li）｜Tutorial 23
截止：下周 tutorial（Week 8）现场展示，5–10 分钟 + 5 分钟 Q&A，每人至少讲一部分，建议 ≤10 页

---

## 1. 任务要求回顾（来自 PRE-Aim.docx + Design brief）

A2b 是 **unmarked / formative**（0%），目的是拿 tutor 和同学的口头反馈，为 Week 10 的 A2c 做准备。但内容要求是明确的，slides 必须包含：

1. 清晰有说服力地阐述 **reframed project brief**，并说明它是如何被一手 + 二手研究支撑的
2. 清晰有说服力地阐述 **developing concept** 及其功能特性
3. 一段 **user needs and requirements** 的研究发现总结
4. **rationale**：concept 如何回应上面的 needs/requirements
5. **Reference 页**（APA7，含文献、灰色文献、图片来源）
6. **AI Appendix 页**

隐性要求（来自 Week5/6 lecture + brief 本身，即使 PRE-Aim.docx 没写）：
- brief 硬约束仍然生效：不能增加 capacity；不能只靠「分散注意力」；至少两个 stakeholder group；原型要能被陌生人 5 分钟测试（这个到 A2c 才交付，但 A2b 的 concept 方向要为此打基础）
- Reframe 的方法论：Collect（访谈）→ Categorise（affinity grouping → findings）→ Connect（insights）→ 团队开会对齐 → Reframed brief + HMW（Week5/6 lecture、Week6 tutorial 原文）

---

## 2. 已有素材盘点

### 2.1 我（Wenxi）已完成的 A3 个人报告 —— 可直接复用的部分
主题：**Waiting for a repair — Shared facilities in Sydney apartment housing**（学生公寓 / 社会住房 / 有 access needs 的住户）

- **二手研究 12 条 findings**，收敛出 3 个洞察：
  1. 义务明确，时限空白（没人有义务说要等多久）
  2. 能报修 ≠ 能影响（受影响最深的人对顺序毫无发言权）
  3. 入口被两种沉默扭曲（怕、和无关）——队列收到的不是真实需求
- **Stakeholder map + Power map**：报告的人 vs 决定顺序的人是两批人；reporting ≠ influencing
- **3 份一手访谈**（学生公寓租户 / 社会住房租户 / 有 access needs 的住户），围绕：上次东西坏了发生了什么 → 告诉了谁、后续如何 → 被告知等多久、你怎么用这个信息 → 坏的时候你做了什么 → 你怎么判断这个等待合不合理
- 法律依据：SSMA 2015 (NSW) s106、RTA 2010 (NSW) s63 —— 有维修义务，但都没有时限
- 完整 APA7 文献列表（可作为 A2b reference 页的底稿）

### 2.2 你发给我的团队 affinity map 结论（新增，团队层面）
7 条 pain points：
1. Unclear standards for issue detect and resolve → 造成等待期
2. The waiting impacts users' other life plans
3. The status of issue is never updated
4. Longer waiting time than expected
5. The reply/fix of the issue is not useful, or not even a reply
6. The relevant parties involved in the issue are not clear
7. Checking status for many times

草拟 HMW：**How might we reduce the disruption that uncertain waits cause to people's daily lives?**

### 2.3 对齐度检查：团队 affinity map ↔ 我的 A3 发现
两边高度吻合，说明团队大概率是在我的方向上做了扩展（或者其他组员的访谈场景不同但结构相同）：

| 团队 affinity 发现 | 对应我的 A3 finding |
|---|---|
| 1. Unclear standards for detect/resolve | F1（不确定时长）、F8（义务明确但时限空白） |
| 3. Status never updated / 7. Checking status repeatedly | F2（无解释的等待更难受）、F9（能报修≠能影响） |
| 5. Reply not useful / no reply | F9、F10（决定顺序的人和承受等待的人不是一批人） |
| 6. Relevant parties unclear | F5（看不见的队列无法被判断公不公平）、F10 |
| 2. Impacts other life plans | 新维度——我的 A3 没有专门写「打乱生活计划」，这是团队访谈补充的新洞察 |
| 4. Longer than expected | Maister：uncertain wait 比 known duration 感觉更长 |

---

## 3. 需要和你确认的事项

**已确认（2026-09-18 对话中）：**
1. Waiting situation：沿用「公寓共用设施报修等待」——我的 A3 方向，不换场景 ✅
2. affinity map 数据来源：四人各自访谈汇总，约 12 份 ✅
3. Concept：Week 7 已有产出，你会提供概念描述/草图，我据此写 concept + rationale 页 ✅

**已确认（第二轮）：**
4. Stakeholder groups：住户/租户（等待方） vs 管理处/物业/房东（掌控排序的一方）✅
5. HMW：两个版本都留着——原版放标题页/开场做情感钩子，变体 A 放 reframed brief 页做更精确的工作定义 ✅

**已确认（第三轮，2026-09-21）：**
6. **Concept 定为「Visible Queue + Receipt」组合**：
   - **Visible Repair Queue Board**：大堂/线上都可以的低技术看板，显示工单匿名化阶段（已报修→已评估→已排期→处理中→完成）+ 预计阶段区间（非精确承诺）+ 当前负责方
   - **Repair Receipt Card**：报修时发一张回执，写明报了什么、下一步谁负责、下次更新什么时候来（不是修好的时间）
   - **Resident Constraints Input**（延伸功能，不做进原型）：住户可附加排期限制条件（如 access needs、上夜班），管理处参考但不承诺——rationale 里提一笔展示野心，测试原型不含这部分

**待定，非阻塞（可以现场自己分）：**
7. presenter 分工：4 人每人至少讲一部分——按内容模块预留 4 段，还是你们自己现场分？

---

## 4. Reframe 草案（待第 3 节问题回答后再定稿）

### POV（point of view）草案
> [具体用户群体，待确认]，在**报告**一个共用设施/服务问题后，需要知道自己的问题排在哪里、依据什么、谁在处理，**因为**让他们感到痛苦的不是等待本身的时长，而是等待里的不确定、不解释和看不见谁在管——这些会打乱他们生活里其他要安排的事。

### HMW 备选（你给的版本 + 2 个变体，风格不同，供讨论）
- **你的版本（生活影响角度）**：How might we reduce the disruption that uncertain waits cause to people's daily lives?
- **变体 A（信息/可见性角度，更贴 brief 的合法杠杆措辞 "with what information / in what order"）**：How might we make the status, timeline and responsible party of a reported issue visible to the person waiting — without changing who resolves it or how fast?
- **变体 B（生活规划角度，更聚焦 pain point #2）**：How might we help people plan around an issue whose resolution time is uncertain, without them having to keep checking for updates?

三个都没有触碰 capacity，都符合 brief 约束。你的版本最适合做「一句话钩子」放标题页；变体 A/B 更适合作为团队内部收敛 concept 时的工作版本。可以三选一，也可以合并。

---

## 5. 拟定的 Slide 结构（≤10 页，占位，待第 3 节确认后填内容）

| # | 内容 | 对应要求 |
|---|---|---|
| 1 | 标题 + 团队 + 原始 brief 一句话 | — |
| 2 | Context recap：原始 brief 的约束 + 我们聚焦的具体 waiting situation | 引出 reframe 的依据 |
| 3 | 研究发现总结（二手 + 一手 affinity map 亮点，4–6 条） | 要求 3：user needs/requirements |
| 4 | Reframed brief / POV | 要求 1 |
| 5 | How Might We | 要求 1 的延伸 |
| 6 | 至少 2 个 stakeholder group 的 needs（persona 或对比表） | 要求 3 |
| 7 | Developing concept + 核心功能 | 要求 2 |
| 8 | Rationale：pain point → 功能 对照表 | 要求 4 |
| 9 | References（APA7） | 要求 5 |
| 10 | AI Appendix | 要求 6 |

（如果 8–9 页更紧凑，可以把 4/5 合并成一页，或把 9/10 合并成一页 reference+AI。）

---

## 6. 下一步

1. 你回答第 3 节的 1–6 点
2. 我们一起把第 4 节的 reframe/HMW 定稿
3. 我按第 5 节结构做 pptx（每页放什么内容我们再过一遍文字稿，你和队友确认后我出图/排版）
