import { Profile, Skill, Experience, Education, Certification, Project } from "./types";

export const uiTranslations = {
  en: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    contact: "Contact",
    resumeBtn: "Download Resume",
    sysCyber: "CYBER",
    sysLight: "LIGHT",
    downloadCV: "Download Resume",
    pdfGuideTitle: "PDF SAVE INSTRUCTIONS",
    pdfGuideText: "To save as a pristine PDF, click the print button above and choose \"Save as PDF\" as your target printer. Ensure you adjust scaling and background graphics in your print settings if necessary.",
    close: "Close",
    clearFilter: "Clear selection filter",
    filteringBy: "Filtering by",
    techStackTitle: "Technical Stack",
    techStackDesc: "A collection of technologies I have integrated across projects, enterprise solutions, and sandbox environments.",
    all: "All",
    languages: "Languages",
    frameworks: "Frameworks",
    cloudDevOps: "Cloud & DevOps",
    databases: "Databases",
    langDesc: "Syntax and foundations for robust and native scripts.",
    frameDesc: "Structured frameworks for client views and app servers.",
    cloudDesc: "Orchestration, containment, and continuous delivery pipelines.",
    dbDesc: "Persistent warehouses for secure transactional models.",
    coreJourneyTitle: "Core Journey",
    coreJourneyDesc: "Chronological ledger of professional, educational, and commercial milestones.",
    academicTitle: "Academic Foundations",
    academicDesc: "Formal academic history and qualifications.",
    certsTitle: "Industry Certifications",
    certsDesc: "Verified validation of technological fluency and operational paradigms.",
    projectsTitle: "Sandboxed Projects",
    projectsDesc: "Live prototypes, experimental engines, and published production-ready solutions.",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    interactiveShell: "Interactive Shell",
    bashTerminal: "Terminal Shell Bash Emulator",
    readmeTab: "README.md",
    profileTab: "Profile.json",
    terminalLogsTab: "terminal_logs.sh",
    contactMeTab: "contact_me.py",
    contactTitle: "Initiate Communication",
    copyEmail: "Copy Email Address",
    copied: "Copied!",
    footerDesc: "A developer sandbox of Moustafa Hany Azab. Code. Ship. Impact.",
    backToTop: "Back to top",
    designedBy: "Designed & Engineered by Hany",
    systemReady: "SYSTEM READY",
    bashWelcome: "Welcome to Hany's Shell. Type 'help' to see available commands.",
    commandPrompt: "guest@hany-world:~$",
    interactiveEditor: "Live Interactive Editor",
    editorHeader: "Interactive Profile Editor — Modify fields below to update live portfolio view!",
    editModeLabel: "Bilingual JSON schema editing mode",
    resetBtn: "Reset Profile",
    saveBtn: "Apply Profile Changes",
    nameLabel: "Developer Name",
    roleLabel: "Target Role",
    missionLabel: "Operational Mission",
    focusLabel: "Target Focus Sectors (comma-separated)",
    bioLabel: "Professional Biography",
    emailCopiedToClipboard: "Email copied to clipboard!",
    skillsCategory: "Skills Category",
    showCertificates: "View IBM/Coursera Credentials"
  },
  ar: {
    about: "من أنا",
    skills: "المهارات",
    experience: "الخبرات",
    education: "التعليم",
    projects: "المشاريع",
    contact: "اتصل بي",
    resumeBtn: "تحميل السيرة الذاتية",
    sysCyber: "سيبراني",
    sysLight: "مضيء",
    downloadCV: "تحميل السيرة الذاتية",
    pdfGuideTitle: "تعليمات حفظ PDF",
    pdfGuideText: "لحفظ الملف بصيغة PDF نقية ومثالية، انقر فوق زر الطباعة أعلاه واختر \"حفظ بتنسيق PDF\" كطابعة مستهدفة. يرجى تفعيل طباعة الخلفيات والرسومات وتعيين الهوامش إلى 'بلا' للحصول على مظهر ممتاز.",
    close: "إغلاق",
    clearFilter: "إزالة التصفية",
    filteringBy: "تصفية حسب",
    techStackTitle: "مجموعة التقنيات",
    techStackDesc: "مجموعة من التقنيات التي قمت بدمجها وتطبيقها عبر المشاريع والمحاكاة التفاعلية المختلفة.",
    all: "الكل",
    languages: "لغات البرمجة",
    frameworks: "إطارات العمل",
    cloudDevOps: "السحابية والعمليات",
    databases: "قواعد البيانات",
    langDesc: "أسس برمجية متينة لبناء نصوص برمجية قوية وفعالة.",
    frameDesc: "أطر عمل هيكلية لواجهات المستخدم وخوادم التطبيقات.",
    cloudDesc: "أتمتة، حاويات سحابية، ومسارات تسليم ونشر مستمر.",
    dbDesc: "مستودعات بيانات آمنة وسريعة للتعامل مع النماذج الهيكلية والعلائقية.",
    coreJourneyTitle: "المسيرة المهنية",
    coreJourneyDesc: "سجل زمني للخبرات المهنية، الأكاديمية والعمل الحر الاستشاري.",
    academicTitle: "الأسس الأكاديمية",
    academicDesc: "سجل التعليم الأكاديمي والشهادات الجامعية والثانوية الرسمية.",
    certsTitle: "الشهادات التقنية والمهنية",
    certsDesc: "الاعتمادات المعتمدة من منصات عالمية مثل IBM و Coursera للتحقق من الكفاءة.",
    projectsTitle: "المشاريع والحلول الرقمية",
    projectsDesc: "نماذج حية ومشاريع متكاملة قمت بتطويرها ونشرها لتلبية الاحتياجات التقنية والبرمجية.",
    liveDemo: "العرض الحي",
    sourceCode: "كود المشروع",
    interactiveShell: "موجه الأوامر التفاعلي",
    bashTerminal: "محاكي موجه الأوامر الطرفية (Terminal Bash)",
    readmeTab: "README.md",
    profileTab: "Profile.json",
    terminalLogsTab: "terminal_logs.sh",
    contactMeTab: "contact_me.py",
    contactTitle: "بدء التواصل السريع",
    copyEmail: "نسخ البريد الإلكتروني",
    copied: "تم النسخ!",
    footerDesc: "مساحة التطوير الخاصة بالمطور مصطفى هاني عزب. برمجة. شحن. تأثير.",
    backToTop: "العودة للأعلى",
    designedBy: "تصميم وتطوير مصطفى هاني",
    systemReady: "النظام جاهز للتشغيل",
    bashWelcome: "مرحباً بك في موجه أوامر مصطفى هاني. اكتب 'help' لرؤية الأوامر المتاحة.",
    commandPrompt: "guest@hany-world:~$",
    interactiveEditor: "المحرر التفاعلي الحي",
    editorHeader: "محرر الملف الشخصي التفاعلي — قم بتعديل الحقول لتحديث الموقع في الوقت الفعلي!",
    editModeLabel: "وضع تعديل هيكل JSON ثنائي اللغة",
    resetBtn: "إعادة تعيين",
    saveBtn: "تطبيق التغييرات",
    nameLabel: "اسم المطور",
    roleLabel: "الدور المستهدف",
    missionLabel: "المهمة التشغيلية",
    focusLabel: "مجالات التركيز (مفصولة بفاصلة)",
    bioLabel: "السيرة الذاتية المهنية",
    emailCopiedToClipboard: "تم نسخ البريد الإلكتروني للحافظة!",
    skillsCategory: "فئة المهارة",
    showCertificates: "عرض شهادات IBM / Coursera"
  }
};

export const enProfile: Profile = {
  name: "Moustafa Hany Azab",
  role: "Software Engineer",
  mission: "Code. Ship. Impact.",
  focus: ["Software Engineer", "Full-Stack Developer", "Data & AI Engineer"],
  bio: "Moustafa Hany Azab (HANY ZAMLKAWY)\n\nBusiness Information Systems student specializing in Software Engineering, Full-Stack Development, Data Engineering, and AI Automation. Passionate about designing scalable, high-performance software solutions and leveraging modern technologies to solve complex business challenges. Skilled in building clean, maintainable code, developing data-driven applications, and integrating AI-powered automation into real-world systems. Committed to continuous learning and delivering reliable, production-ready solutions that create measurable impact.",
  heroBio: "a Business Information Systems student specializing in Software Engineering, Full-Stack Development, Data Engineering, and AI Automation Passionate about building scalable, AI-powered solutions, writing clean and efficient code, and developing innovative software that solves real-world business challenges."
};

export const arProfile: Profile = {
  name: "مصطفى هاني عزب",
  role: "مهندس برمجيات ومطور شامل",
  mission: "برمجة. شحن. تأثير.",
  focus: ["مهندس برمجيات", "مطور شامل", "مهندس بيانات وذكاء اصطناعي"],
  bio: "مصطفى هاني عزب (هاني زملكاوي)\n\nطالب نظم معلومات الأعمال (BIS) متخصص في هندسة البرمجيات، التطوير الشامل، هندسة البيانات، وأتمتة الذكاء الاصطناعي. شغوف بتصميم حلول برمجية قابلة للتطوير وعالية الأداء، والاستفادة من التقنيات الحديثة لحل تحديات الأعمال المعقدة. ماهر في كتابة أكواد برمجية نظيفة وقابلة للصيانة، وتطوير تطبيقات قائمة على البيانات، ودمج الأتمتة المدعومة بالذكاء الاصطناعي في الأنظمة الحقيقية. ملتزم بالتعلم المستمر وتقديم حلول موثوقة وجاهزة للإنتاج تحقق تأثيراً ملموساً.",
  heroBio: "طالب نظم معلومات الأعمال متخصّص في هندسة البرمجيات، التطوير الشامل، هندسة البيانات، وأتمتة الذكاء الاصطناعي. شغوف ببناء حلول برمجية قابلة للتطوير ومدعومة بالذكاء الاصطناعي، وكتابة أكواد نظيفة وفعالة، وتطوير برمجيات مبتكرة تحل تحديات الأعمال الحقيقية."
};

export const enSkills: Skill[] = [
  // Languages
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "HTML5", category: "Languages" },
  { name: "CSS3", category: "Languages" },
  { name: "Go", category: "Languages" },
  { name: "Swift", category: "Languages" },
  { name: "Arabic (Native)", category: "Languages" },
  { name: "English (Fluent)", category: "Languages" },
  
  // Frameworks
  { name: "React", category: "Frameworks" },
  { name: "Flask", category: "Frameworks" },
  { name: "Node.js", category: "Frameworks" },
  { name: "Express.js", category: "Frameworks" },
  { name: "Next.js", category: "Frameworks" },
  { name: "Flutter", category: "Frameworks" },
  { name: "Full-Stack Development", category: "Frameworks" },
  { name: "Software Engineering", category: "Frameworks" },
  
  // Cloud / DevOps / AI
  { name: "Cloud Computing", category: "Cloud/DevOps" },
  { name: "AWS", category: "Cloud/DevOps" },
  { name: "Google Cloud Platform (GCP)", category: "Cloud/DevOps" },
  { name: "Docker", category: "Cloud/DevOps" },
  { name: "Git", category: "Cloud/DevOps" },
  { name: "GitHub", category: "Cloud/DevOps" },
  { name: "GitHub Copilot", category: "Cloud/DevOps" },
  { name: "AI Development", category: "Cloud/DevOps" },
  { name: "Prompt Engineering", category: "Cloud/DevOps" },
  { name: "Large Language Models (LLMs)", category: "Cloud/DevOps" },
  
  // Databases
  { name: "PostgreSQL", category: "Databases" },
  { name: "Redis", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "Firebase", category: "Databases" },
  { name: "Database Fundamentals", category: "Databases" },
  { name: "Workflow Automation", category: "Databases" }
];

export const arSkills: Skill[] = [
  // Languages
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "HTML5", category: "Languages" },
  { name: "CSS3", category: "Languages" },
  { name: "Go", category: "Languages" },
  { name: "Swift", category: "Languages" },
  { name: "العربية (اللغة الأم)", category: "Languages" },
  { name: "الإنجليزية (طلاقة)", category: "Languages" },
  
  // Frameworks
  { name: "React", category: "Frameworks" },
  { name: "Flask", category: "Frameworks" },
  { name: "Node.js", category: "Frameworks" },
  { name: "Express.js", category: "Frameworks" },
  { name: "Next.js", category: "Frameworks" },
  { name: "Flutter", category: "Frameworks" },
  { name: "التطوير الشامل", category: "Frameworks" },
  { name: "هندسة البرمجيات", category: "Frameworks" },
  
  // Cloud / DevOps / AI
  { name: "الحوسبة السحابية", category: "Cloud/DevOps" },
  { name: "AWS", category: "Cloud/DevOps" },
  { name: "GCP السحابة من جوجل", category: "Cloud/DevOps" },
  { name: "Docker", category: "Cloud/DevOps" },
  { name: "Git", category: "Cloud/DevOps" },
  { name: "GitHub", category: "Cloud/DevOps" },
  { name: "GitHub Copilot", category: "Cloud/DevOps" },
  { name: "تطوير الذكاء الاصطناعي", category: "Cloud/DevOps" },
  { name: "هندسة الأوامر", category: "Cloud/DevOps" },
  { name: "النماذج اللغوية الكبيرة (LLMs)", category: "Cloud/DevOps" },
  
  // Databases
  { name: "PostgreSQL", category: "Databases" },
  { name: "Redis", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "Firebase", category: "Databases" },
  { name: "أساسيات قواعد البيانات", category: "Databases" },
  { name: "أتمتة سير العمل", category: "Databases" }
];

export const enExperiences: Experience[] = [
  {
    id: "exp-1",
    period: "Jun 2026 — Present",
    role: "Backend AI Engineering Intern",
    company: "FlyRank AI",
    bullets: [
      "Developing and optimizing backend services to integrate generative AI capabilities and enhance intelligent search functionality.",
      "Designing, building, and maintaining scalable backend systems, APIs, and data processing logic in collaboration with senior engineers."
    ],
    skillsUsed: ["Python", "AWS", "Docker", "Large Language Models (LLMs)", "GitHub Copilot", "Prompt Engineering"]
  },
  {
    id: "exp-2",
    period: "Feb 2026 — Present",
    role: "Web Development Intern",
    company: "PathLine Training Academy",
    bullets: [
      "Developed responsive and interactive web interfaces using HTML, CSS, and JavaScript.",
      "Built front-end projects while applying clean coding practices and core web development principles.",
      "Debugged applications and optimized website performance to improve usability and responsiveness."
    ],
    skillsUsed: ["JavaScript", "HTML", "CSS", "React"]
  },
  {
    id: "exp-3",
    period: "Mar 2026 — Jun 2026",
    role: "Freelance Qualification Intern",
    company: "ITIDA Gigs Freelance",
    bullets: [
      "Completed a professional training program in software engineering and freelance business practices.",
      "Applied Business Information Systems (BIS) concepts to deliver technical solutions aligned with client requirements.",
      "Built a portfolio of software projects while strengthening client communication and project delivery skills."
    ],
    skillsUsed: ["Software Engineering", "JavaScript", "React", "Firebase"]
  },
  {
    id: "exp-4",
    period: "Nov 2025 — Dec 2025",
    role: "Tech for Non-Techies Intern",
    company: "iCareer",
    bullets: [
      "Completed intensive training in digital literacy, automation, and AI applications.",
      "Used Zapier, Power BI, Google Workspace, and Notion to automate workflows, visualize data, and improve team collaboration.",
      "Applied prompt engineering techniques to enhance AI-powered content generation and business processes."
    ],
    skillsUsed: ["Workflow Automation", "Prompt Engineering", "Database Fundamentals"]
  }
];

export const arExperiences: Experience[] = [
  {
    id: "exp-1",
    period: "يونيو 2026 — الحالي",
    role: "متدرب هندسة الذكاء الاصطناعي للباك إند",
    company: "FlyRank AI",
    bullets: [
      "تطوير وتحسين خدمات الباك إند لدمج قدرات الذكاء الاصطناعي التوليدي وتعزيز وظائف البحث الذكي.",
      "تصميم وبناء وصيانة أنظمة باك إند قابلة للتطوير، وواجهات برمجة التطبيقات (APIs)، ومنطق معالجة البيانات بالتعاون مع كبار المهندسين."
    ],
    skillsUsed: ["Python", "AWS", "Docker", "Large Language Models (LLMs)", "GitHub Copilot", "Prompt Engineering"]
  },
  {
    id: "exp-2",
    period: "فبراير 2026 — الحالي",
    role: "متدرب تطوير الويب والفرونت إند",
    company: "PathLine Training Academy",
    bullets: [
      "تطوير واجهات ويب سريعة الاستجابة وتفاعلية باستخدام HTML و CSS و JavaScript.",
      "بناء مشاريع فرونت إند مع تطبيق ممارسات الأكواد النظيفة ومبادئ تطوير الويب الأساسية.",
      "تصحيح أخطاء التطبيقات وتحسين أداء المواقع لتعزيز سهولة الاستخدام والاستجابة لجميع الشاشات."
    ],
    skillsUsed: ["JavaScript", "HTML", "CSS", "React"]
  },
  {
    id: "exp-3",
    period: "مارس 2026 — يونيو 2026",
    role: "متدرب تأهيل العمل الحر البرمجي",
    company: "ITIDA Gigs Freelance",
    bullets: [
      "إكمال برنامج تدريبي احترافي متكامل في هندسة البرمجيات وممارسات العمل الحر الفني.",
      "تطبيق مفاهيم نظم معلومات الأعمال (BIS) لتقديم حلول تقنية تلبي وتتماشى مع تطلعات واحتياجات العملاء الحقيقية.",
      "بناء محفظة أعمال من المشاريع البرمجية التطبيقية لتعزيز مهارات التواصل الاحترافي مع العملاء وتسليم المهام بنجاح."
    ],
    skillsUsed: ["Software Engineering", "JavaScript", "React", "Firebase"]
  },
  {
    id: "exp-4",
    period: "نوفمبر 2025 — ديسمبر 2025",
    role: "متدرب التقنية لغير التقنيين وأدوات العمل الذكية",
    company: "iCareer",
    bullets: [
      "إكمال تدريب مكثف في الثقافة الرقمية والأتمتة التشغيلية وتطبيقات الذكاء الاصطناعي الحديثة في الأعمال.",
      "استخدام Zapier، و Power BI، و Google Workspace، و Notion لأتمتة سير العمل، وتصور البيانات بشكل رسومي، وتحسين تعاون الفرق.",
      "تطبيق تقنيات هندسة الأوامر لتعزيز جودة توليد المحتوى المدعوم بالذكاء الاصطناعي للشركات."
    ],
    skillsUsed: ["Workflow Automation", "Prompt Engineering", "Database Fundamentals"]
  }
];

export const enEducation: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Computer & Business Information Systems (BIS)",
    school: "Higher Institute for Computer and Information Systems, Abu Qir | Alexandria, Egypt",
    period: "Sep 2025 — Present"
  },
  {
    id: "edu-2",
    degree: "High School Diploma",
    school: "Victoria College (Language School) | Alexandria, Egypt",
    period: "Graduated Aug 2025"
  }
];

export const arEducation: Education[] = [
  {
    id: "edu-1",
    degree: "بكالوريوس الحاسب ونظم معلومات الأعمال (BIS)",
    school: "المعهد العالي للحاسب ونظم المعلومات الإدارية بأبي قير | الإسكندرية، مصر",
    period: "سبتمبر 2025 — الحالي"
  },
  {
    id: "edu-2",
    degree: "شهادة الثانوية العامة الرسمية",
    school: "كلية فيكتوريا (مدرسة لغات عريقة) | الإسكندرية، مصر",
    period: "تخرج في أغسطس 2025"
  }
];

export const enCertifications: Certification[] = [
  { id: "cert-1", name: "Developing AI Applications with Python and Flask", issuer: "IBM | Coursera", date: "Jun 2026" },
  { id: "cert-2", name: "Python for Data Science, AI & Development", issuer: "IBM | Coursera", date: "Jun 2026" },
  { id: "cert-3", name: "Vibe Coding with GitHub Copilot", issuer: "Edureka | Coursera", date: "Jun 2026" },
  { id: "cert-4", name: "Interview Preparation Suite", issuer: "IBM SkillsBuild Ambassador", date: "Jun 2026" },
  { id: "cert-5", name: "Developing Back-End Apps with Node.js and Express", issuer: "IBM | Coursera", date: "May 2026" },
  { id: "cert-6", name: "Developing Front-End Apps with React", issuer: "IBM | Coursera", date: "May 2026" },
  { id: "cert-7", name: "Introduction to Cloud Computing", issuer: "IBM / Coursera", date: "May 2026" },
  { id: "cert-8", name: "Software Engineering Essentials", issuer: "Coursera", date: "May 2026" },
  { id: "cert-9", name: "Introduction to Software Engineering", issuer: "IBM", date: "May 2026" },
  { id: "cert-10", name: "Web Development (Level 0 & 1)", issuer: "PathLine Academy", date: "May 2026" },
  { id: "cert-11", name: "Introduction to HTML, CSS & JavaScript", issuer: "IBM | Coursera", date: "Apr 2026" },
  { id: "cert-12", name: "Mastering the Art of Prompting", issuer: "IBM", date: "Apr 2026" },
  { id: "cert-13", name: "Getting Started with Git and GitHub", issuer: "IBM | Coursera", date: "Mar 2026" },
  { id: "cert-14", name: "AWS AI & ML Scholars & Project Badges", issuer: "Udacity", date: "Mar 2026" },
  { id: "cert-15", name: "McKinsey Forward Program", issuer: "McKinsey & Company", date: "2026" },
  { id: "cert-16", name: "Sales Skills Professional Training", issuer: "Success Academy", date: "Jan 2026" },
  { id: "cert-17", name: "Tech for Non-Techies Training", issuer: "iCareer (Digitera)", date: "Dec 2025" },
  { id: "cert-18", name: "Professional Soft Skills", issuer: "Success Academy", date: "Dec 2025" },
  { id: "cert-19", name: "International Computer Driving License (ICDL)", issuer: "Success Academy", date: "Nov 2025" }
];

export const arCertifications: Certification[] = [
  { id: "cert-1", name: "تطوير تطبيقات الذكاء الاصطناعي باستخدام بايثون وفلاسك", issuer: "IBM | كورسيرا", date: "يونيو 2026" },
  { id: "cert-2", name: "البايثون لعلوم البيانات والذكاء الاصطناعي والتطوير", issuer: "IBM | كورسيرا", date: "يونيو 2026" },
  { id: "cert-3", name: "برمجة الفايب والتطوير التلقائي باستخدام GitHub Copilot", issuer: "إديوريكا | كورسيرا", date: "يونيو 2026" },
  { id: "cert-4", name: "حزمة التحضير للمقابلات الشخصية التقنية", issuer: "سفير مهارات IBM للبرمجة", date: "يونيو 2026" },
  { id: "cert-5", name: "تطوير تطبيقات الباك إند باستخدام Node.js و Express", issuer: "IBM | كورسيرا", date: "مايو 2026" },
  { id: "cert-6", name: "تطوير تطبيقات الفرونت إند التفاعلية باستخدام React", issuer: "IBM | كورسيرا", date: "مايو 2026" },
  { id: "cert-7", name: "مقدمة شاملة للحوسبة السحابية وأنظمتها", issuer: "IBM | كورسيرا", date: "مايو 2026" },
  { id: "cert-8", name: "أساسيات وجوهر هندسة البرمجيات", issuer: "كورسيرا المعتمدة", date: "مايو 2026" },
  { id: "cert-9", name: "مقدمة لعلوم وهندسة البرمجيات المعاصرة", issuer: "شركة IBM الدولية", date: "مايو 2026" },
  { id: "cert-10", name: "مطور ويب معتمد (المستويات 0 و 1)", issuer: "أكاديمية باث لاين للتدريب", date: "مايو 2026" },
  { id: "cert-11", name: "مقدمة إلى لغات الويب الأساسية HTML, CSS & JavaScript", issuer: "IBM | كورسيرا", date: "أبريل 2026" },
  { id: "cert-12", name: "إتقان فن وعلم هندسة الأوامر (Prompting)", issuer: "شركة IBM الدولية", date: "أبريل 2026" },
  { id: "cert-13", name: "البداية السريعة والعملية مع نظامي Git و GitHub", issuer: "IBM | كورسيرا", date: "مارس 2026" },
  { id: "cert-14", name: "علماء AWS للذكاء الاصطناعي والتعلم الآلي والبادجات التطبيقية", issuer: "يوداسيتي المعتمدة", date: "مارس 2026" },
  { id: "cert-15", name: "برنامج ماكنزي الرائد لتطوير المهارات (McKinsey Forward)", issuer: "ماكنزي آند كومباني العالمية", date: "2026" },
  { id: "cert-16", name: "التدريب الاحترافي لمهارات البيع الاحترافية", issuer: "أكاديمية النجاح لعلوم الأعمال", date: "يناير 2026" },
  { id: "cert-17", name: "التقنية لغير التقنيين وأدوات العمل الذكية المتقدمة", issuer: "مؤسسة iCareer العالمية (ديجيتيرا)", date: "ديسمبر 2025" },
  { id: "cert-18", name: "المهارات الشخصية والناعمة الاحترافية", issuer: "أكاديمية النجاح وتطوير الذات", date: "ديسمبر 2025" },
  { id: "cert-19", name: "الرخصة الدولية لقيادة الحاسب الآلي المعترف بها (ICDL)", issuer: "مؤسسة النجاح المعتمدة", date: "نوفمبر 2025" }
];

export const enProjects: Project[] = [
  {
    id: "proj-1",
    title: "Leon — Creative Digital Agency Template",
    description: "Developed a modern, responsive one-page website for a creative digital agency using HTML5, CSS3, and Vanilla JavaScript. Implemented interactive features including scroll animations, a filterable portfolio, and sticky navigation. Deployed the project using Git and GitHub Pages.",
    category: "Full-Stack",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    link: "https://hany-zamalkawy.github.io/Leon-Agency/",
    github: "https://github.com/Hany-Zamalkawy/Leon-Agency"
  },
  {
    id: "proj-2",
    title: "VOLT Sports — Full-Stack Sports Analysis Platform",
    description: "Developed a sports analysis web application to process, manage, and visualize athletic performance data. Applied software engineering principles to build a structured, responsive, and user-friendly application.",
    category: "Full-Stack",
    skills: ["JavaScript", "HTML", "CSS", "Git", "GitHub"],
    link: "https://hany-zamalkawy.github.io/-VOLT-Sports/",
    github: "https://github.com/Hany-Zamalkawy/-VOLT-Sports"
  },
  {
    id: "proj-3",
    title: "Artisan Table — Full-Stack Restaurant Web Application",
    description: "Developed a responsive web platform featuring interactive menus and structural ordering layouts. Engineered modular front-end components and version-controlled the repository to ensure seamless continuous integration.",
    category: "Full-Stack",
    skills: ["React", "JavaScript", "HTML", "CSS", "GitHub"],
    link: "https://hany-zamalkawy.github.io/restaurant_Artisan_Table/",
    github: "https://github.com/Hany-Zamalkawy/restaurant_Artisan_Table"
  },
  {
    id: "proj-4",
    title: "HANY'S WORLD — Cyber-Minimalist Portfolio & Interactive Resume",
    description: "Designed and built an interactive terminal shell portfolio and developer hub using React, Tailwind CSS, Framer Motion, and high-fidelity mock-ups. Features interactive command-line simulations, printable custom PDF resume view, and sleek animations.",
    category: "Full-Stack",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "https://ais-pre-avz2uzcj7jccimh54iaavt-101895778468.europe-west2.run.app",
    github: "https://github.com/Hany-Zamalkawy/My-Portfolio-HANY-S-WORLD"
  }
];

export const arProjects: Project[] = [
  {
    id: "proj-1",
    title: "موقع Leon — قالب الوكالة الرقمية الإبداعية",
    description: "تطوير موقع ويب حديث سريع الاستجابة من صفحة واحدة لوكالة إبداعية رقمية باستخدام لغات الويب الأساسية HTML5 و CSS3 وجاوا سكريبت العادية. تم إدخال ميزات تفاعلية ممتازة مثل حركات التمرير الرشيقة، ومحفظة أعمال مصفاة، وشريط تنقل ذكي ومثبت. تم نشر المشروع بالكامل عبر خوادم صفحات GitHub.",
    category: "Full-Stack",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    link: "https://hany-zamalkawy.github.io/Leon-Agency/",
    github: "https://github.com/Hany-Zamalkawy/Leon-Agency"
  },
  {
    id: "proj-2",
    title: "منصة VOLT Sports — التحليل الرياضي المتكامل",
    description: "تطوير تطبيق ويب متكامل ومتقدم لتحليل وتتبع وعرض مستويات الأداء الرياضي للأندية واللاعبين رقمياً بشكل مرئي. تطبيق مبادئ وقواعد هندسة البرمجيات المعتمدة لتقديم واجهات فائقة الدقة والاستجابة وسهلة الاستخدام للمدربين واللاعبين.",
    category: "Full-Stack",
    skills: ["JavaScript", "HTML", "CSS", "Git", "GitHub"],
    link: "https://hany-zamalkawy.github.io/-VOLT-Sports/",
    github: "https://github.com/Hany-Zamalkawy/-VOLT-Sports"
  },
  {
    id: "proj-3",
    title: "موقع Artisan Table — تطبيق الويب الشامل للمطاعم",
    description: "تطوير وبرمجة منصة ويب ذكية مخصصة للمطاعم تتيح تصفح قوائم المأكولات التفاعلية وطلبها وتنسيق حجز الطاولات. هندسة المكونات باستخدام مكتبة React وتطبيق نظام التحكم في الإصدارات لضمان الجودة المستمرة للمنتج البرمجي.",
    category: "Full-Stack",
    skills: ["React", "JavaScript", "HTML", "CSS", "GitHub"],
    link: "https://hany-zamalkawy.github.io/restaurant_Artisan_Table/",
    github: "https://github.com/Hany-Zamalkawy/restaurant_Artisan_Table"
  },
  {
    id: "proj-4",
    title: "منصة HANY'S WORLD — السيرة الذاتية التفاعلية السيبرانية",
    description: "تصميم وبناء هذه المحفظة التفاعلية الفريدة التي تحاكي بيئة أنظمة الأوامر الطرفية (Terminal) باستخدام تقنيات React و Tailwind CSS والتحريك الفائق الجودة. تتضمن محاكاة حقيقية لخدمات الشل والطباعة المنسقة الفورية للـ PDF.",
    category: "Full-Stack",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "https://ais-pre-avz2uzcj7jccimh54iaavt-101895778468.europe-west2.run.app",
    github: "https://github.com/Hany-Zamalkawy/My-Portfolio-HANY-S-WORLD"
  }
];
