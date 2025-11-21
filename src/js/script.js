// ** CAROUSEL **

// Cibler les éléments nécessaires
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

// 1. Détermination dynamique de l'espace de défilement (Phase 3)
// Cibler le premier élément du carousel pour déterminer sa largeur
const premierItem = document.querySelector(".carousel__item"); 
// Calculer la largeur de défilement (doit être > 0)
const scrollAmount = premierItem.clientWidth; 

// 2. Logique de clic des boutons (Phases 2 & 3)
prevButton.addEventListener("click", () => {
  // Utilise la valeur dynamique scrollAmount
  carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

nextButton.addEventListener("click", () => {
  // Utilise la valeur dynamique scrollAmount
  carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
});

// 3. Logique des Ancres (que vous avez fournie)
// Cibler tous les liens d'ancres (les indicateurs)
const indicators = document.querySelectorAll(".carousel__indicator");

indicators.forEach(indicator => {
    indicator.addEventListener("click", (event) => {
        // Empêcher le comportement par défaut (saut brusque)
        event.preventDefault(); 

        // Récupérer l'ID cible (ex: "#item-3")
        const targetId = indicator.getAttribute("href");

        // Cibler l'élément du carrousel correspondant à cet ID
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Utiliser scrollIntoView() pour défiler jusqu'à l'élément avec un effet doux
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

            // Mettre à jour la classe "active" pour la stylisation
            indicators.forEach(i => i.classList.remove('active'));
            indicator.classList.add('active');
        }
    });
});

// Initialiser le premier indicateur comme actif
if (indicators.length > 0) {
    indicators[0].classList.add('active');
}