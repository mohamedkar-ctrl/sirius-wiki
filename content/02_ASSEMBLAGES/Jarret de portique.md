---
aliases: [Jarret, Haunch, Gousset incliné]
tags: [wiki-article, assemblage, jarret, portique, EC3-1-8]
type: wiki_article
status: validated
created: 2026-05-05
updated: 2026-05-05
norme_ref: EN 1993-1-8 §6.2
niveau: N2
---

# Jarret de portique

## Liens
- [[MOC_Assemblages]]
- [[Méthode des Composantes]]
- [[Platine d'about débordante]]

## Synthèse (N1)
> Le jarret est un renfort triangulaire soudé sous la poutre au droit de l'encastrement. Il augmente la hauteur utile de l'assemblage (et donc le bras de levier), ce qui accroît significativement le moment résistant M_Rd. Gain typique : +40% à +80%.

## Méthodologie (N2)

### Géométrie
```
    Poteau           Poutre
    ┌──┐═══════════════════════
    │  │    h_beam
    │  ├───────────────────────
    │  │╲                      
    │  │  ╲   h_haunch         
    │  │    ╲                  
    │  ├──────╲────────────────
    └──┘       ╲
               L_haunch
    
    α = arctan(h_haunch / L_haunch)
```

### Effet sur le moment résistant
- **Sans jarret** : hr_max ≈ h_beam - tf ≈ 350 mm (IPE 360)
- **Avec jarret h=200** : hr_max ≈ h_beam + h_haunch - tf ≈ 550 mm
- **Gain** : MRd × (550/350) ≈ **+57%**

### Paramètres
| Paramètre | Symbole | Valeurs courantes |
|:----------|:--------|:------------------|
| Hauteur jarret | h_haunch | 150 – 400 mm |
| Longueur jarret | L_haunch | 1000 – 2000 mm |
| Épaisseur âme | tw_h | ≥ tw_poutre |
| Angle | α | 5° – 15° |

## Détail normatif (N3)

### Vérifications spécifiques au jarret

**1. Âme jarret en compression (§6.2.6.7)**
$$F_{c,haunch,Rd} = \frac{b_{eff,h} \times t_{w,h} \times f_y}{\gamma_{M1}}$$

**2. Stabilité âme jarret — voilement (EN 1993-1-5)**
$$\frac{h_{w,jarret}}{t_{w,h}} \leq 69 \times \varepsilon$$

Avec ε = √(235/fy). Si non respecté → raidisseur intermédiaire nécessaire.

**3. Force dans l'axe du jarret**
La composante de compression dans l'axe incliné du jarret :
$$F_{c,h} = \frac{F_{c,Ed}}{\cos(\alpha)}$$

### Piège courant ⚠️
> Un jarret avec tw = 8 mm et h = 200 mm donne hw/tw = 25 (OK pour S355, limite = 56.1). Mais à h = 400 mm, hw/tw = 50 → proche de la limite. Au-delà, il faut un raidisseur.

### Règle de pouce
- L_haunch ≈ 10% de la portée de la traverse
- h_haunch ≈ 0.5 à 1.0 × h_poutre
- tw_h ≥ tw_poutre (sinon voilement)

## Code source (N4)
- **Fichier** : `assemblage_engine.js`
- **Composants** : `haunchWebComp`, `haunchStability`
- **UI** : Dropdown "Avec/Sans jarret" + inputs H, L, tw
- **Test** : Cas 2 de `test_assemblage.js` — MRd = 271.4 kN·m avec jarret vs 176.6 sans

## Voir aussi
- [[Méthode des Composantes]]
- [[Platine d'about débordante]]
- [[Rigidité Initiale Assemblage]]

## Sources
- [x] EN 1993-1-8:2005 §6.2.6.7 — 🟢 Sourcé
- [x] NCCI — Conception & Calcul Assemblages Jarret Portiques — 🟢 Sourcé
- [x] Access Steel — Assemblage jarret portique — 🟢 Sourcé
