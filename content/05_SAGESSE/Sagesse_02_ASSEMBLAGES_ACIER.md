---
type: sagesse
source: "02_ASSEMBLAGES_ACIER"
label: "Assemblages Acier (boulonnerie, soudure, CBFEM)"
created: "2026-04-27 21:32"
pipeline: "RAG → Synthèse → Audit → Sagesse"
status: validated
tags: [sagesse, assemblages-acier]
updated: 2026-05-05
---

# 🧠 Sagesse — Assemblages Acier (boulonnerie, soudure, CBFEM)

> Connaissance distillée automatiquement par le pipeline SIRIUS BATCH.
> **Source** : 02_ASSEMBLAGES_ACIER | **Date** : 2026-04-27 21:32
> ⚠️ Vérifier la version en vigueur sur [Kheox.fr](https://www.kheox.fr/bt/accueil)

---

## Synthèse Technique

En tant qu'expert en construction métallique et structures, voici une fiche technique synthétique basée sur les documents fournis :

---

# Fiche Technique Synthétique : Assemblages Acier (boulonnerie, soudure, CBFEM)

## 1. Résumé exécutif
Ce document synthétise les principes de conception des assemblages acier, couvrant les boulons (résistance au moment, types), les soudures (paramètres de gorge, aciers) et les assemblages hybrides. Il aborde également les exigences de ductilité, les boulons précontraints et les aspects d'exécution et de corrosion.

## 2. Concepts clés
*   **Moment résistant des assemblages boulonnés** : Le calcul du moment plastique ultime pour les assemblages boulonnés en acier par platine d'about débordante est défini par une formule spécifique incluant un facteur de correction de l'assemblage et la résistance à la traction du boulon [EUR-Institut_Acier-Manuel_Conception_Structures_2014.pdf, p.228]. Une formule simplifiée de Rölle est applicable pour les platines d'about non-débordantes [EUR-Institut_Acier-Manuel_Conception_Structures_2014.pdf, p.226].
*   **Assemblages mixtes acier-béton** : Si la résistance à la traction de l'armature insérée dans la largeur effective de la dalle est supérieure à la capacité de charge théorique de la rangée de boulons supérieure, l'âme de la colonne en compression doit être vérifiée séparément [EUR-Institut_Acier-Manuel_Conception_Structures_2014.pdf, p.228].
*   **Modèles analytiques pour profils creux** : Le modèle analytique de l’anneau a servi de base pour déterminer les formules fondamentales de résistance des assemblages, notamment pour les assemblages en X et K, basées sur la contrainte de la membrure [EUR-CIDECT-Profis_Creux_Applications_Structurelles.pdf, p.87, 88].
*   **Ductilité minimale** : Des exigences minimales de ductilité sont requises pour tous les assemblages en acier et mixtes à l'ELU et à l'ELS, avec des procédures d'évaluation de la résistance de dimensionnement au cisaillement pour les assemblages articulés [EUR-Institut_Acier-Manuel_Conception_Structures_2014.pdf, p.26, 233].
*   **Boulons précontraints à serrage contrôlé** : Leur utilisation est imposée pour le dimensionnement parasismique des structures acier et mixtes non et faiblement dissipatives (classe de ductilité DCL avec q=2). Ils sont également recommandés en cas de chocs, chargements rapides ou vibrations, et lorsque la maîtrise des jeux est un enjeu [EUR-CMI-2013_5.pdf, p.23].
*   **Assemblages hybrides acier mince/laminé à chaud** : Les éléments primaires laminés à chaud sont généralement boulonnés (16 ou 20 mm de diamètre, conçus pour le cisaillement). Les vis sont utilisées avec des petits trous préperçés. Les soudures sont rarement utilisées avec des éléments minces en acier en raison des risques pour la santé liés aux émanations de zinc [EUR-AuteurInconnu-AvantProjet_Construction_Hybride_Acier_Mince_Laminé.pdf, p.7], [EUR-SS-Construction_Hybride_Acier_Fin_Laminé.pdf, p.7].
*   **Exécution des structures métalliques** : Régie par un ensemble de normes françaises (série P 22-XXX) et européennes (EN 1090), couvrant les règles de conception des assemblages et leur exécution [EUR-BulletinOuvragesMetalliques-ExecutionStructuresMetalliques_EN1090.pdf, p.2].
*   **Corrosion et revêtements** : Les surfaces en contact dans les assemblages par friction (boulons HR à serrage contrôlé) doivent être décapées. Des mesures de précaution (ex: rondelles isolantes) sont à adopter si des métaux différents sont employés [EUR-CMI-2010_5.pdf, p.44].

## 3. Formules critiques
*   **Moment plastique ultime des assemblages boulonnés par platine d'about débordante** [EUR-Institut_Acier-Manuel_Conception_Structures_2014.pdf, p.228] :
    $M_{1,2,34} = 0,9 \cdot n_B \cdot F_{5,34} \cdot k_1^* \cdot z$
    *   Unités : $M$ en N.mm (ou kN.m), $n_B$ (sans unité), $F$ en N, $k_1^*$ (sans unité), $z$ en mm.
    *   Conditions d'application : Assemblages boulonnés en acier par platine d'about débordante.

*   **Facteur de correction de l’assemblage** [EUR-Institut_Acier-Manuel_Conception_Structures_2014.pdf, p.228] :
    $k_1^* = 0,75 \cdot 1,95 \cdot \left( \frac{t_{pl} \cdot t_{wc} \cdot f_y}{m \cdot m_p \cdot f_{yb}} \right)^{0,9} \le 1,0$
    *   Unités : $t_{pl}, t_{wc}, m, m_p$ en mm; $f_y, f_{yb}$ en N/mm². $k_1^*$ (sans unité).
    *   Conditions d'application : Pour le calcul du moment résistant des assemblages boulonnés.

*   **Résistance à la traction du boulon** [EUR-Institut_Acier-Manuel_Conception_Structures_2014.pdf, p.228] :
    $F_{5,34} = 0,9 \cdot \frac{f_{yb} \cdot A_s}{\gamma_{M2}}$
    *   Unités : $F$ en N, $f_{yb}$ en N/mm², $A_s$ en mm², $\gamma_{M2}$ (sans unité).
    *   Conditions d'application : Résistance de dimensionnement à la traction d'un boulon.

*   **Formule simplifiée de Rölle pour assemblage non-débordant** [EUR-Institut_Acier-Manuel_Conception_Structures_2014.pdf, p.226] :
    $M_{F,=@,C4} = n_m \cdot F_{3,C4} \cdot k_F \cdot \alpha \cdot z$
    *   Unités : $M$ en N.mm (ou kN.m), $n_m$ (sans unité), $F$ en N, $k_F, \alpha$ (sans unité), $z$ en mm.
    *   Conditions d'application : Assemblage boulonné en acier par platine d'about non-débordante.

## 4. Tableaux de synthèse

**Dimension forfaitaire de la gorge de chaque cordon pour assemblages double-cordon en T transmettant seulement un effort de cisaillement** [ASS-SourceInconnue-Resistance_Assemblages_Soude.pdf, p.11, 13]

**Tableau 4-a : Aciers de la norme NF EN 10025 et NF EN 10113 (pour 3 mm $\le t \le$ 16 mm)**

| Désignation | fy (N/mm²) | fu (N/mm²) | γM0 (*) | γMw | βw | min(a)/t (**) |
| :---------- | :--------- | :--------- | :------ | :-- | :-- | :------------ |
| S235        | 235        | 340        | 1,10    | 1,25 | 0,80 | 0,314         |
| S275        | 275        | 410        | 1,10    | 1,30 | 0,85 | 0,337         |
| S355        | 355        | 490        | 1,10    | 1,35 | 0,90 | 0,400         |

**Tableau 4-b : Aciers de la norme NF EN 10025 et NF EN 10113 (pour 3 mm $\le t \le$ 16 mm)**

| Désignation | fy (N/mm²) | fu (N/mm²) | γM0 (*) | γMw | βw | min(a)/t (**) |
| :---------- | :--------- | :--------- | :------ | :-- | :-- | :------------ |
| S275        | 275        | 370        | 1,10    | 1,30 | 0,85 | 0,528         |
| S355        | 355        | 470        | 1,10    | 1,35 | 0,90 | 0,590         |
| S420        | 420        | 520        | 1,10    | 1,25 | 1,00 | 0,649         |
| S460        | 460        | 550        | 1,10    | 1,25 | 1,00 | 0,672         |

**Tableau 4-c : Aciers de la norme NF EN 10025 et NF EN 10113 (pour 16 mm $\le t \le$ 40 mm)**

| Désignation | fy (N/mm²) | fu (N/mm²) | γM0 (*) | γMw | βw | min(a)/t (**) |
| :---------- | :--------- | :--------- | :------ | :-- | :-- | :------------ |
| S275        | 265        | 370        | 1,10    | 1,30 | 0,85 | 0,509         |
| S355        | 345        | 470        | 1,10    | 1,35 | 0,90 | 0,573         |
| S420        | 400        | 520        | 1,10    | 1,25 | 1,00 | 0,618         |
| S460        | 440        | 550        | 1,10    | 1,25 | 1,00 | 0,643         |

(*) Lorsque γM0 = 1,0, il faut augmenter la dimension de la gorge de 10%.
(**) Les valeurs de fy et fu sont prises égales aux valeurs des normes NF EN 10025 et NF EN 10113 en fonction de l'épaisseur de la pièce assemblée. Pour les aciers S420 et S460, les valeurs ont été calculées en se référant à l'Annexe D de l'Eurocode 3 [ASS-SourceInconnue-Resistance_Assemblages_Soude.pdf, p.13].

## 5. Points de vigilance
*   **Vérification de l'âme de la colonne** : Pour les assemblages mixtes acier-béton, si la résistance à la traction de l'armature est supérieure à la capacité des boulons, l'âme de la colonne en compression doit être vérifiée séparément [EUR-Institut_Acier-Manuel_Conception_Structures_2014.pdf, p.228].
*   **Ductilité des assemblages** : L'application des règles de résistance axiale ultime est strictement limitée aux assemblages satisfaisant aux exigences minimales de ductilité [EUR-Institut_Acier-Manuel_Conception_Structures_2014.pdf, p.233].
*   **Tests expérimentaux et modèles théoriques** : Il est essentiel de réfléchir aux conditions d’appuis et de charge pour éviter les effets de bridage lors des tests. Les modèles théoriques doivent être comparés aux données expérimentales, avec une prise en compte correcte des éléments et du maillage [EUR-CIDECT-Profis_Creux_Applications_Structurelles.pdf, p.87].
*   **Boulons non précontraints** : À déconseiller lorsque la maîtrise des jeux dans l’assemblage est un enjeu (ex: poutres-treillis, pannes en continuité totale) [EUR-CMI-2013_5.pdf, p.23].
*   **Soudage d'acier mince galvanisé** : Les soudures sont rarement utilisées avec des éléments minces en acier en raison des risques pour la santé qu'occasionnent les émanations de gaz émises lorsque le zinc est brûlé [EUR-SS-Construction_Hybride_Acier_Fin_Laminé.pdf, p.7].
*   **Préparation des surfaces** : Pour les assemblages par boulons en acier haute résistance à serrage contrôlé, les surfaces en contact dans les assemblages par friction doivent être décapées [EUR-CMI-2010_5.pdf, p.44].
*   **Compatibilité des matériaux** : En cas d'emploi de métaux différents, des mesures de précaution (ex: rondelles isolantes) sont à adopter pour prévenir la corrosion [EUR-CMI-2010_5.pdf, p.44].
*   **Conception des boulons pour éléments minces** : Les boulons (généralement 16 ou 20 mm de diamètre) pour assembler des éléments minces en acier doivent être conçus pour agir en cisaillement plutôt qu'en traction, afin d'éviter la déformation des éléments minces [EUR-AuteurInconnu-AvantProjet_Construction_Hybride_Acier_Mince_Laminé.pdf, p.7].

## 6. Références normatives
*   **Eurocode 3** [EUR-CMI-2014_2.pdf, p.11], [ASS-SourceInconnue-Resistance_Assemblages_Soude.pdf, p.13]
*   **NF EN 10025** (Aciers de construction) [ASS-SourceInconnue-Resistance_Assemblages_Soude.pdf, p.13]
*   **NF EN 10113** (Aciers de construction soudables à grains fins) [ASS-SourceInconnue-Resistance_Assemblages_Soude.pdf, p.13]
*   **NF EN ISO 12944-3** (Peintures et vernis - Anticorrosion des structures en acier par systèmes de peinture - Partie 3: Principes de conception) [EUR-CMI-2010_5.pdf, p.44]
*   **Normes françaises série P 22-XXX** (ex: P 22-41X – Assemblages rivés, P 22-410 – Dispositions constructives Calcul des rivets, P 22-411 – Exécution des assemblages, P 22-43X – Assemblages boulonnés) [EUR-BulletinOuvragesMetalliques-ExecutionStructuresMetalliques_EN1090.pdf, p.2]
*   **EN 1090** (Exécution des structures en acier et des structures en aluminium) [EUR-BulletinOuvragesMetalliques-ExecutionStructuresMetalliques_EN1090.pdf, p.2]
*   **Document CNC2M N0035** (Recommandations pour le dimensionnement parasismique des structures acier et mixtes non et faiblement dissipatives) [EUR-CMI-2013_5.pdf, p.23]

---
Vérifier la version en vigueur sur Kheox.fr

---

## Rapport d'Audit

Audit de la Fiche Technique Synthétique : Assemblages Acier

**Verdict :** ⚠️ CORRECTIONS NÉCESSAIRES

---

**1. Exactitude normative & 2. Formules :**

*   **Concepts clés - Exécution des structures métalliques :**
    *   **Correction nécessaire :** Les normes françaises série P 22-XXX sont obsolètes pour la conception et l'exécution de nouvelles structures en Europe. Il est impératif de préciser que l'EN 1090 est la norme de référence actuelle. Les P 22-XXX peuvent être mentionnées comme références historiques ou pour des structures existantes, mais pas comme normes de conception/exécution pour de nouveaux projets.

*   **Formules critiques - Moment plastique ultime des assemblages boulonnés par platine d'about débordante & Facteur de correction de l’assemblage :**
    *   **Correction nécessaire :** Les formules $M_{1,2,34} = 0,9 \cdot n_B \cdot F_{5,34} \cdot k_1^* \cdot z$ et $k_1^* = 0,75 \cdot 1,95 \cdot \left( \frac{t_{pl} \cdot t_{wc} \cdot f_y}{m \cdot m_p \cdot f_{yb}} \right)^{0,9} \le 1,0$ ne sont pas des formules directes de l'EN 1993-1-8 (Eurocode 3, Partie 1-8: Conception des assemblages). Elles semblent issues d'un guide spécifique ("Manuel de Conception des Structures") qui peut simplifier ou adapter les principes. Pour un usage professionnel conforme aux Eurocodes, il est essentiel de se référer à la méthode des composants de l'EN 1993-1-8, qui est plus détaillée et prend en compte les différents modes de défaillance. Ces formules, si elles sont utilisées, doivent être clairement identifiées comme des simplifications issues d'un guide et leur domaine de validité doit être explicité par rapport à l'EN 1993-1-8. Le coefficient 0.9 dans la première formule et le produit $0.75 \cdot 1.95 = 1.4625$ dans la seconde sont inhabituels et nécessitent une justification claire.

*   **Formules critiques - Résistance à la traction du boulon :**
    *   **Erreur majeure :** La formule donnée est $F_{5,34} = 0,9 \cdot \frac{f_{yb} \cdot A_s}{\gamma_{M2}}$.
    *   **Correction exacte :** La résistance de dimensionnement à la traction d'un boulon est basée sur la **résistance à la rupture** ($f_{ub}$), et non sur la limite d'élasticité ($f_{yb}$). Selon l'EN 1993-1-8, clause 3.4.1(1) et Tableau 3.4, la formule correcte est :
        $F_{t,Rd} = \frac{k_2 \cdot f_{ub} \cdot A_s}{\gamma_{M2}}$
        où $k_2 = 0.9$ pour les classes de boulons 4.6, 5.6, 8.8 et 10.9 (et 0.85 pour 4.8, 5.8, 6.8).

*   **Formules critiques - Formule simplifiée de Rölle pour assemblage non-débordant :**
    *   **Correction nécessaire :** Similaire aux formules précédentes, $M_{F,=@,C4} = n_m \cdot F_{3,C4} \cdot k_F \cdot \alpha \cdot z$ est une formule très spécifique qui ne correspond pas directement aux méthodes de l'EN 1993-1-8. Elle doit être présentée avec le même niveau de prudence et de contextualisation que les autres formules de moment.

*   **Tableaux de synthèse - Valeurs de $\gamma_{Mw}$ :**
    *   **Erreur :** Les valeurs de $\gamma_{Mw}$ sont incorrectes pour certains aciers selon l'EN 1993-1-8, Tableau 2.1.
    *   **Correction exacte :**
        *   Pour S275: $\gamma_{Mw}=1.25$ (au lieu de 1.30)
        *   Pour S355: $\gamma_{Mw}=1.25$ (au lieu de 1.35)
        *   Pour S420: $\gamma_{Mw}=1.35$ (au lieu de 1.25)
        *   Les valeurs pour S235 et S460 sont correctes (1.25).

*   **Tableaux de synthèse - Note sur $\gamma_{M0}$ :**
    *   **Correction nécessaire :** La note "(*) Lorsque γM0 = 1,0, il faut augmenter la dimension de la gorge de 10%." est une règle spécifique qui n'est pas directement normative dans l'EN 1993-1-8. Elle doit être justifiée par une référence claire ou expliquée comme une recommandation spécifique pour un cas particulier.

**3. Complétude :**

*   **Références des formules :** Les références aux formules critiques sont toutes des documents non normatifs ("EUR-Institut_Acier-Manuel_Conception_Structures_2014.pdf"). Pour un usage professionnel, il est crucial de citer les clauses spécifiques de l'**EN 1993-1-8** pour les méthodes de calcul des assemblages. Les guides peuvent être des compléments, mais ne remplacent pas la norme.
*   **Tableaux de synthèse - Source :** La source "ASS-SourceInconnue-Resistance_Assemblages_Soude.pdf" est inacceptable pour un document professionnel. Une source normative (EN 1993-1-8) ou un guide technique reconnu et daté doit être fourni.
*   **Tableaux de synthèse - Colonne $\min(a)/t$ :** Cette colonne n'est pas une valeur normative directe. Son interprétation et son application nécessitent le contexte de calcul (hypothèses, objectifs de dimensionnement, etc.) qui est manquant.
*   **Références normatives - Eurocode 3 :** La référence "Eurocode 3" est trop générique. Il faut spécifier la partie pertinente, à savoir **EN 1993-1-8** pour les assemblages.
*   **Références normatives - Document CNC2M N0035 :** Il est important de distinguer les normes (EN) des documents de recommandation ou guides techniques. Le CNC2M N0035 est une recommandation, pas une norme Eurocode.

**4. Verdict :**

La fiche contient des erreurs normatives significatives dans les formules (notamment la résistance à la traction des boulons et les coefficients $\gamma_{Mw}$), des problèmes de complétude (sources inconnues, manque de contexte pour des formules spécifiques) et des imprécisions dans les références normatives. Elle nécessite des corrections substantielles avant de pouvoir être utilisée professionnellement.

## Liens
- [[🏠 Home]] *(lien sagesse)*
- [[MOC_Assemblages]]
