---
aliases: [SOP_Boucle_Production]
tags: [SOP]
type: sop
status: validated
created: 2026-05-05
updated: 2026-05-05
---

﻿---
aliases: [SOP Production, Boucle de production]
tags: [sop, processus, qualite, production]
statut: actif
date_creation: 2026-04-14
responsable: Agent COO
---

# SOP — Boucle de Production de Livrables Techniques

> **Objectif** : Produire un livrable technique validé et sourcé sur n'importe quel sujet
> **Fréquence** : À chaque nouveau sujet technique
> **Directive** : AUCUN livrable ne sort sans contre-expertise

---

## Pré-requis
- [x] NotebookLM opérationnel (5 notebooks)
- [x] Gemini Gems actifs (Eurocodes + Assemblages)
- [x] Script d'audit (`Scripts/audit_technique.py`)

## Étapes

### 1. SÉLECTION — Choisir les sources (10-20 fichiers)
Identifier dans Google Drive les 10-20 PDFs les plus pertinents pour le sujet.
Consulter `Scripts/FAVORIS_PARETO.md` (286 favoris, score ≥ 33/40).

### 2. NOTEBOOK — Créer un notebook dédié
Dans NotebookLM, créer un notebook portant le nom du sujet.
Charger les 10-20 fichiers sélectionnés.

> [!IMPORTANT]
> 1 sujet = 1 notebook dédié. Ne pas utiliser les notebooks généraux (NB1-NB4b).

### 3. PRODUCTION — Générer la synthèse
Poser la question technique au notebook.
Demander une synthèse structurée avec formules et références normatives.

### 4. CONTRE-EXPERTISE — Audit multi-agents
Soumettre la synthèse aux deux agents de contrôle :
- 🏛️ **Agent EUROCODES** : clauses, formules, coefficients
- 🔩 **Agent ASSEMBLAGES** : applicabilité terrain, pièges, omissions

### 5. CORRECTION — Intégrer les réserves
Produire la V2 en intégrant toutes les réserves identifiées.

### 6. PRÉSENTATION — Livrable final
Utiliser la fonction "Présentation" de NotebookLM sur le notebook dédié.
Le livrable peut être : une fiche technique, un rapport, une présentation client.

## Résultat attendu
Un livrable technique validé, sourcé, et prêt à être partagé (client, équipe, Odoo).

## Sujets candidats identifiés
1. Pieds de poteaux encastrés ✅ RÉALISÉ
2. Contreventement de charpente
3. Assemblage poutre-poteau par platine d'about
4. Calcul au feu des structures acier
5. Profilés formés à froid (classe 4)
6. Fatigue des assemblages soudés
7. Poutres mixtes acier-béton
8. Ancrages post-installés
9. Calcul sismique EC8
10. Ponts roulants et chemins de roulement

---

## 🔗 Liens
- [[MOC_Second_Cerveau]]
- [[MOC_Eurocodes]]
- [[MOC_Assemblages]]
- [[GED Index]]
