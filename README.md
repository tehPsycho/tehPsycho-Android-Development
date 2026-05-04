# Watch Face Showcase Repository

This repository is now focused on **showcasing watch assets and watch face pages** only.

It is intentionally **not** an Android development repository.

Use it for:
- Landing page (`index.html`) that lists all watches.
- One detail page per watch (inside `watch-pages/`).
- Asset storage for watch visuals (watch face images, dials, tick marks, needles, backgrounds, etc.).
- Privacy/legal pages if needed.

---

## Current Structure

```text
.
├── index.html
├── script.js
├── styles.css
├── watch-pages/
│   ├── type-s.html
│   └── neon-orbit.html
├── images/
│   ├── type-s/
│   └── neon-orbit/
├── watchfaces/
│   ├── _template/
│   └── ...
└── legal/
```

---

## How to Add a New Watch Face to the Site

### 1) Create an image folder
Create a new folder in `images/` using a slug:

```text
images/<watch-slug>/
```

Recommended image files:
- `device.png` (main preview used on landing and details page)
- optional additional assets (examples):
  - `dial.png`
  - `tick-marks.png`
  - `needle-hour.png`
  - `needle-minute.png`
  - `needle-second.png`
  - `background.jpg`

> You can keep as many extra images as you want in that same folder.

### 2) Add the watch to `script.js`
Append an object to the `watches` array:

```js
{
  slug: "my-watch",
  name: "My Watch",
  tagline: "Short one-line description.",
  heroImage: "images/my-watch/device.png",
  detailsPage: "watch-pages/my-watch.html"
}
```

### 3) Create the watch detail page
Create a file:

```text
watch-pages/my-watch.html
```

Start by copying one of the existing pages in `watch-pages/`, then update:
- `<title>`
- `<h1>`
- intro description
- preview image path

### 4) Set Play Store link behavior on detail page
Until a real store link exists, keep the button text:

```text
Play Store: Coming soon
```

When ready, replace it with a real URL and updated label.

---

## Link Behavior Rules

- On the landing page, each card button must be:
  - **Label:** `More about this watch`
  - **Target:** its watch-specific page in `watch-pages/`
- On each watch-specific page, Play Store button should be:
  - **Label:** `Play Store: Coming soon` (until real URL exists)

---

## Publishing to GitHub Pages

1. Push to your default branch.
2. Ensure GitHub Pages is configured to deploy from the repository root (or configured docs folder if you later move files).
3. Confirm the landing page loads:
   - `https://tehpsycho.github.io/tehPsycho-Android-Development/index.html`

