/**
 * Data source for all watches shown on the page.
 *
 * To add a new watch:
 * 1) Create a new folder in /images/<watch-slug>/
 * 2) Add device, car, dash and aod images
 * 3) Add one object to this array
 */
const watches = [
  {
    name: "Type S",
    images: {
      device: "images/type-s/device.png",
      car: "images/type-s/car.jpg",
      dash: "images/type-s/dash.jpg",
      aod: "images/type-s/aod.png"
    },
    appLink: "https://play.google.com/store"
  },
  {
    name: "Neon Orbit",
    images: {
      device: "images/neon-orbit/device.png",
      car: "images/neon-orbit/car.jpg",
      dash: "images/neon-orbit/dash.jpg",
      aod: "images/neon-orbit/aod.png"
    },
    appLink: "https://play.google.com/store"
  }
];

const imageRows = [
  { key: "device", label: "Watch on device" },
  { key: "car", label: "Car image" },
  { key: "dash", label: "Dashboard image" },
  { key: "aod", label: "Always-on display" }
];

/**
 * Builds the full watch grid from the watches array.
 */
function renderWatches() {
  const grid = document.getElementById("watch-grid");

  if (!grid) return;

  if (!Array.isArray(watches) || watches.length === 0) {
    grid.innerHTML = '<p class="image-fallback">No watch designs available yet.</p>';
    return;
  }

  watches.forEach((watch) => {
    grid.appendChild(createWatchCard(watch));
  });
}

/**
 * Creates one watch card.
 * @param {Object} watch Watch config object from the watches array.
 */
function createWatchCard(watch) {
  const card = document.createElement("article");
  card.className = "watch-card";

  const meta = document.createElement("div");
  meta.className = "watch-meta";

  const title = document.createElement("h2");
  title.className = "watch-name";
  title.textContent = watch.name || "Untitled watch";

  meta.appendChild(title);

  if (watch.appLink) {
    const button = document.createElement("a");
    button.className = "cta-button";
    button.href = watch.appLink;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.textContent = "View on Play Store";
    meta.appendChild(button);
  }

  const rows = document.createElement("div");
  rows.className = "rows";

  imageRows.forEach((rowDef) => {
    rows.appendChild(createImageRow(watch.images?.[rowDef.key], `${watch.name} — ${rowDef.label}`));
  });

  card.append(meta, rows);
  return card;
}

/**
 * Creates one image row with fallback text if an image is missing.
 * @param {string | undefined} src
 * @param {string} alt
 */
function createImageRow(src, alt) {
  const row = document.createElement("div");
  row.className = "row";

  if (src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.loading = "lazy";
    row.appendChild(img);
  } else {
    const fallback = document.createElement("p");
    fallback.className = "image-fallback";
    fallback.textContent = "Image not provided";
    row.appendChild(fallback);
  }

  return row;
}

renderWatches();
