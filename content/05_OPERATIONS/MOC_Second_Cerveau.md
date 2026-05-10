---
aliases: [MOC_Second_Cerveau]
tags: [MOC]
type: moc
status: evergreen
created: 2026-05-05
updated: 2026-05-05
---

﻿---
aliases: [PKM, Second Cerveau, Architecture IA]
tags: [MOC, pkm, ia, notebooklm, gemini]
---

# 🤖 MOC — Second Cerveau SIRIUS

> Architecture complète du système de gestion des connaissances.

---

## Architecture 3 couches

```
COUCHE 1 — Google Drive (1 444 PDFs actifs, 15 dossiers)
     ↓ classify_ged_v3.py (Gemini API)
COUCHE 2 — NotebookLM (5 notebooks, 552 sources)
     ↓ indexation IA automatique
COUCHE 3A — Gemini Gems (3 assistants spécialisés)
COUCHE 3B — Obsidian Vault (connaissances distillées, liens croisés)
     ↓ requête technique
Réponse sourcée ✅
```

## NotebookLM — 5 Notebooks

| Notebook | Sources | Dossiers Drive |
|---|---|---|
| NB1 — Eurocodes & Normes | 57 | 01_NORMES, 03_REFERENCES |
| NB2 — Assemblages & Logiciels | 117 | 02_ASSEMBLAGES |
| NB3 — PV & Projets | 73 | 05_PROJETS, 03_REFERENCES |
| NB4a — Formation & BIM | 202 | 04_FORMATION, 11_LOGICIELS |
| NB4b — Guides & Management | 103 | 06_GUIDES, 07_PROJECT_MGMT |

## Gemini Gems — 3 Assistants

| Gem | Rôle | Source |
|---|---|---|
| SIRIUS Eurocodes Checker | Vérification normative EC0-EC8 | NB1 |
| SIRIUS Assemblages Expert | Dimensionnement boulons/soudure/CBFEM | NB2 |
| SIRIUS Chef de Projet | PM, loi MOP, MOA/MOE/BET | NB3+NB4b |

## Obsidian Vault (CE VAULT)

| Rôle | Contenu |
|---|---|
| Connaissances distillées | Fiches techniques FT-XXX |
| Liens croisés | `[[wikilinks]]` entre concepts |
| Retours d'expérience | REX projets (sans noms clients) |
| Journal de bord | Daily Notes |
| SOPs | Procédures standardisées |

## Pipeline de contrôle qualité

```
SÉLECTION (10-20 fichiers) → NOTEBOOK (dédié) → PRODUCTION (synthèse IA)
         ↑                                                    ↓
PRÉSENTATION (NotebookLM) ← CORRECTION (V2) ← CONTRE-EXPERTISE (2 agents)
```

> [!IMPORTANT]
> Directive permanente : Aucun livrable technique ne doit être présenté sans contre-expertise
> par les Agents Eurocodes + Assemblages.

---

## 📂 Scripts associés
- `classify_ged_v3.py` — Classification automatique GED
- `audit_technique.py` — Audit multi-agents
- `synthese_corrigee.py` — Pipeline Production → Audit → Présentation
- `SOP_BOUCLE_PRODUCTION.md` — Procédure en 6 étapes

## 🔗 Liens
- [[GED Index]]
- [[MOC_Agents]]
- [[MOC_Eurocodes]]

### Notes associées (auto-détectées)
- [[Evaluation_Quartz4]]
