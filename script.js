const watches = [
  {
    slug: "mustang",
    name: "Mustang",
    tagline: "True vintage classic styling.",
    heroImage: "images/mustang_watch_with_car.jpg",
    detailsPage: "watch-pages/mustang.html"
  },
   {
    slug: "type-s",
    name: "Type S",
    tagline: "A performance-inspired analog face with precision instrument styling.",
    heroImage: "images/type_s_watch_with_car.jpg",
    detailsPage: "watch-pages/type-s.html"
  }
];

function renderWatches() {
  const grid = document.getElementById("watch-grid");
  if (!grid) return;

  if (!watches.length) {
    grid.innerHTML = '<p class="image-fallback">No watch designs available yet.</p>';
    return;
  }

  watches.forEach((watch) => grid.appendChild(createWatchCard(watch)));
}

function createWatchCard(watch) {
  const card = document.createElement("article");
  card.className = "watch-card";

  const title = document.createElement("h2");
  title.className = "watch-name";
  title.textContent = watch.name;

  const tagline = document.createElement("p");
  tagline.className = "watch-tagline";
  tagline.textContent = watch.tagline;

  const media = document.createElement("div");
  media.className = "watch-media";
  if (watch.heroImage) {
    const img = document.createElement("img");
    img.src = watch.heroImage;
    img.alt = `${watch.name} preview`;
    img.loading = "lazy";
    media.appendChild(img);
  } else {
    const fallback = document.createElement("p");
    fallback.className = "image-fallback";
    fallback.textContent = "Preview image not provided";
    media.appendChild(fallback);
  }

  const link = document.createElement("a");
  link.className = "cta-button";
  link.href = watch.detailsPage;
  link.textContent = "More about this watch";

  card.append(title, tagline, media, link);
  return card;
}

renderWatches();
