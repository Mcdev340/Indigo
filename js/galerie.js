// ============================
// Galerie - Lightbox
// ============================
document.addEventListener("DOMContentLoaded", function () {
  const galleryHeroSlider = document.getElementById("gallery-hero-slider");
  const galleryGrid = document.getElementById("gallery-grid");

  // Tableau centralisé des 10 images du hero de la galerie.
  const gallerySlides = [
    {
      src: "images/gallery/1.jpg",
      alt: "Villa contemporaine en bord de mer",
      caption: "Villa Somone",
    },
    {
      src: "images/gallery/2.jpg",
      alt: "Bureau d'architecture minimaliste",
      caption: "Bureau Dakar",
    },
    {
      src: "images/gallery/3.jpg",
      alt: "Maison coloniale rénovée",
      caption: "Rénovation patrimoniale",
    },
    {
      src: "images/gallery/4.jpg",
      alt: "Complexe sportif moderne",
      caption: "Complexe sportif",
    },
    {
      src: "images/gallery/5.jpg",
      alt: "Villa contemporaine avec vue sur l'océan",
      caption: "Villa Ngor",
    },
    {
      src: "images/gallery/6.jpg",
      alt: "Immeuble de bureaux premium",
      caption: "Diamniadio",
    },
    {
      src: "images/gallery/7.jpg",
      alt: "Projet architectural en plein air",
      caption: "Projet urbain",
    },
    {
      src: "images/gallery/8.jpg",
      alt: "Façade élégante en matériaux naturels",
      caption: "Résidence haut de gamme",
    },
    {
      src: "images/gallery/9.jpg",
      alt: "Espace intérieur architectural lumineux",
      caption: "Intérieur contemporain",
    },
    {
      src: "images/gallery/10.jpg",
      alt: "Architecture contemporaine en site naturel",
      caption: "Architecture paysagère",
    },
  ].slice(0, 10);

  if (galleryHeroSlider) {
    const slidesMarkup = gallerySlides
      .map(
        (slide, index) => `
          <figure class="gallery-hero-slide ${index === 0 ? "is-active" : ""}" aria-hidden="${index === 0 ? "false" : "true"}">
            <img src="${slide.src}" alt="${slide.alt}" loading="${index === 0 ? "eager" : "lazy"}" />
            <figcaption class="gallery-hero-caption">
              <span>${slide.caption}</span>
            </figcaption>
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

  // Récupérer toutes les images de tous les projets
  const allImages = [];
  projets.forEach((projet) => {
    if (projet.images && projet.images.length > 0) {
      projet.images.forEach((img) => {
        allImages.push({
          src: img,
          alt: projet.titre,
          projet: projet.titre,
        });
      });
    }
    // Ajouter l'image principale si elle n'est pas déjà dans les images
    if (projet.image && !allImages.some((i) => i.src === projet.image)) {
      allImages.push({
        src: projet.image,
        alt: projet.titre,
        projet: projet.titre,
      });
    }
  });

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
