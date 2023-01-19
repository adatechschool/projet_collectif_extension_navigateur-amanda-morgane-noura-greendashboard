//----------------------------------------------------------- Emoji en début de titre
let random = Math.floor(Math.random() * 15) + 0;
let astuceEcolo = ["trier ses e-mails.",
    "utiliser un moteur de recherche éco-responsable (Ecosia, Lilo, Ecogine...)",
    "fermer les onglets inactifs",
    "changer la qualité de la vidéo",
    "alléger les mails envoyés en privilégiant les fichiers compressés",
    "penser à supprimer les PJ dans les mails de réponse",
    "déconnecter/débrancher ses appareils",
    "activer le mode sombre",
    "calculer son empreinte numérique avec l’extension de navigateur 'Carbonalyser'",
    "bien entretenir son matériel avec des protections anti-virus pour éviter les pannes",
    "privilégier les imprimantes qui permettent de remplacer chaque couleur indépendamment",
    "enregistrer dans les favoris ses sites préférés pour y accéder plus rapidement",
    "limiter son temps d’écran",
    "installer un anti-spam pour éviter de recevoir des mails indésirables",
    "envoyer un mail uniquement lorsque c’est nécessaire et réduire le nombre de destinataires",
    "vider le cache de son navigateur"]

let article = document.querySelector("h1");
let badge = document.createElement("p");
//badge.textContent = "Et on n'oublie pas sa pensée écolo du jour 🌿☘️ ! ";
badge.textContent = `🌿☘️ Astuce pour réduire son empreinte numérique : ${astuceEcolo[random]} ☘️🌿`;
badge.style.fontSize = "17px";
badge.style.fontStyle= "italic";
badge.style.color = "#86d72f";
(article ?? heading).insertAdjacentElement("beforeend", badge);


