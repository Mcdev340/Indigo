// ============================
// Galerie - Lightbox
// ============================
document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    
    // Récupérer toutes les images de tous les projets
    const allImages = [];
    projets.forEach(projet => {
        if (projet.images && projet.images.length > 0) {
            projet.images.forEach(img => {
                allImages.push({
                    src: img,
                    alt: projet.titre,
                    projet: projet.titre
                });
            });
        }
        // Ajouter l'image principale si elle n'est pas déjà dans les images
        if (projet.image && !allImages.some(i => i.src === projet.image)) {
            allImages.push({
                src: projet.image,
                alt: projet.titre,
                projet: projet.titre
            });
        }
    });
    
    let currentIndex = 0;
    
    function renderGallery() {
        galleryGrid.innerHTML = '';
        allImages.forEach((img, index) => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
            div.addEventListener('click', () => openLightboxByIndex(index));
            galleryGrid.appendChild(div);
        });
    }
    
    function openLightboxByIndex(index) {
        currentIndex = index;
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        if (lightbox && lightboxImage) {
            lightboxImage.src = allImages[index].src;
            lightboxImage.alt = allImages[index].alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Lightbox controls
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    const lightboxImage = document.getElementById('lightbox-image');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
            if (lightboxImage) {
                lightboxImage.src = allImages[currentIndex].src;
                lightboxImage.alt = allImages[currentIndex].alt;
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % allImages.length;
            if (lightboxImage) {
                lightboxImage.src = allImages[currentIndex].src;
                lightboxImage.alt = allImages[currentIndex].alt;
            }
        });
    }
    
    // Fermer avec Echap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft' && lightbox && lightbox.classList.contains('active')) {
            currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
            if (lightboxImage) {
                lightboxImage.src = allImages[currentIndex].src;
                lightboxImage.alt = allImages[currentIndex].alt;
            }
        }
        if (e.key === 'ArrowRight' && lightbox && lightbox.classList.contains('active')) {
            currentIndex = (currentIndex + 1) % allImages.length;
            if (lightboxImage) {
                lightboxImage.src = allImages[currentIndex].src;
                lightboxImage.alt = allImages[currentIndex].alt;
            }
        }
    });
    
    // Fermer en cliquant en dehors de l'image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });
    }
    
    function closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Rendre la galerie accessible globalement pour openLightbox
    window.openLightboxByIndex = openLightboxByIndex;
    window.closeLightbox = closeLightbox;
    window.allImages = allImages;
    
    renderGallery();
});