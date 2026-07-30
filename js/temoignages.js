// ============================
// Témoignages
// ============================
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;
    
    function renderTestimonials() {
        container.innerHTML = '';
        temoignages.forEach(t => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            const stars = '★'.repeat(t.note) + '☆'.repeat(5 - t.note);
            card.innerHTML = `
                <div class="stars">${stars}</div>
                <blockquote>"${t.commentaire}"</blockquote>
                <div class="client">
                    <div>
                        <div class="client-name">${t.nom}</div>
                        <div class="client-project">${t.projet}</div>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }
    
    renderTestimonials();
});