# Codex task: maintain Debarghya Nandi's academic homepage

This repository is a static personal academic site at `https://debarghya1986.github.io`, built in plain HTML/CSS/JavaScript. Preserve the lightweight, responsive, al-folio-meets-Jon-Barron visual language. Do **not** introduce a React framework, Jekyll theme, package manager, or build pipeline unless explicitly requested.

## Immediate tasks

1. Review and refine typography, spacing, publication layout, colors, mobile navigation, and dark mode. Keep a research-first academic tone.
2. Test at desktop (1440px), tablet (768px), and mobile (390px); ensure there is no horizontal overflow, clipped text, keyboard accessibility issues, broken navigation, or JavaScript errors.
3. Ask the owner for an approved portrait, official PDF CV, and any additional public paper/project links. The public website currently uses debarghyan@iisc.ac.in; confirm before publishing. If not provided, keep these absent or as private TODOs. **Never invent links.**
4. Do not claim that any paper has been accepted until the owner confirms acceptance. The MHCA work is currently labelled simply a '2026 manuscript'. The perfusion MRI work is labelled submitted to ISBI 2027.
5. `Shift-Attention-HSI-Codex` is a **private** repository. Never expose its contents or treat its URL as public research code without authorization.
6. The MRI code repository `Perfusion_MRI_ISBI` is public and linked. Keep the original schematic SVGs clearly labelled illustrative until replaced with actual owner-provided scientific images.
7. When updating the HTML, ensure metadata, both pages, and the sitemap remain consistent.

## Implementation hints

- Home: `index.html`
- CV: `cv.html`
- Styles: `assets/css/style.css`
- Theme script: `assets/js/site.js`
- Images: `assets/images/`
- Publishing: GitHub Pages from `main` / `(root)`, with `.nojekyll`.

## Desired next iteration

A professional homepage with a compact headshot, crisp visual hierarchy, readable publication rows with paper thumbnails, institution/academic links, working PDF/CV/GitHub links only where approved, optional news section, and tasteful dark mode. Keep page load fast and use accessible semantic HTML.
