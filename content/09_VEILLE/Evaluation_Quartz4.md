---
type: wiki_article
status: validated
tags: [wiki, publication, quartz, github-pages]
created: 2026-05-05
updated: 2026-05-05
lien_sagesse: ""
---

# Évaluation Quartz 4 — Publication Wiki SIRIUS

## Verdict : ✅ RECOMMANDÉ pour le Wiki multi-pages SIRIUS

## Qu'est-ce que Quartz 4 ?

Générateur de site statique (SSG) conçu spécifiquement pour transformer un vault Obsidian en site web. Gratuit, open-source, hébergé sur GitHub Pages.

## Comparaison

| Critère | Quartz 4 | Obsidian Publish | Site custom (Next.js) |
|---------|:--------:|:---------------:|:--------------------:|
| **Coût** | Gratuit | 8$/mois | Gratuit (GitHub Pages) |
| **Compatibilité Obsidian** | ✅ Natif (wikilinks, callouts, frontmatter) | ✅ Parfait | ⚠️ Manuel |
| **Performance** | ⚡ Ultra rapide (statique) | 🟡 Correct | 🟡 Variable |
| **SEO** | ✅ Optimisé | 🟡 Basique | ✅ Contrôle total |
| **Graph View** | ✅ Interactif | ✅ Interactif | ❌ À coder |
| **Recherche** | ✅ Full-text | ✅ Full-text | ⚠️ À implémenter |
| **Contrôle publication** | ✅ `publish: true` dans frontmatter | ✅ Natif | ✅ Manuel |
| **Difficulté setup** | 🟡 CLI (Node.js + Git) | ✅ 1 clic | 🔴 Développement |

## Setup requis

### Prérequis
- Node.js v22+ ✅ (on a Python 3.14, Node devrait être installé)
- Git ✅
- Compte GitHub ✅

### Commandes
```bash
git clone https://github.com/jackyzha0/quartz.git sirius-wiki
cd sirius-wiki
npm i
npx quartz create
# Copier le vault dans content/
npx quartz build --serve  # Preview local :8080
npx quartz sync           # Déployer sur GitHub Pages
```

### Configuration clé
Dans `quartz.config.ts` :
- Activer `ExplicitPublish` → seules les notes avec `publish: true` sont publiées
- Personnaliser le thème aux couleurs SIRIUS (navy/cyan/orange)
- Configurer le français comme langue par défaut

## Plan de déploiement

| Étape | Action | Durée |
|:-----:|--------|:-----:|
| 1 | Cloner Quartz 4 + installer dépendances | 10 min |
| 2 | Copier les notes publiques du vault dans `content/` | 15 min |
| 3 | Ajouter `publish: true` aux notes à publier | 20 min |
| 4 | Personnaliser le thème SIRIUS | 30 min |
| 5 | Configurer GitHub Actions + Pages | 15 min |
| 6 | Test + validation | 30 min |

**Durée totale estimée : ~2h**

## Liens
- [[🏠 Home]]
- [[MOC_Second_Cerveau]]
