// ============================
// Portfolio - Filtres et affichage
// ============================
document.addEventListener('DOMContentLoaded', function() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentFilter = 'all';
    
    function renderProjects(categorie) {
        const projetsFiltres = getProjetsByCategorie(categorie);
        portfolioGrid.innerHTML = '';
        
        if (projetsFiltres.length === 0) {
            portfolioGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                    <p>Aucun projet dans cette catégorie pour le moment.</p>
                </div>
            `;
            return;
        }
        
        projetsFiltres.forEach(projet => {
            const card = document.createElement('div');
            card.className = 'project-card';
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
            portfolioGrid.appendChild(card);
        });
    }
    
    // Filtrage
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderProjects(currentFilter);
        });
    });
    
    // Chargement initial
    renderProjects('all');
    
    // ============================
    // Détail d'un projet (projet-detail.html)
    // ============================
    const projectDetail = document.getElementById('project-detail');
    if (projectDetail) {
        const urlParams = new URLSearchParams(window.location.search);
        const slug = urlParams.get('slug');
        
        if (slug) {
            const projet = getProjetBySlug(slug);
            if (projet) {
                // Récupération des images
                const imagesHtml = projet.images && projet.images.length > 0 
                    ? projet.images.map(img => `
                        <div class="gallery-item" onclick="openLightbox('${img}')">
                            <img src="${img}" alt="${projet.titre}" loading="lazy">
                        </div>
                    `).join('')
                    : `<p>Aucune image supplémentaire disponible.</p>`;
                
                projectDetail.innerHTML = `
                    <div class="container">
                        <div class="project-header">
                            <div class="project-hero-image">
                                <img src="${projet.image}" alt="${projet.titre}" loading="lazy">
                            </div>
                            <div class="project-info">
                                <h1>${projet.titre}</h1>
                                <span class="project-category-large">${projet.categorie}</span>
                                <p class="project-description">${projet.description}</p>
                                <div class="project-meta">
                                    <div class="meta-item">
                                        <strong>Superficie</strong>
                                        <span>${projet.superficie}</span>
                                    </div>
                                    <div class="meta-item">
                                        <strong>Année</strong>
                                        <span>${projet.annee}</span>
                                    </div>
                                    <div class="meta-item">
                                        <strong>Lieu</strong>
                                        <span>${projet.lieu}</span>
                                    </div>
                                    <div class="meta-item">
                                        <strong>Durée des travaux</strong>
                                        <span>${projet.duree}</span>
                                    </div>
                                </div>
                                <div class="project-actions">
                                    <a href="devis.html" class="btn btn-primary">Demander un devis</a>
                                    <a href="realisations.html" class="btn btn-secondary">Voir tous les projets</a>
                                </div>
                            </div>
                        </div>
                        <div class="project-gallery">
                            <h2>Galerie photos</h2>
                            <div class="gallery-grid">
                                ${imagesHtml}
                            </div>
                        </div>
                    </div>
                `;
            } else {
                projectDetail.innerHTML = `
                    <div class="container" style="text-align:center;padding:80px 0;">
                        <h2>Projet non trouvé</h2>
                        <p>Le projet que vous recherchez n'existe pas.</p>
                        <a href="realisations.html" class="btn btn-primary" style="margin-top:20px;">Voir tous les projets</a>
                    </div>
                `;
            }
        } else {
            projectDetail.innerHTML = `
                <div class="container" style="text-align:center;padding:80px 0;">
                    <h2>Aucun projet sélectionné</h2>
                    <p>Veuillez sélectionner un projet depuis la liste des réalisations.</p>
                    <a href="realisations.html" class="btn btn-primary" style="margin-top:20px;">Voir tous les projets</a>
                </div>
            `;
        }
    }
});

// ============================
// Fonction pour ouvrir la lightbox (globale)
// ============================
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    if (lightbox && lightboxImage) {
        lightboxImage.src = imageSrc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}