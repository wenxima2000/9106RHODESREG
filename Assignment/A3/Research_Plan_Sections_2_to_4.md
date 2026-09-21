% =====================================================================
%  IDEA9106 Design Thinking — A3. Context exploration and mapping
%  Wenxi Ma (wema0811) · Tutorial 23 · Semester 2, 2026
%  Compile with: pdfLaTeX
% =====================================================================
\documentclass[11pt,a4paper]{article}

\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage[english]{babel}
\usepackage{lmodern}
\usepackage[scaled=0.92]{helvet}
\renewcommand{\familydefault}{\sfdefault}   % sans-serif throughout

\usepackage[a4paper,top=22mm,bottom=20mm,left=22mm,right=22mm]{geometry}
\usepackage{graphicx}
\usepackage{float}
\usepackage{pdfpages}
\usepackage{xcolor}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{fancyhdr}
\usepackage{microtype}
\usepackage[hidelinks]{hyperref}
\usepackage{xurl}   % break long URLs anywhere
\usepackage{csquotes}

% ---- palette matching the figures -----------------------------------
\definecolor{ink}{HTML}{2B2B2B}
\definecolor{teal}{HTML}{0E7C7B}
\definecolor{orange}{HTML}{C4551F}
\definecolor{rule}{HTML}{BEB6A6}

% ---- headings -------------------------------------------------------
\titleformat{\section}{\color{teal}\bfseries\large}{}{0pt}{}[\vspace{-6pt}\textcolor{rule}{\rule{\linewidth}{0.6pt}}]
\titleformat{\subsection}{\bfseries\normalsize}{}{0pt}{}
\titlespacing*{\section}{0pt}{16pt}{8pt}
\titlespacing*{\subsection}{0pt}{10pt}{4pt}

\setlength{\parskip}{6pt}
\setlength{\parindent}{0pt}
\linespread{1.06}

% ---- footer: name + unikey on every page ----------------------------
\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0.4pt}
\fancyfoot[L]{\footnotesize\color{ink}Wenxi Ma \textbar{} wema0811}
\fancyfoot[R]{\footnotesize\color{ink}IDEA9106 A3 \textbar{} \thepage}

% ---- helper for full-width figures ----------------------------------
\newcommand{\fullfig}[3][\linewidth]{%
  \begin{figure}[H]\centering
  \includegraphics[width=#1]{#2}\\[4pt]
  {\footnotesize\color{ink}#3}
  \end{figure}}
  
\begin{document}

% =====================================================================
% TITLE
% =====================================================================
\thispagestyle{fancy}
\begin{center}
\vspace*{18mm}
{\color{rule}\rule{\linewidth}{1.2pt}}\\[10pt]
{\Huge\bfseries Waiting for a repair}\\[10pt]
{\large\color{teal} Shared facilities in Sydney apartment housing}\\[6pt]
{\color{rule}\rule{\linewidth}{1.2pt}}\\[18pt]
{\normalsize A3. Context exploration and mapping}\\[4pt]
{\normalsize IDEA9106 Design Thinking \textbar{} Semester 2, 2026}\\[14pt]
{\normalsize\bfseries Wenxi Ma}\\[2pt]
{\normalsize wema0811 \textbar{} Tutorial 23}
\end{center}
\vfill
\begin{center}
\footnotesize\color{ink}
Student accommodation \textbullet{} social housing \textbullet{} residents with access needs
\end{center}
\clearpage

% =====================================================================
% 1. INTRODUCTION
% =====================================================================
\section*{Introduction}

Waiting is scheduled and staffed but rarely well designed. Maister (1985) argued that uncertain, unexplained and unfair waits feel longest; Larson (1987) added
that people judge and perceive a queue by whether its order seems proper, which assumes that the queue can be seen.

The consequences are uneven. When the only lift in an apartment building in Melbourne failed overnight, a wheelchair user found no notice and no explanation: told a repair had been logged, he heard nothing further, paid for
a hotel, and was shut inside his unit the next day when work resumed (Coghill, 2025). In social housing in Sydney, a tenant waited nine days for hot water against a 24-hour target; an 83-year-old's 13-day outage was fixed within two hours once a minister's office intervened (Gerathy, 2024). What separates a nine-day wait from a two-hour one is often not capacity but who is able to ask, and be answered.

I chose shared-facility repairs because a renter can report a problem but has no say in what happens next. The landlord, the building manager and the contractor decide the order of the work. The law is no help either: it says these things have to be repaired, but it never says by when (\textit{Strata Schemes Management Act 2015} (NSW), s 106(1); \textit{Residential Tenancies Act 2010} (NSW), s 63).

Capacity is fixed. My question is not how to make repairs faster, but what the
wait is like for the people inside it: what they are told, what they infer when
told nothing, and what they do while they wait.

% =====================================================================
% 3. PROJECT AREA
% =====================================================================
\section*{Project area}

When a shared facility breaks, residents can report it but rarely learn what
happens next: when the repair will occur, how urgent it is considered, or
whether another job has been prioritised. I want to understand how information
moves during a repair, who can ask questions, and what residents do meanwhile.

% =====================================================================
% 2. SKETCHNOTE
% =====================================================================
\section*{Secondary research}

\fullfig{figures/fig-sketchnote}{Figure 1. Sketchnote of thirteen secondary research findings.}

% =====================================================================

% 4. STAKEHOLDER MAP
% =====================================================================
\clearpage
\section*{Stakeholder map}

A repair passes through a chain of people who each hold part of the
information, and residents rarely see past the first link. Mapping the chain
shows where information stops, and lets me narrow to the stakeholders my
interviews should target.

\fullfig{figures/fig-stakeholder-map}{Figure 2. Stakeholder map.}

\subsection*{Justification}
I grouped stakeholders by position relative to the failure, not by
organisation. Partners decide, fund and sequence the work, so any redesign
passes through them. Primary stakeholders are those whose access to their home
is affected; I include ground-floor residents deliberately, because they live
with the same fault and never report it, which distorts what the queue
receives. Secondary stakeholders see the fault first but sit furthest from the
decision.

% =====================================================================
% 5. POWER MAP
% =====================================================================
\clearpage
\section*{Power map}

The stakeholder map shows who is involved; it does not show who can act. The
power map separates the two, because that gap is where this project sits.

\fullfig{figures/fig-power-map}{Figure 3. Power map.}

\subsection*{Justification}
Power means influence over the repair: to order, fund, sequence or escalate it.
Reporting is not influencing, and every resident group here can do the first
but not the second. Interest means how strongly a stakeholder is affected,
which is why operators sit high on interest without experiencing the outage.
High-floor residents are a comparison case: inconvenience and loss of access
are not the same thing.

% =====================================================================
% 6. RESEARCH PLAN
% =====================================================================
\clearpage
\section*{Research plan}

\subsection*{1. Target users / stakeholders}
My target group is residents who live with a shared-facility failure but have
no influence over when it is repaired. I will sample three variants: a
student-accommodation tenant, a social-housing tenant, and a resident with
disability or access needs, for whom an outage removes access rather than
delaying it. The landlord changes, while
the resident's position does not, so a shared finding is structural rather than
one provider's failure.

\subsection*{2. Recruitment and sampling strategy}
I will use purposive sampling to select three participants with different living situations (Patton, 2015). All must have experienced a shared-facility breakdown in their building within the past twelve months. I will recruit through university networks, a personal contact, and disability and student-support networks, without identifying anyone by impairment. Comparing these different cases may reveal common patterns (Palinkas et al., 2015).


\subsection*{3. Ethical considerations}
As the participants are tenants, the main risk is possible consequences for their tenancy. A social-housing tenant may be identifiable through building or agency details, so I will not record personal information and will label transcripts as Participant 1–3. I will also avoid reducing participants with access needs to their impairment by asking about specific experiences rather than diagnoses or medical history. Before recording, I will obtain written consent covering the study’s purpose, recording, anonymisation, coursework-only use and the right to withdraw.


\subsection*{4. Draft interview questions} The same questions are asked in the same wording to all 3 participants; holding
them constant and comparable. 

\begin{enumerate}[leftmargin=*,itemsep=2pt]
  \item Tell me about the last time something shared in your building broke ---
        a lift, a door, the hot water. Walk me through what happened.
  \item Who did you tell, and what happened after that?
  \item Talk me through what you were told about how long it would be out
        for --- and what you did with that information.
  \item What did you end up doing while it was broken?
  \item How did you work out whether that wait was reasonable or not?
\end{enumerate}

\textbf{Follow-up probes} Housing-specific differences are
handled through probes.

\begin{itemize}[leftmargin=*,itemsep=1pt]
  \item \textit{Student accommodation:} Was there a system you were meant to
        use, a portal, an app, a front desk? Did other residents know about
        it too?
  \item \textit{Social housing:} Did you know who was responsible for fixing
        it? Had you reported something before? What happened that time?
  \item \textit{Access needs:} Was that before or after you were already
        downstairs? Has it changed how you plan things since?
\end{itemize}

% =====================================================================
% 7. UNANSWERED QUESTIONS
% =====================================================================
\clearpage
\section*{Questions remaining after my initial research}

\begin{enumerate}[leftmargin=*,itemsep=3pt]
  \item What determines the order of repair jobs? The weighting is invisible
        from outside.
  \item Where does information stop, which is, is it never produced, or produced and
        not passed on? Each points to a different design response.
  \item How much do building staff already know that residents do not?
  \item Do unaffected residents really not report faults?
  \item Who absorbs the extra communication work, given fixed capacity?
\end{enumerate}

% =====================================================================
% 8. REFERENCES
% =====================================================================
\section*{References}

\begingroup
\setlength{\parskip}{6pt}
\sloppy

Australian Council of Social Service, National Shelter, \& National Association
of Renter Organisations. (2025). \textit{Rights at risk: Rising rents and
repercussions}. ACOSS--UNSW Sydney Poverty and Inequality Partnership.
\url{https://www.unsw.edu.au/newsroom/news/2025/06/seven-in-ten-renters-scared-to-ask-for-repairs-report}

Coghill, S. (2025, June 25). Aussie's \$230 hotel bill after being stranded
outside home highlights `sad' problem. \textit{Yahoo News Australia}.
\url{https://au.news.yahoo.com/aussies-230-hotel-bill-after-being-stranded-outside-home-highlights-sad-problem-073137113.html}

Gerathy, S. (2024, June 7). Social housing residents going without hot water as
maintenance repair backlog builds. \textit{ABC News}.
\url{https://www.abc.net.au/news/2024-06-07/nsw-sydney-social-housing-hot-water-issues-maintenance/103945848}

Larson, R. C. (1987). OR Forum---Perspectives on queues: Social justice and the
psychology of queueing. \textit{Operations Research, 35}(6), 895--905.

Maister, D. H. (1985). The psychology of waiting lines. In J. A. Czepiel,
M. R. Solomon, \& C. F. Surprenant (Eds.), \textit{The service encounter}
(pp. 113--123). Lexington Books.

Palinkas, L. A., Horwitz, S. M., Green, C. A., Wisdom, J. P., Duan, N., \&
Hoagwood, K. (2015). Purposeful sampling for qualitative data collection and
analysis in mixed method implementation research. \textit{Administration and
Policy in Mental Health and Mental Health Services Research, 42}(5), 533--544.

Patton, M. Q. (2015). \textit{Qualitative research and evaluation methods:
Integrating theory and practice} (4th ed.). Sage.

\textit{Residential Tenancies Act 2010} (NSW).
\url{https://legislation.nsw.gov.au/view/html/inforce/current/act-2010-0042}

\textit{Strata Schemes Management Act 2015} (NSW).
\url{https://legislation.nsw.gov.au/view/html/inforce/current/act-2015-050}

\endgroup

% =====================================================================
% APPENDICES
% =====================================================================
\clearpage
\section*{Appendix A --- Interview transcripts}
Participant 1, Participant 2 and Participant 3. Verbatim and anonymised: no
names, addresses, building names, provider names or staff names.

\medskip
% \includepdf[pages=-]{appendix/transcripts.pdf}

\section*{Appendix B --- Signed consent forms}
Three scanned consent forms, signed before recording began.

\medskip
% \includepdf[pages=-]{appendix/consent-forms.pdf}

\section*{Appendix C --- Risk assessment}
Completed risk assessment form (Week 3 module template), supporting the ethical
considerations described in the research plan.

\medskip
% \includepdf[pages=-]{appendix/risk-assessment.pdf}

\section*{Appendix D --- Acknowledgement of templates}
The sketchnote, stakeholder map and power map in this report were produced by
the author.

\clearpage
\section*{AI Appendix}

Generative AI (Claude) was used in the preparation of this assignment in the
following ways.

I used it to help locate primary legal sources, specifically the provisions of
the \textit{Strata Schemes Management Act 2015} (NSW) and the \textit{Residential
Tenancies Act 2010} (NSW) cited in this report. I checked each section against
the legislation before including it.

I used it to help structure and lay out the sketchnote, stakeholder map and
power map, working from findings and framings I identified myself.

I used it to refine the wording of the written sections for concision, in order
to meet the word limits.

I did not use it to conduct my interviews, transcribe them, or generate the
analysis of my primary data. The project area, the choice of stakeholder groups
and the interpretation carried into my research plan are my own.

\end{document}
