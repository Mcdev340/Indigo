// ============================
// Menu mobile
// ============================
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");
      menuToggle.setAttribute(
        "aria-expanded",
        navMenu.classList.contains("open"),
      );
    });
  }

  // Fermer le menu lors du clic sur un lien
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
      }
    });
  });
});

// ============================
// Chargement des projets en page d'accueil
// ============================
if (document.getElementById("featured-projects")) {
  const featuredProjects = getFeaturedProjets();
  const container = document.getElementById("featured-projects");

  featuredProjects.forEach((projet) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
            <a href="projet-detail.html?slug=${projet.slug}">
                <div class="project-card-image">
                    <img src="${projet.image}" alt="${projet.titre}" loading="lazy">
                </div>
                <div class="project-card-content">
                    <span class="project-category">${projet.categorie}</span>
                    <h3>${projet.titre}</h3>
                    <p>${projet.description.substring(0, 80)}...</p>
                </div>
            </a>
        `;
    container.appendChild(card);
  });
}

// ============================
// Chargement des témoignages en page d'accueil
// ============================
if (document.getElementById("testimonials-home")) {
  const container = document.getElementById("testimonials-home");
  // Prendre les 3 premiers témoignages
  const featuredTestimonials = temoignages.slice(0, 3);

  featuredTestimonials.forEach((t) => {
    const card = document.createElement("div");
    card.className = "testimonial-card";
    const stars = "★".repeat(t.note) + "☆".repeat(5 - t.note);
    card.innerHTML = `
            <div class="testimonial-header">
                <div class="client-profile">
                    <div class="client-avatar">${t.avatar}</div>
                    <div>
                        <div class="client-name">${t.nom}</div>
                        <div class="client-role">${t.poste}</div>
                    </div>
                </div>
                <div class="client-badge">${t.profil}</div>
            </div>
            <div class="stars">${stars}</div>
            <blockquote>"${t.commentaire}"</blockquote>
            <div class="proofs-wrap">
                <div class="proofs-title">Preuves visuelles</div>
                <div class="proofs-list" aria-label="7 preuves visuelles du projet">
                    ${t.preuves
                      .map(
                        (preuve) => `
                        <div class="proof-item" title="${preuve.label}" aria-label="${preuve.label}">
                            <img src="${preuve.image}" alt="${preuve.label}" loading="lazy" />
                            <span class="proof-label">${preuve.label}</span>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
            <div class="client-project">Projet : ${t.projet}</div>
        `;
    container.appendChild(card);
  });
}

// ============================
// Animation au scroll (optionnel)
// ============================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observer les éléments avec la classe .approach-card, .project-card, .testimonial-card
document
  .querySelectorAll(
    ".approach-card, .project-card, .testimonial-card, .value-card, .team-card",
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// ============================
// Gestion du header au scroll
// ============================
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }
  lastScroll = currentScroll;
});

// ============================
// Smooth scroll pour les ancres
// ============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

console.log("Architecture Studio - Site vitrine chargé avec succès !");
