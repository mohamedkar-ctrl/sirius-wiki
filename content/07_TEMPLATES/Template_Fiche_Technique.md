---
aliases: []
tags: [fiche-technique]
type: fiche_technique
status: draft
version: v0.1
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
norme_ref: ""
lien_sagesse: ""
---

# FT-XXX — <% tp.file.title %>

> **Domaine** : #eurocodes / #assemblages / #pv
> **Norme(s)** : EN 1993-1-X §X.X.X
> **Statut** : 🟡 Brouillon | 🟢 Validé | 🔴 Obsolète

---

## 1. Contexte & Problématique

Décrire le problème technique rencontré en projet.

## 2. Règle Normative

### Formule principale
$$
F_{Rd} = \frac{f_y \cdot A}{\gamma_{M0}}
$$

### Clauses applicables
- EN 1993-1-X §X.X.X — Description
- AN française §X.X.X — Complément national

## 3. Application Pratique

### Conditions de validité
- [ ] Condition 1
- [ ] Condition 2

### Pièges courants
> [!WARNING]
> Décrire les erreurs fréquentes de dimensionnement

## 4. Arbre de Décision

```mermaid
graph TD
    A[Début] --> B{Condition 1 ?}
    B -->|Oui| C[Méthode A]
    B -->|Non| D[Méthode B]
```

## 5. Liens

- [[MOC_Eurocodes]] *(lien évident)*
- [[]] *(lien sagesse — principe universel relié)*

---

## Historique de validation

| Version | Date | Auditeur | Verdict |
|---|---|---|---|
| v0.1 | {{date}} | — | 🟡 Brouillon |

---

*Fiche produite par SIRIUS VAULT — [[🏠 Home|Retour accueil]]*
