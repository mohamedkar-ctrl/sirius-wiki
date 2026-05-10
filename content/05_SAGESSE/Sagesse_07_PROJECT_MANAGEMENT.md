---
type: sagesse
source: "07_PROJECT_MANAGEMENT"
label: "Project Management / PMBOK"
created: "2026-04-28 02:08"
pipeline: "RAG → Synthèse → Audit → Sagesse"
status: validated
tags: [sagesse, project-management]
updated: 2026-05-05
---

# 🧠 Sagesse — Project Management / PMBOK

> Connaissance distillée automatiquement par le pipeline SIRIUS BATCH.
> **Source** : 07_PROJECT_MANAGEMENT | **Date** : 2026-04-28 02:08
> ⚠️ Vérifier la version en vigueur sur [Kheox.fr](https://www.kheox.fr/bt/accueil)

---

## Synthèse Technique

----------------
## Fiche Technique Synthétique : Principes de Gestion de Projet selon le Guide PMBOK® (6ème Édition)

### 1. Résumé exécutif

Le Guide PMBOK® (6ème édition) est la référence du PMI® pour le management de projet, essentiel pour la certification PMP®. Il définit un cadre structuré de 49 processus répartis en 10 domaines de connaissances et 5 groupes de processus, guidant la gestion éthique et efficace des projets. Pour l'ingénierie des structures métalliques, il fournit les outils critiques pour la maîtrise du périmètre, des coûts et des délais, assurant la conformité et la performance des ouvrages.

### 2. Concepts clés

*   **Guide PMBOK®** : Ouvrage de référence du PMI® (Project Management Institute) servant de support à la certification PMP®. Acronyme de Project Management Body of Knowledge (Corpus des Connaissances en Management de Projet). [PMP-PMBOKV6-Formations.pdf, p.1]
*   **PMI® (Project Management Institute)** : Association américaine internationale sans but lucratif dédiée au Management de Projet, développant le Guide PMBOK® et la certification PMP®. [PMP-PMBOKV6-Formations.pdf, p.1]
*   **PMP® (Project Management Professional)** : Certification professionnelle attestant des connaissances et compétences des chefs de projet expérimentés. [PMP-PMBOKV6-Formations.pdf, p.1]
*   **Projet** : Entreprise temporaire dont le but est de délivrer un résultat unique, un service ou un produit. Dans le contexte des structures métalliques, cela inclut la conception, la fabrication et le montage d'éléments ou d'ouvrages spécifiques. [PMP-PMBOKV6-Formations.pdf, p.1]
*   **Management de Projet** : Ensemble d'activités de gestion impliquant la planification, l'organisation, la direction et le contrôle des ressources pour atteindre les objectifs du projet. [PMP-PMBOKV6-Formations.pdf, p.1]
*   **Code de déontologie et de conduite professionnelle du PMI®** : Quatre principes obligatoires (Responsabilité, Respect, Équité, Honnêteté) s'appliquant à tous les membres ou certifiés du PMI® afin de garantir que les projets seront menés de façon éthique. [PMP-PMBOKV6-Formations.pdf, p.1]
*   **Compétences Interpersonnelles du Chef de Projet** : Onze compétences essentielles pour le chef de projet, incluant le Leadership, la Communication, la Négociation et la Gestion des conflits. Ces compétences sont fondamentales pour la coordination des équipes d'ingénieurs, de dessinateurs, d'atelier et de monteurs sur un projet de construction métallique. [PMP-PMBOKV6-Formations.pdf, p.1]
*   **Processus** : Ensemble d'activités interdépendantes transformant des entrées en sorties en utilisant des techniques et des outils spécifiques. Le Guide PMBOK® 6ème édition comporte 49 processus, structurés en 10 domaines de connaissances et 5 groupes de processus. [PMP-PMBOKV6-Formations.pdf, p.1]
*   **Charte du Projet** : Document formel autorisant l'existence d'un projet. Elle donne au chef de projet l'autorité d'allouer les ressources organisationnelles aux activités du projet. C'est le document fondateur pour tout projet de structure métallique, définissant ses objectifs et ses limites. [PMP-PMBOKV6-Formations.pdf, p.1]
*   **Gestion du Périmètre (Domaine de Connaissance 5)** : Objectif d'assurer la livraison de produits ou services dont le contenu satisfait les objectifs du client. Essentiel pour définir précisément les spécifications techniques, les tolérances, les matériaux et les exigences fonctionnelles des structures métalliques, évitant ainsi les dérives de conception ou de fabrication. [PMP-PMBOKV6-Formations.pdf, p.2]
*   **Gestion des Changements** : Processus de mise à jour des documents et plans du projet pour refléter les changements. La gestion des changements apportés aux références de base des performances garantit le maintien du périmètre initial du projet et de l'intégrité des références de base des performances. [FOR-Unknown-Fichier_Exercice_Non_Identifie.pdf, p.207]
*   **Gouvernance du Projet** : Établir la structure de gouvernance appropriée pour un projet (par exemple, reproduire la gouvernance de l'organisation) et définir les voies et les seuils d'escalade. [EUR-SourceInconnue-Map_to_ECO.pdf, p.6, Tâche 14]

### 3. Formules critiques

*   **Indice de Performance des Coûts (CPI)** : Mesure la performance des coûts sous forme de ratio ou pourcentage.
    $CPI = \frac{EV}{AC}$
    où:
    *   $EV$ = Earned Value (Valeur Acquise)
    *   $AC$ = Actual Cost (Coût Réel)
    Conditions: Un $CPI < 1$ indique un dépassement de budget, un $CPI > 1$ une sous-dépense. [PMP-PMBOKV6-Formations.pdf, p.2]

*   **Coût Estimé à Terminaison (EAC)** : Prévision du coût total du projet à son achèvement.
    *   Si les estimations initiales étaient erronées:
        $EAC = AC + ETC$
        où $ETC$ = Estimate To Complete (Estimation pour Terminer). [PMP-PMBOKV6-Formations.pdf, p.2]
    *   Si les conditions actuelles sont supposées identiques pour le reste du projet:
        $EAC = \frac{BAC}{CPI}$
        où $BAC$ = Budget At Completion (Budget à Terminaison). [PMP-PMBOKV6-Formations.pdf, p.2]
    *   Si plus de retard n'est pas attendu:
        $EAC = AC + (BAC - EV)$ [PMP-PMBOKV6-Formations.pdf, p.2]
    *   Si conditions budgétaires stables et engagement ferme sur les délais:
        $EAC = AC + \frac{(BAC - EV)}{(CPI \times SPI)}$
        où $SPI$ = Schedule Performance Index (Indice de Performance des Délais). [PMP-PMBOKV6-Formations.pdf, p.2]

*   **Indice de Performance pour Terminer (TCPI)** : Efficacité budgétaire requise pour achever le projet avec le budget restant.
    *   Si l'efficacité est ciblée sur l'échéancier et le budget est viable:
        $TCPI = \frac{(BAC - EV)}{(BAC - AC)}$ [PMP-PMBOKV6-Formations.pdf, p.2]
    *   Si l'efficacité est ciblée sur les coûts (pour atteindre le nouvel EAC):
        $TCPI = \frac{(BAC - EV)}{(EAC - AC)}$ [PMP-PMBOKV6-Formations.pdf, p.2]
    Conditions:
    *   $TCPI < 1$: plus facile à atteindre.
    *   $TCPI = 1$: atteignable.
    *   $TCPI > 1$: plus difficile à atteindre. [PMP-PMBOKV6-Formations.pdf, p.2]

### 4. Tableaux de synthèse

| Caractéristique PMBOK® | Valeur / Description | Source |
| :--- | :--- | :--- |

---

## Rapport d'Audit

En tant qu'ingénieur structures senior spécialisé en Eurocodes, mon audit de cette fiche technique est le suivant :

1.  **Exactitude normative (Eurocodes)** :
    *   **Erreur critique** : La fiche technique est entièrement dédiée aux principes de gestion de projet selon le Guide PMBOK® et ne contient **aucune référence normative aux Eurocodes**.
    *   La seule mention d'une source "EUR" ([EUR-SourceInconnue-Map_to_ECO.pdf, p.6, Tâche 14]) pour le concept de "Gouvernance du Projet" est trompeuse. Le contenu de cette définition est purement lié au management de projet et n'a aucun rapport avec les normes Eurocodes (EN 1990 à EN 1999) qui régissent le calcul et la conception des structures. Les Eurocodes ne traitent pas de la "gouvernance du projet" ou des "voies et seuils d'escalade" au sens du PMBOK.
    *   Les mentions de "structures métalliques" sont faites dans le contexte de l'application du PMBOK, et non pour introduire des exigences ou des principes de conception Eurocodes.

2.  **Formules** :
    *   Les formules présentées pour l'Indice de Performance des Coûts (CPI), le Coût Estimé à Terminaison (EAC) et l'Indice de Performance pour Terminer (TCPI) sont **exactes** et conformes aux standards de l'Earned Value Management (EVM) du PMBOK.

3.  **Complétude** :
    *   **Manque critique** : Pour un usage professionnel dans le domaine de l'ingénierie des structures métalliques, et étant donné mon rôle d'auditeur spécialisé en Eurocodes, cette fiche est **totalement incomplète**. Elle ne contient aucune information technique, normative ou de conception relative aux Eurocodes (par exemple, EN 1993 pour l'acier, EN 1090 pour l'exécution, etc.).
    *   Si l'objectif était de fournir une fiche technique pour l'application du PMBOK aux projets de structures métalliques *avec une intégration Eurocode*, il manquerait des sections sur :
        *   Les classes d'exécution (EXC1 à EXC4) selon l'EN 1090-2.
        *   Les exigences de qualité et de contrôle selon l'EN 1090-1 et EN 1090-2.
        *   Les principes de conception (ELS/ELU) et les coefficients de sécurité des Eurocodes.
        *   La gestion des spécifications techniques et des tolérances selon les Eurocodes.
        *   La documentation technique requise par les Eurocodes.

4.  **Verdict** : ❌ REJETÉ

**Justification du verdict :**
La fiche technique est rejetée car elle ne répond pas au critère principal de l'audit : l'exactitude normative des Eurocodes. Elle ne contient aucune information pertinente aux Eurocodes, malgré la mention de "structures métalliques" et le rôle de l'auditeur. La seule référence "EUR" est mal attribuée et le document est un résumé du PMBOK, non une fiche technique intégrant les Eurocodes pour l'ingénierie des structures.

## Liens
- [[🏠 Home]] *(lien sagesse)*
- [[MOC_Management]]
