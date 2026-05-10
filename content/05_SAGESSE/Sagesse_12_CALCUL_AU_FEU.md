---
type: sagesse
source: "12_CALCUL_AU_FEU"
label: "Calcul au feu / EN 1993-1-2"
created: "2026-04-27 21:39"
pipeline: "RAG → Synthèse → Audit → Sagesse"
status: validated
tags: [sagesse, calcul-au-feu]
updated: 2026-05-05
---

# 🧠 Sagesse — Calcul au feu / EN 1993-1-2

> Connaissance distillée automatiquement par le pipeline SIRIUS BATCH.
> **Source** : 12_CALCUL_AU_FEU | **Date** : 2026-04-27 21:39
> ⚠️ Vérifier la version en vigueur sur [Kheox.fr](https://www.kheox.fr/bt/accueil)

---

## Synthèse Technique

Voici une fiche technique synthétique basée sur les documents fournis :

# Fiche Technique : Calcul au Feu des Structures Métalliques selon EN 1993-1-2

## 1. Résumé exécutif
L'EN 1993-1-2 établit les principes et règles de calcul pour le comportement au feu des structures en acier. Elle intègre l'analyse des propriétés des matériaux à haute température via des facteurs de réduction, la détermination des actions thermiques et mécaniques (requérant l'EN 1991-1-2), et diverses procédures de calcul, incluant les feux nominaux et l'ingénierie de la sécurité incendie.

## 2. Concepts clés
*   **Objet de l'EN 1993-1-2**: Cette partie de l'Eurocode 3 spécifie les règles de calcul pour le comportement au feu des structures en acier (EUR-AFNOR-FA047307.pdf, p.6 ; EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.75).
*   **Procédures de calcul au feu**: Une procédure analytique complète doit intégrer le comportement du système structural aux températures élevées, l'exposition à la chaleur, les effets des protections actives et passives, les incertitudes, et l'importance de la structure (EUR-AFNOR-FA047307.pdf, p.11).
*   **Approches pour les actions thermiques**:
    *   **Approche descriptive**: Utilise des feux nominaux pour générer les actions thermiques (EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.81).
    *   **Approche fondée sur des objectifs (Ingénierie de la sécurité incendie)**: Se réfère à des actions thermiques basées sur des paramètres physiques et chimiques (EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.81).
*   **Propriétés des matériaux à température élevée**: Les valeurs caractéristiques d’une propriété de résistance ou de déformation ($X_k$) pour le calcul à température normale (selon EN 1993-1-1) sont réduites par un facteur $k_{\theta}$ dépendant de la température du matériau (EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.93).
*   **Coefficient partiel en situation d'incendie ($\gamma_{M,fi}$)**: Coefficient partiel pour la propriété appropriée en situation d'incendie. L'utilisation de $\gamma_{M,fi} = 1,0$ est recommandée pour les propriétés mécaniques de l’acier, mais l'Annexe Nationale doit être consultée (EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.93).
*   **Détermination des actions**: Pour un calcul conforme à l'EN 1993-1-2, l’EN 1991-1-2 est exigée pour la détermination des actions thermiques et mécaniques exercées sur la structure (EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.81 ; EUR-AFNOR-FA100324.pdf, p.11).
*   **Aides au dimensionnement**: Des solutions de dimensionnement sous forme de tableaux de données (fondées sur des essais ou des modèles de calcul avancés) sont disponibles dans les Eurocodes feu, utilisables dans des limites de validité spécifiées (EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.81 ; EUR-AFNOR-FA047307.pdf, p.11 ; EUR-AFNOR-FA100324.pdf, p.11).
*   **Annexe Nationale**: La norme donne des procédures, valeurs et recommandations alternatives, avec des notes indiquant les cas où des choix sont possibles, notamment pour le coefficient partiel $\gamma_{M,fi}$ (EUR-AFNOR-FA047307.pdf, p.11 ; EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.93).

## 3. Formules critiques
*   **Facteur de réduction des propriétés mécaniques** (EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.93) :
    $$k_{\theta} = \frac{X_{k,\theta}}{X_k}$$
    Où :
    *   $X_{k,\theta}$ est la valeur caractéristique d'une propriété de résistance ou de déformation à la température $\theta$.
    *   $X_k$ est la valeur caractéristique de la même propriété à température normale (selon EN 1993-1-1).
    *   $k_{\theta}$ est le facteur de réduction, dépendant de la température du matériau.

*   **Valeurs de calcul des propriétés thermiques** (EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.93) :
    Si une augmentation de la propriété est favorable pour la sécurité : $X_{d,fi}$ (La formule complète de calcul n'est pas fournie dans les extraits, seulement la condition).

*   **Facteur de massiveté pour la protection au feu** (Exemple de calcul, EUR-Z.Sokol-Calcul_au_feu_poteau_HEB.pdf, p.1) :
    $$W_K = \frac{\lambda_p \cdot (A_p/V)}{d_p}$$
    Où :
    *   $W_K$ est un facteur lié à la protection au feu.
    *   $\lambda_p$ est la conductivité thermique du matériau de protection (ex: 0,02 W/mK).
    *   $A_p/V$ est le facteur de massiveté du profilé (surface exposée / volume) (ex: 159 m⁻¹).
    *   $d_p$ est l'épaisseur du matériau de protection (ex: 0,012 m).
    *   *Condition d'application*: Cette formule est extraite d'un exemple de calcul spécifique pour un poteau HEB protégé et n'est pas présentée comme une formule générale de l'Eurocode dans les documents fournis.

## 4. Tableaux de synthèse

**Tableau 1 — Facteurs de réduction pour le calcul à température élevée** (NF EN 1993-1-2/NA, p.8)

| Température de l’acier $\theta_a$ | Profilés laminés à chaud ou soudés | Profilés formés à froid |
| :------------------------------- | :--------------------------------- | :---------------------- |
|                                  | $k_{E,\theta} = E_{a,\theta} / E_a$ | $k_{p0,2,\theta} = f_{p0,2,\theta} / f_y$ | $k_{E,\theta} = E_{a,\theta} / E_a$ | $k_{p0,2,\theta} = f_{p0,2,\theta} / f_{yb}$ |
| 20 °C                            | 1,000                              | 1,000                   | 1,000                   | 1,000                   |
| 100 °C                           | 1,000                              | 1,000                   | 1,000                   | 1,000                   |
| 200 °C                           | 0,900                              | 0,896                   | 0,900                   | 0,896                   |
| 300 °C                           | 0,800                              | 0,793                   | 0,800                   | 0,793                   |
| 400 °C                           | 0,700                              | 0,694                   | 0,680                   | 0,616                   |
| 500 °C                           | 0,600                              | 0,557                   | 0,450                   | 0,407                   |
| 600 °C                           | 0,310                              | 0,318                   | 0,250                   | 0,229                   |
| 700 °C                           | 0,130                              | 0,150                   | 0,110                   | 0,117                   |
| 800 °C                           | 0,090                              | 0,078                   | 0,080                   | 0,049                   |
| 900 °C                           | 0,0675                             | 0,048                   | 0,060                   | 0,037                   |
| 1 000 °C                         | 0,045                              | 0,032                   | 0,040                   | 0,025                   |
| 1 100 °C                         | 0,0225                             | 0,046                   | 0,020                   | 0,013                   |
| 1 200 °C                         | 0,000                              | 0,000                   | 0,000                   | 0,000                   |

**Valeurs recommandées**
*   Coefficient partiel pour les propriétés mécaniques de l'acier en situation d'incendie : $\gamma_{M,fi} = 1,0$ (EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.93).

**Exemple de calcul de température d'acier** (EUR-Z.Sokol-Calcul_au_feu_poteau_HEB.pdf, p.1)
*   Facteur de massiveté $A_p/V = 159 \text{ m}^{-1}$.
*   Température de l'acier $\theta_a = 602 \text{ °C}$ à l'instant $t = 90 \text{ minutes}$.

## 5. Points de vigilance
*   **Annexe Nationale**: Toujours consulter l'Annexe Nationale pour les coefficients partiels ($\gamma_{M,fi}$) et d'autres valeurs ou procédures alternatives, même si $\gamma_{M,fi} = 1,0$ est recommandé (EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.93 ; EUR-AFNOR-FA047307.pdf, p.11).
*   **Détermination des actions**: L'EN 1991-1-2 est indispensable pour la détermination des actions thermiques et mécaniques sur la structure en situation d'incendie (EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.81 ; EUR-AFNOR-FA100324.pdf, p.11).
*   **Limites de validité des aides au dimensionnement**: Les solutions tabulées ou les modèles simplifiés doivent être utilisés dans les limites de validité spécifiées (EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.81 ; EUR-AFNOR-FA047307.pdf, p.11).
*   **Aspects non couverts par l'EN 1993-1-2**: Les exigences concernant l'installation/maintenance de systèmes sprinkleur, les conditions d'occupation, le compartimentage au feu, ou l'utilisation/maintenance de matériaux d'isolation/revêtement ne sont pas incluses dans la norme et relèvent des spécifications de l'autorité compétente (EUR-AFNOR-FA047307.pdf, p.10).
*   **Approche de calcul**: Choisir l'approche appropriée (feu nominal ou ingénierie de la sécurité incendie) en fonction du projet et des exigences (EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.81 ; EUR-AFNOR-FA047307.pdf, p.11).
*   **Typographie dans les documents**: Une référence à "l’EN 1992-1-2" est présente dans [EUR-AFNOR-FA100324.pdf, p.11] pour les aides au dimensionnement, ce qui est probablement une erreur typographique et devrait être "EN 1993-1-2" dans le contexte des structures métalliques.

## 6. Références normatives
*   **EN 1993-1-2:2005**: Eurocode 3 — Calcul des structures en acier — Partie 1-2 : Règles générales — Calcul du comportement au feu (EUR-AFNOR-FA047307.pdf, p.6, p.11).
*   **NF EN 1993-1-2/NA**: Annexe Nationale à l'EN 1993-1-2 (EUR-AFNOR-FA149357.pdf, p.8).
*   **EN 1993-1-1**: Eurocode 3 — Calcul des structures en acier — Partie 1-1 : Règles générales et règles pour les bâtiments (EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.93).
*   **EN 1991-1-2**: Eurocode 1 — Actions sur les structures — Partie 1-2 : Actions générales — Actions sur les structures exposées au feu (prEN 1991-1-2:2002 (F) cité dans EUR-CHEM-Comportement_Feu_Eurocodes.pdf, p.75, p.81, p.93 ; EUR-AFNOR-FA100324.pdf, p.11).

---
Vérifier la version en vigueur sur Kheox.fr

---

## Rapport d'Audit

Audit de la fiche technique :

1.  **Exactitude normative** :
    *   Les références aux clauses et concepts sont globalement correctes.
    *   **Correction nécessaire** : Dans le "Tableau 1 — Facteurs de réduction pour le calcul à température élevée", pour "Profilés laminés à chaud ou soudés", à la température de "1 100 °C", la valeur de $k_{p0,2,\theta} = f_{p0,2,\theta} / f_y$ est indiquée comme "0,046". La valeur correcte selon l'EN 1993-1-2:2005, Tableau 3.1, est **0,016**.

2.  **Formules** :
    *   La formule du facteur de réduction $k_{\theta} = X_{k,\theta} / X_k$ est exacte.
    *   La condition pour les valeurs de calcul des propriétés thermiques est exacte.
    *   **Correction nécessaire** : La formule $W_K = \frac{\lambda_p \cdot (A_p/V)}{d_p}$ est présentée sous le titre "Facteur de massiveté pour la protection au feu". Ce titre est incorrect. Le facteur de massiveté est $A_p/V$. La formule $W_K$ est un terme composite qui apparaît dans les calculs de montée en température des profilés protégés, mais n'est pas le facteur de massiveté lui-même ni une formule critique générale de l'Eurocode 3-1-2.
        *   **Recommandation** : Renommer le titre en "Terme lié à la protection au feu dans les calculs de température" et préciser que $A_p/V$ est le facteur de massiveté, ou retirer cette formule de la section "Formules critiques" si elle est trop spécifique à un exemple.

3.  **Complétude** :
    *   La fiche est synthétique et couvre les points essentiels pour une introduction.
    *   **Suggestions pour un usage professionnel** :
        *   Ajouter une mention des **méthodes de calcul** (méthode simplifiée, méthode avancée) et de leurs domaines d'application (EN 1993-1-2, Clause 4).
        *   Ajouter le concept de **température critique** ($\theta_{a,cr}$) comme concept clé, car c'est un élément fondamental des méthodes simplifiées.
        *   Ajouter la formule de **combinaison des actions** en situation d'incendie (selon EN 1990 et EN 1991-1-2), par exemple $E_{d,fi} = \sum G_k + \psi_{1,1} Q_{k,1} + \sum \psi_{2,i} Q_{k,i}$.
        *   Mentionner l'importance de la **classification des sections** à température élevée (EN 1993-1-2, Clause 4.2.2).

4.  **Verdict** : ⚠️ CORRECTIONS NÉCESSAIRES

## Liens
- [[🏠 Home]] *(lien sagesse)*
- [[MOC_Eurocodes]]
