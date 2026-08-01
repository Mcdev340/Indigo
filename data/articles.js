// Données des articles de blog
const articles = [
  {
    id: 1,
    slug: "architecture-durable-senegal",
    titre: "L'architecture durable au Sénégal : traditions et innovations",
    categorie: "Tendances",
    date: "12 janvier 2026",
    tempsLecture: "5 min",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80",
    excerpt:
      "Découvrez comment l'architecture contemporaine sénégalaise associe savoir-faire local et performance environnementale pour créer des espaces durables.",
    content: `
            <p>L'architecture durable est bien plus qu'une tendance au Sénégal : c'est une nécessité et un retour aux sources. Les architectes du pays réinventent les techniques vernaculaires pour concevoir des maisons et des bâtiments modernes, résilients et élégants.</p>
            <h3>Des matériaux qui racontent le pays</h3>
            <p>Le banco, la latérite, le bois et les fibres végétales sont au cœur d'un design qui s'inscrit dans le climat et les usages locaux. Ces matériaux régulent la température intérieure, réduisent les besoins énergétiques et renforcent le lien au territoire.</p>
            <p>Les façades à forte inertie, les patios centraux et les ouvertures judicieusement positionnées permettent des ambiances lumineuses et climatiquement confortables, même sous la chaleur.</p>
            <h3>La lumière et le vent comme ressources</h3>
            <p>Au Sénégal, la conception bioclimatique insiste sur des volumes aérés, des cours intérieures et des protections solaires. Cela permet de mieux maîtriser la lumière naturelle et la ventilation sans dépendre de la climatisation.</p>
            <p>Les éléments traditionnels comme les moucharabiehs ou les pergolas en bois trouvent une seconde vie dans des projets contemporains, selon un langage architectural à la fois moderne et identitaire.</p>
            <h3>Une architecture à l'heure de la transition</h3>
            <p>Des villas de plage à Dakar aux maisons familiales dans l'intérieur des terres, la transition vers des constructions plus sobres s'accélère. L'enjeu est clair : préserver le patrimoine culturel sans sacrifier le confort ni la qualité de vie.</p>
        `,
  },
  {
    id: 2,
    slug: "renovation-patrimoine-colonial",
    titre: "Rénover le patrimoine colonial : défis et opportunités",
    categorie: "Conseils",
    date: "5 janvier 2026",
    tempsLecture: "7 min",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop&q=80",
    excerpt:
      "À Saint-Louis et à Gorée, la rénovation du patrimoine colonial offre un équilibre délicat entre mémoire, modernité et confort contemporains.",
    content: `
            <p>Le Sénégal héberge un patrimoine colonial riche et précieux, surtout à Saint-Louis et sur l'île de Gorée. Ces édifices racontent l'histoire du pays et portent des qualités architecturales rarement équivalentes ailleurs.</p>
            <h3>Conserver l'authenticité</h3>
            <p>Le principal défi est de préserver la matière, les volumes, les ouvertures et les détails historiques, tout en créant des espaces fonctionnels pour aujourd'hui. Les matériaux d'origine, comme les bois de structure, les carreaux et les plafonds à caissons, sont essentiels à la narration du lieu.</p>
            <p>Les architectes doivent souvent réhabiliter les éléments sans les dénaturer, en révisant la structure sans effacer le caractère des façades.</p>
            <h3>Des interventions techniques pointues</h3>
            <p>La rénovation de bâtiments anciens implique des travaux de diagnostic : humidités, fissures, matériaux dégradés, isolation inadaptée ou présence d'éléments sensibles. Une bonne conduite de chantier implique des artisans qualifiés et une vision patrimoniale claire.</p>
            <p>La réglementation protège ces sites et impose une grande rigueur dans les interventions pour garder les valeurs esthétiques et historiques.</p>
            <h3>Valeur culturelle et économique</h3>
            <p>En plus de leur importance patrimoniale, ces projets participent à la revitalisation urbaine, au tourisme culturel et à la création d'emplois spécialisés. Ils permettent aussi de réhabiliter le centre historique sans casser son rythme de vie.</p>
        `,
  },
  {
    id: 3,
    slug: "tendances-architecture-2026",
    titre: "Les tendances architecturales qui façonneront 2026 au Sénégal",
    categorie: "Actualités",
    date: "28 décembre 2025",
    tempsLecture: "4 min",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
    excerpt:
      "En 2026, l'architecture sénégalaise se dessine autour de la sobriété, du confort climatique et de l'ancrage territorial.",
    content: `
            <p>En 2026, plusieurs tendances vont continuer à structurer le paysage architectural sénégalais. L\'accent est mis sur le confort climatique, les espaces ouverts et les matériaux locaux.</p>
            <h3>Architecture bioclimatique</h3>
            <p>Les bâtiments sont conçus pour tirer parti des vents dominants, des ombres et de la lumière indirecte. Les architectes travaillent sur des volumes qui évitent la surchauffe et favorisent le bien-être intérieur.</p>
            <p>Les vérandas, les cours intérieures, les terrasses végétalisées et les façades ventilées sont autant d'éléments qui inspirent la conception moderne.</p>
            <h3>Technologies au service du projet</h3>
            <p>La modélisation 3D, les visualisations immersives et les outils de suivi de chantier gagnent en importance. Ils permettent de mieux communiquer avec les clients et de mieux piloter le budget et les délais.</p>
            <p>Cette digitalisation ne remplace pas le savoir-faire local, elle le complète et le rend plus précis.</p>
            <h3>Un design ancré dans le pays</h3>
            <p>Le design contemporain au Sénégal ne se coupe pas du patrimoine. Il réinterprète les formes traditionnelles et les usages de la maison de ville, tout en restant lisible et fonctionnel.</p>
            <p>Les projets gagnent en identité lorsqu'ils associent modernité, texture locale et contexte urbain.</p>
        `,
  },
  {
    id: 4,
    slug: "materiaux-locaux-architecture",
    titre:
      "Pourquoi les matériaux locaux sont l'avenir de l'architecture sénégalaise",
    categorie: "Conseils",
    date: "15 décembre 2025",
    tempsLecture: "6 min",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=400&fit=crop&q=80",
    excerpt:
      "Le banco, la latérite et le bois sont bien plus que des matériaux : ce sont des leviers de durabilité, de confort et d'identité.",
    content: `
            <p>Les matériaux locaux sont au cœur des préoccupations des architectes sénégalais. Le banco, la latérite, le bois et les fibres végétales offrent des performances remarquables tout en valorisant les savoir-faire locaux.</p>
            <h3>Un faible bilan carbone</h3>
            <p>Le recours aux ressources du territoire réduit les distances de transport et donc les émissions de CO2. Cela favorise une construction plus responsable, avec moins d'énergie grise.</p>
            <p>À ce titre, le banco est particulièrement intéressant : il est abondant, accessible et constitue un matériau à la fois durable, économique et esthétique.</p>
            <h3>Un confort climatique naturel</h3>
            <p>Les matériaux locaux ont souvent une forte inertie thermique, ce qui atténue les variations de température. Le résultat est un habitat plus stable, confortable et plus économique à entretenir.</p>
            <p>Ce phénomène est particulièrement précieux dans un climat chaud et humide comme celui du Sénégal.</p>
            <h3>Une esthétique singulière</h3>
            <p>Leur aspect brut ou patiné apporte une qualité tactile que les matériaux industriels ne reproduisent pas toujours. Les teintes terre, les textures du bois et la patine du banco créent une identité forte.</p>
            <p>Cette esthétique se prête aussi bien aux villas en bord de mer qu'aux maisons urbaines de ville.</p>
        `,
  },
  {
    id: 5,
    slug: "villas-cotieres-dakar",
    titre:
      "Les villas côtières de Dakar : entre ouverture sur la mer et sobriété tropicale",
    categorie: "Chantiers",
    date: "2 décembre 2025",
    tempsLecture: "5 min",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop&q=80",
    excerpt:
      "À Dakar, la maison côtière se construit selon un équilibre subtil entre vue panoramique, ventilation naturelle et résistance au climat marin.",
    content: `
            <p>Les villas en bord de mer à Dakar combinent souvent une grande ouverture visuelle, des espaces de vie généreux et une attention particulière aux conditions climatiques. Le chantier exige une conception rigoureuse dès les premières esquisses.</p>
            <h3>Un programme pensé pour le vent et le soleil</h3>
            <p>Les façades se protègent avec des brises-soleil, des pergolas et des écrans végétaux. Les terrasses sont souvent structurées pour profiter de la brise marine sans compromettre le confort.</p>
            <p>La zone de piscine, les espaces de détente et les vérandas deviennent des pièces à part entière du projet.</p>
            <h3>Matériaux et finitions</h3>
            <p>Les chantiers côtiers privilégient des matériaux résistants au sel et à l'humidité. Le béton clair, le bois traité, la pierre locale et les fins de façade minérales apportent une qualité durable et élégante.</p>
            <p>La sobriété des palettes de couleurs renforce l'impression de calme et d'espace, qui est essentielle en bord de mer.</p>
            <h3>Une maison qui respire</h3>
            <p>Le chantier de ces villas met en avant l'idée d'une habitation qui respire avec son environnement. Chaque ouverture est pensée selon l'orientation, le vent et la lumière du jour.</p>
        `,
  },
  {
    id: 6,
    slug: "maison-famille-saint-louis",
    titre:
      "Maison de famille à Saint-Louis : architecture traditionnelle et confort moderne",
    categorie: "Chantiers",
    date: "18 novembre 2025",
    tempsLecture: "6 min",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=400&fit=crop&q=80",
    excerpt:
      "À Saint-Louis, la maison familiale moderne s'inspire du modèle traditionnel pour mieux vivre dans le climat local tout en répondant aux besoins contemporains.",
    content: `
            <p>La maison de famille à Saint-Louis est souvent une synthèse entre héritage culturel et exigences actuelles. Les espaces sont pensés pour accueillir la vie collective tout en respectant la fraîcheur et l'intimité.</p>
            <h3>Le patio comme cœur du projet</h3>
            <p>Le patio, élément clé des maisons traditionnelles, est réinterprété comme espace de respiration. il offre une lumière douce, un refuge climatique et compose la circulation intérieure.</p>
            <p>Cette logique favorise la convivialité et la régulation thermique, deux préoccupations majeures pour les familles locales.</p>
            <h3>Une organisation adaptée à la vie quotidienne</h3>
            <p>Le programme inclut des espaces de réception, des chambres spacieuses et des zones de service fonctionnelles. La médiation entre espace public et espace privé est pensée avec soin.</p>
            <p>Les matériaux sont inspirés du contexte local : pierre, bois, enduits clairs et toitures à forte pente, souvent avec garde corps en fer forgé.</p>
            <h3>Une architecture qui unit mémoire et quotidien</h3>
            <p>Le chantier démontre que le modernisme n'a pas besoin de rompre avec la tradition. Il peut au contraire s'appuyer dessus pour créer un habitat plus confortable, durable et profondément ancré.</p>
        `,
  },
  {
    id: 7,
    slug: "ecole-public-thies",
    titre:
      "Des écoles publiques durables à Thiès : des bâtiments qui inspirent",
    categorie: "Institutionnel",
    date: "9 novembre 2025",
    tempsLecture: "5 min",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
    excerpt:
      "Les nouvelles constructions scolaires à Thiès démontrent qu'une architecture publique peut être à la fois fonctionnelle, lumineuse et profondément sensible au climat.",
    content: `
            <p>Les projets publics à Thiès illustrent une évolution positive dans la manière de concevoir les bâtiments éducatifs. Les écoles modernes intègrent aujourd'hui des volumes ouverts, des cours ombragées et des espaces extérieurs adaptés aux usages sociaux.</p>
            <h3>Confort et pédagogie</h3>
            <p>Les salles de classe sont conçues pour recevoir un maximum de lumière naturelle, tout en évitant l'éblouissement. Les ouverts sur les cours et les patios contribuent à une meilleure qualité d\'apprentissage.</p>
            <p>Les espaces extérieurs sont également pensés comme des lieux d\'échange, de jeux et de repos.</p>
            <h3>Matériaux robustes et simples</h3>
            <p>Des façades en brique locale, des socles en pierre, des toitures en tôle ou en béton permettent un entretien durable et un coût d\'exploitation maîtrisé.</p>
            <p>Ces choix sont essentiels pour des bâtiments qui doivent résister à la chaleur, aux pluies et au rythme collectif de fréquentation.</p>
            <h3>Une architecture porteuse de sens</h3>
            <p>L\'école publique devient un lieu symbolique : elle représente l\'accès à la connaissance et la qualité de l\'aménagement du territoire. Elle peut donc devenir un élément fort de l\'identité locale.</p>
        `,
  },
  {
    id: 8,
    slug: "centre-ville-touba",
    titre:
      "Rénovation du centre-ville de Touba : réhabiliter sans perdre l'âme du lieu",
    categorie: "Rénovation",
    date: "25 octobre 2025",
    tempsLecture: "7 min",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&h=400&fit=crop&q=80",
    excerpt:
      "À Touba, les projets de réhabilitation urbaine montrent que la modernisation peut aller de pair avec le respect des formes historiques et sociales.",
    content: `
            <p>Le centre-ville de Touba est un espace dense, vivant et chargé d\'une forte identité. Les projets de réhabilitation y sont particulièrement sensibles, car ils doivent tenir compte du tissu social, de la mémoire du lieu et des usages quotidiens.</p>
            <h3>Un héritage urbain à préserver</h3>
            <p>Les façades, les portails, les cours et les espaces de circulation retracent une architecture plus ancienne, plus intime. La sauvegarde de ces éléments est essentielle pour garder le rythme spécifique du quartier.</p>
            <p>Le défi consiste à réhabiliter sans uniformiser, ni effacer les différences qui font la richesse du lieu.</p>
            <h3>Des interventions de précision</h3>
            <p>Les travaux incluent souvent la remise en état des façades, la sécurisation des structures, la rénovation des toitures et la création d\'espace de commerce plus fonctionnels.</p>
            <p>La qualité de l\'aménagement urbain se joue dans les détails : portail, égout, éclairage public, accès piéton, ventilation urbaine.</p>
            <h3>Un urbanisme de proximité</h3>
            <p>Les projets de réhabilitation ne se limitent pas aux bâtiments. Ils redistribuent les circulations, améliorent la qualité du paysage et renforcent la vie collective dans l\'espace public.</p>
        `,
  },
  {
    id: 9,
    slug: "ecoquartier-diamniadio",
    titre: "Diamniadio : quand l'urbanisme devient lieu de vie durable",
    categorie: "Urbanisme",
    date: "12 octobre 2025",
    tempsLecture: "6 min",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop&q=80",
    excerpt:
      "À Diamniadio, les nouvelles opérations urbaines s'organisent autour des espaces publics, des mobilités douces et de la qualité de vie.",
    content: `
            <p>Diamniadio est aujourd\'hui un laboratoire urbain pour de nouvelles formes d\'aménagement au Sénégal. Le projet vise à associer développement économique, habitat moderne et qualité de vie.</p>
            <h3>Des espaces publics bien pensés</h3>
            <p>La place, les équipements collectifs, les axes piétons et les jardins urbains sont conçus pour susciter la rencontre et le confort. Les déplacements doux sont intégrés dès l\'amont.</p>
            <p>Les rues sont pensées autant pour les véhicules que pour les habitants, avec un souci accru de sécurité et de visibilité.</p>
            <h3>Le logement comme élément de la ville</h3>
            <p>Les logements de ville et les logements collectifs sont conçus pour favoriser l\'éclairage, la ventilation et la mixité sociale. Le défi est de faire des quartiers durables sans perdre l\'humain.</p>
            <p>Les espaces verts et les points d\'eau participent aussi à la meilleure perception du paysage urbain.</p>
            <h3>Un modèle à suivre</h3>
            <p>Diamniadio montre qu\'une ville peut se développer sans négliger la qualité de l\'espace public, la résilience climatique et l\'identité locale.</p>
        `,
  },
  {
    id: 10,
    slug: "chantier-architecture-senegalaise",
    titre:
      "Le chantier sénégalais : entre tradition artisanale et exigence contemporaine",
    categorie: "Process",
    date: "4 octobre 2025",
    tempsLecture: "8 min",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    excerpt:
      "Les chantiers sénégalais illustrent bien la richesse d'une architecture qui associe savoir-faire artisanal, maîtrise technique et sens du détail.",
    content: `
            <p>Un chantier de construction au Sénégal ne se résume pas à une suite d'étapes techniques. C'est le lieu d'une rencontre entre les savoir-faire des artisans, les exigences de la conception et la vie des habitants.</p>
            <h3>Le dialogue entre le bureau d\'études et la main-d\'œuvre</h3>
            <p>Le bon chantier repose sur des échanges réguliers entre l\'architecte, les artisans et les clients. Ce dialogue est essentiel pour ajuster les détails, faire évoluer certains choix et garantir la qualité finale.</p>
            <p>Les maçons, menuisiers, carreleurs et ferronniers apportent une connaissance précieuse du terrain et des matériaux.</p>
            <h3>Le chantier comme école de précision</h3>
            <p>En architecture sénégalaise, les détails sont déterminants : l\'ombrage, la hauteur des ouvertures, l\'infiltration de l\'air, la finition des joints, la qualité du béton ou du bois.</p>
            <p>Chaque élément contribue à la robustesse, au confort et à la singularité du projet.</p>
            <h3>Un chantier pensé pour durer</h3>
            <p>La qualité d\'un chantier ne se mesure pas seulement à la beauté finale, mais aussi à sa capacité à résister au climat, au temps et à l\'usage. Cette exigence est au cœur de toute bonne construction au Sénégal.</p>
        `,
  },
  {
    id: 11,
    slug: "architecture-plein-air-dakar",
    titre:
      "Architecture en plein air à Dakar : espaces de vie connectés au paysage",
    categorie: "Tendances",
    date: "30 septembre 2025",
    tempsLecture: "5 min",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&h=400&fit=crop&q=80",
    excerpt:
      "À Dakar, les maisons contemporaines privilégient les terrasses, cours intérieures et vues panoramiques pour mieux vivre avec le climat et le paysage.",
    content: `
            <p>Le paysage dakarois invite à une architecture qui s'ouvre au ciel, au vent et à la lumière. Les projets récents favorisent des espaces de vie en extérieur, pensés comme de véritables prolongements de la maison.</p>
            <h3>Terrasses et cours comme pièces de vie</h3>
            <p>Les terrasses ombragées, les patios et les jardins intérieurs deviennent des pièces majeures du programme. Elles servent à recevoir, se reposer et profiter de la brise marine.</p>
            <p>Ce mode d'aménagement permet d'élargir la maison sans forcément recourir à des surfaces habitables supplémentaires.</p>
            <h3>Un design qui valorise le paysage</h3>
            <p>Les grandes vitrines, les percées horizontales et les plans de toiture particuliers permettent de cadrer le paysage tout en régulant la chaleur. L'architecture cherche à créer une relation fluide entre l'intérieur et l'extérieur.</p>
            <p>Cette logique de continuité est particulièrement appréciée dans les villas de bord de mer et les maisons urbaines bien exposées.</p>
            <h3>Un habitat vivant</h3>
            <p>Les espaces extérieurs ne sont plus seulement fonctionnels : ils deviennent le cadre de la vie quotidienne, la maison se vit dans sa globalité, entre retrait, convivialité et lumière.</p>
        `,
  },
  {
    id: 12,
    slug: "maison-moderne-rufisque",
    titre:
      "Maison moderne à Rufisque : simplicité, robustesse et élégance locale",
    categorie: "Chantiers",
    date: "24 septembre 2025",
    tempsLecture: "6 min",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop&q=80",
    excerpt:
      "À Rufisque, la maison moderne s'appuie sur des lignes épurées, des matériaux résistants et un confort adapté au climat urbain.",
    content: `
            <p>Les maisons contemporaines de Rufisque reflètent une architecture plus sobre, plus lisible et plus significative. Le parti architectural privilégie la clarté des formes et la gestion intelligente de la chaleur.</p>
            <h3>Des volumes simples</h3>
            <p>Les projets adoptent souvent un plan compact, des baies judicieusement placées et des éléments de protection solaire en façade. Cela permet de réduire les coûts énergétiques sans sacrifier le confort.</p>
            <p>Les ouvertures sont pensées pour laisser entrer la lumière sans créer de surchauffe excessive.</p>
            <h3>Des finitions locales</h3>
            <p>Les enduits clairs, les menuiseries en bois, les garde-corps métalliques et les sols en pierre ou carrelage donnent une qualité fine à l'ensemble. L'effet est à la fois contemporain et respectueux du contexte local.</p>
            <p>Les détails, comme les auvents ou les appuis de fenêtre, jouent un rôle crucial dans la protection climatique.</p>
            <h3>Une exigence durable</h3>
            <p>Ces maisons illustrent bien le fait qu'une architecture élégante peut aussi être durable, accessible et adaptée au quotidien des ménages sénégalais.</p>
        `,
  },
];

// Fonction pour obtenir un article par son slug
function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

// Fonction pour obtenir les derniers articles
function getRecentArticles(limit = 3) {
  return articles.slice(0, limit);
}

// Fonction pour obtenir les articles similaires (hors article courant)
function getSimilarArticles(slug, limit = 3) {
  return articles.filter((a) => a.slug !== slug).slice(0, limit);
}
