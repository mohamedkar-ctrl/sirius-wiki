---
aliases: [Synthese_Pieds_Poteaux]
tags: [assemblage, eurocodes]
type: wiki_article
status: validated
created: 2026-05-05
updated: 2026-05-05
---

﻿---
aliases: [Pieds de poteaux, Column base plates]
tags: [assemblages, pieds-poteaux, EC3-1-8, CBFEM]
statut: validé
version: v2
date_creation: 2026-04-13
norme_ref: EN 1993-1-8 §6
---

# Synthèse — Pieds de Poteaux Encastrés EC3-1-8

> **Validé par** : Agent Eurocodes ✅ + Agent Assemblages ✅
> **Sources mobilisées** : 15 documents (normes AFNOR, NCCI ACCESS STEEL, cours CHEC/CTICM, Peikko)
> **NotebookLM** : Notebook dédié "SIRIUS Pieds Poteaux Encastrés" (11 sources)

---

## 1. Méthode des composants (EN 1993-1-8 §6)

L'assemblage est décomposé en **composants élémentaires** :
- Tronçon en T tendu (platine + tiges d'ancrage)
- Tronçon en T comprimé (béton + mortier de calage)
- Composant de cisaillement

## 2. Rigidité flexionnelle

$$
S_{j,ini} = \frac{E \cdot z^2}{\sum \frac{1}{k_i}}
$$

### Classification
| Condition | Type |
|---|---|
| Sj,ini ≥ 25 EI/L | Rigide (encastrement) |
| Sj,ini ≤ 0.5 EI/L | Articulé |
| Entre les deux | Semi-rigide |

## 3. Points critiques

> [!WARNING]
> - Raidisseurs obligatoires si platine > 30mm
> - Mortier de calage : épaisseur min 25mm, résistance ≥ 2/3 fck
> - Cône de béton : vérification arrachement → responsabilité BE Béton
> - Fendage : espacement des tiges vs bord de fondation

## 4. Polygone d'interaction M-N

Le domaine de résistance est défini par :
- Compression pure : NRd
- Flexion pure : MRd
- Traction pure : NRd,t (tiges d'ancrage)
- Interaction : courbe enveloppe convexe

---

## 🔗 Liens
- [[FT-001 Cordons de Soudure EC3 vs CBFEM]]
- [[FT-002 Boulons HR vs HV]]
- [[MOC_Assemblages]]
- [[MOC_Eurocodes]]
- [[GED Index]]
