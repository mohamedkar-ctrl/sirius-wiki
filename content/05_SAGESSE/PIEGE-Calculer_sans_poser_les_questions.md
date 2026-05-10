---
tags: [sagesse, piege, calcul, EC3]
domaine: EUR
severite: 🟡
date_creation: 2026-04-27
type: wiki_article
status: validated
created: 2026-05-05
updated: 2026-05-05
---

# ⚠️ Ne jamais calculer sans poser les questions

> **Le piège** : se lancer dans un calcul EC3 dès qu'on a un profilé et un effort, sans poser les questions essentielles.

## L'erreur

On reçoit "vérifie un 120×120×4 sous 5t" et on fonce. On suppose S235, on fait un tableau pour 5 longueurs, on présente un résultat "OK" — mais le résultat ne vaut rien sans les données réelles.

## Les 4 questions obligatoires avant tout calcul de flambement

1. **Nuance d'acier ?** → S235 / S275 / S355 / S460 (change fy, classe de section, courbe de flambement)
2. **Longueur de la barre ?** → L en mètres
3. **Conditions aux limites ?** → Coefficient k pour Lcr = k × L
   - Articulé-Articulé : k = 1.0
   - Encastré-Articulé : k = 0.7
   - Encastré-Encastré : k = 0.5
   - Console libre : k = 2.0
4. **Fonction / contexte ?** → Poteau, diagonale, montant, panne...

## La règle

> [!IMPORTANT]
> **Toujours demander AVANT de calculer.** Un calcul rapide avec des hypothèses fausses est pire qu'aucun calcul.

## Origine

Retour d'expérience — test SIRIUS RAG du 27/04/2026.

## Liens
- [[🏠 Home]] *(lien sagesse)*
- [[INDEX_SAGESSE]]
