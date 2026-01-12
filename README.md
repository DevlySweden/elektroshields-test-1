# COMPANY SITE TEMPLATE — CODEX SPEC (DO NOT REFORMAT)

This README is the single source of truth for Codex.
Codex must generate/update the entire website based on this file.

---

## 0) GLOBAL RULES (MUST FOLLOW)

- Treat this README as the only input source.
- Do NOT invent missing values. If a field is empty, keep it empty.
- Only JavaScript (no TypeScript).
- React + Vite project.
- Use plain CSS (no Tailwind). No extra libs unless requested in CONFIG.
- Keep components reusable and content-driven (no company text hardcoded in components).
- All visible website content must be written in Swedish when CONFIG.language.content is "sv-SE".
- Must be responsive (mobile-first).
- Must be accessible: focus states, proper labels, semantic HTML, readable contrast.
- Keep code clean and consistent.

---

## 1) CONFIG (EDIT THIS PER COMPANY) — YAML
IMPORTANT: Do not change the key names.

```yaml
language:
  content: "sv-SE"
  codeComments: "en"

company:
  name: "Elektroshields"
  domain: "elektroshields.se"
  location: "Sverige"
  tagline: "Skärmning & EMC-lösningar med hög finish"
  description: "Professionella lösningar inom skärmning, EMC och relaterade installationer."

contact:
  email: "info@elektroshields.se"
  phone: "+46 XX XXX XX XX"

branding:
  accentColor: "#7c3aed"
  logoPath: "/src/assets/brand/logo.svg"

hero:
  imagePath: "/src/assets/brand/hero.jpg"
  badge: "Skärmning • EMC • Installation"
  headline: "Modern skärmning med fokus på kvalitet."
  subtext: "Vi hjälper företag och projekt med lösningar inom skärmning/EMC — från plan till leverans."
  ctaPrimary: "Kontakta oss"
  ctaSecondary: "Se projekt"

projects:
  sectionTitle: "Projekt"
  sectionText: "Ett urval av vad vi levererar. Vi kan fylla på med fler case och riktiga bilder."
  items:
    - title: "Skärmning av teknikrum"
      desc: "Planering och montage med fokus på finish och servicebarhet."
      imagePath: "/src/assets/projects/p1.jpg"
    - title: "EMC-anpassning i anläggning"
      desc: "Åtgärder för att minska störningar och säkra drift."
      imagePath: "/src/assets/projects/p2.jpg"
    - title: "Installation & dokumentation"
      desc: "Tydlig återrapportering och ordning i detaljerna."
      imagePath: "/src/assets/projects/p3.jpg"

contactSection:
  sectionTitle: "Kontakt"
  sectionText: "Beskriv kort vad du behöver hjälp med så återkommer vi."
  form:
    enabled: true
    submitBehavior: "mock" # allowed: mock
    fields:
      nameLabel: "Namn"
      emailLabel: "E-post"
      messageLabel: "Meddelande"
      namePlaceholder: "Ditt namn"
      emailPlaceholder: "din@mail.se"
      messagePlaceholder: "Berätta kort..."
      submitText: "Skicka"
    disclaimerText: "Formuläret är en mock just nu. Vi kopplar det till e-post/API senare."

footer:
  textTemplate: "© {YEAR} {COMPANY}. Alla rättigheter förbehållna." 
```

## 2) WEBSITE SPEC

This document defines how the website must be built and behave.

## Scope
- Build a **single-page website**.
- The site must be clean, modern, and professional.
- Focus on clarity, spacing, and a premium feel.

## Sections (order is mandatory)
1. Hero
2. Projects
3. Contact
4. Footer

## Language
- All visible website content must be written in **Swedish (sv-SE)**.
- Do not mix languages in UI text.

## Header behavior
- Header is fixed at the top of the page.
- At the top of the page (over the hero section):
  - Header background is transparent.
  - Header is visually integrated with the hero image.
- After scrolling more than **40px**:
  - Header background becomes white.
  - Text color becomes dark.
  - A subtle shadow is added.
  - Transitions must be smooth (120–180ms).

## Navigation
- Header contains:
  - Brand (logo or company name)
  - Navigation links to:
    - Projects
    - Contact
  - One primary CTA button.
- Navigation uses smooth scrolling to section anchors.

## Hero section
- Hero must fill the full viewport height (100vh).
- Hero uses a large background image.
- A dark overlay/gradient must be applied for text readability.
- Hero content includes:
  - A short badge or label
  - A main headline
  - A short descriptive subtext
  - Two CTA buttons:
    - Secondary CTA scrolls to Projects
    - Primary CTA scrolls to Contact
- Button styles:
  - On hero: semi-transparent / glassy appearance
  - When header is scrolled: CTA may appear solid

## Projects section
- Displays a grid of project cards.
- Layout:
  - Desktop: 3 columns
  - Mobile: 1 column
- Each project card includes:
  - Image with aspect ratio 16:10
  - Title
  - Short description
- Cards should have a subtle hover lift effect.

## Contact section
- Section contains:
  - Title
  - Short explanatory text
- Layout:
  - Left side: contact information (email, phone, location)
  - Right side: contact form
- Form behavior:
  - Includes name, email, and message fields
  - Uses proper labels and focus states
  - Submit action is a mock (prevent default submit)
- Accessibility is required (labels, focus, readable contrast).

## Footer
- Footer is simple and minimal.
- Displays copyright text.
- Footer is the final section of the page.

## Technical constraints
- React + Vite
- JavaScript only (no TypeScript)
- Plain CSS only (no Tailwind, no UI libraries)
- Must be responsive and accessible

## 3) FILE MAP

This document defines the required project file structure.

## Root
- README.md
- package.json
- vite.config.js

## Source structure

src/
- App.jsx
- main.jsx

src/content/
- site.js
- projects.js

src/components/
- Header.jsx
- Hero.jsx
- Projects.jsx
- Contact.jsx
- Footer.jsx

src/hooks/
- useScrollPosition.js

src/styles/
- global.css

## Rules
- All listed files must exist.
- Components must import content from src/content/.
- No company-specific strings may be hardcoded in components.
- Styling must be handled via src/styles/global.css.
