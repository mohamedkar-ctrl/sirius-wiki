---
aliases: [Sagesse Access Steel, Leçons NCCI]
tags: [sagesse, access-steel, NCCI, retour-experience, bonnes-pratiques]
statut: validé
date_creation: 2026-04-23
source: FT-003, Audit Agent Eurocodes + Agent Assemblages
type: wiki_article
status: validated
created: 2026-05-05
updated: 2026-05-05
---

# 🧠 Sagesse — Ce que les 86 documents Access Steel nous enseignent

> *"Les Eurocodes donnent le QUOI. Les NCCI donnent le COMMENT."*

---

## Principe fondamental

Les NCCI Access Steel sont la **traduction opérationnelle** des Eurocodes par des praticiens (SCI + CTICM). Ils comblent l'écart entre la norme et le bureau d'études. Un ingénieur qui connaît les NCCI résout en 10 minutes ce qu'un autre met 2 heures à chercher dans les Eurocodes.

---

## Les 5 leçons clés

### 1. 📐 Toujours commencer par le prédimensionnement
**Avant de lancer un modèle RFEM/Tekla**, passer 5 minutes sur :
- **SN001a** → choisir le profilé poutre (abaques portée/entraxe)
- **SN012a** → choisir le profilé poteau (abaques N/L)
- **SN028a** → dimensionner le contreventement (Hi = 0,025 × VEd)

> *Un bon prédimensionnement fait gagner 3 itérations de calcul.*

### 2. ⚠️ Ne jamais négliger les effets du 2nd ordre
**SN033a** est LE document de référence :
- Calculer αcr systématiquement (formule simple H/V × h/δ)
- Si αcr < 10 → amplifier les charges horizontales
- Si αcr < 3 → le logiciel DOIT faire du 2nd ordre

> *La plupart des erreurs graves en portiques viennent d'un αcr mal évalué.*

### 3. 🔩 Les assemblages se prédimensionnent AVANT le CBFEM
L'Agent Assemblages a classé les NCCI par priorité :
- **Critique** : pieds poteaux, platines extrémité, jarrets, goussets
- Le prédimensionnement par NCCI → IDEA Statica → validation

> *Un CBFEM sans prédimensionnement, c'est tirer au hasard puis vérifier.*

### 4. 📏 Les limites de flèche ne sont pas dans les Eurocodes
C'est un piège classique : les Eurocodes **ne fixent pas** de limites de flèche, ils renvoient à l'Annexe Nationale.
- **SN035a** : bâtiments 1 niveau → L/200 à L/250
- **SN034a** : multi-étagés → h/300 horizontal, L/350 vertical

> *Un portique qui passe en résistance mais pas en flèche, c'est un portique raté.*

### 5. 🧊 Les profilés à froid ont leur propre monde
Les 6 NCCI sur les profilés C formés à froid (EN 1993-1-3) rappellent que :
- La section efficace ≠ la section brute (classe 4 systématique)
- Compression + flexion composée = 3 modes de flambement à vérifier
- Les vis autoperceuses ont leur propre résistance de calcul

> *Ne jamais appliquer l'EC3-1-1 seul à un profilé froid. Toujours l'EC3-1-3.*

---

## Matrice de décision rapide

```
Question de l'ingénieur                    → Document NCCI
─────────────────────────────────────────────────────────────
"Quel profilé pour cette poutre ?"          → SN001a (abaques)
"Quel poteau pour cet effort ?"             → SN012a (abaques)
"Mon portique est-il stable ?"              → SN033a (αcr)
"Comment dimensionner le contreventement ?" → SN028a (Hi)
"Quelle est la longueur de flambement ?"    → SN008a (Wood)
"Comment calculer Mcr ?"                    → SN003a/b (formule)
"Ma flèche est-elle acceptable ?"           → SN034a/SN035a
"Comment vérifier ce pied de poteau ?"      → ASS Pied Poteau
"Comment prédim. cette platine ?"           → ASS Dim. initial
```

---

## Connexions dans le vault

- [[FT-003 Collection Access Steel NCCI]] — Inventaire complet et formules
- [[FT-001 Cordons de Soudure EC3 vs CBFEM]] — Complémentarité avec SN027a (fermes)
- [[Synthese_Pieds_Poteaux]] — Validé par les NCCI pieds poteaux Access Steel
- [[MOC_Assemblages]] — Les NCCI = étape de prédimensionnement avant CBFEM
- [[MOC_Eurocodes]] — Les NCCI = méthodes pratiques de l'EC3

---

*Distillé par le système RAG SIRIUS le 23/04/2026. Source : 86 documents Access Steel, audités par Agent Eurocodes + Agent Assemblages.*
