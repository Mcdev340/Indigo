// ============================
// Témoignages
// ============================
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("testimonials-grid");
  if (!container) return;

  function renderTestimonials() {
    container.innerHTML = "";
    temoignages.forEach((t) => {
      const card = document.createElement("div");
      card.className = "testimonial-card";
      const stars = "★".repeat(t.note) + "☆".repeat(5 - t.note);

      const proofGallery = t.preuves
        .map(
          (preuve) => `
            <div class="gallery-item" data-title="${preuve.label}">
              <img src="${preuve.image}" alt="${preuve.label}" loading="lazy" />
            </div>
          `,
        )
        .join("");

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
                    <button class="btn-proof" type="button" data-project="${t.projet}" data-gallery='${JSON.stringify(t.preuves)}'>Voir preuves</button>
                </div>
                <div class="client-project">Projet : ${t.projet}</div>
            `;

      const btn = card.querySelector(".btn-proof");
      btn.addEventListener("click", () => {
        const galleryData = JSON.parse(btn.dataset.gallery);
        const modal = document.getElementById("proof-modal");
        const modalGallery = document.getElementById("proof-gallery");
        const modalTitle = document.getElementById("proof-modal-title");

        if (!modal || !modalGallery || !modalTitle) return;

        modalTitle.textContent = `Preuves visuelles - ${t.projet}`;
        modalGallery.innerHTML = galleryData
          .map(
            (preuve) => `
              <div class="gallery-item">
                <img src="${preuve.image}" alt="${preuve.label}" loading="lazy" />
                <span>${preuve.label}</span>
              </div>
            `,
          )
          .join("");

        modal.classList.add("active");
      });

      container.appendChild(card);
    });
  }

  const existingModal = document.getElementById("proof-modal");
  if (!existingModal) {
    const modal = document.createElement("div");
    modal.id = "proof-modal";
    modal.className = "proof-modal";
    modal.innerHTML = `
      <div class="proof-modal-content">
        <button class="proof-close" type="button" aria-label="Fermer">×</button>
        <h3 id="proof-modal-title">Preuves visuelles</h3>
        <div id="proof-gallery" class="proof-gallery"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".proof-close").addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("active");
      }
    });
  }

  renderTestimonials();
});
