// Données des projets
const projets = [
  {
    id: 1,
    slug: "villa-somone",
    titre: "Villa Somone",
    categorie: "residentiel",
    description:
      "Une villa contemporaine qui dialogue avec la mer, utilisant des matériaux locaux pour une intégration parfaite dans le paysage côtier.",
    image: "images/realisation/Villa-Somone.png",
    images: ["images/realisation/Villa-Somone.png"],
    superficie: "250 m²",
    annee: "2023",
    lieu: "Somone, Sénégal",
    duree: "8 mois",
  },
  {
    id: 2,
    slug: "bureau-dakar",
    titre: "Bureau Dakar",
    categorie: "commercial",
    description:
      "Un espace de travail moderne et lumineux, conçu pour favoriser la créativité et le bien-être des équipes.",
    image: "images/realisation/Bureau-Dakar.png",
    images: ["images/realisation/Bureau-Dakar.png"],
    superficie: "350 m²",
    annee: "2023",
    lieu: "Dakar, Sénégal",
    duree: "10 mois",
  },
  {
    id: 3,
    slug: "renovation-histoire",
    titre: "Rénovation d'une maison coloniale",
    categorie: "renovation",
    description:
      "Rénovation respectueuse d'une maison coloniale à Saint-Louis, alliant patrimoine et confort moderne.",
    image: "images/realisation/Renovation-d'une-maison-coloniale.png",
    images: ["images/realisation/Renovation-d'une-maison-coloniale.png"],
    superficie: "180 m²",
    annee: "2022",
    lieu: "Saint-Louis, Sénégal",
    duree: "6 mois",
  },
  {
    id: 4,
    slug: "complexe-sportif",
    titre: "Complexe Sportif",
    categorie: "tertiaire",
    description:
      "Un complexe sportif moderne intégré dans un écrin de verdure, avec des espaces modulables pour différentes pratiques.",
    image: "images/realisation/Complexe-Sportif.png",
    images: ["images/realisation/Complexe-Sportif.png"],
    superficie: "1200 m²",
    annee: "2023",
    lieu: "Thiès, Sénégal",
    duree: "14 mois",
  },
  {
    id: 5,
    slug: "villa-ngor",
    titre: "Villa Ngor",
    categorie: "residentiel",
    description:
      "Une villa d'architecte avec vue imprenable sur l'océan, alliant minimalisme et matériaux nobles.",
    image: "images/realisation/Villa-Ngor.png",
    images: ["images/realisation/Villa-Ngor.png"],
    superficie: "300 m²",
    annee: "2023",
    lieu: "Ngor, Dakar",
    duree: "9 mois",
  },
  {
    id: 6,
    slug: "immeuble-bureaux",
    titre: "Immeuble de Bureaux Diamniadio",
    categorie: "commercial",
    description:
      "Un immeuble de bureaux innovant, conçu pour répondre aux nouveaux modes de travail et de collaboration.",
    image: "images/realisation/Immeuble-de-bureaux-diamniadio.png",
    images: ["images/realisation/Immeuble-de-bureaux-diamniadio.png"],
    superficie: "800 m²",
    annee: "2024",
    lieu: "Diamniadio, Sénégal",
    duree: "16 mois",
  },
];

// Fonction pour obtenir un projet par son slug
function getProjetBySlug(slug) {
  return projets.find((p) => p.slug === slug);
}

// Fonction pour obtenir les projets par catégorie
function getProjetsByCategorie(categorie) {
  if (categorie === "all") return projets;
  return projets.filter((p) => p.categorie === categorie);
}

// Fonction pour obtenir les projets mis en avant (3 premiers)
function getFeaturedProjets() {
  return projets.slice(0, 3);
}
