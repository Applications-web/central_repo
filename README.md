# 🎓 Examen Intra : Fondamentaux React & Git

Bienvenue dans cet examen de refactorisation. Votre mission est de transformer une application "monolithique" et répétitive en une structure de composantes React moderne, propre et dynamique.

## 📋 Consignes Générales
* **Git :** Vous devez effectuer **exactement 1 commit par exercice** (total de 3) avec les messages indiqués. L'heure des commits sera vérifiée.
* **Qualité :** La déstructuration des props et la propreté du JSX sont prises en compte dans la note.

---

## 🛠️ Exercices à réaliser

### Exercice 1 : Architecture et Composition (`children`)
**Fichier :** `src/components/ServiceManager.jsx`

Le code actuel contient de la répétition massive (Non-DRY). 
1. Identifiez les structures répétitives et créez trois composantes : `ComponentA` (le conteneur), `ComponentB` (Option Beta) et `ComponentC` (Détail Gamma).
2. Utilisez la prop spéciale **`children`** dans `ComponentA` pour qu'il puisse encapsuler n'importe quel contenu.
3. Refactorisez le code pour obtenir exactement le même visuel, mais en utilisant l'imbrication (ex: `<ComponentA> <ComponentB /> </ComponentA>`).

> **💾 Commit 1 :** `git commit -m "feat: refactorisation composition et children (Exo 1)"`

---

### Exercice 2 : Remontée de données (Lifting State Up)
**Fichiers :** `src/App.jsx` et `src/components/ProfileSection.jsx`

Le composant `ProfileSection` possède actuellement ses propres données en dur (`USER_DATA`).
1. **Remontez la donnée :** Coupez l'objet `USER_DATA` de `ProfileSection` et déplacez-le dans `App.jsx`.
2. **Passage de props :** Passez cet objet depuis `App` vers `ProfileSection` via une prop nommée `user`.
3. **Affichage :** Modifiez `ProfileSection` pour qu'il affiche les données (`name`, `role`, `joinDate`) provenant des props.

> **💾 Commit 2 :** `git commit -m "feat: lifting state up et passage de props (Exo 2)"`

---

### Exercice 3 : Rendu Dynamique (`.map`)
**Fichiers :** `src/App.jsx` et `src/components/DestinationList.jsx`

La liste des destinations dans `DestinationList` est actuellement affichée manuellement par index (`items[0]`, `items[1]`, etc.), ce qui n'est pas scalable.
1. Assurez-vous que le tableau `destinations` dans `App.jsx` contient des objets avec au moins 3 attributs : `name`, `price` et `date`.
2. Dans `DestinationList`, utilisez la méthode **`.map()`** pour générer automatiquement les balises `<li>`.
3. **Contrainte :** Chaque élément de la liste doit posséder une prop `key` unique.

> **💾 Commit 3 :** `git commit -m "feat: boucle map avec attributs multiples (Exo 3)"`

---

## ✅ Critères d'évaluation
* **Structure :** Séparation claire des responsabilités entre composantes.
* **Syntaxe :** Utilisation correcte des props et de la prop `children`.
* **Git :** Présence des 3 commits avec les messages demandés.
* **Rendu :** L'application doit compiler sans erreurs et afficher les données dynamiques.

---
*Bon succès !*
