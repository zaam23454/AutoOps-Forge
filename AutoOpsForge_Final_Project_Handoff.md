# AutoOps Forge Final Project Handoff

Last updated: 2026-07-28
Primary working directory: `E:\WORK\AutoOpsForge\AutoOpsForge_dev`

This document is the end-to-end memory handoff for the AutoOps Forge website. It captures the project direction, architecture, design system, page work, content decisions, assets, backend/contact flow, troubleshooting, and polishing decisions made during the build. A future AI/session should read this before making any change.

## 1. Project Identity

AutoOps Forge is a dark sci-fi software, automation, DevOps, and agentic engineering portfolio/service website for Maaz Khalid.

Brand promise:

- Develop.
- Automate.
- Deploy.

Core positioning:

- Custom software
- Automation-first systems
- DevOps-backed delivery
- Agentic engineering
- Reliable deployment and technical support

Primary audience:

- Clients who need websites, custom software, automation, DevOps, deployment support, dashboards, internal tools, or AI-assisted technical delivery.
- Recruiters/hiring managers reviewing Maaz Khalid's DevOps, automation, support, platform, and AI-assisted engineering experience.

Tone:

- Premium
- Technical
- Confident
- Practical
- Not generic SaaS
- Not playful/bright
- Dark sci-fi, mecha, HUD interface

## 2. Approved Design Direction

The visual design is based on the approved AutoOps Forge references:

- `E:\WORK\AutoOpsForge\a_wide_dark_sci_fi_ui_design_system_style_guide.png`
- `E:\WORK\AutoOpsForge\ChatGPT Image Jun 17, 2026, 12_20_07 AM (1).png`
- Homepage mockup: `E:\WORK\AutoOpsForge\ChatGPT Image Jun 17, 2026, 02_48_40 AM.png`
- Services mockup: `E:\WORK\AutoOpsForge\ChatGPT Image Jun 17, 2026, 02_47_59 AM (2).png`
- Projects mockup: `E:\WORK\AutoOpsForge\ChatGPT Image Jun 17, 2026, 02_48_00 AM (3).png`
- Portfolio mockup: `E:\WORK\AutoOpsForge\ChatGPT Image Jun 17, 2026, 02_48_53 AM.png`
- Contact mockup: `E:\WORK\AutoOpsForge\ChatGPT Image Jun 17, 2026, 02_48_00 AM (5).png`

Design keywords:

- Dark graphite background
- Electric cyan glow
- Forge orange accents
- Metallic AOF/mecha emblem
- Thin borders
- Tactical HUD corners
- Glass cards
- Blended cinematic hero images
- Technical line icons
- Compact professional layout

Do not convert the design into:

- Generic MUI look
- Tailwind template
- Bright SaaS landing page
- Rounded bubbly UI
- Heavy gradients/orbs
- Marketing-only homepage

## 3. Tech Stack

Framework:

- Next.js 15 App Router
- React 19
- TypeScript

Styling:

- CSS Modules
- Global CSS tokens
- Custom CSS only for visuals
- MUI v7 is used only for layout primitives where helpful
- No Tailwind
- No default MUI Card/Button visual styling

UI/animation:

- `lucide-react` for icons
- `framer-motion` for controlled motion

Important scripts:

```bash
npm run dev
npx tsc --noEmit
npm run lint
npm run build
```

During polishing, avoid getting stuck on `npm run build`. The preferred quick verification is:

```bash
npx tsc --noEmit
npm run lint
```

Manual local run command:

```bash
cd E:\WORK\AutoOpsForge\AutoOpsForge_dev
npm run dev
```

## 4. Current Project Structure

Important files and folders:

```text
E:\WORK\AutoOpsForge\AutoOpsForge_dev
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── page.tsx
│   │   ├── contact\page.tsx
│   │   ├── portfolio\page.tsx
│   │   ├── process\page.tsx
│   │   ├── projects\page.tsx
│   │   ├── services\page.tsx
│   │   ├── services\devops-deployment\page.tsx
│   │   ├── services\custom-software-development\page.tsx
│   │   ├── services\automation-scripting\page.tsx
│   │   ├── services\agentic-engineering\page.tsx
│   │   └── api\contact\route.ts
│   ├── components
│   │   ├── layout
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navbar.module.css
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.module.css
│   │   │   ├── PageShell.tsx
│   │   │   └── PageShell.module.css
│   │   ├── sections
│   │   │   ├── HomeHero.tsx
│   │   │   ├── HomeSections.module.css
│   │   │   ├── ProblemStrip.tsx
│   │   │   ├── ServicesPreview.tsx
│   │   │   ├── FeaturedProject.tsx
│   │   │   ├── ProcessTimeline.tsx
│   │   │   ├── TechStackGrid.tsx
│   │   │   ├── TestimonialSection.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   ├── Prompt3Sections.tsx
│   │   │   ├── Prompt3Pages.module.css
│   │   │   ├── PortfolioSections.tsx
│   │   │   ├── PortfolioSections.module.css
│   │   │   ├── Prompt5Sections.tsx
│   │   │   ├── Prompt5Pages.module.css
│   │   │   └── ContactForm.tsx
│   │   ├── services
│   │   │   └── ServiceDetailTemplate.tsx
│   │   └── ui
│   │       ├── GlassCard.tsx
│   │       ├── HudPanel.tsx
│   │       ├── GlowButton.tsx
│   │       ├── IconBox.tsx
│   │       ├── MetricCard.tsx
│   │       ├── SectionHeader.tsx
│   │       ├── StatusPill.tsx
│   │       └── TechBadge.tsx
│   ├── data
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   ├── process.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── certifications.ts
│   │   ├── contactOptions.ts
│   │   ├── navigation.ts
│   │   ├── portfolioProjects.ts
│   │   ├── techStack.ts
│   │   └── testimonials.ts
│   ├── lib
│   │   ├── contactSchema.ts
│   │   ├── contactSubmit.ts
│   │   ├── googleSheets.ts
│   │   ├── email.ts
│   │   └── motion.ts
│   ├── styles
│   │   ├── tokens.css
│   │   ├── animations.css
│   │   └── utilities.css
│   └── theme
│       ├── tokens.ts
│       └── theme.ts
├── public
│   ├── brand
│   ├── docs
│   └── portfolio
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── .env.local
```

## 5. Approved Public Assets

Brand assets:

```text
public\brand\autoops-forge-hero-reference.png
public\brand\autoops-forge-main-logo.png
public\brand\autoops-forge-mark.png
public\brand\autoops-forge-markOld.png
public\brand\autoops-forge-mark_old.png
public\brand\autoops-forge-wide-wordmark.png
public\brand\autoops-forge-wide-wordmark_old.png
public\brand\hero-aof-lab.png
public\brand\main-hero-image.png
```

Portfolio assets:

```text
public\portfolio\maaz-portrait-cutout.png
public\portfolio\portfolio-hero-banner-desktop.png
public\portfolio\portfolio-hero-scene-wide.png
public\portfolio\mobile-portrait-hero.png
```

Docs:

```text
public\docs\maaz-khalid-cv.pdf
```

Rules:

- Use approved AOF/logo image assets.
- Do not use random generated logos.
- Do not recreate the hero emblem with flat CSS text.
- Logo/wordmark should look intentional and premium.
- Hero images should blend into the background, not appear as boxed cards.

## 6. Design System Components

Reusable UI components live in:

```text
src\components\ui
```

Important components:

- `GlassCard`: dark transparent card, thin border, HUD corners, subtle inner glow, hover glow.
- `HudPanel`: tactical container for grouped content, thin border, clipped corners, cyan/orange accent lines.
- `GlowButton`: primary cyan, secondary cyan outline, accent orange outline, angular tech style.
- `IconBox`: lucide line icon treatment with cyan/orange hover glow.
- `MetricCard`: HUD-style number cards.
- `TechBadge`: compact technology/tag chips.
- `SectionHeader`: mono label + section heading.
- `StatusPill`: small state indicators.

Design rules:

- Use cyan for primary technical glow.
- Use forge orange for accent/highlight panels.
- Keep borders thin.
- Keep hover controlled: slight lift/glow only.
- Avoid noisy effects.
- Prefer reusable component/CSS changes over one-off inline styles.

## 7. Typography

Typography direction:

- Large display headings: Orbitron/futuristic heading style.
- Subheads/card headings: Rajdhani.
- Body text: Inter.
- Small labels/badges/eyebrows: Share Tech Mono.

Typography vibe:

- Futuristic
- Technical
- Readable
- Sharp
- High contrast

Avoid:

- Tiny unreadable text in important cards.
- Huge heading text inside compact cards.
- Negative letter spacing.

## 8. Pages Built and Approved

### Homepage

Main route:

```text
src\app\page.tsx
```

Main section/component files:

```text
src\components\sections\HomeHero.tsx
src\components\sections\HomeSections.module.css
src\components\sections\ProblemStrip.tsx
src\components\sections\ServicesPreview.tsx
src\components\sections\FeaturedProject.tsx
src\components\sections\ProcessTimeline.tsx
src\components\sections\TechStackGrid.tsx
src\components\sections\TestimonialSection.tsx
src\components\sections\FinalCTA.tsx
src\components\sections\homeData.ts
```

Homepage sections:

- Hero
- Trust indicators
- Broken systems strip
- Services preview
- Featured Shiraz AC Fix project
- Process timeline
- Tech stack
- Testimonial
- Final CTA
- Footer

Final homepage status:

- Approved and should be treated as locked.
- Only very small polish changes should be made if absolutely necessary.

Important homepage hero decision:

- Uses `public\brand\main-hero-image.png`.
- The image must be a blended cinematic background layer, not a card.
- Text lives above image.
- Left overlay protects readability.
- Top/bottom fades blend the image into the page.

Final hero image integration concept:

```css
.hero {
  position: relative;
  overflow: hidden;
}

.heroVisual {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.heroImage {
  position: absolute;
  inset: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100%;
  object-fit: cover;
  object-position: center right;
  opacity: 0.82;
  filter: saturate(1.05) contrast(1.06) brightness(0.72);
}
```

Overlay reason:

- Earlier the home hero image was constrained mostly to the right side, which created a visible vertical edge where the image began.
- Services/projects hero images looked smoother because they behaved more like full-background plates with stronger fade/masking.
- The fix was to let the image span the hero and strengthen the left readability overlay.

Broken systems strip fix:

- Problem: “Broken Systems” and “Need a Custom Solution?” were not aligned.
- Fix: make the problem items use consistent icon/text columns and equal heading height.
- Desktop alignment should stay desktop-only so mobile does not break.

Process timeline fix:

- Problem: lower text lines under each process step wrapped unevenly.
- Fix: center each step, constrain paragraph width, use balanced wrapping, keep timeline connector hidden where it caused visual noise.

### Services Page

Route:

```text
src\app\services\page.tsx
```

Main files:

```text
src\components\sections\Prompt3Sections.tsx
src\components\sections\Prompt3Pages.module.css
src\data\services.ts
```

Service detail template:

```text
src\components\services\ServiceDetailTemplate.tsx
```

Service detail routes:

```text
src\app\services\devops-deployment\page.tsx
src\app\services\custom-software-development\page.tsx
src\app\services\automation-scripting\page.tsx
src\app\services\agentic-engineering\page.tsx
```

Services page sections:

- Services hero
- Core services
- Capabilities & Technologies
- Why clients choose AutoOps Forge
- CTA/footer

Important services page decision:

- The service cards and data live in `src\data\services.ts`.
- The details pages are generated from `serviceDetails`.
- The overview/core cards use the same service data, so updating one object can affect both preview cards and detail pages.

#### DevOps & Deployment Content

User-approved/locked direction:

- CI/CD pipelines
- Cloud deployments
- Infrastructure automation
- Containerization
- Monitoring
- Release troubleshooting
- Rollback planning
- Production support

Important skills included:

- Terraform
- Ansible
- Ansible Tower
- Azure
- AWS
- GCP
- S3
- Vercel
- Docker
- Docker Compose
- Jenkins
- GitHub Actions
- Azure DevOps
- Bitbucket
- CircleCI
- Nginx
- Nginx Plus
- IIS
- Datadog
- Grafana
- Postman
- REST APIs
- PowerShell
- Bash
- Google Apps Script
- PostgreSQL
- SQL Server

Content tone:

- Do not just say “deployment support.”
- Show real 2026 pain points: broken CI/CD, failed deployments, rollback gaps, cache/routing refresh issues, environment mismatch, config drift, poor monitoring/logs, slow release cycles.

#### Custom Software Development Content

User skills included:

- .NET Framework legacy apps
- .NET MVC
- .NET 8
- .NET 10
- C#
- REST APIs
- React/Next.js/TypeScript
- HTML/CSS dashboards
- SQL Server
- PostgreSQL
- MySQL
- Google Apps Script
- Azure / Active Directory workflows
- Windows Forms
- PowerShell
- Customer portals
- Inventory systems
- E-commerce sites
- One-page business websites
- Shiraz AC Fix website
- Feature extension for existing applications
- Legacy migration and modernization

Content should make Maaz look like someone who can:

- Build new apps
- Extend existing apps
- Modernize legacy systems
- Create practical business tools
- Integrate APIs/databases
- Reduce manual team work

#### Automation & Scripting Content

User skills included:

- PowerShell
- Bash
- Python
- Cron jobs
- Windows Task Scheduler
- Azure Functions
- REST API automation
- Postman automation
- Ansible jobs/playbooks
- Ansible Tower
- Windows Forms
- One-click EXE tools
- Datadog dashboard/update automation
- Playwright
- Google Apps Script
- Macro/keystroke/mouse workflow automation

Important wording:

- For macro/keystroke/mouse automation, keep wording professional and ethical:
  “approved desktop workflow automation,”
  “keystroke/mouse macro workflows for owned/internal processes,”
  not surveillance or hidden tracking.

#### Agentic Engineering Content

User background:

- Using GPT/AI tooling since 2022.
- Understands good prompts vs bad prompts.
- Created RCA agents for failing pipelines.
- Created skills/workflows to analyze issues.
- Uses Codex, GPT, Claude, Gemini, Google AI Studio, Blackbox.
- Understands MCP-style app/tool connections.
- Built/shipped Shiraz AC Fix using Codex/AI workflows.
- This AutoOps Forge website direction, content, logo/visual planning, and page strategy were built through AI-assisted workflow.

Good positioning:

- Agentic Engineering
- AI-assisted delivery
- Human-in-the-loop AI workflows
- RCA agents
- Prompt/workflow engineering
- Technical planning and debugging agents
- AI-assisted documentation and handoff systems

Avoid:

- “Vibe coder” as the main professional label.
- Overclaiming autonomous AI replacing engineering judgment.

### Projects Page

Route:

```text
src\app\projects\page.tsx
```

Main files:

```text
src\components\sections\Prompt3Sections.tsx
src\components\sections\Prompt3Pages.module.css
src\data\projects.ts
src\data\testimonials.ts
```

Projects page sections:

- Hero with “Selected Work. Real Impact.”
- Stats
- Filter tabs
- Featured Shiraz AC Fix project
- Project details/workflow
- More work cards
- Testimonial
- CTA/footer

Primary featured project:

- Shiraz AC Fix
- Business one-page service website
- Booking/lead capture/WhatsApp workflow
- Google Sheets capture
- Vercel deployment
- Next.js/TypeScript/Tailwind/Google Sheets/WhatsApp API in content

Status:

- Approved and locked.

### Portfolio Page

Route:

```text
src\app\portfolio\page.tsx
```

Main files:

```text
src\components\sections\PortfolioSections.tsx
src\components\sections\PortfolioSections.module.css
src\data\skills.ts
src\data\experience.ts
src\data\certifications.ts
src\data\portfolioProjects.ts
```

Final portfolio hero decision:

- Desktop/tablet uses the approved wide banner image as its visual plate:

```text
public\portfolio\portfolio-hero-banner-desktop.png
```

- Phone widths up to `760px` use the dedicated portrait artwork:

```text
public\portfolio\mobile-portrait-hero.png
```

- The phone artwork already contains the portrait, AOF environment, Portfolio label, name, role, and introductory copy.
- Do not render duplicate visible hero copy over the phone artwork. The semantic HTML heading/copy remains in the DOM using a visually-hidden treatment for accessibility and SEO.
- Download CV, Let's Work Together, and the four metrics remain live interactive UI immediately below the phone artwork.
- The older transparent portrait and scene assets are not requested by the phone layout.
- Preserve the exact artwork aspect ratio (`941 / 1669`) so the supplied composition is not cropped.
- Preserve desktop background blending/masking above the mobile breakpoint.

Hero content:

- Portfolio
- Maaz Khalid
- DevOps Engineer, Automation Specialist, and AI-Assisted Developer
- Summary paragraph
- Download CV button
- Let’s Work Together button
- Metrics:
  - 8+ Years Experience
  - 50+ Projects Delivered
  - 24/7 Automation First
  - 100% Client Focused
- Availability card on right/bottom:
  - Open to
  - Remote - Global - Hybrid
  - Freelance - Contract - Full-time

Portfolio sections:

- Hero
- Professional summary
- Tech stack & expertise
- Career progression
- Certifications & training
- Selected projects
- CTA/footer

#### Portfolio Professional Summary

Old heading rejected:

- “Technical Operator for Reliable Delivery”

Better heading direction:

- “DevOps, Automation & AI-Assisted Software Engineer”

Professional summary should communicate:

- DevOps engineer
- Automation specialist
- Software builder
- Cloud/infrastructure experience
- Support and QA awareness
- Agentic/AI-assisted engineering
- Practical delivery mindset

Recommended summary:

```text
I'm Maaz Khalid, a DevOps Engineer, Automation Specialist, and AI-assisted software builder focused on reliable delivery, practical automation, and scalable technical systems. I bridge development, infrastructure, support, QA, and cloud operations to turn manual workflows, unstable deployments, and complex requirements into clean, production-ready solutions.
```

Summary capability cards:

- Software Engineering
  - Custom apps, APIs, dashboards, and maintainable web systems.
- DevOps & Cloud
  - CI/CD, infrastructure automation, cloud delivery, and release reliability.
- Automation
  - PowerShell, Bash, scheduled jobs, APIs, and one-click workflow tools.
- Support & Reliability
  - Troubleshooting, monitoring, QA mindset, and production support.
- Agentic Engineering
  - AI-assisted workflows, RCA agents, prompts, reviews, and delivery systems.

#### Portfolio Expertise

Data file:

```text
src\data\skills.ts
```

`portfolioExpertise` should be aligned with the updated services content. Recommended groups:

- DevOps & Cloud
- CI/CD & Release
- Software Development
- Automation & APIs
- Monitoring & Support
- Data & QA
- Agentic Engineering

Include skills such as:

- Azure, AWS, GCP, Vercel
- Terraform, ARM Templates
- Ansible, Ansible Tower
- Docker, Docker Compose, Kubernetes Basics
- Linux, Windows Server, Nginx, Nginx Plus, IIS
- Jenkins, GitHub Actions, Azure DevOps, Bitbucket, CircleCI
- Release troubleshooting, rollback planning, pipeline RCA
- .NET Framework, .NET MVC, .NET 8, .NET 10, C#, React, Next.js, TypeScript, Node.js
- REST APIs, Postman, middleware APIs
- PowerShell, Bash, Python, Cron, Task Scheduler, Azure Functions
- Google Apps Script, Windows Forms, One-click EXEs, Playwright, macro workflows
- Datadog, Grafana, logging, alerting, L3 support
- SQL Server, PostgreSQL, MySQL
- Manual testing, Jira, UAT
- GPT, Codex, Claude, Gemini, Google AI Studio, Blackbox, MCP, prompt engineering, RCA agents

#### Portfolio Experience / Career Progression

Data file:

```text
src\data\experience.ts
```

Rendering file:

```text
src\components\sections\PortfolioSections.tsx
```

CSS file:

```text
src\components\sections\PortfolioSections.module.css
```

Contour Software was updated from a single flat entry into a featured phased entry.

Current intended data shape:

```ts
export const experienceEntries = [
  {
    period: "2022 - Present",
    company: "Contour Software",
    division: "Integrated Dealer System (IDS)",
    role: "DevOps Engineer",
    summary:
      "Progressed across delivery, cloud infrastructure automation, and DevOps/platform engineering roles, supporting production releases, infrastructure automation, CI/CD modernization, observability, and developer enablement.",
    phases: [
      {
        period: "2022 - 2023",
        title: "Delivery & Release Operations",
        summary:
          "Managed production releases, migration activities, and deployment support across hosted, cloud, and on-prem customer environments. Automated recurring delivery workflows and improved release efficiency.",
        highlights: [
          "Production releases",
          "Customer migrations",
          "Ansible deployments",
          "Deployment support"
        ]
      },
      {
        period: "2023 - 2024",
        title: "Cloud Infrastructure & Automation",
        summary:
          "Designed and implemented automation across infrastructure operations using Azure Functions, PowerShell, VMware tooling, and Ansible. Contributed to a major Terraform-based data center migration, provisioning 205 servers.",
        highlights: [
          "Azure Functions",
          "PowerShell automation",
          "VMware automation",
          "Terraform migration",
          "205 servers provisioned"
        ]
      },
      {
        period: "2024 - Present",
        title: "DevOps & Platform Engineering",
        summary:
          "Own CI/CD workflows, lower-environment reliability, observability, and developer enablement. Modernized deployment architecture, built internal APIs, and expanded Datadog-based monitoring and alerting across the platform.",
        highlights: [
          "Jenkins pipelines",
          "Ansible CI/CD",
          "Datadog dashboards",
          "Internal APIs",
          "Observability"
        ]
      }
    ],
    tags: [
      "Jenkins",
      "Ansible",
      "Terraform",
      "PowerShell",
      "Azure Functions",
      "VMware",
      "Datadog",
      "CI/CD",
      "Automation"
    ],
    featured: true
  }
];
```

The UI must support optional fields:

- `division`
- `phases`
- `featured`

If phases are not showing, check `PortfolioSections.tsx`; it must render `entry.phases?.map(...)`.

Recommended CSS concepts for phases:

```css
.phaseGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 1rem;
}

.phaseCard {
  border: 1px solid rgba(0, 229, 255, 0.18);
  background: rgba(5, 14, 20, 0.58);
  padding: 0.85rem;
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
}
```

Status:

- Portfolio page is approved after banner integration and should be treated as locked except content updates.

### Process Page

Route:

```text
src\app\process\page.tsx
```

Main files:

```text
src\components\sections\Prompt5Sections.tsx
src\components\sections\Prompt5Pages.module.css
src\data\process.ts
```

Sections:

- Process hero
- Six-step delivery process
- Principles
- What clients can expect
- CTA/footer

Important fix:

- “What Clients Can Expect” cards looked empty because the data was plain strings.
- `src\data\process.ts` was updated so `clientExpectations` should be objects:

```ts
{
  title: "Clear scope and priorities",
  description: "A practical understanding of goals, blockers, risks, and the first problems worth solving."
}
```

- `Prompt5Sections.tsx` should render both `item.title` and `item.description`.

### Contact Page

Route:

```text
src\app\contact\page.tsx
```

Main files:

```text
src\components\sections\Prompt5Sections.tsx
src\components\sections\Prompt5Pages.module.css
src\components\sections\ContactForm.tsx
src\data\contactOptions.ts
src\app\api\contact\route.ts
src\lib\contactSchema.ts
src\lib\contactSubmit.ts
src\lib\googleSheets.ts
src\lib\email.ts
```

Contact page sections:

- Hero
- Tell us about your project form
- Contact information cards
- Lead capture / smart lead management card
- Why it is easy/reliable
- Alternative contact routes
- CTA/footer

Current form fields:

- Name
- Email
- WhatsApp Number
- Project Type
- Budget Range
- Timeline
- Message / Project Details
- Hidden honeypot: `companyWebsite`

Validation:

- In `src\lib\contactSchema.ts`
- Name minimum 2
- Valid email
- WhatsApp format
- Required projectType, budgetRange, timeline
- Message minimum 20, max 1200
- Honeypot rejects spam

Backend flow:

```text
ContactForm.tsx
  -> POST /api/contact
    -> src/app/api/contact/route.ts
      -> validateContactPayload()
      -> deliverContactSubmission()
        -> sendToGoogleSheets()
        -> sendEmailAlert()
```

Important contact decision:

- Keep this simple.
- No SQL/database needed yet.
- Use Google Sheets as lead CRM.
- Use Google Apps Script to append rows and send email alerts.
- SMTP is optional; Google Apps Script `MailApp.sendEmail` is simpler.

Final Google Sheet columns:

```text
Submitted At
Name
Email
WhatsApp
Project Type
Budget Range
Timeline
Message
Source Page
User Agent
Status
Notes
```

Recommended Google Apps Script:

```js
function doPost(e) {
  try {
    const sheet =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads") ||
      SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || "",
      data.email || "",
      data.whatsapp || "",
      data.projectType || "",
      data.budgetRange || "",
      data.timeline || "",
      data.message || "",
      data.sourcePage || "",
      data.userAgent || "",
      "New",
      ""
    ]);

    MailApp.sendEmail({
      to: "maazkhalid308@gmail.com",
      subject: "New AutoOps Forge Project Lead",
      body:
        "New AutoOps Forge lead submitted:\n\n" +
        "Name: " + (data.name || "") + "\n" +
        "Email: " + (data.email || "") + "\n" +
        "WhatsApp: " + (data.whatsapp || "") + "\n" +
        "Project Type: " + (data.projectType || "") + "\n" +
        "Budget Range: " + (data.budgetRange || "") + "\n" +
        "Timeline: " + (data.timeline || "") + "\n" +
        "Source Page: " + (data.sourcePage || "") + "\n\n" +
        "Message:\n" + (data.message || "")
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

Deploy Apps Script:

1. Create Google Sheet with the final columns.
2. Extensions -> Apps Script.
3. Paste the script.
4. Deploy -> New deployment -> Web app.
5. Execute as: Me.
6. Who has access: Anyone.
7. Copy the Web App URL.
8. Add it to `.env.local` and Vercel environment variables:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Optional SMTP:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your_google_app_password
CONTACT_FROM_EMAIL=yourgmail@gmail.com
CONTACT_TO_EMAIL=maazkhalid308@gmail.com
```

But for this project, Apps Script email is preferred.

Smart Lead Management explanation:

- It is not a SQL architecture.
- It means:
  “Every project request is saved to Google Sheets and sends an instant email alert so no inquiry gets missed.”
- Recommended card wording:
  - Heading: `Lead Capture Flow`
  - Text: `Project requests are saved to Google Sheets and can trigger instant email alerts for quick follow-up.`
  - Chips: `Google Sheets Capture -> Email Alert`

## 9. Data Modules and What They Control

### `src\data\services.ts`

Controls:

- Core service cards
- Service detail pages
- Services page capabilities
- Why clients choose section

Important exports:

- `serviceDetails`
- `capabilityGroups`
- `clientReasons` or equivalent why-choose data

If changing service copy:

- Update the correct object by slug.
- The `description` appears on service cards.
- `overviewDescription`/`heroText` appear on detail pages.
- `problems`, `provides`, `tools`, `useCases`, `ctaHeading` appear on detail pages.

### `src\data\projects.ts`

Controls:

- Projects page featured project
- More work cards
- Project workflow/content

Keep Shiraz AC Fix as the main featured project.

### `src\data\skills.ts`

Controls:

- Portfolio expertise/cards.

Keep aligned with updated services skills.

### `src\data\experience.ts`

Controls:

- Portfolio career progression.

Must support phased Contour Software entry.

### `src\data\process.ts`

Controls:

- Process page steps/principles/client expectations.

### `src\data\contactOptions.ts`

Controls:

- Contact page options/cards.
- Email/WhatsApp/LinkedIn links.

### `src\data\navigation.ts`

Controls:

- Navbar/footer route labels.

## 10. Important Polishing Decisions

### Hero image blending

Problem:

- The homepage hero looked like a cropped image pasted behind the text.
- Visible vertical edges made it feel less polished than services/projects.

Cause:

- The hero image was constrained to the right side and not blended across the full hero.
- The overlay started at a fixed edge, so the eye could see the rectangular plate.

Fix:

- Use the hero image as a full hero background layer.
- Use stronger left-to-right overlay.
- Keep object-position center right.
- Maintain top/bottom fade.

### Services capabilities crowded

Problem:

- Flat grid of many small cards looked crowded.

Fix:

- Group capabilities into 4 larger panels:
  - DevOps & Cloud
  - Software & Data
  - Automation & Support
  - AI & Agentic
- Use tags/chips inside each group.
- Increase text contrast and hover glow for readability.

### Portfolio hero composition

Problem:

- Separate portrait and AOF scene were hard to align.
- Portrait crop/position changed unpredictably.
- Availability card alignment was awkward.

Final fix:

- Use the approved full desktop banner above `760px`.
- Use `mobile-portrait-hero.png` as a dedicated full-width phone hero at `760px` and below.
- Keep the phone hero's duplicated HTML copy visually hidden but semantically available.
- Keep live buttons and metrics directly beneath the phone artwork.
- Serve the phone artwork through `next/image` with priority loading and configured image quality.

### Contact simplicity

Problem:

- The contact system sounded like a big backend/SQL platform.

Fix:

- Keep it lightweight:
  - Contact form
  - Next API validation
  - Google Sheets webhook
  - Optional email alert

## 11. Git and SDLC Notes

Working directory:

```bash
cd E:\WORK\AutoOpsForge\AutoOpsForge_dev
```

Git dubious ownership issue encountered on Windows:

```bash
git config --global --add safe.directory E:/WORK/AutoOpsForge/AutoOpsForge_dev
```

Branching/deployment plan:

- `dev`: active local development
- GitHub push after local verification
- Vercel preview/staging from dev branch
- `main`: production-ready branch

Command explained:

```bash
git push -u origin dev
```

Meaning:

- `git push`: upload commits
- `origin`: GitHub remote
- `dev`: branch to push
- `-u`: set upstream so future `git push` and `git pull` know the default remote branch

Recommended commit style:

```bash
git status
git add .
git commit -m "Finalize homepage hero visual blending"
git push
```

Never commit:

- `.env.local`
- real Google webhook URL if not meant to be public
- SMTP credentials
- generated cache files

## 12. Environment Variables

Local file:

```text
E:\WORK\AutoOpsForge\AutoOpsForge_dev\.env.local
```

Do not commit secrets.

Expected variables:

```env
GOOGLE_SHEETS_WEBHOOK_URL=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_FROM_EMAIL=
CONTACT_TO_EMAIL=
```

Only `GOOGLE_SHEETS_WEBHOOK_URL` is required for the preferred simple lead capture path.

SMTP is optional.

## 13. Verification Approach

During active design polishing:

```bash
npx tsc --noEmit
npm run lint
```

Avoid getting stuck on:

```bash
npm run build
```

Use full build later before final deployment:

```bash
npm run build
```

Known note:

- Next dev sometimes reports ready around 5-6 seconds.
- Compile may wait until route is first opened.
- This is normal for Next dev.

## 14. Locked / Approved Areas

Treat these as approved unless the user explicitly asks:

- Homepage structure and content
- Services page structure
- Projects page structure
- Portfolio page after banner integration
- Navbar logo
- Footer logo
- CTA logo
- Core design system
- Dark sci-fi brand direction

Only make focused changes:

- Minor alignment
- Copy/content updates
- Bug fixes
- Contact backend setup
- Responsive polish

## 15. Future Work / Next Best Steps

Recommended next tasks:

1. Finish Google Sheets webhook and test Contact form.
2. Add Vercel environment variable for `GOOGLE_SHEETS_WEBHOOK_URL`.
3. Deploy the verified `dev` branch to a Vercel preview.
4. Re-test the contact submission using production environment variables.
5. Review the Vercel preview on one real iOS device and one real Android device.
6. Only after preview approval, merge/deploy to production.

## 16. Quick New-Session Prompt

Use this if handing the project to another AI:

```text
Read AutoOpsForge_Final_Project_Handoff.md first. The project is AutoOps Forge in E:\WORK\AutoOpsForge\AutoOpsForge_dev. Homepage, Services, Projects, Portfolio, Process, and Contact pages are built using Next.js App Router, TypeScript, CSS Modules, MUI layout-only, and a custom dark sci-fi glass/HUD design system. Do not redesign approved pages. Preserve the AutoOps Forge visual direction, approved assets, and reusable UI components. For polishing, prefer npx tsc --noEmit and npm run lint over npm run build. Contact flow uses /api/contact -> validation -> Google Sheets webhook and optional email. Check data files under src\data before changing content.
```

## 17. Critical File Map for Future AI

If asked to update a specific area, start here:

```text
Homepage hero/image/polish:
src\components\sections\HomeHero.tsx
src\components\sections\HomeSections.module.css

Homepage broken systems strip:
src\components\sections\ProblemStrip.tsx
src\components\sections\HomeSections.module.css

Homepage process timeline:
src\components\sections\ProcessTimeline.tsx
src\components\sections\HomeSections.module.css

Services content:
src\data\services.ts

Services listing/capabilities layout:
src\components\sections\Prompt3Sections.tsx
src\components\sections\Prompt3Pages.module.css

Service detail pages:
src\components\services\ServiceDetailTemplate.tsx
src\app\services\*\page.tsx

Projects content/layout:
src\data\projects.ts
src\components\sections\Prompt3Sections.tsx
src\components\sections\Prompt3Pages.module.css

Portfolio hero:
src\components\sections\PortfolioSections.tsx
src\components\sections\PortfolioSections.module.css
public\portfolio\portfolio-hero-banner-desktop.png
public\portfolio\mobile-portrait-hero.png

Portfolio expertise:
src\data\skills.ts

Portfolio experience:
src\data\experience.ts
src\components\sections\PortfolioSections.tsx
src\components\sections\PortfolioSections.module.css

Process page:
src\data\process.ts
src\components\sections\Prompt5Sections.tsx
src\components\sections\Prompt5Pages.module.css

Contact page:
src\components\sections\Prompt5Sections.tsx
src\components\sections\Prompt5Pages.module.css
src\components\sections\ContactForm.tsx
src\data\contactOptions.ts

Contact backend:
src\app\api\contact\route.ts
src\lib\contactSchema.ts
src\lib\contactSubmit.ts
src\lib\googleSheets.ts
src\lib\email.ts

Navbar/footer:
src\components\layout\Navbar.tsx
src\components\layout\Navbar.module.css
src\components\layout\Footer.tsx
src\components\layout\Footer.module.css

Design system:
src\components\ui
src\styles\tokens.css
src\styles\animations.css
src\styles\utilities.css
src\theme\tokens.ts
```

## 18. Final Reminder

This site is not just a portfolio. It is a productized technical services brand. Every future change should preserve:

- Premium dark sci-fi visual quality
- Practical engineering credibility
- Clear client-facing service value
- Maaz Khalid's real DevOps, automation, support, software, and AI-assisted engineering experience
- Reusable architecture and clean TypeScript/CSS structure

## 19. Final Mobile Responsive Completion (2026-07-28)

The final responsive phase is implemented and verified. These changes are part of the approved final delivery and should not be reverted without an explicit design decision.

### Mobile/desktop alignment completed

- Portfolio now uses separate art direction: the existing cinematic desktop banner remains unchanged, while phones use `public/portfolio/mobile-portrait-hero.png`.
- The phone portrait artwork is rendered as a full-width `next/image` plate with its original aspect ratio and no duplicate visible title/description.
- Portfolio actions and metrics remain real accessible controls below the phone artwork.
- Mobile pages use progressive disclosure for long content so important information appears first without deleting desktop content.
- Services cards, portfolio capability groups, expertise tools, experience, certifications, and project lists can expand/collapse on phones.
- Contact provides WhatsApp, email, and project-form shortcuts immediately below the mobile hero.
- Projects category controls are functional and filter the project cards rather than acting as decorative tabs.
- Home problem cards use a readable single-column phone layout.
- The Process page keeps a visible vertical progression line and nodes on phones.
- Navbar, footer, filters, reveal controls, card links, and CTA targets meet the intended 44px minimum touch height.
- Mobile section spacing was reduced to improve scanning while preserving the desktop layout and content hierarchy.

### New responsive components

```text
src/components/ui/MobileRevealList.tsx
src/components/ui/MobileCollapsibleList.tsx
src/components/ui/MobileRevealList.module.css
src/components/sections/ProjectsExplorer.tsx
```

These client components keep state local to the smallest interactive area. They use semantic buttons/lists and expose `aria-expanded`, `aria-controls`, `aria-pressed`, and live filter feedback where applicable.

### Main files changed in the responsive phase

```text
next.config.ts
src/components/layout/Navbar.module.css
src/components/layout/Footer.module.css
src/components/sections/HomeSections.module.css
src/components/sections/ServicesPreview.tsx
src/components/sections/FeaturedProject.tsx
src/components/sections/Prompt3Sections.tsx
src/components/sections/Prompt3Pages.module.css
src/components/sections/PortfolioSections.tsx
src/components/sections/PortfolioSections.module.css
src/components/sections/Prompt5Sections.tsx
src/components/sections/Prompt5Pages.module.css
```

### Final browser verification

- Key pages were visually inspected in responsive Chrome at representative widths including 320px, 360px, 390px, 430px, 599px, 760px, and desktop/tablet layouts.
- No horizontal document overflow was detected at tested phone widths.
- Mobile portrait artwork loaded at its intended ratio, and only the dedicated mobile artwork was requested by the phone hero.
- Project filtering, mobile navigation, reveal controls, contact shortcuts, buttons, and links were exercised.
- The desktop portfolio hero remains on the approved wide banner and is not replaced by the phone asset.

### Final quality gate

Completed successfully on 2026-07-28:

```bash
npm run lint
npx tsc --noEmit
npm run build
git diff --check
```

The production build compiled successfully and generated all 14 application routes. The next delivery step is the Vercel preview and real-device confirmation before production promotion.
