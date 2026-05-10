---
aliases: [FT-001 Cordons de Soudure EC3 vs CBFEM]
tags: [soudure, fiche-technique, assemblage]
type: fiche_technique
status: validated
created: 2026-05-05
updated: 2026-05-05
---

﻿---
aliases: [FT-001, Soudures CBFEM, Cordons de soudure]
tags: [fiche-technique, soudure, CBFEM, EC3-1-8]
statut: validé
version: v1.3
date_creation: 2026-04-11
norme_ref: EN 1993-1-8 §4.5
---

# FT-001 — Cordons de Soudure : EC3 Analytique vs CBFEM

> **Domaine** : #assemblages #soudure #CBFEM
> **Norme(s)** : EN 1993-1-8 §4.5.3.3 / CBFEM (IDEA Statica)
> **Statut** : ✅ Validé (Agent Revue de Pair + Agent Bureau de Contrôle)
> **Publié sur** : Odoo Connaissances `/odoo/knowledge/100`

---

## 1. Contexte

Lors du dimensionnement d'assemblages soudés, deux méthodes coexistent :
- **Méthode analytique** (EN 1993-1-8 §4.5) : formules simplifiée et directionnelle
- **Méthode CBFEM** (Component-Based FEM) : modélisation FEM via IDEA Statica

## 2. Formule analytique — Méthode simplifiée

$$
F_{w,Rd} = f_{vw,d} \times a \times L_w
$$

Avec :
$$
f_{vw,d} = \frac{f_u / \sqrt{3}}{\beta_w \times \gamma_{M2}}
$$

| Acier | fu (MPa) | βw | f_{vw,d} (MPa) |
|---|---|---|---|
| S235 | 360 | 0.80 | 207.8 |
| S275 | 430 | 0.85 | 233.6 |
| **S355** | **470** | **0.90** | **241.2** |

## 3. Règle des 99% CBFEM

> [!WARNING]
> Un taux d'utilisation de 99% en CBFEM est acceptable SI ET SEULEMENT SI :
> - La redistribution plastique est confirmée par le logiciel
> - Le maillage est suffisamment raffiné (taille ≤ gorge/2)
> - Les conditions aux limites sont réalistes

**Source validante** : CBFEM Book 2021 — réserve de redistribution plastique

## 4. Piège courant

> [!CAUTION]
> Ne JAMAIS comparer directement un taux CBFEM avec un taux analytique.
> La méthode CBFEM distribue les efforts — la méthode analytique prend le max local.

## 5. Historique de validation

| Version | Date | Auditeur | Verdict |
|---|---|---|---|
| v1.0 | 2026-04-11 | Création | 🟡 Brouillon |
| v1.2 | 2026-04-11 | Agent Revue de Pair | ⚠️ 3 observations |
| v1.3 | 2026-04-11 | Agent Bureau de Contrôle | ✅ Validé |

---

## 🔗 Liens
- [[MOC_Assemblages]]
- [[MOC_Eurocodes]]
- [[FT-002 Boulons HR vs HV]]
- [[GED Index]]
