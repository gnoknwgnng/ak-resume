export const research = [
  { title: "Seed-stage investment memo: Robocurve", date: "OCT 2026", body: "A 500-word memo on an independent robotics-evaluation lab that closed its seed in September 2026: thesis, what the market is misunderstanding, the single technical assumption the thesis depends on, and a validation plan with concrete experiments. Available on request." },
  { title: "VC Friend investor database", date: "2026", body: "Researched and built a database of 2,000+ venture firms across 120+ industries and 40+ countries, filterable by stage, sector and cheque size, plus 220+ government funding schemes." },
  { title: "Founder-side fundraising", date: "MSME HACKATHON", body: "Pitched an alternative-to-wood venture built on sustainable materials to MSME authorities at a national hackathon and secured a ₹15,00,000 grant. That process is what pulled me toward the investor side." },
];

export const experience = [
  { title: "Associate Product Engineer (Intern)", org: "Sreevia AI Technologies", date: "JAN 2026 – PRESENT", points: [
    "Partner with product, design and QA to turn feature requirements into shippable specifications.",
    "Own features end to end from design handoff to release; run testing, debugging and optimisation ahead of launch.",
  ]},
  { title: "Product-Developer Intern", org: "Zylense.ai", date: "MAY – DEC 2025", points: [
    "Led automation initiatives that improved operational efficiency; built n8n workflow automations and an AI-powered mass email system for targeted outreach.",
    "Contributed to client demos and proposals that directly supported deal closures.",
    "Enhanced SaaS product features that improved user experience and performance.",
  ]},
  { title: "Team Lead", org: "Swecha", date: "MAY – AUG 2025", points: [
    "Led a cross-functional team of interns to deliver client-aligned software on schedule.",
    "Owned requirement gathering, feature planning, end-to-end testing and structured project reviews.",
  ]},
];

export const projects: { title: string; domain: string; href: string; body: string; facts?: [string, string][] }[] = [
  { title: "VC Friend", domain: "VCFRIEND.ONLINE", href: "https://vcfriend.online", body: "Free investor-discovery platform I researched and built for founders. Firms can be filtered by stage, sector and cheque size. Alongside the directory: anonymous idea pitching with community feedback, founder reviews of VC firms, and a stage-by-stage guide to the questions investors ask.", facts: [["Venture firms", "2,000+"], ["Industries", "120+"], ["Countries", "40+"], ["Govt schemes", "220+"]] },
  { title: "AI LinkedIn content system", domain: "T-FIVE-PI.VERCEL.APP", href: "https://t-five-pi.vercel.app/", body: "Ingests industry news from RSS feeds, generates drafts with Groq, runs on Supabase and Deno Edge Functions, routes every post through Telegram for human approval before publishing, and keeps a festival-aware content calendar. Built solo." },
  { title: "Automatic quiz generator", domain: "QUIZ-MAKING-BY-AKDK.VERCEL.APP", href: "https://quiz-making-by-akdk.vercel.app/", body: "Generates interactive quizzes from text prompts and PDFs for rapid content creation." },
];

export const skills: [string, string[]][] = [
  ["Research & analysis", ["Market & competitor mapping", "Technical diligence on AI products", "Investment-memo writing", "Requirement gathering", "Pitching & proposals"]],
  ["Technical", ["LLM systems & AI agents", "n8n workflow automation", "API integration", "Supabase · Deno Edge Functions", "Groq · prompt engineering", "SaaS product development", "React · Next.js"]],
  ["Education & languages", ["B.Tech, Computer Science — Geethanjali College of Engineering & Technology, 2022 – 2026 (CGPA 7.4)", "Intermediate (MPC) — Toppers Junior College, 2020 – 2022", "English (fluent) · Telugu (fluent) · Hindi (intermediate)"]],
];
