// ============================
// Blog - Liste des articles et détail
// ============================
document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.getElementById('blog-grid');
    
    // ============================
    // Liste des articles (blog.html)
    // ============================
    if (blogGrid) {
        function renderBlog() {
            blogGrid.innerHTML = '';
            articles.forEach(article => {
                const card = document.createElement('div');
                card.className = 'blog-card';
                card.innerHTML = `
                    <a href="article.html?slug=${article.slug}">
                        <div class="blog-card-image">
                            <img src="${article.image}" alt="${article.titre}" loading="lazy">
                        </div>
                        <div class="blog-card-content">
                            <div class="blog-meta">
                                <span>${article.date}</span>
                                <span>⏱️ ${article.tempsLecture}</span>
                                <span class="blog-category">${article.categorie}</span>
                            </div>
                            <h3>${article.titre}</h3>
                            <p>${article.excerpt}</p>
                        </div>
                    </a>
                `;
                blogGrid.appendChild(card);
            });
        }
        
        renderBlog();
    }
    
    // ============================
    // Détail d'un article (article.html)
    // ============================
    const articleDetail = document.getElementById('article-detail');
    if (articleDetail) {
        const urlParams = new URLSearchParams(window.location.search);
        const slug = urlParams.get('slug');
        
        if (slug) {
            const article = getArticleBySlug(slug);
            if (article) {
                // Récupérer les articles similaires
                const similarArticles = getSimilarArticles(slug, 3);
                let similarHtml = '';
                if (similarArticles.length > 0) {
                    similarHtml = `
                        <div class="similar-articles">
                            <h3>Articles similaires</h3>
                            <div class="similar-grid">
                                ${similarArticles.map(a => `
                                    <a href="article.html?slug=${a.slug}" class="similar-card">
                                        <img src="${a.image}" alt="${a.titre}" loading="lazy">
                                        <h4>${a.titre}</h4>
                                        <span class="blog-category">${a.categorie}</span>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }
                
                articleDetail.innerHTML = `
                    <article class="container">
                        <div class="article-header">
                            <div class="article-meta">
                                <span>${article.date}</span>
                                <span>⏱️ ${article.tempsLecture}</span>
                                <span class="blog-category">${article.categorie}</span>
                            </div>
                            <h1>${article.titre}</h1>
                            <div class="article-image">
                                <img src="${article.image}" alt="${article.titre}" loading="lazy">
                            </div>
                        </div>
                        <div class="article-content">
                            ${article.content}
                        </div>
                        <div class="article-footer">
                            <a href="blog.html" class="btn btn-secondary">← Retour au blog</a>
                            <a href="devis.html" class="btn btn-primary">Demander un devis</a>
                        </div>
                        ${similarHtml}
                    </article>
                `;
            } else {
                articleDetail.innerHTML = `
                    <div class="container" style="text-align:center;padding:80px 0;">
                        <h2>Article non trouvé</h2>
                        <p>L'article que vous recherchez n'existe pas.</p>
                        <a href="blog.html" class="btn btn-primary" style="margin-top:20px;">Voir tous les articles</a>
                    </div>
                `;
            }
        } else {
            articleDetail.innerHTML = `
                <div class="container" style="text-align:center;padding:80px 0;">
                    <h2>Aucun article sélectionné</h2>
                    <p>Veuillez sélectionner un article depuis le blog.</p>
                    <a href="blog.html" class="btn btn-primary" style="margin-top:20px;">Voir tous les articles</a>
                </div>
            `;
        }
    }
});