# Debarghya Nandi — Academic Website

A lightweight, responsive, two-page academic website for **Debarghya Nandi**, designed as a hybrid of al-folio's visual restraint and Jon Barron's research-first presentation.

**Live URL after deployment:** <https://debarghya1986.github.io>

> This project is an original HTML/CSS/JavaScript implementation, **not a fork** of al-folio or Jon Barron's source code. There are no build dependencies. It is suitable for directly publishing through GitHub Pages.

## Contents

```
.
├── index.html                         # Research homepage
├── cv.html                            # Printable web CV
├── assets/
│   ├── css/style.css                  # Full responsive design + dark mode
│   ├── js/site.js                     # Theme preference + print CV
│   ├── images/
│   │   ├── favicon.svg
│   │   ├── profile-placeholder.svg    # Replace with an approved headshot
│   │   ├── mhca-schematic.svg         # Original *illustrative* diagram
│   │   └── perfusion-schematic.svg    # Original *illustrative* diagram
│   └── cv/README.md                   # Instructions for attaching PDF CV
├── .nojekyll                          # Disables needless Jekyll processing
├── robots.txt
├── sitemap.xml
└── CODEX_TASK.md
```

## 1 — Preview locally

**Simple method:** Open `index.html` in your browser. Follow the `Academic CV` link to check `cv.html`.

**Optional local server:** From this folder, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## 2 — Before publishing: review personal information

Please review every entry in `index.html` and `cv.html`. This starter uses your academic background and manuscript information **based on your November 17, 2026 Fall 2027 CV and its LaTeX rendition**. In particular:

- The site currently uses your academic email **debarghyan@iisc.ac.in** as the public contact. Change or remove it if you prefer a different address.
- Replace `assets/images/profile-placeholder.svg` with a portrait you want to publish, e.g. `assets/images/profile.jpg`. Then change the `src` in `index.html`.
- Confirm the final status of **Attention over Shifts for Low-Data Vision**, e.g. whether it is submitted to CVPR 2027. The starter conservatively calls it a 2026 manuscript.
- Confirm the ISBI submission status for **Trained Spatiotemporal Regularization for Perfusion MRI Deconvolution**.
- Check dates, CGPAs, awards, authors, advisor name, and the internship entry in the web CV.
- The public `Perfusion_MRI_ISBI` GitHub repository is linked. Add other public paper, preprint, and code links *only after they are actually available*. Your `Shift-Attention-HSI-Codex` repository is currently private; the site intentionally does not link to it.
- Replace schematic illustrations with real research figures later, if desired. The existing SVGs are clearly marked conceptual illustrations, not experimental/clinical results.

## 3 — Create your GitHub Pages repository

Log into GitHub as `Debarghya1986` and visit <https://github.com/new>.

Set these values:

- **Owner:** `Debarghya1986`
- **Repository name:** `Debarghya1986.github.io` (spelling must match your username)
- **Visibility:** Public
- Do **not** initialize with a README, `.gitignore`, or license if you plan to push this folder by command line (those files are already included or not necessary).

Click **Create repository**.

## 4 — Upload the source with Git

Open Terminal **inside this extracted folder**. Run:

```bash
git init -b main
git add .
git commit -m "Launch academic website"
git remote add origin https://github.com/Debarghya1986/Debarghya1986.github.io.git
git push -u origin main
```

If GitHub requests authentication, sign in using your configured Git credential manager or GitHub CLI. GitHub password authentication for Git over HTTPS is not supported.

If you already initialized the repository, skip `git init`. If `origin` already exists, verify it using `git remote -v` instead of trying to add it twice.

**Alternative:** Once the empty repository exists, use Codex to make and commit these files, or upload the project files through the GitHub web UI. Ensure `index.html` ends up at the repository root, **not** inside an extra `debarghya-academic-site/` folder.

## 5 — Enable GitHub Pages

Open your repository → **Settings** → **Pages**.

Under **Build and deployment**:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/ (root)`
- Click **Save**.

Visit <https://debarghya1986.github.io/> once GitHub finishes publishing. Future pushes to `main` update the website automatically.

If you see a 404, first ensure the repository is public, Pages is enabled, `index.html` is in the root, and the deployment has completed. Check **Actions** for errors.

## 6 — Update the site later

- **Biography/sections/publications:** edit `index.html`.
- **Education/awards/CV:** edit `cv.html`.
- **Styles and colors:** edit `assets/css/style.css` (look for `:root` variables).
- **Add a headshot:** put the image in `assets/images/` and update the hero image reference.
- **Official PDF CV:** follow `assets/cv/README.md`.
- **Appearance:** system theme preference is honored, with a manual light/dark toggle.

Commit and push after changes:

```bash
git add .
git commit -m "Update academic website"
git push
```

## 7 — Work with Codex

Open the website repository in Codex and reference `CODEX_TASK.md` for a careful next-iteration prompt. Codex can edit, test, and iterate on the website without any build tooling. Request a screenshot and mobile check after each major style revision.

## Source inspirations / credits

- [al-folio](https://github.com/alshedivat/al-folio) — inspiration for academic typography, layout, and section organization.
- [Jon Barron's academic website](https://jonbarron.info/) — inspiration for compact, paper-first research presentation.

No code was copied from either source. Original illustrative SVG assets are included with this starter.
