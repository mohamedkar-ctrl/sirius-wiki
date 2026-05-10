---
title: "{{nom_projet}} — Design Basis Report"
status: validated
type: knowledge
tags: [design-basis, projet, ingenierie]
created: "{{date}}"
---

# 📐 Design Basis Report — {{nom_projet}}

> **Objet** : Document de base de conception regroupant TOUS les paramètres
> d'entrée d'un projet structure. Ce document est gelé avant le lancement
> des calculs (principe *spec-freeze* du proof-loop).

---

## 1. Identification du projet

| Paramètre | Valeur |
|---|---|
| **Nom du projet** | {{nom_projet}} |
| **Lieu** | {{lieu}} |
| **Client** | {{client}} |
| **Phase** | AVP / PRO / EXE |
| **Date de gel** | {{date_gel}} |
| **Indice** | A |

---

## 2. Normes et règlements applicables

| Code | Édition | Annexe Nationale |
|---|---|---|
| EN 1990 | 2003 | AN FR |
| EN 1991-1-1 | 2003 | AN FR 2007 |
| EN 1991-1-3 | 2003 | AN FR 2007 |
| EN 1991-1-4 | 2005 | AN FR 2008 |
| EN 1993-1-1 | 2005 | AN FR 2013 |
| EN 1993-1-8 | 2005 | AN FR 2013 |

---

## 3. Données climatiques

| Paramètre | Valeur | Source |
|---|---|---|
| **Zone de vent** | {{zone_vent}} | AN EN 1991-1-4 |
| **Vb,0** | {{vb0}} m/s | Carte nationale |
| **Zone de neige** | {{zone_neige}} | AN EN 1991-1-3 |
| **sk** | {{sk}} kN/m² | Carte nationale |
| **Altitude** | {{altitude}} m | IGN |
| **Catégorie de terrain** | {{cat_terrain}} | Analyse photos |

---

## 4. Charges d'exploitation

| Charge | Valeur | Norme |
|---|---|---|
| **Charges permanentes (G)** | {{G}} kN/m² | — |
| **Charges d'exploitation (Q)** | {{Q}} kN/m² | EN 1991-1-1 Tab 6.2 |
| **Catégorie** | {{categorie}} | EN 1991-1-1 |

---

## 5. Matériaux

| Élément | Nuance | fy (MPa) | fu (MPa) |
|---|---|---|---|
| **Charpente principale** | S235 / S355 | {{fy}} | {{fu}} |
| **Boulons** | Cl. 8.8 / 10.9 | — | — |
| **Fondations** | C25/30 | — | — |

---

## 6. Hypothèses de modélisation

- **Logiciel** : {{logiciel}}
- **Type de modèle** : 2D portique / 3D spatial
- **Conditions aux appuis** : {{appuis}}
- **Coefficient de sécurité** : γ_M0 = 1.00, γ_M1 = 1.00, γ_M2 = 1.25

---

## 7. Critères de vérification

| Critère | Limite | Norme |
|---|---|---|
| **Flèche traverse** | L/200 | AN EN 1993-1-1 |
| **Flèche pannes** | L/200 | AN EN 1993-1-1 |
| **Déplacement en tête** | H/150 | — |
| **Taux de travail** | ≤ 1.00 | EN 1993-1-1 §6 |

---

## 8. Documents de référence

- [[NdC_Principale]] — Note de calcul associée
- [[Plan_Structure]] — Plans de structure
- [[MOC_Projets]] — Index des projets

---

## ⚠️ Historique des modifications

| Indice | Date | Modification | Auteur |
|---|---|---|---|
| A | {{date_gel}} | Création | {{auteur}} |

---

> 🔒 **Ce document est gelé à l'indice indiqué.**
> Toute modification doit créer un nouvel indice et être tracée ci-dessus.
