# Mizuxe — Book Landing Page

An educational responsive book-promotion landing page using Bootstrap, custom SCSS and jQuery-based interactions.

## Captured preview

<picture><source media="(prefers-reduced-motion: reduce)" srcset="docs/screenshots/portfolio-poster.png" /><source type="image/webp" srcset="docs/screenshots/portfolio.webp" /><img src="docs/screenshots/portfolio.gif" width="100%" alt="Mizuxe — actual captured UI states" /></picture>

Book landing page and the existing accordion interaction. Author names and content are educational sample copy.

[Reproduce this capture and view the static image](docs/PORTFOLIO-PREVIEW.md) · [Mobile capture](docs/screenshots/portfolio-mobile.png)

## Included UI

- Book hero, subscription layout and feature cards.
- Accordion-style information, author cards and a contact section.

## Repository map

| Path | Purpose |
|---|---|
| [index.html](index.html) | Landing page |
| [css](css) | Checked-in compiled styles |
| [scss](scss) | SCSS and Bootstrap customization sources |
| [img](img) | Local images |

## Preview locally

Use a modern browser and Python 3 for a simple loopback-only static server. From a terminal:

```powershell
git clone https://github.com/s-hesam-s/Mizuxe.git
cd Mizuxe
```

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/index.html`. Keep the terminal open while previewing and press Ctrl+C to stop it. No database or application backend is needed.

Compiled CSS is already included, so a Sass compiler is not needed for previewing the page. Editing scss/ requires a compiler compatible with these existing sources; no npm build configuration is committed.

## External resources

The pages reference resources from `cdn.jsdelivr.net`, `code.jquery.com`, `use.fontawesome.com`. Internet access is needed for the referenced CDN scripts, fonts or remote images; the repository is not a fully offline asset bundle. Third-party resource availability can affect the preview.

## Verification and limitations

Check navigation, author cards and accordion behavior at desktop and mobile widths. Subscription/contact forms do not include a submission backend.

No automated behavior-test suite is included. Preview instructions are not a claim that every third-party widget is compatible with current CDN responses. Application services, persistent storage and deployment are outside this UI exercise.

## Project scope and reuse

This is an educational repository. The implementation notes describe the code in this repository; they do not claim a deployed commercial service or measured production results. Third-party libraries and assets retain their own terms. No project-wide license is currently declared.

## Continuous integration

GitHub Actions checks root HTML documents for a doctype, document shell, nonempty title and duplicate IDs. It also verifies local href/src/poster targets, filename casing and HTML/SVG fragments using `python3 scripts/check_site.py`. Remote URLs and placeholder `#` links are not fetched; this is not a full HTML5 conformance, accessibility or browser interaction test. No npm installation, backend or deployment is involved.

The [CI workflow](.github/workflows/ci.yml) runs for pull requests and pushes to `master`, and can be started manually. It uses read-only repository permissions and does not deploy the project.
