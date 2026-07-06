HANY'S WORLD 🌐
A cyber-minimalist, interactive portfolio and resume platform for Moustafa Hany Azab — Software Engineer, Full-Stack Developer, and Data/AI Engineer.

Built as a single-page React app with a live, editable "About" code editor, an animated timeline, a filterable skills/projects system, bilingual (English/Arabic, LTR/RTL) support, and one-click resume export to PDF.


✨ Features
Cyber-minimalist UI with a switchable theme — toggle between a dark "Cyber" mode and a "Terminal Light" high-contrast mode (persisted in localStorage).
Bilingual i18n — full English/Arabic translations with automatic dir="rtl" / dir="ltr" switching (persisted in localStorage).
Interactive About section — an "About Code Editor" component that lets visitors edit the profile bio live in the browser.
Skill filtering — clicking any skill tag filters matching experience and project cards across the page.
Animated sections — smooth transitions and micro-interactions powered by Motion.
Experience timeline — chronological ledger of internships and professional milestones.
Education & certifications — academic background and verified industry certifications.
Projects showcase — categorized project cards (Frontend, Full-Stack, Data & AI, Web Design) with live demo / source code links.
Resume modal & PDF export — generates a downloadable resume PDF on the fly using jsPDF.
Responsive design — built with Tailwind CSS for a clean experience across devices.
🛠️ Tech Stack
Layer
Technology
Framework
React 19 + TypeScript
Build tool
Vite 6
Styling
Tailwind CSS 4
Animations
Motion
Icons
lucide-react
PDF generation
jsPDF
Server (optional)
Express
AI (optional)
@google/genai (Gemini API)

📂 Project Structure
.

├── index.html

├── src/

│   ├── main.tsx                  # App entry point

│   ├── App.tsx                   # Root component — theme, language & modal state

│   ├── data.ts                   # Profile, skills, experience, education & project data

│   ├── translations.ts           # English / Arabic UI copy

│   ├── types.ts                  # Shared TypeScript interfaces

│   ├── index.css                 # Global styles & theme variables

│   └── components/

│       ├── Navbar.tsx

│       ├── Hero.tsx

│       ├── AboutCodeEditor.tsx

│       ├── SkillsSection.tsx

│       ├── ExperienceTimeline.tsx

│       ├── EducationSection.tsx

│       ├── ProjectsShowcase.tsx

│       ├── ResumeModal.tsx

│       └── Footer.tsx

├── vite.config.ts

├── tsconfig.json

└── package.json
🚀 Getting Started
Prerequisites
Node.js (v18 or later recommended)
Installation
# Clone the repository

git clone https://github.com/Hany-Zamalkawy/hany-s-world.git

cd hany-s-world

# Install dependencies

npm install
Environment Variables
Copy .env.example to .env.local and fill in your own values if you plan to use the optional Gemini API integration:

cp .env.example .env.local

GEMINI_API_KEY="your-gemini-api-key"

APP_URL="http://localhost:3000"

The Gemini API key is only required if you extend the project with AI-powered features. The portfolio itself runs fully without it.
Run Locally
npm run dev

The app will be available at http://localhost:3000.
Build for Production
npm run build

npm run preview   # preview the production build locally
Other Scripts
Command
Description
npm run dev
Start the Vite dev server
npm run build
Build an optimized production bundle
npm run preview
Preview the production build
npm run lint
Type-check the project with tsc
npm run clean
Remove build artifacts

🎨 Customization
Profile & content — edit src/data.ts to update skills, experience, education, certifications, and projects.
Translations — add or edit UI copy for English/Arabic in src/translations.ts.
Theme colors — adjust CSS variables in src/index.css for the Cyber and Terminal Light themes.
📄 License
This project is personal portfolio source code. Feel free to reference it, but please don't republish it as your own without permission.
👤 Author
Moustafa Hany Azab (Hany Zamalkawy)

GitHub: @Hany-Zamalkawy
LinkedIn: moustafa-hany-azab
Email: moustfahhany5@gmail.com
