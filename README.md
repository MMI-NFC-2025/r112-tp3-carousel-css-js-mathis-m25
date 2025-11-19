[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/uzhIbISa)
- nom :
- prénom :
- URL Netlify :

# Travail

N'oublier pas votre nom, prénom et l'URL de publication Netlify...

# Complétez le CSS

Compléter le fichier [menu.css](/src/css/components/carousel.css) et visualiser l'effet sur [index.html](/index.html) .

**Faire un commit** : "code CSS"

# Manuellement sans JS

Simplement faire défiler horizontalement les images...

# Faire défiler par code JS

## Tester dans la console JS du navigateur (inspecter)

### Faire défiler par des commandes dans la console

Les `____` sont à remplacer par les termes corrects.

Trouvez l'élément de classe CSS `carousel__container` :

```js
carousel = document.querySelector("______");
```

Doit afficher dans la console :

```html
<div class="carousel__container" role="region" aria-live="polite">...</div>
```

Maintenant changer la position du scroll :

```js
carousel.scrollLeft = 520;
```

Le contenu du carrousel doit défiler.

Vous pouvez aussi tester :

```js
carousel.scrollBy({ left: +260, behavior: "smooth" });
```

Scroll vers la gauche (scroll **plus**).

Et :

```js
carousel.scrollBy({ left: -260, behavior: "smooth" });
```

Scroll vers la droite (scroll **moins**)

## Réagir au click sur les boutons

### Tester dans la console

Trouvez l'élément de classe CSS `carousel__button--prev` :

```js
prevButton = __________________;
```

Doit afficher dans la console :

```html
<button
  class="carousel__button carousel__button--prev"
  aria-label="Défiler vers la gauche"
>
  ...
</button>
```

Trouvez l'élément de classe CSS `carousel__button--next` :

```js
nextButton = _______________________;
```

Doit afficher dans la console :

```html
<button
  class="carousel__button carousel__button--next"
  aria-label="Défiler vers la droite"
>
  ...
</button>
```

## Réagir à un click sur les boutons

### base :

Dans le fichier [script.js](/src/js/script.js), compléter le code suivant :

```js
const carousel = ______________________;
const prevButton = _____________________;
const nextButton = _____________________;

// Largeur de défilement d’un item
if (carousel) {
  // Scroll au clic sur le bouton précédent
  prevButton.____________("_____", () => {
    ______________________;
  });

  // Scroll au clic sur le bouton suivant
  nextButton.____________("_____", () => {
    ______________________;
  });
}
```

Testez en rechargeant la page et cliquant sur les boutons : Le carrousel doit défiler

**Faire commit** : défilement de base précédent/suivant

### Déterminer la valeur du défillement dynamiquement :

Testez dans la console :

```js
premierItem = document.querySelector(".carousel__item");
```

Doit afficher :

```html
<div class=​"carousel__item">​…​</div>
```

Et aussi testez :

```js
scrollAmount = premierItem.clientWidth;
```

Doit afficher :

```js
260;
```

Intégrer ces deux lignes dans le fichier [script.js](/src/js/script.js) et remplacer la constante `260` par la valeur déterminée dynamiquement.

Testez et vérifiez que cela fonctionne toujours.

**Faire commit** : défilement en fonction de la largeur d'une image

## Carrousel avec taille d'image responsive

Changer les CSS pour que les tailles d'items (images) soient proportionnelles à la taille d'écran.

Tester que le scroll et les boutons fonctionnent toujours de façon satisfaisante.

**Faire commit** : Carrousel avec taille d'image responsive

## Carrousel avec ancres

Ajouter une liste de lien avec ancres vers les éléments du carrousel

Tester le bon défilement au clic sur les ancres

**Faire commit** : Carrousel avec ancres

## Carrousel avec btn sur les éléments

Changer les CSS pour que les boutons gauche/droite soient sur le carrousel (`position:absolute;`)

Tester que le scroll et les boutons (gauche/droite) fonctionnent toujours de façon satisfaisante.

**Faire commit** : Carrousel avec btn absolue
