// Données des témoignages
const temoignages = [
  {
    id: 1,
    nom: "Sophie Delacroix",
    poste: "Directrice de projet",
    profil: "Propriétaire",
    avatar: "SD",
    projet: "Villa Somone",
    note: 5,
    commentaire:
      "Un travail exceptionnel ! L'équipe a su comprendre nos besoins et créer un espace qui correspond parfaitement à notre vision. Le respect des délais et la qualité des finitions sont remarquables.",
    preuves: [
      {
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
        label: "Maison clé en main",
      },
      {
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
        label: "Plans précis",
      },
      {
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        label: "Matériaux premium",
      },
      {
        image:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
        label: "Délais respectés",
      },
      {
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        label: "Lumière optimisée",
      },
      {
        image:
          "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80",
        label: "Aménagement paysager",
      },
      {
        image:
          "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80",
        label: "Livraison finale",
      },
    ],
  },
  {
    id: 2,
    nom: "Jean-Pierre Mendy",
    poste: "Chef d'entreprise",
    profil: "Client",
    avatar: "JM",
    projet: "Rénovation d'une maison coloniale",
    note: 5,
    commentaire:
      "Nous avons été impressionnés par la façon dont ils ont su conserver le charme d'origine tout en apportant le confort moderne. Une véritable prouesse architecturale.",
    preuves: [
      {
        image:
          "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
        label: "Patrimoine préservé",
      },
      {
        image:
          "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
        label: "Rénovation maîtrisée",
      },
      {
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
        label: "Cohérence des volumes",
      },
      {
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        label: "Ventilation naturelle",
      },
      {
        image:
          "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80",
        label: "Espaces apaisants",
      },
      {
        image:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
        label: "Guide de chantier clair",
      },
      {
        image:
          "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80",
        label: "Résultat premium",
      },
    ],
  },
  {
    id: 3,
    nom: "Fatou Diagne",
    poste: "Responsable RH",
    profil: "Manager",
    avatar: "FD",
    projet: "Bureau Dakar",
    note: 4,
    commentaire:
      "Un espace de travail inspirant ! Nos équipes sont ravis de travailler dans ce cadre lumineux et fonctionnel. Merci pour cette belle réalisation.",
    preuves: [
      {
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
        label: "Espace de travail",
      },
      {
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
        label: "Lumière naturelle",
      },
      {
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        label: "Confort ergonomique",
      },
      {
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        label: "Équipe à l'écoute",
      },
      {
        image:
          "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
        label: "Optimisation des volumes",
      },
      {
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        label: "Ambiance inspirante",
      },
      {
        image:
          "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80",
        label: "Satisfaction équipe",
      },
    ],
  },
  {
    id: 4,
    nom: "Moussa Ba",
    poste: "Promoteur immobilier",
    profil: "Développeur",
    avatar: "MB",
    projet: "Immeuble de Bureaux Diamniadio",
    note: 5,
    commentaire:
      "Professionnalisme et créativité au rendez-vous. Le résultat dépasse nos attentes. Je recommande vivement ce cabinet !",
    preuves: [
      {
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        label: "Bâtiment fonctionnel",
      },
      {
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
        label: "Valeur immobilière",
      },
      {
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        label: "Conformité",
      },
      {
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
        label: "Gestion de chantier",
      },
      {
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
        label: "Communication fluide",
      },
      {
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        label: "Objectifs atteints",
      },
      {
        image:
          "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
        label: "Recommandation",
      },
    ],
  },
  {
    id: 5,
    nom: "Marie-Cécile Niang",
    poste: "Architecte d'intérieur",
    profil: "Clientèle premium",
    avatar: "MN",
    projet: "Villa Ngor",
    note: 5,
    commentaire:
      "Une architecture qui sublime la vue sur l'océan. Chaque détail a été pensé pour créer une harmonie parfaite avec l'environnement. Un vrai coup de cœur !",
    preuves: [
      {
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        label: "Vue dégagée",
      },
      {
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
        label: "Palette harmonieuse",
      },
      {
        image:
          "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80",
        label: "Détails raffinés",
      },
      {
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        label: "Grande ouverture",
      },
      {
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
        label: "Intégration naturelle",
      },
      {
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        label: "Éclairement optimal",
      },
      {
        image:
          "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80",
        label: "Coup de cœur",
      },
    ],
  },
  {
    id: 6,
    nom: "Abdoulaye Sow",
    poste: "Gestionnaire de projet",
    profil: "Partenaire",
    avatar: "AS",
    projet: "Complexe Sportif",
    note: 4,
    commentaire:
      "Un projet ambitieux parfaitement réalisé. Les espaces sont modulables et adaptés à différents sports. L'intégration paysagère est réussie.",
    preuves: [
      {
        image:
          "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=80",
        label: "Aménagement polyvalent",
      },
      {
        image:
          "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
        label: "Espaces fonctionnels",
      },
      {
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        label: "Paysage intégré",
      },
      {
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
        label: "Plan modulable",
      },
      {
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
        label: "Flux optimisés",
      },
      {
        image:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
        label: "Matériaux durables",
      },
      {
        image:
          "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80",
        label: "Projet réussi",
      },
    ],
  },
];
