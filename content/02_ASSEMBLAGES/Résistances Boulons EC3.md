---
aliases: [Résistance boulons, Bolt resistance, Boulons EC3]
tags: [wiki-article, assemblage, boulons, EC3-1-8]
type: wiki_article
status: validated
created: 2026-05-05
updated: 2026-05-05
norme_ref: EN 1993-1-8 Tab. 3.4
niveau: N3
---

# Résistances Boulons EC3

## Liens
- [[MOC_Assemblages]]
- [[Méthode des Composantes]]
- [[Tronçon en T équivalent]]

## Synthèse (N1)
> Les résistances de calcul des boulons (cisaillement, traction, pression diamétrale, interaction) sont définies dans l'EC3-1-8 Tab. 3.4 avec γM2 = 1.25. Les classes 8.8 et 10.9 sont les plus courantes en charpente métallique.

## Méthodologie (N2)

### Formules (Tab. 3.4)

**Cisaillement :**
$$F_{v,Rd} = \frac{\alpha_v \times f_{ub} \times A_s}{\gamma_{M2}}$$

**Traction :**
$$F_{t,Rd} = \frac{0{,}9 \times f_{ub} \times A_s}{\gamma_{M2}}$$

**Interaction V+T (Tab. 3.4) :**
$$\frac{F_{v,Ed}}{F_{v,Rd}} + \frac{F_{t,Ed}}{1{,}4 \times F_{t,Rd}} \leq 1{,}0$$

### Tableau de référence rapide

| Boulon | Classe | As (mm²) | αv | Fv,Rd (kN) | Ft,Rd (kN) |
|:-------|:-------|:---------|:---|:-----------|:-----------|
| M12 | 8.8 | 84.3 | 0.6 | 32.2 | 48.5 |
| M16 | 8.8 | 157 | 0.6 | 60.3 | 90.4 |
| **M20** | **8.8** | **245** | **0.6** | **94.1** | **141.1** |
| M24 | 8.8 | 353 | 0.6 | 135.6 | 203.3 |
| M20 | 10.9 | 245 | 0.5 | 98.0 | 176.4 |
| M24 | 10.9 | 353 | 0.5 | 141.2 | 254.2 |

### Coefficient αv
| Classe | αv | Raison |
|:-------|:---|:-------|
| 4.6, 5.6, 8.8 | 0.6 | Plan de cisaillement dans la partie filetée |
| 6.8, 10.9 | 0.5 | Fragilité plus élevée |

## Détail normatif (N3)

### Coefficients partiels
- γM2 = 1.25 (boulons, soudures)
- γM0 = 1.00 (acier, section brute)
- γM1 = 1.00 (instabilité)

### Catégories d'assemblages boulonnés
| Cat. | Sollicitation | Type |
|:-----|:-------------|:-----|
| A | Cisaillement | Ordinaire |
| B | Cisaillement | Précontraint SLS |
| C | Cisaillement | Précontraint ULS |
| D | Traction | Ordinaire |
| E | Traction | Précontraint |

> L'assemblage par platine d'about en traction utilise des **boulons cat. D** (ordinaires en traction).

## Code source (N4)
- **Fichier** : `assemblage_data.js`
- **Fonctions** : `boltResistances(diam, grade)`, `bearingResistance(...)`, `checkEdgeDistances(...)`
- **Constantes** : `BOLT_GRADES`, `BOLT_GEOMETRY`, `GAMMA_M2`
- **Test** : `test_controle.js` — Tests 1.1 à 1.5 (0.0% écart) ✅

## Voir aussi
- [[Méthode des Composantes]]
- [[Tronçon en T équivalent]]
- [[Platine d'about débordante]]

## Sources
- [x] EN 1993-1-8:2005 Tab. 3.4 — 🟢 Sourcé
- [x] Validation agent de contrôle — 5/5 tests — 🟢 Validé
