---
type: sagesse
source: "14_PONTS_ROULANTS"
label: "Ponts roulants / EN 1991-3"
created: "2026-04-27 22:33"
pipeline: "RAG → Synthèse → Audit → Sagesse"
status: validated
tags: [sagesse, ponts-roulants]
updated: 2026-05-05
---

# 🧠 Sagesse — Ponts roulants / EN 1991-3

> Connaissance distillée automatiquement par le pipeline SIRIUS BATCH.
> **Source** : 14_PONTS_ROULANTS | **Date** : 2026-04-27 22:33
> ⚠️ Vérifier la version en vigueur sur [Kheox.fr](https://www.kheox.fr/bt/accueil)

---

## Synthèse Technique

Voici une fiche technique synthétique basée sur les documents fournis, structurée selon vos exigences.

---

# Fiche Technique : Ponts Roulants et Chemins de Roulement (EN 1991-3 & EN 1993-6)

## 1. Résumé exécutif

L'EN 1991-3 spécifie les charges d'exploitation (modèles et valeurs représentatives, incluant effets dynamiques, freinage, accélération et accidentelles) pour les appareils de levage sur chemins de roulement et les machines fixes. Elle est complétée par l'EN 1993-6 pour le calcul des poutres de roulement, en s'appuyant sur des hypothèses générales et des paramètres nationaux.

## 2. Concepts clés

*   **Domaine d'application de l'EN 1991-3** : Cette norme spécifie les charges d'exploitation (modèles et valeurs représentatives) associées aux appareils de levage sur chemins de roulement et aux machines fixes, qui comprennent, le cas échéant, les effets dynamiques et les forces de freinage, d'accélération et accidentelles. [EUR-AFNOR-FA117311.pdf, p.11] ; [EUR-AFNOR-NF_EN_1991-3.pdf, p.25]
*   **Hypothèses de travail** : Outre les hypothèses générales de l'EN 1990, l'exécution est conforme à l'EN 1090-2. [EUR-AFNOR-NF_EN_1993-6_Septembre2007.pdf, p.15]
*   **Distinction Principes et Règles d'Application** : Les "Principes" (identifiés par la lettre P après le numéro de paragraphe) sont des énoncés et définitions d'ordre général, ainsi que des prescriptions et modèles analytiques pour lesquels il n'existe pas d'alternative. Les "Règles d'Application" sont des dispositions courantes. [EUR-AFNOR-FA117311.pdf, p.11]
*   **Excentricité de la charge de galet (e)** : L'excentricité de la charge Qr appliquée par le galet sur le rail est égale à une partie de la largeur de la tête du rail br. La valeur recommandée de e est 0,25 br, mais l'Annexe Nationale peut donner une autre valeur. [EUR-AFNOR-NF_EN_1991-3.pdf, p.45] ; [EUR-AFNOR-FA117311.pdf, p.21]
*   **Forces horizontales induites par des ponts roulants** : Il convient de tenir compte des types suivants :
    *   Forces produites par les accélérations ou décélérations de l'appareil de levage lors de ses déplacements. [EUR-AFNOR-NF_EN_1991-3.pdf, p.45] ; [EUR-AFNOR-FA117311.pdf, p.21]
    *   Forces produites par les accélérations ou décélérations du chariot ou du chariot suspendu lors de ses déplacements sur la poutre du pont. [EUR-AFNOR-NF_EN_1991-3.pdf, p.45] ; [EUR-AFNOR-FA117311.pdf, p.21]
*   **Paramètres Déterminés au niveau National (NDP)** : La Norme Nationale transposant l'EN 1991-3 doit être dotée d'une Annexe Nationale contenant l'ensemble des Paramètres Déterminés au niveau National qui devront être utilisés pour le calcul des éléments. [EUR-AFNOR-NF_EN_1991-3.pdf, p.23]
*   **Procédure pour les actions du fournisseur** : L'EN 1991-3 prescrit diverses méthodes pour déterminer les actions fiables, selon que des informations complètes concernant les spécifications relatives aux ponts roulants sont ou non disponibles au moment du calcul des chemins de roulement. [EUR-AFNOR-FA122256.pdf, p.15]
*   **Autres actions sur les chemins de roulement** : Les autres actions exercées sur les chemins de roulement doivent être déterminées par référence à l'EN 1991-1-1, l'EN 1991-1-2, l'EN 1991-1-4, l'EN 1991-1-5, l'EN 1991-1-6 ou l'EN 1991-1-7 selon le cas. [EUR-AFNOR-FA122256.pdf, p.15]
*   **Coefficients partiels et règles de combinaison** : Doivent être prises dans l'Annexe A de l'EN 1991-3. [EUR-AFNOR-FA122256.pdf, p.15]
*   **Actions accidentelles** : Le coefficient partiel γA est de 1,00 pour les situations accidentelles. [EUR-AFNOR-NF_EN_1991-3-NA.pdf, p.15]
*   **Coefficients ψ** : Les valeurs recommandées sont ψ0 = 1,0 et ψ1 = 0,9. En l'absence d'informations sur les ponts roulants (ex: avant-projet), la valeur du coefficient ψ2 = 0,8 pourra être adoptée comme équivalence à l'action induite d'un ou plusieurs ponts roulants à vide. [EUR-AFNOR-NF_EN_1991-3-NA.pdf, p.15]

## 3. Formules critiques

*   **Excentricité de la charge de galet sur le rail** :
    $$e = 0,25 \cdot b_r$$
    où :
    *   $e$ est l'excentricité de la charge appliquée par le galet (en m).
    *   $b_r$ est la largeur de la tête du rail (en m).
    *   **Conditions d'application** : Cette valeur est une recommandation de l'EN 1991-3:2006 (F), clause 2.5.2.1(2). L'Annexe Nationale peut spécifier une valeur différente. [EUR-AFNOR-NF_EN_1991-3.pdf, p.45] ; [EUR-AFNOR-FA117311.pdf, p.21]

## 4. Tableaux de synthèse

**Tableau 1 : Valeurs recommandées des coefficients partiels γ pour les actions dues aux appareils de levage (NF EN 1991-3/NA, Tableau A.1-NA)** [EUR-AFNOR-NF_EN_1991-3-NA.pdf, p.15]

| Action                                | Symbole | Situation P et T (Durable et Transitoire) | Situation A (Accidentelle) |
| :------------------------------------ | :------ | :---------------------------------------- | :------------------------- |
| Actions dues à l'appareil de levage   |         |                                           |                            |
| — défavorables                        | γQsup   | 1,50                                      | 1,00                       |
| — favorables (présence de l'appareil) | γQinf   | 1,00                                      | 1,00                       |
| — favorables (absence de l'appareil)  | γQinf   | 0,00                                      | 0,00                       |
| Autres actions variables              | γQ      |                                           |                            |
| — défavorables                        |         | 1,50                                      | 1,00                       |
| — favorables                          |         | 0,00                                      | 0,00                       |
| Actions accidentelles                 | γA      | -                                         | 1,00                       |
| Actions permanentes (supérieures)     | γGsup   | 1,1                                       | 1,00 (implicite, non spécifié pour A) |
| Actions permanentes (inférieures)     | γGinf   | 0,9                                       | 1,00 (implicite, non spécifié pour A) |

*Note : Les valeurs de γGsup et γGinf sont également à utiliser pour l'ensemble des structures support. [EUR-AFNOR-NF_EN_1991-3-NA.pdf, p.15]*

**Tableau 2 : Choix nationaux autorisés dans l'EN 1991-3 (extraits)** [EUR-AFNOR-NF_EN_1991-3.pdf, p.23] ; [EUR-AFNOR-Norme_Eurocode_2010_FA155745.pdf, p.3] ; [EUR-AFNOR-NF_EN_1991-3-NA.pdf, p.11]

| Paragraphe | Description du choix national                                                               |
| :--------- | :---------------------------------------------------------------------------------------- |
| 2.1(2)     | Procédure lorsque les actions sont données par le fournisseur de l'appareil de levage     |
| 2.5.2.1(2) | Excentricité des charges de galet sur le rail                                             |
| 2.5.3(2)   | Nombre maximal d'appareils de levage à considérer dans la position la plus défavorable     |
| 2.7.3(3)   | Valeur du coefficient de frottement (pour la détermination de la force d'entraînement)    |
| A2.2(1)    | Définition des valeurs des coefficients γ pour les cas STR et GEO                         |
| A2.2(2)    | Définition des valeurs des coefficients γ pour le cas EQU                                 |
| A2.3(1)    | Définition des valeurs des coefficients ψ pour les charges dues aux appareils de levage   |

## 5. Points de vigilance

*   **Annexe Nationale** : Il est impératif de consulter l'Annexe Nationale du pays concerné, car elle contient les Paramètres Déterminés au niveau National (NDP) qui peuvent modifier les valeurs recommandées (ex: excentricité `e`, coefficients `γ` et `ψ`). [EUR-AFNOR-NF_EN_1991-3.pdf, p.23] ; [EUR-AFNOR-NF_EN_1991-3-NA.pdf, p.15]
*   **Données du fournisseur** : La fiabilité des actions de calcul dépend fortement des informations complètes fournies par le fabricant du pont roulant. L'EN 1991-3 propose des méthodes adaptées à la disponibilité de ces informations. [EUR-AFNOR-FA122256.pdf, p.15]
*   **Pathologies récurrentes** : Les problèmes fréquemment rencontrés incluent les déformations excessives des poutres, les vibrations et la fissuration. [GEN-Source-Chemins_Roulement_Ponts_Roulants.pdf, p.7]
*   **Difficultés de conception et de calcul** : Des problèmes peuvent survenir en raison de "défauts" du référentiel technique (manque de mises à jour, contradictions, prescriptions incomplètes) ou de la complexité d'application de méthodes de calcul avancées (torsion globale/locale, voilement, fatigue). [GEN-Source-Chemins_Roulement_Ponts_Roulants.pdf, p.7]
*   **Sujets complexes** : Une attention particulière doit être portée aux classements des appareils de levage (Classes, Groupes), à la détermination des charges horizontales transversales et à la prise en compte de plusieurs ponts roulants. [GEN-Source-Chemins_Roulement_Ponts_Roulants.pdf, p.7]
*   **Fatigue et choix des aciers** : Les calculs de fatigue (EN 1993-1-9) et le choix des qualités d'acier (EN 1993-1-10) sont des aspects critiques pour la durabilité des structures de ponts roulants. [EUR-AFNOR-NF_EN_1993-6_Septembre2007.pdf, p.15] ; [EUR-AFNOR-FA117311.pdf, p.11]

## 6. Références normatives

*   **EN 1990** : Eurocode 0 — Bases de calcul des structures. [EUR-AFNOR-NF_EN_1993-6_Septembre2007.pdf, p.15]
*   **EN 1991-1-1, EN 1991-1-2, EN 1991-1-4, EN 1991-1-5, EN 1991-1-6, EN 1991-1-7** : Eurocode 1 — Actions sur les structures (pour les autres actions sur les chemins de roulement). [EUR-AFNOR-FA122256.pdf, p.15]
*   **EN 1991-3:2006 (F)** : Eurocode 1 — Actions sur les structures — Partie 3 : Actions induites par les appareils de levage et les machines. [EUR-AFNOR-FA117311.pdf, p.11] ; [EUR-AFNOR-NF_EN_1991-3.pdf, p.25] ; [EUR-AFNOR-NF_EN_1991-3.pdf, p.45]
*   **NF EN 1991-3/NA** : Annexe Nationale à l'EN 1991-3. [EUR-AFNOR-NF_EN_1991-3-NA.pdf, p.15] ; [EUR-AFNOR-NF_EN_1991-3-NA.pdf, p.11]
*   **EN 1993-1-9** : Eurocode 3 — Calcul des structures en acier — Partie 1-9 : Fatigue. [EUR-AFNOR-FA117311.pdf, p.11]
*   **EN 1993-1-10** : Eurocode 3 — Calcul des structures en acier — Partie 1-10 : Choix des qualités d'acier. [EUR-AFNOR-NF_EN_1993-6_Septembre2007.pdf, p.15]
*   **EN 1993-6:2007 (F)** : Eurocode 3 — Calcul des structures en acier — Partie 6 : Poutres de roulement des appareils de levage. [EUR-AFNOR-FA117311.pdf, p.11] ; [EUR-AFNOR-NF_EN_1993-6_Septembre2007.pdf, p.15] ; [EUR-AFNOR-FA122256.pdf, p.15]
*   **EN 1090-2** : Exécution des structures en acier et des structures en aluminium — Partie 2 : Exigences techniques pour les structures en acier. [EUR-AFNOR-NF_EN_1993-6_Septembre2007.pdf, p.15]
*   **EN 10164** : Aciers de construction à caractéristiques de déformation améliorées dans le sens perpendiculaire à la surface du produit — Conditions techniques de livraison. [EUR-AFNOR-NF_EN_1993-6_Septembre2007.pdf, p.15]
*   **EN 1998** : Eurocode 8 — Calcul des structures pour leur résistance aux séismes. [EUR-AFNOR-NF_EN_1993-6_Septembre2007.pdf, p.15]
*   **EN 13001** : Appareils de levage — Conception générale — Partie 2 : Effets des charges. [EUR-AFNOR-FA117311.pdf, p.11] ; [EUR-AFNOR-NF_EN_1991-3-NA.pdf, p.11]
*   **ISO/DIS 11660** : Appareils de levage à charge suspendue — Moyens d'accès, dispositifs de protection et de retenue — Partie 5 : Ponts roulants et portiques. [EUR-AFNOR-NF_EN_1993-6_Septembre2007.pdf, p.15]
*   **TS 13001** : Appareils de levage à charge suspendue — Conception générale — Partie 3.3 : Limit states and proof of competence of wheel/rail contacts. [EUR-AFNOR-NF_EN_1993-6_Septembre2007.pdf, p.15]

---
Vérifier la version en vigueur sur Kheox.fr

---

## Rapport d'Audit

Audit de la fiche technique :

1.  **Exactitude normative** : ✅ VALIDÉ. Toutes les références aux clauses Eurocodes et aux normes citées sont correctes et pertinentes.
2.  **Formules** : ✅ VALIDÉ. La formule de l'excentricité est exacte.
3.  **Complétude** : ⚠️ CORRECTIONS NÉCESSAIRES. Pour un usage professionnel, des points critiques manquent :
    *   **Classes d'utilisation et groupes de charge (EN 1991-3, 2.3.1 et 2.3.2)** : Ces classifications sont fondamentales pour la détermination des actions et de la fatigue et devraient être détaillées dans les "Concepts clés".
    *   **Coefficients dynamiques (φ)** : Les coefficients dynamiques (φ1 pour les charges verticales, φ2 pour le freinage, φ3 pour l'accélération, φ4 pour les forces transversales) de l'EN 1991-3, 2.5.1 sont essentiels et devraient être mentionnés, idéalement avec leurs formules ou principes de détermination.
    *   **Principes de combinaison des actions (EN 1990)** : Bien que les coefficients partiels soient donnés, les règles de combinaison des actions (par exemple, la formule générale de l'EN 1990) ne sont pas rappelées, ce qui est un point d'application critique.
    *   **Vérifications aux états limites de service (ELS) (EN 1993-6, 7)** : Les critères de déformation et de vibration sont cruciaux pour les chemins de roulement et devraient être abordés plus en détail.
    *   **Vérifications locales des poutres de roulement (EN 1993-6, 8)** : La résistance locale de l'âme (poinçonnement, déversement local) sous les charges de galet est un aspect majeur de la conception et devrait être mentionnée.

4.  **Verdict** : ⚠️ CORRECTIONS NÉCESSAIRES

## Liens
- [[🏠 Home]] *(lien sagesse)*
- [[MOC_Eurocodes]]
