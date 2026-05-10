---
aliases: [Méthode composantes, Component Method, Méthode EC3-1-8]
tags: [wiki-article, assemblage, méthode-composantes, EC3-1-8]
type: wiki_article
status: validated
created: 2026-05-05
updated: 2026-05-05
norme_ref: EN 1993-1-8 §6.2
niveau: N2
---

# Méthode des Composantes

## Liens
- [[MOC_Assemblages]]
- [[Tronçon en T équivalent]]
- [[Platine d'about débordante]]
- [[Jarret de portique]]
- [[Rigidité Initiale Assemblage]]

## Synthèse (N1)
> La méthode des composantes est LA méthode normative de l'EC3-1-8 pour calculer la résistance et la rigidité d'un assemblage. Elle décompose l'assemblage en composants élémentaires (ressorts), calcule la résistance de chacun, et assemble le tout pour obtenir le moment résistant M_Rd.

## Méthodologie (N2)

### Principe — Les 3 zones
```
    ZONE TENDUE           ZONE CISAILLÉE        ZONE COMPRIMÉE
    ┌─────────┐           ┌─────────┐           ┌─────────┐
    │ Semelle  │           │ Panneau │           │ Âme pot. │
    │ poteau   │           │ d'âme   │           │ compress │
    │ T-stub   │           │ cisail. │           │          │
    ├─────────┤           └─────────┘           ├─────────┤
    │ Platine  │                                 │ Sem/âme  │
    │ T-stub   │                                 │ poutre   │
    ├─────────┤                                 │ compress │
    │ Âme pot. │                                 └─────────┘
    │ traction │
    ├─────────┤
    │ Boulons  │
    │ traction │
    └─────────┘
```

### Les 10 composants vérifiés

| # | Composant | Zone | Réf. EC3 |
|:-:|:----------|:-----|:---------|
| 1 | Panneau d'âme poteau — cisaillement | Cisaillée | §6.2.6.1 |
| 2 | Âme poteau — compression transversale | Comprimée | §6.2.6.2 |
| 3 | Âme poteau — traction transversale | Tendue | §6.2.6.3 |
| 4 | Semelle poteau — flexion (T-stub) | Tendue | §6.2.6.4 |
| 5 | Platine d'about — flexion (T-stub) | Tendue | §6.2.6.5 |
| 6 | Boulons — traction | Tendue | Tab. 3.4 |
| 7 | Semelle/âme poutre — compression | Comprimée | §6.2.6.7 |
| 8 | Soudure semelle | Tendue | §4.5.3.3 |
| 9 | Soudure âme | Cisaillée | §4.5.3.3 |
| 10 | Interaction V+T boulons | Mixte | Tab. 3.4 |

### Algorithme de calcul

```
1. Calculer la résistance de chaque composant
2. Pour chaque rangée de boulons r :
   FtRd,r = min(T-stub poteau, T-stub platine, âme traction, boulons)
3. Limiter ΣFtRd par Fc,Rd (zone comprimée) et Vwp,Rd (panneau cisaillé)
4. MRd = Σ(FtRd,r × hr)  où hr = bras de levier de la rangée
5. Vérifier : MEd / MRd ≤ 1.0
6. Vérifier chaque composant : Ed / Rd ≤ 1.0
```

### Formule du moment résistant
$$M_{j,Rd} = \sum_r F_{t,Rd,r} \times h_r$$

## Détail normatif (N3)

### Limitation par la zone comprimée
La somme des forces de traction ne peut pas dépasser la résistance de la zone comprimée :
$$\sum F_{t,Rd,r} \leq \min(F_{c,wc,Rd},\ F_{c,fb,Rd})$$

### Panneau d'âme cisaillé
$$V_{wp,Rd} = \frac{0{,}9 \times f_y \times A_{vc}}{\sqrt{3} \times \gamma_{M0}}$$

Avec : $A_{vc} = A - 2bf + (t_w + 2r) \times t_f$

### Compression transversale âme poteau
$$F_{c,wc,Rd} = \frac{\omega \times k_{wc} \times b_{eff,c,wc} \times t_{wc} \times f_{y,wc}}{\gamma_{M1}}$$

Avec réduction de voilement si $\bar{\lambda}_p > 0{,}72$ :
$$\rho = \frac{\bar{\lambda}_p - 0{,}2}{\bar{\lambda}_p^2}$$

### Vérification globale
Le verdict "ASSEMBLAGE VÉRIFIÉ" ne passe que si **tous** les composants sont OK :
- MRd ≥ MEd
- Chaque composant : Ed ≤ Rd
- Cisaillement boulons OK
- Interaction V+T ≤ 1.0
- Soudures OK

## Code source (N4)
- **Fichier** : `assemblage_engine.js`
- **Fonction** : `computeConnectionMoment(params)`
- **Entrées** : col, beam, haunch, plate, bolts, stiffeners, welds
- **Sorties** : MRd, taux, boltRows[], components{}, shear, welds, rigidity
- **Test** : `test_controle.js` — 23/23 tests ✅

## Voir aussi
- [[Tronçon en T équivalent]]
- [[Platine d'about débordante]]
- [[Jarret de portique]]
- [[Rigidité Initiale Assemblage]]
- [[Résistances Boulons EC3]]

## Sources
- [x] EN 1993-1-8:2005 §6.2 — 🟢 Sourcé
- [x] CTICM — Assemblages Poutres-Poteaux — 🟢 Sourcé
- [x] Agent de contrôle SIRIUS — 23/23 tests (0.0% écart) — 🟢 Validé
