# AutoOps Forge: Desktop vs Mobile UI Audit

Audit date: July 27, 2026

## Implementation status (July 28, 2026)

This document preserves the original pre-implementation findings. The responsive remediation described below has now been completed and verified.

- The final phone portfolio hero uses the approved dedicated artwork at `public/portfolio/mobile-portrait-hero.png`, rather than the originally proposed standalone cutout composition.
- Progressive disclosure was added to long Services, Home, and Portfolio content.
- Contact shortcuts now appear immediately after the phone hero.
- Touch targets were increased to the intended 44px minimum.
- The Home problem strip and Process progression received phone-specific layouts.
- Project filters are now functional and accessible.
- Mobile image delivery uses `next/image` with configured qualities and responsive sizing.
- Responsive verification was completed at 320px, 360px, 390px, 430px, 599px, 760px, and desktop/tablet widths with no horizontal document overflow found.
- ESLint, TypeScript, `git diff --check`, and the production build passed; all 14 routes were generated.

The definitive final state and file map are recorded in `AutoOpsForge_Final_Project_Handoff.md`.

## Scope and test sizes

- Desktop comparison: 1440 × 1100 CSS pixels.
- Primary phone comparison: 390 × 844 CSS pixels.
- Narrow-phone check: portfolio at 320 × 700 CSS pixels.
- Routes reviewed: Home, Services, Projects, Portfolio, Process, and Contact.
- Review method: rendered browser captures plus responsive CSS/component inspection.
- No application code was changed during this audit.

## Executive conclusion

The responsive implementation is structurally sound: every audited route fits the true 390px viewport without horizontal overflow, the portfolio also fits at 320px, the mobile menu is available, forms become one column, and the main page content is not removed.

The mobile experience still feels weaker than desktop for three major reasons:

1. The portfolio portrait loses nearly all visual prominence.
2. Desktop grids collapse into very long single-column pages without enough mobile-specific prioritization.
3. Several text links and controls have tap areas below the recommended 44px mobile target.

The highest-value work is therefore not a full redesign. It is a focused mobile composition pass: restore the portrait, shorten and prioritize repeated content, move conversion actions earlier, and enlarge touch targets.

## Measured page lengths at 390px

| Page | Mobile document height | Main implication |
|---|---:|---|
| Home | 7,421px | Strong opening, but repeated sections make the page long. |
| Services | 6,431px | All services survive, but each full card creates a dense vertical wall. |
| Projects | 6,733px | Featured case remains complete, but filters and repeated cards add friction. |
| Portfolio | 11,288px | By far the longest page; identity and strongest proof are diluted. |
| Process | 6,282px | Sequential stacking is logical, but the desktop timeline relationship is weakened. |
| Contact | 5,238px | Form is usable, but quick-contact choices appear too late. |

At 320px, the portfolio increases to 12,411px while still avoiding horizontal overflow.

## Priority findings

### P0 — Restore the portrait as a real mobile hero element

Desktop:

- The portrait is the central visual anchor.
- The name, portrait, and AOF mark form one strong branded composition.
- Visitors immediately connect the portfolio to a real person.

Mobile:

- The same wide desktop banner is reused as a CSS background.
- At widths below 760px it is scaled by height, repositioned, reduced to 36% opacity, darkened, masked, and covered by multiple gradients.
- The portrait is technically present, but visually it reads as a faint shadow behind the text. This matches the reported impression that the photo is missing.

Recommended fix:

- Use the existing `maaz-portrait-cutout.png` as an actual responsive image in the mobile hero.
- Keep the name and primary CTA in the first screen, then position the portrait beside or directly below the heading as a deliberate 35–45vh visual block.
- Keep the AOF scene as a secondary background, not as the only source of the portrait.
- Use `next/image` with responsive `sizes`, WebP/AVIF delivery, and a mobile art direction rather than loading the full desktop banner as CSS background.

### P0 — Reduce mobile page length through prioritization

Desktop communicates hierarchy through columns: multiple capabilities, metrics, credentials, and projects can be scanned together. Mobile currently converts almost every grid to one column while retaining every paragraph, card, tag, and decoration.

Recommended fix:

- Keep the most important proof visible and progressively disclose secondary detail.
- Portfolio: show a concise summary, strongest expertise groups, latest/relevant experience, top certifications, and featured projects first. Put the rest behind “Show more” controls or accordions.
- Use a 2 × 2 metric grid instead of four full-width metric cards.
- Consider horizontal snap rows for certifications or compact project cards, while keeping keyboard and screen-reader access.
- Reduce repeated card padding and section spacing on phones without shrinking body text.

### P1 — Improve mobile conversion order on Contact

Desktop shows the form and contact information side by side, so email, WhatsApp, and LinkedIn are immediately visible.

Mobile stacks the entire form before the contact-information panel. This makes the quickest conversion routes much less discoverable.

Recommended fix:

- Add a compact quick-contact row near the top: WhatsApp, email, and call/schedule.
- Alternatively place contact information before the long form on mobile using CSS ordering.
- Keep the full form for higher-intent leads.

### P1 — Increase touch targets

Measured mobile targets include:

- Menu button: 42 × 42px.
- Project-category tabs: approximately 39–41px high.
- “Learn more,” “Explore Service,” “View Case Study,” and similar card links: about 16px high.
- Footer navigation links: about 17px high.
- Contact information links: about 25px high.

Recommended fix:

- Give all interactive controls a minimum 44 × 44px hit area.
- Make card CTAs full-width or padded inline-flex links on mobile.
- Increase vertical padding around footer links and contact links.
- Increase the menu control to at least 44px.

### P1 — Fix the Home problem strip at phone widths

Desktop uses a wide multi-column “Broken Systems / Slow You Down” strip. At tablet widths it becomes two columns, and the phone breakpoint does not convert that particular grid to one column. On a phone it remains visually compressed compared with the rest of the site.

Recommended fix:

- Use a one-column sequence on narrow phones, or let the lead and closing message span the full width with a clean 2 × 2 issue grid between them.
- Reduce copy per issue so the strip is scannable rather than miniature.

### P1 — Preserve the Process relationship, not just its content

Desktop presents six stages as one connected horizontal system. Mobile preserves all six cards but turns them into an ordinary vertical stack, weakening the sense of progression.

Recommended fix:

- Add a vertical connector/progress line and clearer stage numbering.
- Keep stage descriptions concise, with optional expansion for details.

### P1 — Improve mobile asset performance

The portfolio hero CSS background is a 1914 × 822 PNG of about 1.88MB. Because it is a CSS background, the mobile page receives the desktop composition directly rather than benefiting from the same responsive image optimization used by `next/image`.

The available portrait cutout is also about 1.44MB and should be optimized before prominent mobile use.

Recommended fix:

- Export dedicated mobile hero assets in AVIF/WebP.
- Render meaningful hero imagery with `next/image`, correct `sizes`, and an intentional priority strategy.
- Keep decorative background layers lightweight.
- Validate LCP and total image transfer on a throttled mobile connection before deployment.

### P2 — Make project filters real or present them as labels

The Projects category controls look interactive, but the current component has no filter state or click behavior; only the first tab is styled active. This affects both desktop and mobile, but it is more costly on mobile because the controls consume scarce space.

Recommended fix:

- Implement filtering with active state and result updates, or replace the controls with non-interactive category chips.
- If filters remain interactive, use 44px minimum height and an accessible selected state.

### P2 — Correct the portfolio experience separator

The portfolio experience component contains the malformed separator `Â·` in source. This is not a responsive-only issue, but it should be corrected before release.

## Page-by-page comparison

| Page | What mobile preserves well | Main desktop-to-mobile loss | Recommended mobile adjustment |
|---|---|---|---|
| Home | Headline, two CTAs, trust indicators, services, featured project, process, stack, testimonial, and final CTA all remain. | The large AOF hero visual becomes subdued; the problem strip stays too compressed; the page becomes 7,421px long. | Keep current hero structure, fix the problem strip, compact repeated sections, and ensure the strongest project proof appears earlier. |
| Services | Both hero CTAs and every service/capability remain; no overflow. | Four-column scan becomes a long card wall, with repeated full descriptions and bullets. | Short summary cards first, expandable bullets, and larger card CTA targets. |
| Projects | Metrics, featured case, live-site CTA, workflow, examples, testimonial, and final CTA remain. | Desktop’s side-by-side case-study presentation becomes a long sequence; filters look functional but are static. | Prioritize the live preview, implement/remove filters, and compact secondary examples. |
| Portfolio | All content sections and CTAs remain; 320px and 390px layouts fit. | The portrait effectively disappears, desktop identity is lost, and the page reaches 11,288–12,411px. | Dedicated mobile portrait composition, 2 × 2 metrics, progressive disclosure, and a shorter proof-first order. |
| Process | Hero CTAs and all six stages remain in logical order. | Horizontal connected workflow becomes generic stacked cards. | Add a vertical progress treatment and shorten stage copy. |
| Contact | Form fields are one column, inputs are comfortably sized, and all contact methods remain. | Quick WhatsApp/email options move below the long form; fastest conversion routes are delayed. | Put quick-contact actions above the form or make them sticky/compact near the hero. |

## What is already working and should be retained

- No true horizontal overflow was found at 390px on any reviewed route.
- The portfolio also fits at 320px.
- The desktop navigation is replaced by a mobile menu, and the drawer includes all navigation links plus “Start a Project.”
- Primary hero buttons become full-width and are easy to understand.
- Contact inputs remain at least 46px high and the form becomes a clean one-column layout.
- Core content is not silently removed from mobile.
- Color, typography, HUD-card styling, cyan/orange accents, and overall brand language remain consistent.

## Recommended implementation order

1. Recompose the portfolio hero and restore the portrait.
2. Move quick contact actions above the mobile form.
3. Fix tap targets globally.
4. Shorten and progressively disclose the portfolio content.
5. Fix the Home problem strip and Process progression treatment.
6. Implement or remove Projects filtering.
7. Optimize mobile imagery and run mobile performance checks.
8. Perform final QA at 320px, 360px, 390px, 430px, and a tablet width before Vercel deployment.

## Release recommendation

Do not block release because of horizontal layout breakage; the tested phone widths fit. However, the portfolio portrait and mobile conversion hierarchy should be corrected before treating the site as launch-ready, because those issues directly affect trust, personal identity, and lead generation for the expected mobile-heavy audience.
