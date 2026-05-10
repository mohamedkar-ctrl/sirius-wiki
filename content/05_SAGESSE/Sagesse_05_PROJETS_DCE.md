---
type: sagesse
source: "05_PROJETS_DCE"
label: "Projets / Dossiers d'exécution"
created: "2026-04-28 01:27"
pipeline: "RAG → Synthèse → Audit → Sagesse"
status: validated
tags: [sagesse, projets-dce]
updated: 2026-05-05
---

# 🧠 Sagesse — Projets / Dossiers d'exécution

> Connaissance distillée automatiquement par le pipeline SIRIUS BATCH.
> **Source** : 05_PROJETS_DCE | **Date** : 2026-04-28 01:27
> ⚠️ Vérifier la version en vigueur sur [Kheox.fr](https://www.kheox.fr/bt/accueil)

---

## Synthèse Technique

En tant qu'expert en construction métallique et structures, voici l'analyse synthétique des documents fournis :

---

# Fiche Technique Synthétique : Exécution des Structures Métalliques et Gestion Documentaire

## 1. Résumé exécutif
Ce dossier souligne l'importance cruciale des documents d'exécution pour les structures métalliques, incluant les plans détaillés, notes de calcul et le Dossier d'Exécution de l'Ouvrage (DEXO). Il insiste sur la conformité aux chartes graphiques, aux normes (EN 1090-2, Eurocodes) et aux procédures de contrôle qualité (PAQ, points d'arrêt/critiques) pour garantir la parfaite réalisation et la traçabilité des ouvrages.

## 2. Concepts clés
*   **Plans d'exécution (PEO)** : L'Entrepreneur doit dresser lui-même tous les plans d'exécution, de détail, d'atelier et de chantier nécessaires, les plans d'appel d'offre n'étant qu'indicatifs et non des PEO (DOE-Unknown-CCTP_Lot_02_Charpente_Metallique.pdf, p.6).
*   **DEXO (Dossier d’Exécution de l’Ouvrage)** : Regroupe le Cahier des Charges d'Exécution du Projet (CCE) et le Dossier Technique du Constructeur (DTC). Le CCE comprend le CCTP, les spécifications techniques détaillées complémentaires et la notice d'entretien/réparation. Le DEO (partie du CCE) inclut les plans de conception, notes de calcul et plans d'exécution (DOE-CTICM-CCTP_Structure_Acier.pdf, p.83).
*   **Dossier Qualité** : Se rapporte au système général de contrôle d'exécution, la classe d'exécution à considérer étant la plus sévère rencontrée dans l'ouvrage (EUR-BNCM_CNC2M-Recommandations_Execution_NF_EN_1090_2.pdf, p.14).
*   **PAQ (Plan d'Assurance Qualité)** : Les documents d'exécution du PAQ doivent permettre au maître d’œuvre de s’assurer de la faisabilité des opérations avec le personnel et matériel annoncés dans les délais (JUR-Ministere_Equipement-Cahier_Clauses_Techniques_Generales_Marches_Publics_Travaux.pdf, p.39). L'ensemble des documents originaux du PAQ doit être remis au maître d'œuvre à la réception des travaux (DOE-FABEM-Dossier_Projet_FABEM_3_Version_2.pdf, p.96).
*   **Points d'arrêt et Points critiques** : Mécanismes de contrôle d'exécution avec des documents associés à remettre au maître d'œuvre (points d'arrêt) ou à sa disposition (points critiques) (JUR-Ministere_Equipement-Cahier_Clauses_Techniques_Generales_Marches_Publics_Travaux.pdf, p.38).
*   **Exigences de conformité** : Doivent être constamment identifiées, communiquées et gérées pour la réussite du projet (FOR-Unknown-Fichier_Exercice_Non_Identifie.pdf, p.282).
*   **Vérifications ELU/ELS** : Les calculs doivent inclure les vérifications aux États Limites Ultimes (ELU) et aux États Limites de Service (ELS) pour la stabilité générale, la portance, la résistance structurale, la mobilisation du sol support et les déplacements (EUR-AFNOR-Eurocode_7_NF_P94-262.pdf, p.97).

## 3. Formules critiques
Les documents ne fournissent pas de formules explicites, mais insistent sur les vérifications aux états limites, fondamentales en construction métallique selon les Eurocodes.

*   **Principe général de vérification aux états limites (Eurocodes)** :
    $$E_d \le R_d$$
    où :
    *   $E_d$ : Effet de calcul des actions (ex: sollicitations en kN ou kNm).
    *   $R_d$ : Résistance de calcul de l'élément ou de la structure (ex: résistance en kN ou kNm).

    **Unités et conditions d'application** :
    *   $E_d$ et $R_d$ sont exprimés dans des unités cohérentes (ex: kN pour les efforts, kNm pour les moments).
    *   Cette formule s'applique pour les vérifications aux États Limites Ultimes (ELU) et aux États Limites de Service (ELS) pour s'assurer que les effets des actions ne dépassent pas la résistance ou la capacité de service de la structure (EUR-AFNOR-Eurocode_7_NF_P94-262.pdf, p.97).

## 4. Tableaux de synthèse

### Composants du Dossier d'Exécution de l'Ouvrage (DEXO)
| Composant | Description | Source |
|---|---|---|
| **CCE (Cahier des Charges d'Exécution)** | CCTP, spécifications techniques détaillées complémentaires, notice d'entretien et de réparation des ouvrages. | (DOE-CTICM-CCTP_Structure_Acier.pdf, p.83) |
| **DEO (Dossier d'Études de l'Ouvrage)** | Documents d'études du maître d'œuvre (plans de conception, synthèse, notices, visa) et du constructeur (notices, calculs et plans d'exécution). | (DOE-CTICM-CCTP_Structure_Acier.pdf, p.83) |

### Exigences de la Charte Graphique et Formats de Documents
| Type de document | Format | Compatibilité / Exigences | Source |
|---|---|---|---|
| Plans informatiques | .DWG | Compatible Autocad 2000 ou AllPlan (Charte graphique AIRBUS) | (DOE-Unknown-CCTP_Lot_02_Charpente_Metallique.pdf, p.6) |
| Plans | .DWG (en plus de 3 exemplaires papiers) | Selon les exigences de la charte graphique du CHBA | (GEN-CHBA-Charte_Graphique_DAO.pdf, p.15) |
| PV, tests, mesures, notes de calculs, croquis, schémas, fiches d’entretien | PDF (un fichier par matériel, par notice, par fiche) | Intégration dans la GMAO du CHBA | (GEN-CHBA-Charte_Graphique_DAO.pdf, p.15) |

### Exemples de Normes de Produits et Matériaux
| Norme | Description | Date de valeur | Source |
|---|---|---|---|
| NF A91-131 | Fils d'acier galvanisés à chaud - Spécification du revêtement de zinc | Avril 1962 | (GEN-FABEM-Guide_Protection_Betons_V2.pdf, p.325) |
| NF P94-093 | Sols : reconnaissance et essais – Détermination des références de compactage d’un matériau – Essai Proctor normal– Essai Proctor modifié | Octobre 1999 – Révision octobre 2014 et 2è tirage en avril 2015 | (GEN-FABEM-Guide_General_6_4_V2.pdf, p.27) |
| XP P94-105 | Sols : reconnaissance et essais – Contrôle de la qualité du compactage – Méthode au pénétromètre dynamique | Mai 2000 – Révision avril 2012 | (GEN-FABEM-Guide_General_6_4_V2.pdf, p.27) |

## 5. Points de vigilance
*   **Ne pas confondre plans d'appel d'offre et plans d'exécution** : Les plans d'appel d'offre sont indicatifs et ne doivent pas être considérés comme des plans d'exécution. L'Entrepreneur est responsable de l'établissement de tous les plans d'exécution, de détail, d'atelier et de chantier (DOE-Unknown-CCTP_Lot_02_Charpente_Metallique.pdf, p.6).
*   **Validation impérative avant exécution** : Tous les plans et notes de calcul justificatives doivent être soumis au visa du maître d’œuvre et du contrôleur technique *avant* le début de toute réalisation (DOE-Unknown-CCTP_Lot_02_Charpente_Metallique.pdf, p.6).
*   **Respect strict des chartes graphiques** : Le non-respect de la charte graphique (ex: AIRBUS, CHBA) entraînera un refus des plans et documents en l'état, avec une reprise obligatoire (DOE-Unknown-CCTP_Lot_02_Charpente_Metallique.pdf, p.6; GEN-CHBA-Charte_Graphique_DAO.pdf, p.15).
*   **Gestion des exigences de conformité** : Un manque de connaissance des exigences de conformité peut mener à l'échec du projet. Il est crucial de les identifier, communiquer et gérer constamment (FOR-Unknown-Fichier_Exercice_Non_Identifie.pdf, p.282).
*   **Dossier Qualité et Classe d'Exécution** : Pour le dossier qualité selon l'EN 1090-2, la classe d'exécution à considérer est la plus sévère rencontrée dans l'ouvrage (EUR-BNCM_CNC2M-Recommandations_Execution_NF_EN_1090_2.pdf, p.14).
*   **Remise des documents du PAQ** : L'ensemble des documents originaux constituant le PAQ doit être remis au maître d'œuvre au moment de la réception des travaux (DOE-FABEM-Dossier_Projet_FABEM_3_Version_2.pdf, p.96).

## 6. Références normatives
*   **NF EN 1090-2** : Recommandations pour l'exécution des structures en acier et en aluminium (EUR-BNCM_CNC2M-Recommandations_Execution_NF_EN_1090_2.pdf, p.14).
*   **NF P94-262 (Eurocode 7)** : Calcul géotechnique - Fondations sur pieux (EUR-AFNOR-Eurocode_7_NF_P94-262.pdf, p.97).
*   **NF A91-131** : Fils d'acier galvanisés à chaud - Spécification du revêtement de zinc (GEN-FABEM-Guide_Protection_Betons_V2.pdf, p.325).
*   **NF P94-093** : Sols : reconnaissance et essais – Détermination des références de compactage d’un matériau – Essai Proctor normal– Essai Proctor modifié (GEN-FABEM-Guide_General_6_4_V2.pdf, p.27).
*   **XP P94-105** : Sols : reconnaissance et essais – Contrôle de la qualité du compactage – Méthode au pénétromètre dynamique (GEN-FABEM-Guide_General_6_4_V2.pdf, p.27).
*   **NF P95-102** : Ouvrages d’art - Réparation et renforcement des ouvrages en béton et en maçonnerie – Béton projeté - Spécifications relatives à la technique et aux matériaux utilisés (GEN-FABEM-Guide_General_6_4_V2.pdf, p.15).
*   **Cahier des Clauses Techniques Générales (CCTG)** : Marches Publics de Travaux (JUR-Ministere_Equipement-Cahier_Clauses_Techniques_Generales_Marches_Publics_Travaux.pdf, p.38).

---
Vérifier la version en vigueur sur Kheox.fr

---

## Rapport d'Audit

En tant qu'ingénieur structures senior spécialisé en Eurocodes, voici l'audit de la fiche technique :

---

### Audit de la Fiche Technique

1.  **Exactitude normative** : ⚠️ **CORRECTIONS NÉCESSAIRES**
    *   **Référence Eurocode 7 (NF P94-262)** : La référence à l'Eurocode 7 (NF P94-262) pour les "vérifications ELU/ELS" et la "résistance structurale" des éléments métalliques est incorrecte. L'Eurocode 7 est spécifique au calcul géotechnique. Le principe général de vérification aux états limites ($E_d \le R_d$) est énoncé dans l'**EN 1990 (Base de calcul des structures)**. Pour les structures métalliques, les vérifications de résistance structurale sont détaillées dans l'**EN 1993 (Eurocode 3)**.
    *   **NF A91-131** : Cette norme est obsolète. Elle a été annulée et remplacée par la **NF EN ISO 1461** (Revêtements par galvanisation à chaud sur produits finis en fer et en acier - Spécifications et méthodes d'essai).

2.  **Formules** : ✅ **EXACTES**
    *   La formule $E_d \le R_d$ est correcte pour le principe général de vérification aux états limites.
    *   Les unités et conditions d'application sont exactes pour le principe général.
    *   *Correction nécessaire pour la référence associée à la formule, comme indiqué ci-dessus.*

3.  **Complétude** : ⚠️ **CORRECTIONS NÉCESSAIRES**
    *   **Manque de référence à l'Eurocode 3 (EN 1993)** : Pour une fiche sur les structures métalliques, l'absence de mention explicite de l'**EN 1993 (Eurocode 3)**, qui régit la conception et le calcul des structures en acier, est un manque critique. L'EN 1090-2 concerne l'exécution, mais la conception est sous EN 1993.
    *   **Terminologie DEXO/DEO** : La description du DEXO et du DEO est confuse. Le **DEXO (Dossier d'Exécution)** regroupe l'ensemble des documents nécessaires à l'exécution (plans d'exécution, notes de calcul du constructeur, PAQ, etc.). Le **DOE (Dossier des Ouvrages Exécutés)** est le dossier final remis au maître d'ouvrage après achèvement, incluant les plans "tel que construit". La fiche mélange ces concepts.
    *   **Critères de détermination des classes d'exécution (EN 1090-2)** : Bien que la fiche mentionne la classe d'exécution la plus sévère, elle ne détaille pas les critères (conséquences de la défaillance, type de sollicitation, complexité de fabrication) qui mènent au choix des classes EXC1 à EXC4, ce qui est fondamental pour l'application de l'EN 1090-2.
    *   **Tolérances d'exécution (EN 1090-2)** : L'EN 1090-2 définit des tolérances géométriques essentielles pour l'exécution. Leur absence dans les points de vigilance est un manque.
    *   **Qualifications du personnel de soudage et des modes opératoires (EN 1090-2)** : Ces points sont critiques pour la qualité des soudures et l'exécution des structures métalliques.
    *   **Contrôles Non Destructifs (CND)** : Les exigences de CND pour les soudures sont un aspect majeur de l'EN 1090-2 et devraient être mentionnées.

4.  **Verdict** : ⚠️ **CORRECTIONS NÉCESSAIRES**

---
**Corrections exactes à apporter :**

*   **Section 2. Concepts clés - Vérifications ELU/ELS** :
    *   Remplacer la référence "EUR-AFNOR-Eurocode_7_NF_P94-262.pdf, p.97" par "**EN 1990 (Base de calcul des structures)** et **EN 1993 (Calcul des structures en acier)**".
*   **Section 3. Formules critiques - Unités et conditions d'application** :
    *   Remplacer la référence "EUR-AFNOR-Eurocode_7_NF_P94-262.pdf, p.97" par "**EN 1990 (Base de calcul des structures)** et **EN 1993 (Calcul des structures en acier)**".
*   **Section 4. Tableaux de synthèse - Exemples de Normes de Produits et Matériaux** :
    *   Pour "NF A91-131", indiquer qu'elle est **obsolète** et a été remplacée par **NF EN ISO 1461**.
*   **Section 6. Références normatives** :
    *   Pour "NF P94-262 (Eurocode 7)", ajouter une note précisant que cette norme est spécifique au calcul géotechnique et ne couvre pas la conception structurale des éléments métalliques.
    *   Pour "NF A91-131", remplacer par **NF EN ISO 1461**.
    *   **Ajouter** : **NF EN 1993 (Eurocode 3)** : Calcul des structures en acier.
    *   **Ajouter** : **NF EN 1990 (Eurocode 0)** : Base de calcul des structures.

**Ajouts pour la complétude (à intégrer dans les sections pertinentes, ex: Points de vigilance ou Concepts clés) :**

*   **Classes d'exécution (EN 1090-2)** : Expliquer que le choix de la classe (EXC1 à EXC4) dépend des conséquences de la défaillance, du type de sollicitation et de la complexité de la fabrication, et qu'elle détermine les exigences de qualité pour la fabrication et le contrôle.
*   **Tolérances d'exécution (EN 1090-2)** : Rappeler l'importance du respect des tolérances géométriques spécifiées dans l'EN 1090-2 pour la fonctionnalité et la sécurité de la structure.
*   **Qualifications des soudeurs et des modes opératoires de soudage (QMOS)** : Souligner l'exigence de personnel qualifié et de QMOS validés selon l'EN ISO 15614-1 et l'EN ISO 9606-1.
*   **Contrôles Non Destructifs (CND)** : Mentionner l'importance des CND (visuel, ultrasons, ressuage, magnétoscopie) pour vérifier la qualité des soudures selon les exigences de l'EN 1090-2 et des spécifications du projet.

## Liens
- [[🏠 Home]] *(lien sagesse)*
- [[MOC_Operations]]
