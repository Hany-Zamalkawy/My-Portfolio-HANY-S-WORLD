import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Code, Play, RotateCcw, AlertTriangle, CheckCircle, TerminalSquare } from "lucide-react";
import { Profile } from "../types";
import { uiTranslations } from "../translations";

interface AboutCodeEditorProps {
  profile: Profile;
  onProfileUpdate: (updatedProfile: Profile) => void;
  onResetProfile: () => void;
  lang: "en" | "ar";
}

export default function AboutCodeEditor({
  profile,
  onProfileUpdate,
  onResetProfile,
  lang,
}: AboutCodeEditorProps) {
  const [activeTab, setActiveTab] = useState<"editor" | "terminal">("editor");
  const t = uiTranslations[lang];

  // Code editor states
  const [editableName, setEditableName] = useState(profile.name);
  const [editableRole, setEditableRole] = useState(profile.role);
  const [editableMission, setEditableMission] = useState(profile.mission);
  const [editableFocus, setEditableFocus] = useState(profile.focus.join(", "));
  const [editableBio, setEditableBio] = useState(profile.bio);

  const [compileStatus, setCompileStatus] = useState<"idle" | "compiling" | "success" | "error">("idle");
  const [compileOutput, setCompileOutput] = useState<string[]>([]);

  // Keep editor state synced with outer profile resets
  useEffect(() => {
    setEditableName(profile.name);
    setEditableRole(profile.role);
    setEditableMission(profile.mission);
    setEditableFocus(profile.focus.join(", "));
    setEditableBio(profile.bio);
  }, [profile]);

  // Terminal states
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [terminalInput, setTerminalInput] = useState("");
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTerminalHistory([
      lang === "en" ? "HANY'S WORLD Interactive Shell v1.4.2 (Node.js)" : "عالم هاني - موجه الأوامر التفاعلي v1.4.2",
      lang === "en" ? "Type 'help' to view available developer commands, or 'neofetch' to view system info." : "اكتب 'help' لعرض الأوامر البرمجية المتاحة، أو 'neofetch' لعرض مواصفات النظام.",
      ""
    ]);
  }, [lang]);

  const handleCompile = () => {
    setCompileStatus("compiling");
    setCompileOutput(
      lang === "en" 
        ? ["$ tsc about_me.ts --noEmit", "Analyzing dependencies...", "Verifying type declarations..."]
        : ["$ tsc about_me.ts --noEmit", "تحليل الاعتماديات والروابط المترابطة...", "التحقق من تعريفات الأنواع (Types)..."]
    );

    setTimeout(() => {
      try {
        const focusArray = editableFocus
          .split(",")
          .map((f) => f.trim())
          .filter((f) => f.length > 0);

        if (!editableName.trim() || !editableRole.trim()) {
          throw new Error(
            lang === "en" 
              ? "Validation Error: 'name' and 'role' properties cannot be empty."
              : "خطأ في التحقق: لا يمكن أن تكون قيم الاسم (name) أو الدور (role) فارغة."
          );
        }

        const updated: Profile = {
          name: editableName,
          role: editableRole,
          mission: editableMission,
          focus: focusArray,
          bio: editableBio,
        };

        // Notify parent
        onProfileUpdate(updated);

        setCompileOutput((prev) => [
          ...prev,
          lang === "en" ? "✓ Compilation successful (0 errors, 0 warnings)." : "✓ نجحت عملية المحاكاة والترجمة (0 أخطاء، 0 تحذيرات).",
          `$ node dist/about_me.js`,
          lang === "en" 
            ? `Initialised profile for software engineer: ${editableName}`
            : `تم تهيئة وتحديث الملف الشخصي للمهندس: ${editableName}`,
          lang === "en"
            ? `Role: ${editableRole}`
            : `الدور: ${editableRole}`,
          lang === "en"
            ? "State synchronized across portfolio components."
            : "تم مزامنة حالة التطبيق عبر جميع الواجهات والمكونات الحية بنجاح."
        ]);
        setCompileStatus("success");
      } catch (err: any) {
        setCompileOutput((prev) => [
          ...prev,
          lang === "en" ? "❌ Compilation failed." : "❌ فشلت عملية المحاكاة والترجمة.",
          err.message || "Unknown error occurred during dynamic payload parsing."
        ]);
        setCompileStatus("error");
      }
    }, 1200);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim();
    if (!cmd) return;

    const lowerCmd = cmd.toLowerCase();
    let response: string[] = [];

    switch (lowerCmd) {
      case "help":
        response = lang === "en" ? [
          "Available CLI commands:",
          "  help         - Display this developer utility documentation",
          "  bio          - Print detailed background information",
          "  skills       - list full engineering technical stack",
          "  experience   - Output professional employment history",
          "  projects     - Query highlighted production code templates",
          "  neofetch     - Display ASCII system summary specs",
          "  contact      - Print social and email channels",
          "  clear        - Flush terminal log history"
        ] : [
          "الأوامر البرمجية المتاحة (CLI):",
          "  help         - عرض هذه الوثائق المساعدة والموجه البرمجي",
          "  bio          - طباعة وعرض تفاصيل السيرة الذاتية بدقة",
          "  skills       - سرد التقنيات والمهارات البرمجية المعتمدة",
          "  experience   - عرض ومحاكاة السجل الوظيفي والخبرات السابقة",
          "  projects     - الاستعلام عن المشاريع البرمجية المطورة حياً",
          "  neofetch     - عرض مواصفات وتفاصيل النظام رسومياً",
          "  contact      - عرض قنوات التواصل الاجتماعي والبريد الإلكتروني",
          "  clear        - مسح نافذة موجه الأوامر بالكامل"
        ];
        break;
      case "bio":
        response = [
          lang === "en" ? `Name: ${profile.name}` : `الاسم: ${profile.name}`,
          lang === "en" ? `Role: ${profile.role}` : `الدور: ${profile.role}`,
          lang === "en" ? `Mission: ${profile.mission}` : `المهمة: ${profile.mission}`,
          lang === "en" ? `Focus Stack: ${profile.focus.join(", ")}` : `مجال التركيز: ${profile.focus.join(", ")}`,
          `-------------------------------------------`,
          profile.bio
        ];
        break;
      case "skills":
        response = lang === "en" ? [
          "Technical Stack Analysis:",
          "  - Languages: JavaScript, TypeScript, Python, Go, Swift",
          "  - Frameworks: React, Next.js, Node.js, Flutter",
          "  - Cloud/DevOps: AWS, Docker, Kubernetes, Terraform",
          "  - Databases: PostgreSQL, Redis, MongoDB, Firebase"
        ] : [
          "تحليل المهارات التقنية الحالية:",
          "  - لغات البرمجة: جاوا سكريبت، تايب سكريبت، بايثون، غو، سويفت",
          "  - إطارات العمل: ريأكت، نكست، نود، فلاتر",
          "  - سحابياً/العمليات: AWS، دوكر، كوبرنيتيس، تيرافورم",
          "  - قواعد البيانات: بوستغريس، ريديس، مونغو، فايربيز"
        ];
        break;
      case "experience":
        response = lang === "en" ? [
          "Professional Journey Timeline:",
          "  1. FlyRank AI (June 2026 - Present) | Backend AI Engineering Intern",
          "     ↳ Optimized search and built AI discovery agents.",
          "  2. PathLine Academy (Feb 2026 - Present) | Web Development Intern",
          "     ↳ Implemented scalable client interfaces with React.",
          "  3. itida+gigs (Mar 2026 - June 2026) | Freelance Intern",
          "     ↳ Managed international clients and delivered full-stack web products.",
          "  4. iCareer (Nov 2025 - Dec 2025) | Tech Training Intern",
          "     ↳ Automations and basic scripting modules."
        ] : [
          "جدول مسيرة الخبرة الاحترافية:",
          "  1. FlyRank AI (يونيو 2026 - الحالي) | متدرب هندسة ذكاء اصطناعي للباك إند",
          "     ↳ تحسين محركات البحث وبناء وكلاء اكتشاف ذكيين.",
          "  2. PathLine Academy (فبراير 2026 - الحالي) | متدرب تطوير الويب والفرونت إند",
          "     ↳ تنفيذ وتطوير واجهات مرنة باستخدام React.",
          "  3. itida+gigs (مارس 2026 - يونيو 2026) | متدرب العمل الحر وتأهيل المهندسين",
          "     ↳ إدارة وتطوير حلول برمجية لعملاء دوليين وتسليم مشاريع ويب متكاملة.",
          "  4. iCareer (نوفمبر 2025 - ديسمبر 2025) | متدرب أتمتة الأنظمة لغير التقنيين",
          "     ↳ كتابة نصوص برمجية أساسية وحلول أتمتة العمليات."
        ];
        break;
      case "projects":
        response = lang === "en" ? [
          "Featured Repository Query Results:",
          "  - Creative Digital Agency Leon (Web Design) -> https://hany-zamalkawy.github.io/Leon-Agency/",
          "  - -VOLT-Sports (Data & AI) -> Metrics visualizer with Python",
          "  - ArtisanTable (Full-Stack) -> Fine-dining restaurant system",
          "  - Book Review Platform (Full-Stack) -> Node.js and Express platform",
          "  - Plant Nursery Shopping Cart (Frontend) -> State-managed checkout client"
        ] : [
          "نتائج الاستعلام عن المستودعات المميزة:",
          "  - موقع Leon للوكالات الإبداعية الرقمية (تصميم ويب) -> https://hany-zamalkawy.github.io/Leon-Agency/",
          "  - منصة VOLT Sports (بيانات وذكاء اصطناعي) -> مصور الأداء الرياضي باستخدام بايثون",
          "  - ArtisanTable (تطوير شامل) -> نظام مطاعم فاخر وتفاعلي",
          "  - منصة مراجعة الكتب الإلكترونية (تطوير شامل) -> تطبيق ويب مطور بـ Node.js",
          "  - عربة تسوق مشاتل النباتات (فرونت إند) -> إدارة حالة سلة المشتريات التفاعلية"
        ];
        break;
      case "neofetch":
        response = [
          "    _    ____   ____ _   _ ___ _____ _____ ____ _____ ",
          "   / \\  |  _ \\ / ___| | | |_ _|_   _| ____/ ___|_   _|",
          "  / _ \\ | |_) | |   | |_| || |  | | |  _|| |     | |  ",
          " / ___ \\|  _ <| |___|  _  || |  | | | |__| |___  | |  ",
          "/_/   \\_\\_| \\_\\\\____|_| |_|___| |_| |_____\\____| |_|  ",
          "                                                      ",
          "OS: Hany-OS v2.0.4 x86_64",
          `Kernel: Linux 6.1.0-custom-port-3000`,
          `Uptime: 2 days, 14 hours`,
          `Target: ${profile.name}`,
          `Role: ${profile.role}`,
          `Shell: zsh 5.9 (x86_64-pc-linux-gnu)`,
          `Terminal: Virtual DOM Simulated Shell`
        ];
        break;
      case "contact":
        response = lang === "en" ? [
          "Established API Access Endpoints:",
          "  - Email: moustfahhany5@gmail.com",
          "  - GitHub: https://github.com/Hany-Zamalkawy",
          "  - LinkedIn: https://www.linkedin.com/in/moustafa-hany-azab-4550692b9/",
          "  - Instagram: https://www.instagram.com/hany_zamlkawy/",
          "  - Facebook: https://www.facebook.com/Hany.Zamlkawy",
          "  - WhatsApp: @Hany_Zamlkawy",
          "  - Telegram: @Hany_Zamlkawy (https://t.me/Hany_Zamlkawy)"
        ] : [
          "قنوات الاتصال المعتمدة لطلب الخدمات:",
          "  - البريد الإلكتروني: moustfahhany5@gmail.com",
          "  - غيت هاب: https://github.com/Hany-Zamalkawy",
          "  - لينكد إن: https://www.linkedin.com/in/moustafa-hany-azab-4550692b9/",
          "  - إنستغرام: https://www.instagram.com/hany_zamlkawy/",
          "  - فيسبوك: https://www.facebook.com/Hany.Zamlkawy",
          "  - واتساب: @Hany_Zamlkawy",
          "  - تليغرام: @Hany_Zamlkawy (https://t.me/Hany_Zamlkawy)"
        ];
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        response = lang === "en" ? [
          `Command not found: '${cmd}'.`,
          "Type 'help' to review a list of valid terminal commands."
        ] : [
          `لم يتم العثور على الأمر: '${cmd}'.`,
          "اكتب 'help' لمراجعة قائمة الأوامر البرمجية الصالحة."
        ];
    }

    setTerminalHistory((prev) => [...prev, `hany@world:~$ ${cmd}`, ...response, ""]);
    setTerminalInput("");
  };

  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalHistory]);

  return (
    <section id="about" className="space-y-6">
      {/* Editor Mockup Shell */}
      <div className="bg-[#091009] border border-[#3d4a3d] rounded-sm overflow-hidden shadow-2xl terminal-glow">
        
        {/* Editor Titlebar / Header */}
        <div className="bg-[#161d16] px-4 py-3 border-b border-[#3d4a3d] flex justify-between items-center flex-wrap gap-2">
          
          {/* OS Window dots */}
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-[#ffb4ab]/30 border border-[#ffb4ab]/60" />
            <div className="w-3 h-3 rounded-full bg-[#ff8b7c]/30 border border-[#ff8b7c]/60" />
            <div className="w-3 h-3 rounded-full bg-[#4be277]/30 border border-[#4be277]/60" />
          </div>

          {/* Interactive Navigation Tab Headers */}
          <div className="flex gap-1 bg-[#091009] p-1 border border-[#3d4a3d]/60 rounded-sm">
            <button
              onClick={() => setActiveTab("editor")}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono tracking-wider transition-colors rounded-sm ${
                activeTab === "editor"
                  ? "bg-[#242c24] text-[#4be277] border border-[#3d4a3d]"
                  : "text-[#bccbb9]/60 hover:text-white"
              }`}
              id="about-editor-tab"
            >
              <Code className="w-3.5 h-3.5" />
              about_me.ts
            </button>
            <button
              onClick={() => setActiveTab("terminal")}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono tracking-wider transition-colors rounded-sm ${
                activeTab === "terminal"
                  ? "bg-[#242c24] text-[#4be277] border border-[#3d4a3d]"
                  : "text-[#bccbb9]/60 hover:text-white"
              }`}
              id="about-terminal-tab"
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              world.sh
            </button>
          </div>

          <div className="text-[10px] font-mono text-[#bccbb9]/40 hidden sm:block">
            UTF-8 | TypeScript
          </div>
        </div>

        {/* Dynamic Content Frame */}
        <div className="p-4 md:p-6 lg:p-8 min-h-[360px] flex flex-col justify-between" dir="ltr">
          
          {activeTab === "editor" ? (
            <div className="space-y-6" id="editor-view">
              <div className="space-y-1">
                <span className="text-[#4be277] font-mono text-xs">const</span>{" "}
                <span className="text-[#dce5d9] font-mono text-xs font-semibold">architect</span>{" "}
                <span className="text-[#4be277] font-mono text-xs">=</span>{" "}
                <span className="text-[#bccbb9] font-mono text-xs">{"{"}</span>
              </div>

              {/* Inline input form elements disguised as TypeScript declarations */}
              <div className="pl-6 space-y-4 font-mono text-xs leading-relaxed">
                {/* Name */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-[#bccbb9]/60 w-16">name:</span>
                  <div className="flex items-center gap-1 bg-[#161d16] px-2 py-1 border border-[#3d4a3d] rounded-sm w-full max-w-sm">
                    <span className="text-[#ff8b7c]">"</span>
                    <input
                      type="text"
                      value={editableName}
                      onChange={(e) => setEditableName(e.target.value)}
                      className="bg-transparent text-[#ff8b7c] focus:outline-none w-full border-none font-mono"
                      placeholder={lang === "en" ? "Your Full Name" : "الاسم بالكامل"}
                      id="editor-input-name"
                    />
                    <span className="text-[#ff8b7c]">",</span>
                  </div>
                </div>

                {/* Role */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-[#bccbb9]/60 w-16">role:</span>
                  <div className="flex items-center gap-1 bg-[#161d16] px-2 py-1 border border-[#3d4a3d] rounded-sm w-full max-w-sm">
                    <span className="text-[#ff8b7c]">"</span>
                    <input
                      type="text"
                      value={editableRole}
                      onChange={(e) => setEditableRole(e.target.value)}
                      className="bg-transparent text-[#ff8b7c] focus:outline-none w-full border-none font-mono"
                      placeholder={lang === "en" ? "Title / Position" : "المسمى الوظيفي"}
                      id="editor-input-role"
                    />
                    <span className="text-[#ff8b7c]">",</span>
                  </div>
                </div>

                {/* Mission */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-[#bccbb9]/60 w-16">mission:</span>
                  <div className="flex items-center gap-1 bg-[#161d16] px-2 py-1 border border-[#3d4a3d] rounded-sm w-full max-w-sm">
                    <span className="text-[#ff8b7c]">"</span>
                    <input
                      type="text"
                      value={editableMission}
                      onChange={(e) => setEditableMission(e.target.value)}
                      className="bg-transparent text-[#ff8b7c] focus:outline-none w-full border-none font-mono"
                      placeholder={lang === "en" ? "Development Philosophy" : "فلسفة العمل البرمجي"}
                      id="editor-input-mission"
                    />
                    <span className="text-[#ff8b7c]">",</span>
                  </div>
                </div>

                {/* Focus Keywords */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-[#bccbb9]/60 w-16">focus:</span>
                  <div className="flex items-center gap-1 bg-[#161d16] px-2 py-1 border border-[#3d4a3d] rounded-sm w-full max-w-md">
                    <span className="text-[#bccbb9]/50">[</span>
                    <input
                      type="text"
                      value={editableFocus}
                      onChange={(e) => setEditableFocus(e.target.value)}
                      className="bg-transparent text-[#ff8b7c] focus:outline-none w-full border-none font-mono"
                      placeholder={lang === "en" ? "Tag keywords separated by commas" : "كلمات دلالية مفصولة بفاصلة"}
                      id="editor-input-focus"
                    />
                    <span className="text-[#bccbb9]/50">],</span>
                  </div>
                  <span className="text-[10px] text-[#bccbb9]/40 italic hidden lg:inline">
                    ({lang === "en" ? "Comma separated" : "مفصولة بفاصلة"})
                  </span>
                </div>

                {/* Bio text block */}
                <div className="flex flex-col gap-2">
                  <span className="text-[#bccbb9]/60">bio:</span>
                  <div className="bg-[#161d16] p-2 border border-[#3d4a3d] rounded-sm w-full">
                    <span className="text-[#ff8b7c]">"</span>
                    <textarea
                      value={editableBio}
                      onChange={(e) => setEditableBio(e.target.value)}
                      className="bg-transparent text-[#ff8b7c] focus:outline-none w-full h-32 border-none font-mono resize-y"
                      placeholder={lang === "en" ? "Enter a complete professional bio writeup here." : "اكتب السيرة الذاتية المهنية الشاملة هنا."}
                      id="editor-input-bio"
                    />
                    <span className="text-[#ff8b7c]">"</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[#bccbb9] font-mono text-xs">{"};"}</span>
              </div>

              {/* Action panels inside code workspace */}
              <div className="mt-8 border-t border-[#3d4a3d]/40 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleCompile}
                    disabled={compileStatus === "compiling"}
                    className="flex items-center gap-2 bg-[#4be277] hover:bg-white text-[#003915] hover:text-[#0e150e] font-mono text-xs uppercase tracking-wider px-4 py-2 font-bold transition-all disabled:opacity-50 active:scale-95 cursor-pointer"
                    id="editor-compile-btn"
                  >
                    <Play className="w-3.5 h-3.5" />
                    {compileStatus === "compiling" ? (lang === "en" ? "Compiling..." : "جاري الترجمة...") : (lang === "en" ? "Run and Compile" : "تشغيل وترجمة الكود")}
                  </button>
                  <button
                    onClick={onResetProfile}
                    className="flex items-center gap-2 border border-[#3d4a3d] hover:border-[#ff8b7c] hover:text-[#ff8b7c] text-[#bccbb9] font-mono text-xs uppercase tracking-wider px-4 py-2 transition-all active:scale-95 cursor-pointer"
                    id="editor-reset-btn"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    {lang === "en" ? "Reset Data" : "إعادة تعيين البيانات"}
                  </button>
                </div>

                {/* Live Compiler Visual Outputs */}
                {compileStatus !== "idle" && (
                  <div className="w-full sm:w-auto p-3 bg-[#161d16] border border-[#3d4a3d] text-xs font-mono max-w-md rounded-sm w-full">
                    <div className="flex items-center gap-2 mb-2 font-semibold">
                      {compileStatus === "compiling" && (
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse" />
                      )}
                      {compileStatus === "success" && (
                        <CheckCircle className="w-4 h-4 text-[#4be277]" />
                      )}
                      {compileStatus === "error" && (
                        <AlertTriangle className="w-4 h-4 text-[#ff8b7c]" />
                      )}
                      <span className="text-[#dce5d9]">
                        {compileStatus === "compiling" && (lang === "en" ? "Building Profile Engine..." : "بناء محرك ملف التعريف الشخصي...")}
                        {compileStatus === "success" && (lang === "en" ? "Profile Successfully Compiled" : "تم ترجمة وحفظ الملف الشخصي بنجاح")}
                        {compileStatus === "error" && (lang === "en" ? "Compilation Errors Found!" : "تم العثور على أخطاء ترجمة!")}
                      </span>
                    </div>
                    <div className="text-[10px] text-[#bccbb9]/60 max-h-24 overflow-y-auto space-y-1">
                      {compileOutput.map((line, idx) => (
                        <div key={idx} className={line.startsWith("❌") || line.startsWith("Validation") || line.includes("خطأ") ? "text-[#ff8b7c]" : line.startsWith("✓") || line.startsWith("Success") || line.includes("نجحت") ? "text-[#4be277]" : ""}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Terminal Shell view */
            <div className="flex flex-col justify-between h-full font-mono text-xs leading-relaxed" id="terminal-view">
              <div className="max-h-[300px] overflow-y-auto space-y-2 pr-2">
                {terminalHistory.map((line, idx) => (
                  <div key={idx} className="whitespace-pre-wrap select-text">
                    {line.startsWith("hany@") || line.startsWith("guest@") || line.includes("hany@world") ? (
                      <span>
                        <span className="text-[#4be277] font-semibold">hany@world</span>
                        <span className="text-[#dce5d9] font-semibold">:</span>
                        <span className="text-blue-400">~$</span>{" "}
                        {line.split("~$ ")[1]}
                      </span>
                    ) : line.startsWith("Os:") || line.startsWith("OS:") || line.startsWith("Kernel:") || line.startsWith("Target:") || line.startsWith("الاسم:") || line.startsWith("الدور:") ? (
                      <span className="text-[#bccbb9]">{line}</span>
                    ) : (
                      <span className="text-[#bccbb9]/90">{line}</span>
                    )}
                  </div>
                ))}
                <div ref={terminalBottomRef} />
              </div>

              {/* Command Prompt Line */}
              <form onSubmit={handleTerminalSubmit} className="mt-4 border-t border-[#3d4a3d]/20 pt-3 flex items-center gap-1.5">
                <span className="text-[#4be277] font-bold">hany@world</span>
                <span className="text-[#dce5d9]">:</span>
                <span className="text-blue-400 font-bold">~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="bg-transparent text-white focus:outline-none flex-1 font-mono text-xs border-none"
                  placeholder={lang === "en" ? "type 'help' or 'neofetch'..." : "اكتب 'help' أو 'neofetch'..."}
                  autoFocus={activeTab === "terminal"}
                  id="terminal-input-prompt"
                />
              </form>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
