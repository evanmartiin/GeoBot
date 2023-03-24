const START_DATE = new Date(2023, 2, 25);

const TRIGGER_TIME = "10:30";

const ORIGINAL_PROMPT = "Je veux des informations sur le pays appelé COUNTRY_NAME. Situe-le en me donnant son continent et les noms de ses pays voisins, sans donner de direction. Ensuite donne-moi sa capitale, les langues parlées dans le pays, et un fait insolite sur ce pays. Rédige un seul paragraphe bref avec uniquement ces informations.";

const EMOJIS = {
  CUP: String.fromCodePoint(0x1F3C6),
  PIN: String.fromCodePoint(0x1F4CC),
  PARTY: String.fromCodePoint(0x1F389),
  CRY: String.fromCodePoint(0x1F62D),
  THINK: String.fromCodePoint(0x1F914),
  WAVE: String.fromCodePoint(0x1F44B),
}

const COUNTRY_NAMES = [
  "Afghanistan",
  "Afrique du Sud",
  "Albanie",
  "Algérie",
  "Allemagne",
  "Andorre",
  "Angola",
  "Antigua-et-Barbuda",
  "Arabie Saoudite",
  "Argentine",
  "Arménie",
  "Australie",
  "Autriche",
  "Azerbaïdjan",
  "Bahamas",
  "Bahreïn",
  "Bangladesh",
  "Barbade",
  "Belgique",
  "Belize",
  "Bénin",
  "Bhoutan",
  "Biélorussie",
  "Birmanie",
  "Bolivie",
  "Bosnie-Herzégovine",
  "Botswana",
  "Brésil",
  "Brunei Darussalam",
  "Bulgarie",
  "Burkina Faso",
  "Burundi",
  "Cambodge",
  "Cameroun",
  "Canada",
  "Cap-Vert",
  "République centrafricaine",
  "Chili",
  "Chine",
  "Chypre",
  "Colombie",
  "Comores",
  "République du Congo",
  "République démocratique du Congo",
  "Îles Cook",
  "Corée du Nord",
  "Corée du Sud",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatie",
  "Cuba",
  "Danemark",
  "Djibouti",
  "République dominicaine",
  "Dominique",
  "Égypte",
  "Émirats arabes unis",
  "Équateur",
  "Érythrée",
  "Espagne",
  "Estonie",
  "États-Unis",
  "Éthiopie",
  "Fidji",
  "Finlande",
  "France",
  "Gabon",
  "Gambie",
  "Géorgie",
  "Ghana",
  "Grèce",
  "Grenade",
  "Guatemala",
  "Guinée",
  "Guinée-Bissau",
  "Guinée équatoriale",
  "Guyana",
  "Haïti",
  "Honduras",
  "Hongrie",
  "Inde",
  "Indonésie",
  "Irak",
  "Iran",
  "Irlande",
  "Islande",
  "Israël",
  "Italie",
  "Jamaïque",
  "Japon",
  "Jordanie",
  "Kazakhstan",
  "Kenya",
  "Kirghizistan",
  "Kiribati",
  "Koweït",
  "Laos",
  "Lesotho",
  "Lettonie",
  "Liban",
  "Liberia",
  "Libye",
  "Liechtenstein",
  "Lituanie",
  "Luxembourg",
  "Macédoine du Nord",
  "Madagascar",
  "Malaisie",
  "Malawi",
  "Maldives",
  "Mali",
  "Malte",
  "Maroc",
  "Îles Marshall",
  "Maurice",
  "Mauritanie",
  "Mexique",
  "Micronésie",
  "Moldavie",
  "Monaco",
  "Mongolie",
  "Monténégro",
  "Mozambique",
  "Namibie",
  "Nauru",
  "Népal",
  "Nicaragua",
  "Niger",
  "Nigéria",
  "Niue",
  "Norvège",
  "Nouvelle-Zélande",
  "Oman",
  "Ouganda",
  "Ouzbékistan",
  "Pakistan",
  "Palaos",
  "Palestine",
  "Panama",
  "Papouasie-Nouvelle-Guinée",
  "Paraguay",
  "Pays-Bas",
  "Pérou",
  "Philippines",
  "Pologne",
  "Portugal",
  "Qatar",
  "Roumanie",
  "Royaume-Uni",
  "Russie",
  "Rwanda",
  "Saint-Christophe-et-Niévès",
  "Sainte-Lucie",
  "Saint-Marin",
  "Saint-Vincent-et-les-Grenadines",
  "Îles Salomon",
  "Salvador",
  "Samoa",
  "Sao Tomé-et-Principe",
  "Sénégal",
  "Serbie",
  "Seychelles",
  "Sierra Leone",
  "Singapour",
  "Slovaquie",
  "Slovénie",
  "Somalie",
  "Soudan",
  "Soudan du Sud",
  "Sri Lanka",
  "Suède",
  "Suisse",
  "Suriname",
  "Swaziland",
  "Syrie",
  "Tadjikistan",
  "Tanzanie",
  "Tchad",
  "République tchèque",
  "Thaïlande",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinité-et-Tobago",
  "Tunisie",
  "Turkménistan",
  "Turquie",
  "Tuvalu",
  "Ukraine",
  "Uruguay",
  "Vanuatu",
  "Vatican",
  "Venezuela",
  "Vietnam",
  "Yémen",
  "Zambie",
  "Zimbabwe",
];

export { COUNTRY_NAMES, START_DATE, ORIGINAL_PROMPT, TRIGGER_TIME, EMOJIS };
