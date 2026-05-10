---
aliases: [FT-002 Boulons HR vs HV]
tags: [boulonnerie, fiche-technique, assemblage]
type: fiche_technique
status: validated
created: 2026-05-05
updated: 2026-05-05
---

﻿---
aliases: [FT-002, Boulons HR, Boulons HV, Boulonnerie]
tags: [fiche-technique, boulonnerie, HR, HV, EC3-1-8, EN-14399]
statut: brouillon
version: v0.1
date_creation: 2026-04-11
norme_ref: EN 14399-3, EN 14399-4
---

# FT-002 — Boulons Précontraints HR vs HV

> **Domaine** : #assemblages #boulonnerie
> **Norme(s)** : EN 14399-3 (HR) / EN 14399-4 (HV)
> **Statut** : 🟡 Brouillon v0.1
> **Source HTML** : `Connaissance_Odoo/FT-002_Boulons_HR_vs_HV.html`

---

## 1. Deux systèmes incompatibles

| Caractéristique | HR (EN 14399-3) | HV (EN 14399-4) |
|---|---|---|
| Système | HRC (boulon + écrou + rondelles) | HV tablier (boulon + écrou) |
| Serrage | Clé dynamométrique ou indicateur DTI | Méthode combinée (½ tour) |
| Rondelles | 2 (sous tête + sous écrou) | 1 seule (sous élément tournant) |
| Marquage | HR sur tête | HV sur tête |

> [!CAUTION]
> Les systèmes HR et HV sont **NON INTERCHANGEABLES**. Un boulon HR ne peut pas être installé avec la procédure HV et vice-versa.

## 2. Force de précontrainte

$$
F_{p,C} = 0.7 \times f_{ub} \times A_s
$$

| Diamètre | As (mm²) | Fp,C classe 10.9 (kN) |
|---|---|---|
| M16 | 157 | 110 |
| M20 | 245 | 172 |
| M22 | 303 | 212 |
| M24 | 353 | 247 |
| M27 | 459 | 321 |

## 3. Classes de frottement μ

| Classe | μ | Traitement de surface |
|---|---|---|
| A | 0.50 | Grenaillage |
| B | 0.40 | Grenaillage + peinture zinc |
| C | 0.30 | Brossage mécanique |
| D | 0.20 | Surface brute |

## 4. À compléter (brouillon)

- [ ] Logigramme de choix HR vs HV
- [ ] Comparaison avec visserie non précontrainte (classe 4.6, 8.8)
- [ ] Procédures de serrage détaillées
- [ ] Photo/schéma des deux systèmes

---

## 🔗 Liens
- [[FT-001 Cordons de Soudure EC3 vs CBFEM]]
- [[MOC_Assemblages]]
- [[MOC_Eurocodes]]
- [[GED Index]]
