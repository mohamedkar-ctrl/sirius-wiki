---
tags: [sagesse, protocol, anti-hallucination, IA]
date_creation: 2026-04-28
type: sop
status: validated
created: 2026-05-05
updated: 2026-05-05
---

# 🛡️ Protocole Anti-Hallucination IA

> Règles permanentes pour les échanges techniques avec l'IA.
> Créé le 28/04/2026 après le test du tube 120×120×4.

---

## Les 6 règles

### 1. L'ingénieur valide, l'IA assiste
L'IA ne prend **jamais** de décision structurelle finale.

### 2. RAG avant mémoire
Toujours chercher dans la base documentaire **avant** de répondre de mémoire. Citer la source (PDF, page, clause).

### 3. Poser les questions AVANT de calculer
Pour tout calcul : nuance, longueur, conditions aux limites, chargement, fonction.
> [!IMPORTANT]
> Ne jamais supposer un paramètre. Demander.

### 4. Niveaux de confiance
- 🟢 Sourcé (RAG + clause)
- 🟡 Connaissance générale (fiable mais pas dans la base)
- 🔴 Incertain (à vérifier)

### 5. Calculs vérifiables
Tout calcul dans un script Python exécutable. Pas de calcul "dans le texte".

### 6. Honnêteté
Si l'IA ne sait pas → le dire. Pas d'invention.

---

## Origine

Test du 27/04/2026 : vérification tube 120×120×4 sous 5t.
L'IA a supposé S235, ignoré la longueur et les CL.

> [[PIEGE-Calculer_sans_poser_les_questions|Voir la leçon associée]]

---

*Ce protocole est chargé automatiquement à chaque conversation.*

## Liens
- [[PIEGE-Calculer_sans_poser_les_questions]] *(lien évident)*
- [[INDEX_SAGESSE]] *(lien sagesse)*
