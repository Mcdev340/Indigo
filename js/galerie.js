// ============================
// Galerie - Lightbox
// ============================
document.addEventListener("DOMContentLoaded", function () {
  const galleryHeroSlider = document.getElementById("gallery-hero-slider");
  const galleryGrid = document.getElementById("gallery-grid");

  const gallerySlides = [
    "Abidjan.png",
    "BCEAO.png",
    "Cote-D'ivoire.png",
    "Dakar - Porte du 3ème Millénaire.png",
    "Dakar Arena.png",
    "Dakar inaugure son Musée des Civilisations noires.png",
    "Dakar, Senegal.png",
    "Dakar-house.png",
    "Dakar.png",
    "Gare de Dakar - Carte - Mapcarta.png",
    "Goree island 🏝️🇸🇳.png",
    "House of Slaves _ Goree Island.png",
    "L’église Epiphanie du Seigneur de Nianing (Sénégal) - EGF.png",
    "Maison coloniale _ un style entre héritage et vision contemporaine.png",
    "Maison-de-Moussa.png",
    "Mali.png",
    "Monument Sénégal 🇸🇳🔥❤❤.png",
    "Musee-Historique.png",
    "Photo Stock Monument place de l’obélisque Dakar _ Adobe Stock.png",
    "Photo Stock Mosquée de la divinité à ouakam Dakar Sénégal _ Adobe Stock.png",
    "PYRAMIDE D’ABIDJAN.png",
    "Sandaga.png",
    "Senegal - Cathedral of Our Lady of Victories in Dakar.png",
    "Senegal - Grand théâtre National-Dakar.png",
    "Visiter le Mali - Place de l'indépendance (Bamako).png",
  ].map((filename) => ({
    src: `images/galerie/${filename}`,
    alt: "Image de la galerie Indigo Studio",
  }));

  if (galleryHeroSlider) {
    const slidesMarkup = gallerySlides
      .map(
        (slide, index) => `
          <figure class="gallery-hero-slide ${index === 0 ? "is-active" : ""}" aria-hidden="${index === 0 ? "false" : "true"}">
            <img src="${slide.src}" alt="${slide.alt}" loading="${index === 0 ? "eager" : "lazy"}" />
          </figure>
        `,
      )
      .join("");

    galleryHeroSlider.innerHTML = `
      <div class="gallery-hero-slides">${slidesMarkup}</div>
      <button class="gallery-hero-arrow gallery-hero-prev" type="button" aria-label="Image précédente">&#8249;</button>
      <button class="gallery-hero-arrow gallery-hero-next" type="button" aria-label="Image suivante">&#8250;</button>
      <div class="gallery-hero-dots" aria-label="Navigation du carrousel"></div>
    `;

    const slidesEls = galleryHeroSlider.querySelectorAll(".gallery-hero-slide");
    const dotsContainer = galleryHeroSlider.querySelector(".gallery-hero-dots");
    const prevBtn = galleryHeroSlider.querySelector(".gallery-hero-prev");
    const nextBtn = galleryHeroSlider.querySelector(".gallery-hero-next");

    let currentSlide = 0;
    let autoplayId = null;
    let isHovered = false;

    const renderDots = () => {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = gallerySlides
        .map(
          (_, index) => `
            <button
              class="gallery-hero-dot ${index === currentSlide ? "is-active" : ""}"
              type="button"
              aria-label="Aller à l'image ${index + 1}"
              aria-current="${index === currentSlide ? "true" : "false"}"
              data-index="${index}"
            ></button>
          `,
        )
        .join("");

      dotsContainer.querySelectorAll(".gallery-hero-dot").forEach((dot) => {
        dot.addEventListener("click", () => {
          currentSlide = Number(dot.dataset.index);
          showSlide(currentSlide);
          restartAutoplay();
        });
      });
    };

    const showSlide = (index) => {
      const normalizedIndex = (index + slidesEls.length) % slidesEls.length;
      slidesEls.forEach((slide, i) => {
        const active = i === normalizedIndex;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });

      currentSlide = normalizedIndex;
      renderDots();
    };

    const nextSlide = () => {
      showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
      showSlide(currentSlide - 1);
    };

    const stopAutoplay = () => {
      isHovered = true;
      if (autoplayId) {
        clearInterval(autoplayId);
        autoplayId = null;
      }
    };

    const startAutoplay = () => {
      isHovered = false;
      if (gallerySlides.length <= 1) return;
      if (autoplayId) clearInterval(autoplayId);
      autoplayId = setInterval(() => {
        if (!isHovered) {
          nextSlide();
        }
      }, 3000);
    };

    const restartAutoplay = () => {
      startAutoplay();
    };

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        prevSlide();
        restartAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        nextSlide();
        restartAutoplay();
      });
    }

    galleryHeroSlider.addEventListener("mouseenter", stopAutoplay);
    galleryHeroSlider.addEventListener("mouseleave", startAutoplay);

    showSlide(0);
    startAutoplay();
  }

  if (!galleryGrid) return;

  const allImages = gallerySlides;

  let currentIndex = 0;

  function renderGallery() {
    galleryGrid.innerHTML = "";
    allImages.forEach((img, index) => {
      const div = document.createElement("div");
      div.className = "gallery-item";
      div.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
      div.addEventListener("click", () => openLightboxByIndex(index));
      galleryGrid.appendChild(div);
    });
  }

  function openLightboxByIndex(index) {
    currentIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    if (lightbox && lightboxImage) {
      lightboxImage.src = allImages[index].src;
      lightboxImage.alt = allImages[index].alt;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  // Lightbox controls
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const lightboxImage = document.getElementById("lightbox-image");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
      if (lightboxImage) {
        lightboxImage.src = allImages[currentIndex].src;
        lightboxImage.alt = allImages[currentIndex].alt;
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % allImages.length;
      if (lightboxImage) {
        lightboxImage.src = allImages[currentIndex].src;
        lightboxImage.alt = allImages[currentIndex].alt;
      }
    });
  }

  // Fermer avec Echap
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
    if (
      e.key === "ArrowLeft" &&
      lightbox &&
      lightbox.classList.contains("active")
    ) {
      currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
      if (lightboxImage) {
        lightboxImage.src = allImages[currentIndex].src;
        lightboxImage.alt = allImages[currentIndex].alt;
      }
    }
    if (
      e.key === "ArrowRight" &&
      lightbox &&
      lightbox.classList.contains("active")
    ) {
      currentIndex = (currentIndex + 1) % allImages.length;
      if (lightboxImage) {
        lightboxImage.src = allImages[currentIndex].src;
        lightboxImage.alt = allImages[currentIndex].alt;
      }
    }
  });

  // Fermer en cliquant en dehors de l'image
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === this) {
        closeLightbox();
      }
    });
  }

  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  // Rendre la galerie accessible globalement pour openLightbox
  window.openLightboxByIndex = openLightboxByIndex;
  window.closeLightbox = closeLightbox;
  window.allImages = allImages;

  renderGallery();
});
