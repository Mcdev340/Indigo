// Données des articles de blog
const articles = [
    {
        id: 1,
        slug: 'architecture-durable-senegal',
        titre: 'L\'architecture durable au Sénégal : traditions et innovations',
        categorie: 'Tendances',
        date: '12 janvier 2026',
        tempsLecture: '5 min',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80',
        excerpt: 'Découvrez comment l\'architecture contemporaine sénégalaise intègre les matériaux locaux et les techniques traditionnelles pour créer des bâtiments durables et écologiques.',
        content: `
            <p>L'architecture durable est bien plus qu'une tendance au Sénégal : c'est une nécessité et un retour aux sources. Depuis quelques années, les architectes sénégalais réinventent les techniques traditionnelles pour créer des bâtiments qui respectent l'environnement tout en répondant aux besoins contemporains.</p>
            <h3>Les matériaux locaux au cœur du design</h3>
            <p>La terre, le bois, la pierre et le banco sont les matériaux de choix pour une architecture ancrée dans son territoire. Ces matériaux offrent des propriétés thermiques exceptionnelles, réduisant considérablement la consommation d'énergie.</p>
            <p>Le retour au banco, en particulier, connaît un regain d'intérêt. Ce matériau, utilisé depuis des siècles au Sénégal, est non seulement économique et écologique, mais il offre également une esthétique chaleureuse et authentique.</p>
            <h3>La lumière naturelle comme élément central</h3>
            <p>L'architecture sénégalaise contemporaine accorde une place primordiale à la lumière naturelle. Les architectes conçoivent des espaces qui captent la lumière tout au long de la journée, créant des ambiances variées et réduisant les besoins en éclairage artificiel.</p>
            <p>Les cours intérieures, les moucharabiehs et les grandes ouvertures sont autant d'éléments qui permettent de maîtriser la lumière et la ventilation naturelle.</p>
            <h3>Des projets exemplaires</h3>
            <p>De nombreuses réalisations récentes illustrent cette tendance. La Villa Somone, par exemple, intègre des murs en banco et des toitures végétalisées qui s'intègrent parfaitement dans le paysage côtier.</p>
            <p>L'architecture durable au Sénégal ne se limite pas à l'utilisation de matériaux locaux : elle implique également une réflexion sur l'impact environnemental, la gestion de l'eau et l'insertion dans le paysage.</p>
        `
    },
    {
        id: 2,
        slug: 'renovation-patrimoine-colonial',
        titre: 'Rénover le patrimoine colonial : défis et opportunités',
        categorie: 'Conseils',
        date: '5 janvier 2026',
        tempsLecture: '7 min',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop&q=80',
        excerpt: 'La rénovation du patrimoine colonial au Sénégal offre des opportunités uniques mais pose également des défis techniques et réglementaires importants.',
        content: `
            <p>Le Sénégal possède un riche patrimoine colonial, notamment à Saint-Louis et sur l'île de Gorée. Ces bâtiments, témoins d'une histoire complexe, sont aujourd'hui au cœur de projets de rénovation ambitieux.</p>
            <h3>Conserver l'authenticité</h3>
            <p>Le défi principal de la rénovation du patrimoine colonial est de conserver l'authenticité des bâtiments tout en les adaptant aux normes de confort modernes. Les matériaux d'origine, les techniques de construction et l'esthétique doivent être respectés.</p>
            <p>La rénovation d'une maison coloniale à Saint-Louis, par exemple, a permis de conserver les colonnes en bois, les plafonds à la française et les carreaux de ciment d'origine, tout en intégrant une isolation thermique et des équipements modernes.</p>
            <h3>Les défis techniques</h3>
            <p>La rénovation de bâtiments anciens présente des défis techniques spécifiques : vétusté des structures, problèmes d'humidité, présence de matériaux nocifs (amiante, plomb). Une expertise pointue est nécessaire pour mener ces projets à bien.</p>
            <p>Les architectes doivent également composer avec la réglementation en matière de protection du patrimoine, qui impose des contraintes importantes mais nécessaires pour préserver ce patrimoine pour les générations futures.</p>
            <h3>Une opportunité économique et culturelle</h3>
            <p>La rénovation du patrimoine colonial est aussi une opportunité économique et culturelle. Elle permet de créer des emplois, de valoriser les savoir-faire locaux et de développer le tourisme culturel.</p>
            <p>À Saint-Louis, plusieurs projets de rénovation ont permis de redynamiser le centre-ville et de créer des espaces mixtes (habitations, commerces, musées) qui participent à la vie de la cité.</p>
        `
    },
    {
        id: 3,
        slug: 'tendances-architecture-2026',
        titre: 'Les tendances architecturales qui façonneront 2026 au Sénégal',
        categorie: 'Actualités',
        date: '28 décembre 2025',
        tempsLecture: '4 min',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80',
        excerpt: 'Quelles seront les grandes tendances de l\'architecture au Sénégal en 2026 ? Entre durabilité, technologie et ancrage local, voici ce qui nous attend.',
        content: `
            <p>L'année 2026 s'annonce riche en innovations pour l'architecture au Sénégal. Plusieurs tendances se dessinent, alliant durabilité, technologie et ancrage local.</p>
            <h3>L'architecture bioclimatique</h3>
            <p>L'architecture bioclimatique, qui tire parti des conditions climatiques pour réduire la consommation d'énergie, est en plein essor. Au Sénégal, cela se traduit par une orientation optimale des bâtiments, l'utilisation de matériaux à forte inertie thermique et une ventilation naturelle maîtrisée.</p>
            <p>Les architectes intègrent également des toitures végétalisées, des murs végétaux et des systèmes de récupération des eaux de pluie.</p>
            <h3>L'innovation technologique</h3>
            <p>La technologie joue un rôle croissant dans l'architecture : modélisation 3D, BIM (Building Information Modeling), impression 3D, maisons connectées. Ces outils permettent de concevoir des bâtiments plus performants et de mieux gérer les projets.</p>
            <p>Au Sénégal, des start-ups et des entreprises locales commencent à intégrer ces technologies dans leurs projets, ouvrant la voie à une architecture plus innovante.</p>
            <h3>L'ancrage local renforcé</h3>
            <p>La tendance à l'ancrage local se renforce. Les architectes privilégient les matériaux locaux, les savoir-faire traditionnels et les formes architecturales inspirées du patrimoine sénégalais.</p>
            <p>Cette approche permet de créer une architecture singulière, différenciante, qui raconte une histoire et renforce l'identité culturelle du pays.</p>
            <p>2026 sera également marquée par une attention accrue à la ville durable, avec des projets d'urbanisme qui intègrent des espaces verts, des mobilités douces et des écosystèmes urbains résilients.</p>
        `
    },
    {
        id: 4,
        slug: 'materiaux-locaux-architecture',
        titre: 'Pourquoi les matériaux locaux sont l\'avenir de l\'architecture sénégalaise',
        categorie: 'Conseils',
        date: '15 décembre 2025',
        tempsLecture: '6 min',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80',
        excerpt: 'Les matériaux locaux comme le banco, le latérite et le bois connaissent un regain d\'intérêt. Découvrez pourquoi ils sont essentiels pour une architecture durable et authentique.',
        content: `
            <p>Les matériaux locaux sont au cœur des préoccupations des architectes sénégalais. Le banco, la latérite, le bois, la pierre et les fibres végétales offrent des avantages considérables tant sur le plan écologique qu'esthétique.</p>
            <h3>Un bilan carbone réduit</h3>
            <p>L'utilisation de matériaux locaux réduit considérablement l'empreinte carbone des projets de construction. Moins de transport, moins d'énergie grise, une extraction souvent moins polluante : les bénéfices environnementaux sont significatifs.</p>
            <p>Le banco, par exemple, est un matériau qui absorbe le CO2 pendant sa fabrication, contribuant ainsi à la réduction des gaz à effet de serre.</p>
            <h3>Des performances thermiques exceptionnelles</h3>
            <p>Les matériaux locaux offrent des propriétés thermiques remarquables. Le banco et la latérite ont une forte inertie thermique, ce qui permet de maintenir une température intérieure agréable tout au long de l'année, réduisant les besoins en climatisation.</p>
            <p>Cette performance thermique contribue à la réduction des factures d'énergie et au confort des occupants.</p>
            <h3>Une esthétique authentique</h3>
            <p>Au-delà de leurs qualités techniques, les matériaux locaux offrent une esthétique chaleureuse et authentique. Les nuances de la terre, la texture du bois, la patine du banco créent des ambiances uniques qui valorisent le patrimoine architectural sénégalais.</p>
            <p>De nombreux architectes intègrent également des motifs traditionnels (bogolan, tissages) dans les finitions, créant une architecture qui raconte une histoire.</p>
            <h3>Des savoir-faire à préserver</h3>
            <p>L'utilisation de matériaux locaux permet également de préserver et de valoriser les savoir-faire traditionnels. Les maçons, les artisans et les artistes locaux sont associés aux projets, contribuant à l'économie locale et à la transmission des connaissances.</p>
            <p>Cette approche participative renforce le lien entre l'architecture et la communauté, créant des bâtiments qui sont véritablement ancrés dans leur territoire.</p>
        `
    }
];

// Fonction pour obtenir un article par son slug
function getArticleBySlug(slug) {
    return articles.find(a => a.slug === slug);
}

// Fonction pour obtenir les derniers articles
function getRecentArticles(limit = 3) {
    return articles.slice(0, limit);
}

// Fonction pour obtenir les articles similaires (hors article courant)
function getSimilarArticles(slug, limit = 3) {
    return articles.filter(a => a.slug !== slug).slice(0, limit);
}