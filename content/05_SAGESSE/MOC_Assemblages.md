---
aliases: [Assemblages, Boulonnerie, Soudure]
tags: [MOC, assemblages, boulonnerie, soudure, CBFEM]
type: moc
status: evergreen
created: 2026-05-05
updated: 2026-05-05
---

# 🔩 MOC — Assemblages Acier

> Carte de contenu pour les assemblages : boulonnerie, soudure, ancrages, CBFEM.
> **Notebook NotebookLM associé** : NB2 — SIRIUS Assemblages & Logiciels (117 sources)
> **Gemini Gem associé** : SIRIUS Assemblages Expert

---

## Soudure
- **Méthode analytique** : EN 1993-1-8 §4.5 — formule simplifiée & directionnelle
- **Méthode CBFEM** : modélisation FEM du cordon (IDEA Statica)
- [[FT-001 Cordons de Soudure EC3 vs CBFEM]] ✅ Validée
- Règle des 99% CBFEM : acceptable si redistribution plastique confirmée

## Boulonnerie
- **Boulons HR** (EN 14399-3) : système HRC, serrage par clé dynamométrique
- **Boulons HV** (EN 14399-4) : système HV tablier, serrage combiné
- [[FT-002 Boulons HR vs HV]] 🟡 Brouillon
- Classes de frottement μ (0.20 → 0.50)
- Formule Fp,C = 0.7 × fub × As

## Pieds de poteaux
- [[Synthese_Pieds_Poteaux]] — Méthode des composants EC3-1-8
- Tronçons en T (platine + tiges d'ancrage)
- Rigidité Sj,ini et classification
- Polygone d'interaction M-N
- Raidisseurs, mortier de calage, fondations

## Ancrages
- Hilti, Peikko — systèmes d'ancrage post-installés
- Cône de béton / arrachement / fendage
- Responsabilité BE Béton vs BE Métal

## IDEA Statica / CBFEM
- Nodal analysis vs member analysis
- Convergence et redistribution plastique
- Limites de la méthode

## 🆕 Encastrements — Méthode des Composantes
> *Module développé et validé le 2026-05-05 — 23/23 tests agent de contrôle ✅*

- [[Méthode des Composantes]] — Algorithme complet 10 composants, 3 zones
- [[Tronçon en T équivalent]] — 3 modes de ruine (§6.2.4)
- [[Platine d'about débordante]] — Configuration, pré-dimensionnement, règles de pince
- [[Jarret de portique]] — Géométrie, gain MRd, stabilité âme
- [[Résistances Boulons EC3]] — Tableau M12→M30, classes 4.6→10.9
- [[Rigidité Initiale Assemblage]] — Sj,ini, coefficients ki, classification

### Fichiers de calcul NdC
- `assemblage_data.js` — Catalogue boulons, T-stub, soudures
- `assemblage_engine.js` — Moteur méthode des composantes
- `assemblage_ui.js` — Interface §8b + schéma SVG
- `test_controle.js` — 23 tests de conformité EN 1993-1-8

---

## 📂 Dossier Google Drive
| Dossier | PDFs |
|---|---|
| `02_ASSEMBLAGES_ACIER` | 107 |


## Sagesse — Retours GED
- [[Sagesse_02_ASSEMBLAGES_ACIER]]

---

## 🔗 Liens
- [[GED Index]]
- [[MOC_Eurocodes]]
- [[MOC_Structures_PV]]
