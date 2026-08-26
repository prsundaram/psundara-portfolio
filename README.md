# Prasanna Sundaram — Portfolio

A static HTML/CSS/JS personal portfolio site, ready for GitHub Pages.

## Structure
```
index.html          Main page
css/style.css        All styling
js/script.js          Career-map interactivity, live experience counter
assets/prasanna.png   Profile photo
assets/Prasanna_Sundaram_Resume.pdf  Downloadable resume
```

## Deploy on GitHub Pages

1. Create a new repo — for a **user site**, name it exactly `prsundaram.github.io`.
   (A project repo with any other name also works; it'll live at
   `prsundaram.github.io/<repo-name>`.)
2. Push these files to the repo root:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/prsundaram/<repo-name>.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source** → select branch `main`, folder `/ (root)` → **Save**.
4. Wait a minute or two — the site goes live at:
   - `https://prsundaram.github.io/` (if the repo is named `prsundaram.github.io`), or
   - `https://prsundaram.github.io/<repo-name>/` otherwise.

## Customizing
- Swap `assets/prasanna.png` and `assets/Prasanna_Sundaram_Resume.pdf` to update the photo/resume.
- Edit the `<article class="trace">` blocks in `index.html` to update role details.
- Colors and type live at the top of `css/style.css` under `:root`.

No build step, no dependencies — just static files.
