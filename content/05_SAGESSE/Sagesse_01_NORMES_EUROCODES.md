---
type: sagesse
source: "01_NORMES_EUROCODES"
label: "Eurocodes / Normes / RDM"
created: "2026-04-27 20:57"
pipeline: "RAG → Synthèse → Audit → Sagesse"
status: validated
tags: [sagesse, normes-eurocodes]
updated: 2026-05-05
---

# 🧠 Sagesse — Eurocodes / Normes / RDM

> Connaissance distillée automatiquement par le pipeline SIRIUS BATCH.
> **Source** : 01_NORMES_EUROCODES | **Date** : 2026-04-27 20:57
> ⚠️ Vérifier la version en vigueur sur [Kheox.fr](https://www.kheox.fr/bt/accueil)

---

## Synthèse Technique

En tant qu'expert en construction métallique et structures, voici une fiche technique synthétique basée sur les documents fournis :

---

# Fiche Technique Synthétique : Eurocodes et Construction Métallique

## 1. Résumé exécutif
Les Eurocodes sont les normes européennes de conception et de calcul des structures, remplaçant les règlements nationaux comme le CM66 pour l'acier. Ils s'appuient sur des Annexes Nationales pour adapter les options et sont essentiels pour la libre circulation des produits de construction avec le marquage CE. La conception métallique est régie notamment par l'Eurocode 3 et l'exécution par l'EN 1090-2.

## 2. Concepts clés

*   **Remplacement des règlements nationaux** : Les Eurocodes sont les nouveaux codes de conception et de calcul des ouvrages de structure destinés à remplacer les règlements nationaux existants, tels que le CM66 pour les constructions métalliques (EC3) [EUR-Eyrolles-Calcul_Structures_Béton_Eurocode.pdf, p.25].
*   **Versions EN définitives** : Les versions expérimentales (ENV) accompagnées de Documents d'Application National (DAN) ont été remplacées depuis 2007 par les versions définitives des EN (en France, les NF EN) [EUR-Eyrolles-Calcul_Structures_Béton_Eurocode.pdf, p.25].
*   **Annexes Nationales (NA)** : Les Eurocodes ne sont pas des textes complets mais des "textes à options" dont les choix sont définis au niveau national par les Annexes Nationales (NA) (ex: NF EN 1990/A1/NA, NF EN 1993-1-1/NA) [EUR-Eyrolles-Calcul_Structures_Béton_Eurocode.pdf, p.28], [EUR-Source_Inconnue-Exigences_Essentielles_Eurocodes.pdf, p.180].
*   **Marquage CE** : Les produits de construction relèvent de la compétence de l'UE, et le marquage CE est obligatoire pour leur mise sur le marché, garantissant la libre circulation des produits au sein de l'UE et de l'EEE [EUR-Source_Inconnue-Exigences_Essentielles_Eurocodes.pdf, p.43].
*   **Structure des Eurocodes pour l'acier** :
    *   **Eurocode 0 (NF EN 1990)** : Bases de calcul des structures [EUR-AFNOR-Norme_Eurocode_2010_FR143366.pdf, p.6].
    *   **Eurocode 1 (NF EN 1991)** : Actions sur les structures (ex: poids propres, charges d'exploitation, vent, neige, séisme, feu, température) [EUR-AFNOR-Norme_Eurocode_2010_FR143366.pdf, p.6], [EUR-AFNOR-FA114144.pdf, p.60].
    *   **Eurocode 3 (NF EN 1993)** : Calcul des structures en acier, incluant les règles générales et les règles pour les bâtiments (NF EN 1993-1-1) [EUR-AFNOR-Norme_Eurocode_2010_FR143366.pdf, p.7].
    *   **Eurocode 4 (NF EN 1994)** : Calcul des structures mixtes acier-béton (NF EN 1994-1-1) [EUR-Divers-Documents_Normatifs_Recommandations.pdf, p.7].
*   **Exécution des structures en acier (EN 1090-2)** : Cette norme définit les prescriptions pour l'exécution des structures en acier, incluant la détermination des classes d'exécution (classes II ou I pour la stabilisation selon EN 1993-1-3) et la prise en compte de la durée de vie de la protection et de la catégorie de corrosivité [EUR-CTICM-Guide_Construction_Metallique_Edition_2015.pdf, p.103].

## 3. Formules critiques

Les documents fournis sont principalement conceptuels et normatifs, et ne détaillent pas de formules de calcul spécifiques à la construction métallique.
*   Le concept de "longueur de flambement" est mentionné comme intervenant dans le calcul des poteaux et la vérification au flambement [EUR-Source-Maitrise_EC2.pdf, p.16], mais aucune formule n'est explicitement donnée pour l'acier dans les extraits.
*   Des corrections de formules (C.3, G.3, G.4) sont signalées dans l'EN 1991-1-2 (actions au feu), mais les formules elles-mêmes ne sont pas présentées [EUR-CMI-2014_1.pdf, p.21].

## 4. Tableaux de synthèse

| Eurocode | Titre | Référence Normative (Exemple) | Indice de classement (Exemple) | Source |
| :------- | :---------------------------------- | :----------------------------- | :----------------------------- | :----- |
| EC 0     | Base de calcul des structures       | NF EN 1990                     | P06-100-1                      | [EUR-AFNOR-Norme_Eurocode_2010_FR143366.pdf, p.6] |
| EC 1     | Actions sur les structures          | NF EN 1991-1-1                 | P06-111-1                      | [EUR-AFNOR-Norme_Eurocode_2010_FR143366.pdf, p.6] |
| EC 3     | Calcul des structures en acier      | NF EN 1993-1-1                 | P22-311-1                      | [EUR-AFNOR-Norme_Eurocode_2010_FR143366.pdf, p.7] |
| EC 4     | Calcul des structures mixtes acier | NF EN 1994-1-1                 | P22-411-1                      | [EUR-Divers-Documents_Normatifs_Recommandations.pdf, p.7] |
| EN 1090  | Exécution des structures en acier   | EN 1090-2                      | Non spécifié dans les extraits | [EUR-CTICM-Guide_Construction_Metallique_Edition_2015.pdf, p.103] |

**Exemples d'actions et leurs Eurocodes de référence :**

| N° | Action | Eurocode | Source |
| :-- | :---------------------------------- | :--------- | :----- |
| 01 | Température de référence $T_0$      | EN 1991-1-5 | [EUR-AFNOR-FA114144.pdf, p.60] |
| 2.6 | Action du vent sur les structures   | EN 1991-1-4 | [EUR-AFNOR-FA114144.pdf, p.60] |
| 2.3 | Forces de freinage et d'accélération | EN 1991-2 | [EUR-AFNOR-FA114144.pdf, p.60] |

## 5. Points de vigilance

*   **Vérification des versions en vigueur** : Il est impératif de s'assurer que les documents de référence n'ont pas évolué depuis les versions consultées, car les normes sont sujettes à des amendements et corrigenda [EUR-Source-Maitrise_EC2.pdf, p.16], [EUR-SourceInconnue-Pratique_Eurocode2.pdf, p.20].
*   **Éviter les "amalgames"** : Il faut éviter de mélanger les Eurocodes avec les anciens règlements nationaux (ex: "Eurocode 3 + CM66") [EUR-Source_Inconnue-Exigences_Essentielles_Eurocodes.pdf, p.43].
*   **Eurocodes à options** : Les Eurocodes sont des textes à options, et les choix sont effectués au niveau de l'Annexe Nationale ou du projet particulier. La dérogation à une règle fixée par les Eurocodes est très difficile [EUR-Source_Inconnue-Exigences_Essentielles_Eurocodes.pdf, p.180].
*   **Valeurs recommandées** : Les "valeurs recommandées" dans les Eurocodes peuvent être retenues mais ne sont pas systématiquement obligatoires. Il peut être nécessaire de spécifier un niveau ou une classe de performance pour certains produits [EUR-Source_Inconnue-Exigences_Essentielles_Eurocodes.pdf, p.180].
*   **Corrections et amendements** : Des erreurs peuvent exister dans les versions publiées des normes, nécessitant des corrections (ex: EN 1991-1-2, formules C.3, G.3, G.4) [EUR-CMI-2014_1.pdf, p.21].
*   **Normes de fondations** : En 2009, les normes d'application de l'Eurocode 7 relatives aux fondations étaient encore en cours de rédaction, soulignant l'importance de vérifier la disponibilité et la version des normes spécifiques aux fondations pour les structures métalliques [EUR-Eyrolles-Calcul_Structures_Béton_Eurocode.pdf, p.28].

## 6. Références normatives

*   **NF EN 1990** : Eurocode 0 - Base de calcul des structures [EUR-AFNOR-Norme_Eurocode_2010_FR143366.pdf, p.6]
*   **NF EN 1990/A1** : Eurocode 0 - Annexe A2 : applications aux ponts [EUR-AFNOR-Norme_Eurocode_2010_FR143366.pdf, p.6]
*   **NF P06-100-2** : Annexe nationale EN 1990 [EUR-AFNOR-Norme_Eurocode_2010_FR143366.pdf, p.6]
*   **NF EN 1991-1-1** : Eurocode 1 - Partie 1-1: Actions générales - Poids volumique, poids propres et charges d'exploitation bâtiments [EUR-AFNOR-Norme_Eurocode_2010_FR143366.pdf, p.6]
*   **EN 1991-1-2** : Eurocode 1 - Partie 1-2: Actions générales - Actions sur les structures exposées au feu [EUR-CMI-2014_1.pdf, p.21]
*   **EN 1991-1-5** : Eurocode 1 - Actions sur les structures - Partie 1-5: Actions thermiques [EUR-AFNOR-FA114144.pdf, p.60]
*   **NF EN 1993-1-1** : Eurocode 3 - Partie 1-1: Règles générales et règles pour les bâtiments [EUR-AFNOR-Norme_Eurocode_2010_FR143366.pdf, p.7]
*   **NF EN 1993-1-1/A1:2014** : Eurocode 3 - Amendement [EUR-Source_Inconnue-Exigences_Essentielles_Eurocodes.pdf, p.179]
*   **EN 1993-1-3** : Eurocode 3 - Partie 1-3: Règles générales - Règles supplémentaires pour les éléments et plaques formés à froid [EUR-CTICM-Guide_Construction_Metallique_Edition_2015.pdf, p.103]
*   **NF EN 1994-1-1** : Eurocode 4 - Partie 1.1 : Règles générales et règles pour les bâtiments [EUR-Divers-Documents_Normatifs_Recommandations.pdf, p.7]
*   **EN 1090-2** : Exécution des structures en acier et des structures en aluminium - Partie 2: Exigences techniques pour les structures en acier [EUR-CTICM-Guide_Construction_Metallique_Edition_2015.pdf, p.103]
*   **NF P 06-001** : Ancienne norme remplacée par NF EN 1991 1-1 [EUR-Eyrolles-Calcul_Structures_Béton_Eurocode.pdf, p.28]
*   **CM 66** : Ancien règlement français pour la construction métallique, remplacé par l'Eurocode 3 [EUR-Eyrolles-Calcul_Structures_Béton_Eurocode.pdf, p.25]

---
Vérifier la version en vigueur sur Kheox.fr

---

## Rapport d'Audit

Voici l'audit de la fiche technique :

1.  **Exactitude normative** :
    *   **Correction nécessaire** : Dans la section "2. Concepts clés", sous "Exécution des structures en acier (EN 1090-2)", la phrase "incluant la détermination des classes d'exécution (classes II ou I pour la stabilisation selon EN 1993-1-3)" est incorrecte. L'EN 1090-2 définit les classes d'exécution (EXC1, EXC2, EXC3, EXC4) en fonction de la catégorie de service, de la catégorie de production et de la catégorie de conséquence. L'EN 1993-1-3 concerne les éléments formés à froid et fait référence à la classification des sections (classe 1, 2, 3, 4), qui est un concept différent.
        *   **Proposition de correction** : Remplacer par "incluant la détermination des classes d'exécution (EXC1 à EXC4) et la prise en compte de la durée de vie de la protection et de la catégorie de corrosivité. L'EN 1993-1-3, quant à elle, traite des éléments formés à froid et de la classification de leurs sections."
    *   **Correction nécessaire** : Dans la section "6. Références normatives", la référence "NF P06-100-2 : Annexe nationale EN 1990" est imprécise. NF P06-100-2 est l'indice de classement AFNOR, pas la référence normative de l'Annexe Nationale.
        *   **Proposition de correction** : Remplacer par "NF EN 1990/NA : Annexe Nationale à l'EN 1990".

2.  **Formules** :
    *   **Correction nécessaire** : Dans la section "3. Formules critiques", la référence [EUR-Source-Maitrise_EC2.pdf, p.16] pour le concept de "longueur de flambement" est une source sur l'Eurocode 2 (béton), non pertinente pour une fiche sur la construction métallique (Eurocode 3). Le concept est correct, mais la source est mal ciblée.
        *   **Proposition de correction** : Supprimer la référence à [EUR-Source-Maitrise_EC2.pdf, p.16] ou la remplacer par une source pertinente sur l'EC3 si disponible.

3.  **Complétude** :
    *   **Manque critique** : Pour un usage professionnel, la section "3. Formules critiques" est trop vide. Bien que les documents fournis ne les détaillent pas, une fiche technique professionnelle devrait au moins mentionner les concepts fondamentaux et les formules clés de vérification des éléments en acier (résistance des sections à la traction, compression, flexion, cisaillement, flambement, déversement, etc.) avec les coefficients partiels de sécurité ($\gamma_{M0}$, $\gamma_{M1}$, $\gamma_{M2}$).
    *   **Manque** : Il serait utile de mentionner les Eurocodes 8 (calcul des structures pour leur résistance aux séismes) et 9 (calcul des structures en aluminium) qui peuvent être pertinents pour les structures métalliques.
    *   **Manque** : Une brève mention des méthodes d'analyse (élastique, plastique, analyse du second ordre, imperfections) serait un plus pour un usage professionnel.

4.  **Verdict** : ⚠️ CORRECTIONS NÉCESSAIRES

## Liens
- [[🏠 Home]] *(lien sagesse)*
- [[MOC_Eurocodes]]
