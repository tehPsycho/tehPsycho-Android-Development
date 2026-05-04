const watches = [
  {
    slug: "mustang",
    name: "Mustang",
    tagline: "True vintage classic styling.",
    heroImage: "images/mustang_watch_with_car.png",
    detailsPage: "watch-pages/mustang.html"
  },
   {
    slug: "type-s",
    name: "Type S",
    tagline: "A performance-inspired analog face with precision instrument styling.",
    heroImage: "images/type_s_watch_with_car.png",
    detailsPage: "watch-pages/type-s.html"
  },
  {
    slug: "jeep",
    name: "Jeep",
    tagline: "Built for adventure. Coming soon.",
    heroImage: "images/jeep_watch_with_car.png",
    detailsPage: null
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

  const cta = watch.detailsPage
    ? document.createElement("a")
    : document.createElement("button");

  cta.className = "cta-button";

  if (watch.detailsPage) {
    cta.href = watch.detailsPage;
    cta.textContent = "More about this watch";
  } else {
    cta.type = "button";
    cta.disabled = true;
    cta.classList.add("cta-button--disabled");
    cta.textContent = "Comming soon";
  }

  card.append(title, media, cta);
  return card;
}

renderWatches();
