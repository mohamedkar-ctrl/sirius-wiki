---
aliases: [Rigidité assemblage, Sj ini, Classification assemblage]
tags: [wiki-article, assemblage, rigidité, classification, EC3-1-8]
type: wiki_article
status: validated
created: 2026-05-05
updated: 2026-05-05
norme_ref: EN 1993-1-8 §6.3 / §5.2.2
niveau: N2
---

# Rigidité Initiale Assemblage

## Liens
- [[MOC_Assemblages]]
- [[Méthode des Composantes]]
- [[Platine d'about débordante]]

## Synthèse (N1)
> La rigidité initiale Sj,ini caractérise le comportement en rotation de l'assemblage. Elle détermine si l'assemblage est classé RIGIDE (encastrement), SEMI-RIGIDE ou ARTICULÉ, ce qui conditionne le modèle de calcul de la structure entière.

## Méthodologie (N2)

### Formule de rigidité (§6.3.1)
$$S_{j,ini} = \frac{E \times z^2}{\sum_i \frac{1}{k_i}}$$

Où :
- E = 210 000 MPa
- z = bras de levier (mm) — distance centre de compression au centre de traction
- ki = coefficients de rigidité des composants (Tab. 6.11)

### Coefficients de rigidité (Tab. 6.11)
| ki | Composant | Formule |
|:---|:----------|:--------|
| k1 | Panneau cisaillement | 0.38 × Avc / (β × z) |
| k2 | Âme compression | 0.7 × beff × twc / dc |
| k3 | Âme traction | 0.7 × leff × twc / dc |
| k4 | Semelle poteau flexion | 0.9 × leff × tf³ / m³ |
| k5 | Platine flexion | 0.9 × leff × tp³ / m³ |
| k10 | Boulons traction | 1.6 × As / Lb |

### Classification (§5.2.2.5)

```
         Sj,ini
    ─────┼──────────┼──────────→
         │          │
    ARTICULÉ    SEMI-RIGIDE    RIGIDE
         │          │
    0.5·EI/L    kb·EI/L
```

| Critère | Portique contreventé | Non contreventé |
|:--------|:---------------------|:----------------|
| **kb** | **8** | **25** |
| Rigide si | Sj ≥ 8·EI/Lb | Sj ≥ 25·EI/Lb |
| Articulé si | Sj ≤ 0.5·EI/Lb | Sj ≤ 0.5·EI/Lb |

## Détail normatif (N3)

### Ordre de grandeur typique

Pour IPE 360 (Iy = 16 270 cm⁴), portée 6 m :
- EI = 210 000 × 16 270 × 10⁴ / 10⁶ = 34 167 000 kN·m²
- EI/Lb = 34 167 000 / 6 = 5 694 500 kN·m/rad
- Seuil rigide (kb=8) = **45 556 000 kN·m/rad**
- Seuil articulé = **2 847 250 kN·m/rad**

### Piège courant ⚠️
> Un assemblage peut être dimensionné en résistance (MRd > MEd) tout en étant classé **articulé** en rigidité. Cela signifie que le modèle structurel (portique bi-encastré) est **non cohérent** avec l'assemblage. Il faut soit renforcer l'assemblage, soit modéliser en semi-rigide.

### Unités
- Sj,ini : kN·m/rad
- EI : kN·m²
- Lb : m
- z, ki : mm

## Code source (N4)
- **Fichier** : `assemblage_data.js`
- **Fonctions** : `initialStiffness(z, ki_values)`, `classifyJoint(Sj, EI, Lb, braced)`
- **Test** : `test_controle.js` — Tests 5-6 (3/3 classifications correctes) ✅

## Voir aussi
- [[Méthode des Composantes]]
- [[Platine d'about débordante]]
- [[Jarret de portique]]

## Sources
- [x] EN 1993-1-8:2005 §6.3 + §5.2.2 — 🟢 Sourcé
- [x] Agent de contrôle — 4/4 tests — 🟢 Validé
