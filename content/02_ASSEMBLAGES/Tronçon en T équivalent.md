---
aliases: [T-stub, Tronçon en T, Equivalent T-stub]
tags: [wiki-article, assemblage, T-stub, EC3-1-8]
type: wiki_article
status: validated
created: 2026-05-05
updated: 2026-05-05
norme_ref: EN 1993-1-8 §6.2.4
niveau: N3
---

# Tronçon en T équivalent (T-stub)

## Liens
- [[MOC_Assemblages]]
- [[Méthode des Composantes]]
- [[Platine d'about débordante]]
- [[Résistances Boulons EC3]]

## Synthèse (N1)
> Le T-stub est un modèle mécanique simplifié qui représente la flexion d'une semelle (poteau ou platine) sollicitée en traction par les boulons. Il détermine la résistance en traction d'une rangée de boulons en identifiant 3 modes de ruine possibles.

## Méthodologie (N2)

### Principe
La semelle est modélisée comme un tronçon en T symétrique. La ruine se produit par l'un des 3 mécanismes suivants :

```
Mode 1              Mode 2              Mode 3
Plastification      Mixte               Rupture boulons
complète            plast. + boulons    pure

  ┌──●──┐            ┌──●──┐            ┌──●──┐
  │  ↑  │            │  ↑  │            │  ↑  │
  ╔══╪══╗            ╔══╪══╗               ╪
  ║  ║  ║            ║  ║  ║               ║
  ╚══╧══╝            ╚══╧══╝               ╧
  4 rotules          2 rotules          0 rotule
  + boulons OK       + boulons cassent  boulons cassent
```

### Formules clés

**Moment plastique :**
$$M_{pl,1,Rd} = \frac{0{,}25 \times \ell_{eff} \times t_f^2 \times f_y}{\gamma_{M0}}$$

**Mode 1 — Plastification complète :**
$$F_{T,1,Rd} = \frac{4 \times M_{pl,1,Rd}}{m}$$

**Mode 2 — Mixte :**
$$F_{T,2,Rd} = \frac{2 \times M_{pl,1,Rd} + n \times \Sigma F_{t,Rd}}{m + n}$$

**Mode 3 — Rupture boulons :**
$$F_{T,3,Rd} = \Sigma F_{t,Rd}$$

**Résistance :**
$$F_{T,Rd} = \min(F_{T,1,Rd},\ F_{T,2,Rd},\ F_{T,3,Rd})$$

### Données d'entrée
| Paramètre | Symbole | Unité | Description |
|:----------|:--------|:------|:------------|
| Longueur efficace | ℓ_eff | mm | Tab. 6.4 (poteau) ou Tab. 6.6 (platine) |
| Épaisseur semelle | t_f | mm | Semelle poteau ou platine |
| Limite d'élasticité | f_y | MPa | Nuance acier |
| Distance boulon-congé | m | mm | Fig. 6.2 : m = (w-t_w)/2 - 0.8r |
| Distance bord-boulon | n | mm | min(e, 1.25m) |
| Résistance boulon traction | F_t,Rd | kN | Tab. 3.4 |

## Détail normatif (N3)

### Clause de référence
- **Norme** : EN 1993-1-8:2005 §6.2.4
- **Tableaux** : Tab. 6.2 (modes), Fig. 6.2 (géométrie)
- **AN française** : Pas de modification

### Distance m — Profilé laminé (Fig. 6.2)
```
m = (w - t_wc) / 2 - 0.8 × r_c     (poteau laminé, avec congé r)
m = (w - t_wb) / 2 - 0.8 × a × √2  (platine, avec soudure a)
```
Où `w` = entraxe transversal des boulons (gauge).

### Longueur efficace ℓ_eff

**Semelle poteau (Tab. 6.4) :**
- Circulaire : ℓ_eff,cp = 2πm
- Non-circulaire : ℓ_eff,nc = 4m + 1.25e

**Platine d'about — rangée débordante (Tab. 6.6) :**
- Circulaire : ℓ_eff,cp = 2πm_x
- Non-circulaire : ℓ_eff,nc = 4m_x + 1.25e_p

### Piège courant ⚠️
> La distance `m` est souvent mal calculée. Ne pas confondre avec `(b-tw)/4` qui est une approximation grossière. La formule exacte utilise l'entraxe boulons `w` et le congé `r` (ou la gorge de soudure `a`).

## Code source (N4)
- **Fichier** : `assemblage_data.js`
- **Fonction** : `tStubResistance(leff, tf, fy, m, n, sumFtRd, nBolts)`
- **Test** : `test_controle.js` — Tests 2.1 à 2.4 (3 modes + min)
- **Résultat validation** : 0.0% écart sur les 4 tests ✅

## Voir aussi
- [[Méthode des Composantes]]
- [[Résistances Boulons EC3]]
- [[Platine d'about débordante]]
- [[Rigidité Initiale Assemblage]]

## Sources
- [x] EN 1993-1-8:2005 §6.2.4 — 🟢 Sourcé
- [x] CTICM — Assemblages Poutres-Poteaux — 🟢 Sourcé
