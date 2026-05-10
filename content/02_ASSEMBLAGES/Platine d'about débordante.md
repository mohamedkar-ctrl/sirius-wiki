---
aliases: [Platine about, End plate, Platine débordante]
tags: [wiki-article, assemblage, platine, EC3-1-8]
type: wiki_article
status: validated
created: 2026-05-05
updated: 2026-05-05
norme_ref: EN 1993-1-8 §6.2.7
niveau: N2
---

# Platine d'about débordante

## Liens
- [[MOC_Assemblages]]
- [[Méthode des Composantes]]
- [[Tronçon en T équivalent]]
- [[Jarret de portique]]

## Synthèse (N1)
> L'assemblage par platine d'about débordante est le type d'encastrement le plus courant en charpente métallique. La platine dépasse au-dessus de la semelle tendue de la poutre, permettant de placer une rangée de boulons supplémentaire qui augmente le bras de levier et donc le moment résistant.

## Méthodologie (N2)

### Configuration type
```
          ←─ ex_top ─→
      ┌───────────────────┐
      │  ● ─── R1 ●  │  ← Rangée débordante
      ├═══════════════════┤  ← Semelle sup. poutre
      │                   │
      │  ● ─── R2 ●  │  ← Rangée intérieure
      │                   │
      │  ● ─── R3 ●  │  ← Rangée intérieure
      │                   │
      ├═══════════════════┤  ← Semelle inf. poutre
      │  ● ─── R4 ●  │  ← Rangée basse (optionnel)
      └───────────────────┘
          ←─── bp ────→
```

### Paramètres géométriques
| Paramètre | Symbole | Valeurs courantes |
|:----------|:--------|:------------------|
| Largeur platine | bp | 200 – 300 mm |
| Hauteur platine | hp | h_beam + 80 – 120 mm |
| Épaisseur platine | tp | 15 – 30 mm |
| Débord haut | ex_top | 40 – 60 mm |
| Entraxe boulons | w | 100 – 180 mm |
| Nb rangées | nRows | 2 – 5 |

### Bras de levier
- **Sans jarret** : hr = distance rangée r au centre de compression (semelle inf.)
- **Avec jarret** : hr augmenté de h_haunch → MRd augmente proportionnellement

### Pré-dimensionnement rapide
$$M_{Rd} \approx n_{eff} \times F_{t,Rd} \times 0{,}7 \times h_{beam}$$

Où n_eff ≈ 2/3 du nombre total de boulons en traction.

## Détail normatif (N3)

### Rangée débordante vs intérieure
- **Débordante** : T-stub avec m_x = ex_top - distance à la soudure
- **Intérieure** : T-stub avec m = (w - t_wb)/2 - 0.8a√2

### Règles de pince (Tab. 3.3)
| Règle | Formule | M20 (d0=22) |
|:------|:--------|:------------|
| e1 ≥ 1.2 d0 | 1.2 × 22 | ≥ 26.4 mm |
| e2 ≥ 1.2 d0 | 1.2 × 22 | ≥ 26.4 mm |
| p1 ≥ 2.2 d0 | 2.2 × 22 | ≥ 48.4 mm |
| p2 ≥ 2.4 d0 | 2.4 × 22 | ≥ 52.8 mm |

### Soudures
- **Semelle** : gorge a_f ≥ 0.7 × t_f (semelle poutre)
- **Âme** : gorge a_w ≥ 0.5 × t_w (âme poutre)
- **Méthode** : Simplifiée §4.5.3.3

## Code source (N4)
- **Fichier** : `assemblage_ui.js` (interface) + `assemblage_engine.js` (moteur)
- **Fonction** : `runAssemblageCalc()` → `computeConnectionMoment()`
- **Section NdC** : §8b — Vérification des assemblages
- **Test** : `test_controle.js` — Tests 7.x (cohérence assemblage)

## Voir aussi
- [[Méthode des Composantes]]
- [[Tronçon en T équivalent]]
- [[Jarret de portique]]
- [[Résistances Boulons EC3]]
- [[Rigidité Initiale Assemblage]]

## Sources
- [x] EN 1993-1-8:2005 §6.2.7 — 🟢 Sourcé
- [x] NCCI — Assemblages Jarret Portiques — 🟢 Sourcé
- [x] Access Steel — Assemblage jarret portique — 🟢 Sourcé
