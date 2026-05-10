---
type: sagesse
source: "09_STRUCTURES_MIXTES_ACIER_BETON"
label: "Structures mixtes acier-béton / EC4"
created: "2026-04-27 22:17"
pipeline: "RAG → Synthèse → Audit → Sagesse"
status: validated
tags: [sagesse, structures-mixtes-acier-beton]
updated: 2026-05-05
---

# 🧠 Sagesse — Structures mixtes acier-béton / EC4

> Connaissance distillée automatiquement par le pipeline SIRIUS BATCH.
> **Source** : 09_STRUCTURES_MIXTES_ACIER_BETON | **Date** : 2026-04-27 22:17
> ⚠️ Vérifier la version en vigueur sur [Kheox.fr](https://www.kheox.fr/bt/accueil)

---

## Synthèse Technique

Voici la fiche technique synthétique basée sur les documents fournis :

# Fiche Technique : Structures Mixtes Acier-Béton selon l'Eurocode 4 (EC4)

## 1. Résumé exécutif
L'Eurocode 4 (EC4) régit le calcul des structures mixtes acier-béton, couvrant les matériaux, l'analyse structurale et le dimensionnement des éléments (poutres, poteaux, dalles). Il fournit des règles détaillées pour la vérification aux états limites ultimes (effondrement) et de service (flèches, fissuration).

## 2. Concepts clés
*   **Structure de l'EC4-1-1** : Basée sur la séquence classique de dimensionnement, démarrant par les propriétés des matériaux et les facteurs de sécurité, puis les méthodes d'analyse, avant de détailler les règles pour les éléments aux états limites ultimes (ELU) et de service (ELS). [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.31]
*   **Organisation de l'EC4** : Structuré en sections, notamment la Section 1 (Généralités : objet, termes, notations) et la Section 2 (Bases de calcul : principes). [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.31]
*   **Éléments constitutifs** : Les principaux éléments en construction mixte sont le béton, les armatures, l'acier structural, les tôles profilées et les connecteurs de cisaillement. Leurs propriétés sont définies dans les Eurocodes. [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.29]
*   **Méthodes d'analyse** : Des recommandations sont données pour les méthodes d'analyse adéquates, tant pour l'analyse globale qu'en section. [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.29]
*   **Calcul aux États Limites** : L'État Limite Ultime (ELU) concerne l'effondrement, et l'État Limite de Service (ELS) concerne les conditions d'exploitation, notamment les flèches et le contrôle de la fissuration. L'EC4 donne des recommandations pour ces deux critères. [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.29]
*   **Structure par type d'élément** : L'EC4 est structuré selon les types d'élément, avec des procédures détaillées pour le dimensionnement des poutres, des poteaux et des dalles. [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.29]
*   **Composition de l'Eurocode 4** : Comprend la Partie 1-1 (Règles générales et règles pour les bâtiments) et la Partie 2 (Ponts mixtes). La Partie 1-2 (Incendie) est également mentionnée. [EUR-Eurocode_4-Calcul_Structures_Mixtes.pdf, p.1]
*   **Dalles mixtes (cl. 9)** : Des recommandations détaillées sont fournies pour leur dimensionnement aux ELU et ELS, incluant les phases de construction où la tôle métallique agit comme coffrage permanent (avec référence à l'EC3 Partie 1.3). Des procédures de calcul sont données pour la flexion, le cisaillement longitudinal et vertical. [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.37]
*   **Calcul des flèches** : La flèche calculée est un indicateur de la rigidité pour l'ELS. Des recommandations sont données pour les poutres mixtes, prenant en compte l'interaction partielle et la fissuration du béton. L'EC4 ne donne pas de valeurs limites de flèche, mais recommande de se référer aux annexes nationales. [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.36]
*   **Maîtrise de la fissuration (cl. 7.3.2)** : Pour les poutres simplement appuyées, il est généralement suffisant de limiter les ouvertures de fissures à 0,3 mm et de respecter les mesures de l'EC2, ou d'observer un pourcentage d'armatures minimum et de limiter l'espacement et le diamètre des barres. [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.126]
*   **Poteaux mixtes en situation d'incendie** : L'excentricité de la charge à l'extrémité du poteau ne doit pas dépasser la moitié des dimensions b et d de la section. Des protections au feu additionnelles peuvent être nécessaires. [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.271]

## 3. Formules critiques
*   **Aire d'armature minimale ($A_s$) pour la maîtrise de la fissuration** [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.126, cl. 7.3.2] :
    $A_s = k_s k_c k \frac{f_{ct,eff} A_{ct}}{\sigma_s}$
    *   $A_s$: Aire d'armature minimale (mm²)
    *   $f_{ct,eff}$: Résistance moyenne du béton en traction (N/mm²)
    *   $k$: Facteur (sans unité)
    *   $k_s$: Facteur (sans unité)
    *   $k_c$: Facteur (sans unité)
    *   $A_{ct}$: Aire de la section de béton en traction (mm²)
    *   $\sigma_s$: Contrainte dans l'armature (N/mm²)
    *   *Conditions d'application* : Pour les poutres simplement appuyées, afin de limiter les ouvertures de fissures.

*   **Excentricité de la charge ($\delta$) pour les poteaux** [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.271] :
    $\delta = \frac{M}{N}$
    *   $\delta$: Excentricité de la charge (mm ou m)
    *   $M$: Moment (N.mm ou kN.m)
    *   $N$: Effort normal (N ou kN)
    *   *Conditions d'application* : Concerne les poteaux mixtes en situation d'incendie. L'excentricité $\delta$ à l'extrémité du poteau ne doit pas dépasser la moitié des dimensions b et d de la section ($ \delta \le b/2 $ et $ \delta \le d/2 $).

*   **Vérification des contraintes** [EUR-Eurocode_4-Calcul_Structures_Mixtes.pdf, p.1] :
    $\sigma \le f_y$
    *   $\sigma$: Contrainte calculée (N/mm²)
    *   $f_y$: Limite d'élasticité du matériau (N/mm²)
    *   *Conditions d'application* : Principe général de vérification des contraintes dans les sections.

*   **Vérification de la résistance à la flexion** [EUR-Eurocode_4-Calcul_Structures_Mixtes.pdf, p.1] :
    $M_{Ed} \le M_{Rd}$
    *   $M_{Ed}$: Moment de calcul sollicitant (N.mm ou kN.m)
    *   $M_{Rd}$: Moment résistant de calcul (N.mm ou kN.m)
    *   *Conditions d'application* : Principe général de vérification de la résistance des sections à la flexion.

## 4. Tableaux de synthèse

| Paramètre | Valeur typique / Limite | Source |
| :-------------------------------------- | :---------------------- | :------------------------------------------------------ |
| Résistance moyenne du béton en traction ($f_{ct,eff}$) | 3 N/mm² (généralement) | [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.126] |
| Facteur $k$ (pour $A_s$) | 0,8 (généralement) | [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.126] |
| Limite d'ouverture des fissures | 0,3 mm | [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.126] |
| Excentricité de la charge ($\delta$) sur poteau | $\le b/2$ et $\le d/2$ | [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.271] |

## 5. Points de vigilance
*   **Phases de construction des dalles mixtes** : Ne pas négliger le dimensionnement de la tôle métallique en phase de construction, où elle agit comme coffrage permanent et doit résister aux actions du béton frais et aux charges de chantier. Une référence à l'EC3 Partie 1.3 est nécessaire. [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.37]
*   **Valeurs limites de flèche** : L'EC4 ne fournit pas de valeurs limites de flèche ; il est impératif de se référer aux annexes nationales pour ces critères. L'EC4 ne donne pas non plus de conseils sur des approches simplifiées (ex: rapports portée/hauteurs limites) pour le calcul des flèches. [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.36]
*   **Excentricité de la charge sur poteaux en incendie** : Pour les poteaux en situation d'incendie, l'excentricité de la charge ($\delta = M/N$) à l'extrémité ne doit pas dépasser la moitié des dimensions b et d de la section. [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.271]
*   **Protections au feu additionnelles** : En présence de niveaux de charge élevés ou de temps de résistance au feu importants, l'utilisation de protections au feu additionnelles pour les poteaux tubulaires remplis de béton est nécessaire, en se basant sur les données des fabricants et les codes adéquats. [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.271]
*   **Maîtrise de la fissuration** : Pour la maîtrise de la fissuration, bien que la limitation à 0,3 mm soit une option, il est aussi possible de se référer aux mesures prescrites dans l'EC2 ou d'observer un pourcentage d'armatures minimum avec des limites sur l'espacement et le diamètre des barres. [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.126]

## 6. Références normatives
*   **Eurocode 4 (EC4)** : Calcul des structures mixtes acier/béton [EUR-Eurocode_4-Calcul_Structures_Mixtes.pdf, p.1]
*   **EC4-1-1** : Règles générales et règles pour les bâtiments [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.31], [EUR-Eurocode_4-Calcul_Structures_Mixtes.pdf, p.1]
*   **EC4 Partie 1-2** : Incendie (mentionnée) [EUR-Eurocode_4-Calcul_Structures_Mixtes.pdf, p.1]
*   **EC4 Partie 2** : Ponts mixtes [EUR-Eurocode_4-Calcul_Structures_Mixtes.pdf, p.1]
*   **EC4 cl. 7.3.2** : Aire d'armature minimale [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.126]
*   **EC4 cl. 9** : Dalles mixtes [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.37]
*   **Eurocode 3 (EC3)** : Mentionné pour les principes de calcul aux états limites [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.29]
*   **EC3 Partie 1.3** : Référence pour la tôle métallique en phase de construction des dalles mixtes [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.37]
*   **Eurocode 2 (EC2)** : Référence pour les mesures de contrôle de la fissuration [FOR-TransNational-Formation_EC4_Structures_Mixtes.pdf, p.126]

Vérifier la version en vigueur sur Kheox.fr

---

## Rapport d'Audit

Audit de la fiche technique :

**1. Exactitude normative :**
*   **Globalement bonne**, les références aux clauses et concepts sont pertinentes.
*   **Imprécision sur la formule de vérification des contraintes** : $\sigma \le f_y$ est un principe général, mais pour l'ELU, il manque les facteurs de sécurité des matériaux ($\gamma_M$).
*   **Imprécision sur le facteur $k$** : La valeur "0,8 (généralement)" est incorrecte pour les poutres.

**2. Formules :**
*   **Aire d'armature minimale ($A_s$)** : Formule exacte selon l'EC2 cl. 7.3.2 (2) Eq. (7.1), applicable via renvoi de l'EC4.
*   **Excentricité de la charge ($\delta$)** : Définition exacte.
*   **Vérification des contraintes** : $\sigma \le f_y$. **Erreur/Imprécision.** Pour l'ELU, la formule correcte est $\sigma \le f_y / \gamma_M$ (ou $f_{yk} / \gamma_s$ pour les armatures, $f_{yd}$ pour l'acier). La formule donnée est trop simpliste et ne respecte pas les principes de l'ELU.
*   **Vérification de la résistance à la flexion** : $M_{Ed} \le M_{Rd}$. Formule exacte, principe fondamental de l'ELU.

**3. Complétude :**
La fiche est une synthèse, mais pour un "usage professionnel", elle manque de points critiques majeurs de l'EC4 :
*   **Interaction partielle/totale** : Concept fondamental pour les poutres mixtes, son impact sur la rigidité et la résistance.
*   **Dimensionnement des connecteurs de cisaillement** : Résistance, ductilité, espacement. C'est un élément clé des structures mixtes.
*   **Classes de section** : L'application des classes de section de l'EC3 aux profilés acier dans les sections mixtes est cruciale pour déterminer la méthode de calcul (élastique/plastique).
*   **Effets du retrait et du fluage** : Leur influence sur les contraintes à long terme, les flèches et la redistribution des efforts.
*   **Vérification au cisaillement vertical et longitudinal pour les poutres** : Essentiel, en particulier le cisaillement longitudinal qui est lié aux connecteurs.
*   **Méthodes de calcul des poteaux mixtes** : Au-delà de l'incendie, les méthodes générales de dimensionnement (méthode simplifiée, méthode générale) et les différents types de poteaux (tubes remplis, profilés enrobés).
*   **Facteurs de sécurité des matériaux** ($\gamma_M$) : Non mentionnés explicitement, alors qu'ils sont fondamentaux pour le dimensionnement à l'ELU.

**4. Verdict :** ⚠️ CORRECTIONS NÉCESSAIRES

**Corrections exactes nécessaires :**

1.  **Formules critiques - Vérification des contraintes** :
    *   **Erreur** : La formule $\sigma \le f_y$ est incomplète pour l'ELU.
    *   **Correction** : Préciser que pour l'ELU, la vérification est $\sigma \le f_y / \gamma_M$ (où $\gamma_M$ est le facteur de sécurité partiel du matériau, ex: $\gamma_{M0}$ pour l'acier structural, $\gamma_s$ pour les armatures). Si c'est un principe général, il faut le qualifier comme tel (ex: "contrainte caractéristique" ou "contrainte de calcul").

2.  **Tableaux de synthèse - Résistance moyenne du béton en traction ($f_{ct,eff}$)** :
    *   **Imprécision** : "3 N/mm² (généralement)" est trop général.
    *   **Correction** : Préciser que $f_{ct,eff}$ dépend de la classe de béton et de l'âge du béton au moment de la fissuration. La valeur $f_{ctm}$ (résistance moyenne en traction) est donnée dans l'EC2 pour chaque classe de béton.

3.  **Tableaux de synthèse - Facteur $k$ (pour $A_s$)** :
    *   **Erreur** : "0,8 (généralement)" est incorrect.
    *   **Correction** : Selon l'EC2 cl. 7.3.2 (2), $k = 1.0$ pour les poutres et $k = 0.8$ pour les dalles et voiles.

4.  **Complétude - Ajouts critiques pour un usage professionnel** :
    *   Ajouter une section ou des points de vigilance sur le **dimensionnement des connecteurs de cisaillement** (résistance, ductilité, espacement minimal/maximal).
    *   Ajouter un point sur l'importance des **classes de section** de l'acier (EC3) pour le calcul des sections mixtes.
    *   Ajouter un point sur les **effets du retrait et du fluage** du béton sur le comportement à long terme.
    *   Mentionner l'importance de l'**interaction partielle/totale** dans les concepts clés ou points de vigilance.
    *   Mentionner les **facteurs de sécurité des matériaux** ($\gamma_M$) comme concept clé.

## Liens
- [[🏠 Home]] *(lien sagesse)*
- [[MOC_Eurocodes]]
