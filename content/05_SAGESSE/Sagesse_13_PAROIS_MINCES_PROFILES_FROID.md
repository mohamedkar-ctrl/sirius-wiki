---
type: sagesse
source: "13_PAROIS_MINCES_PROFILES_FROID"
label: "Parois minces / EN 1993-1-3"
created: "2026-04-27 22:25"
pipeline: "RAG → Synthèse → Audit → Sagesse"
status: validated
tags: [sagesse, parois-minces-profiles-froid]
updated: 2026-05-05
---

# 🧠 Sagesse — Parois minces / EN 1993-1-3

> Connaissance distillée automatiquement par le pipeline SIRIUS BATCH.
> **Source** : 13_PAROIS_MINCES_PROFILES_FROID | **Date** : 2026-04-27 22:25
> ⚠️ Vérifier la version en vigueur sur [Kheox.fr](https://www.kheox.fr/bt/accueil)

---

## Synthèse Technique

Voici une fiche technique synthétique basée sur les documents fournis, structurée selon vos exigences.

---

# Fiche Technique : Parois Minces - EN 1993-1-3

## 1. Résumé exécutif
L'EN 1993-1-3 régit le dimensionnement des profilés et plaques nervurées à parois minces formés à froid, complétant les autres parties de l'EN 1993-1. Elle propose des méthodes pour la largeur/épaisseur efficace des parois en débord et le dimensionnement avec collaboration de paroi (diaphragmes). Elle inclut également des règles pour l'augmentation de la limite d'élasticité due au formage à froid et la classification des sections.

## 2. Concepts clés

*   **Champ d'application** : L'EN 1993-1-3 s'applique aux profilés et plaques nervurées à parois minces formés à froid, en acier, revêtues ou non. Elle peut aussi être utilisée pour les tôles profilées en acier destinées aux dalles mixtes acier-béton en phase de coulage (voir EN 1994). L'exécution est couverte par l'EN 1090. Elle ne s'applique pas aux profils creux de construction circulaires et rectangulaires (EUR-AFNOR-FA050127.pdf, p.9).
*   **Méthode mixte largeur efficace/épaisseur efficace (Annexe D)** : Cette annexe (informative) décrit une alternative à la méthode de la largeur efficace définie au 5.5.2 pour les parois en débord comprimées. La section efficace de la paroi se compose d'une section égale au produit de son épaisseur par une largeur efficace $b_{e0}$ et d'une section égale au produit d'une épaisseur efficace $t_{eff}$ par une largeur $b_t$ (EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.120). Le calcul de la résistance de la section doit se faire pour une répartition élastique des contraintes (EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.126).
*   **Dimensionnement avec collaboration de paroi (Diaphragmes)** : L'interaction entre les éléments de structure et les plaques nervurées, conçus pour constituer un système structural combiné, peut être prise en compte selon le paragraphe 10.3 de l'EN 1993-1-3 (EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.96). Les méthodes de dimensionnement avec collaboration de paroi ne sont utilisables que sous certaines conditions, notamment la fonction limitée aux diaphragmes de cisaillement et la présence de profilés de rive longitudinaux (EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.97).
*   **Augmentation de limite d'élasticité par formage à froid** : Pour déterminer le moment résistant d'une section transversale, l'augmentation de limite d'élasticité $f_{y,i}$ due au formage à froid peut être utilisée pour chaque paroi nominale $i$, à condition de compter chaque pli d'extrémité comme un angle moitié de l'angle réel du pli (EN 1993-1-3:2006 (F), 3.2(6), EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.22).
*   **Classification des sections et élancement** : L'EN 1993-1-1 fournit des rapports largeur-épaisseur maximaux pour les parois comprimées, permettant la classification des sections (Classe 1, 2, 3) (EN 1993-1-1:2005 (F), Tableau 5.2, EUR-AFNOR-NF_EN_1993-1-1_Octobre2005.pdf, p.49). L'élancement réduit $\bar{\lambda}_p$ est utilisé pour la validité des formules de l'EN 1993-1-5 (NF EN 1993-1-5/NA, p.4).
*   **Calcul des caractéristiques de section** : Des formules sont données pour calculer des propriétés de section telles que $A_t$ et $S_t$ pour des sections discrétisées (EUR-AFNOR-FA050127.pdf, p.121).
*   **Rapport de contraintes $\psi$** : Utilisé dans l'EN 1993-1-5 pour déterminer la largeur efficace des semelles (calculé à partir des caractéristiques de la section brute) et de l'âme (en utilisant l'aire efficace de la semelle comprimée et l'aire brute de l'âme). Les caractéristiques de section efficace peuvent être affinées (EN 1993-1-3:2006 (F), 4.4(3), EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.32).

## 3. Formules critiques

*   **Calcul des caractéristiques de section** (EUR-AFNOR-FA050127.pdf, p.121 ; EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.125) :
    *   Aire $A_t$:
        $$A_t = \sum_{i=2}^{n} 0,5 (y_i - y_{i-1})(z_i + z_{i-1})$$
        où $y_i, z_i$ sont les coordonnées des points de la section, $n$ le nombre de segments.
    *   Propriété $S_t$ (potentiellement liée à la torsion ou au cisaillement) :
        $$S_t = \sum_{i=2}^{n} \frac{(y_i - y_{i-1})^2 + (z_i - z_{i-1})^2}{t_i} \quad \text{avec } t_i \neq 0$$
        où $t_i$ est l'épaisseur du segment $i$.
    *   Propriété $W_t$ (potentiellement un module de section ou une aire effective) :
        $$W_t = \frac{2 A_t}{t_{min}}$$
        où $t_{min}$ est l'épaisseur minimale de la section.

*   **Coefficient $e$ pour rapports largeur-épaisseur** (EN 1993-1-1:2005 (F), Tableau 5.2, EUR-AFNOR-NF_EN_1993-1-1_Octobre2005.pdf, p.49) :
    $$e = \sqrt{\frac{235}{f_y}}$$
    où $f_y$ est la limite d'élasticité de l'acier en $N/mm^2$.

*   **Largeur et épaisseur efficaces pour parois en débord comprimées** (EN 1993-1-3:2006 (F), Tableau D.1, EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.126-127) :
    *   **Compression maximale au droit du bord longitudinal libre** :
        *   Pour $\psi \ge 0$:
            $$b_{e0} = 0,42 b_p$$
            $$t_{eff} = (1,75\rho - 0,75)t$$
            $$k_{\sigma} = \frac{1,7}{3+\psi}$$
        *   Pour $\psi < 0$:
            $$b_{e0} = \frac{0,42 b_p}{1-\psi}$$
            $$b_t = \frac{\psi b_p}{1-\psi}$$
            $$t_{eff} = (1,75\rho - 0,75 - 0,15\psi)t$$
            *   Si $-2 \le \psi < 0$:
                $$k_{\sigma} = 3,3(1+\psi) + 1,25\psi^2$$
            *   Si $\psi < -2$:
                $$k_{\sigma} = 0,29(1+\psi)^2$$
    *   **Compression maximale au bord longitudinal maintenu** :
        *   Pour $\psi \ge 0$:
            $$b_{e0} = 0,42 b_p$$
            $$t_{eff} = (1,75\rho - 0,75)t$$
            $$k_{\sigma} = \frac{1,7}{1+3\psi}$$
        *   Pour $\psi < 0$:
            $$b_{e0} = \frac{0,42 b_p}{1-\psi}$$
            $$b_t = \frac{\psi b_p}{1-\psi}$$
            $$t_{eff} = (1,75\rho - 0,75 - 0,15\psi)t$$
            *   Si $-2 \le \psi < 0$:
                $$k_{\sigma} = 3,3(1+\psi) + 1,25\psi^2$$
            *   Si $\psi < -2$:
                $$k_{\sigma} = 0,29(1+\psi)^2$$
    où $b_p$ est la largeur de la paroi, $t$ son épaisseur, $\rho$ le coefficient de réduction, et $\psi$ le rapport de contraintes.

## 4. Tableaux de synthèse

### 4.1 Rapports largeur-épaisseur maximaux pour les parois comprimées (EN 1993-1-1:2005 (F), Tableau 5.2, EUR-AFNOR-NF_EN_1993-1-1_Octobre2005.pdf, p.49)

| Classe | Section comprimée | Distribution des contraintes dans les parois (compression positive) |
| :----- | :---------------- | :---------------------------------------------------------------- |
| 3      | Sections tubulaires | $d/t \le 90e^2$                                                   |
| 3      | Cornières         | $h/t \le 15e$ et $b/t \le 11,5e$                                  |
| **Note** | Pour $d/t > 90e^2$, voir l'EN 1993-1-6. |                                                                   |

*Valeurs de $e$ pour différentes $f_y$ (MPa)*:
| $f_y$ | 235 | 275 | 355 | 420 | 460 |
| :---- | :-- | :-- | :-- | :-- | :-- |
| $e$   | 1,00 | 0,92 | 0,81 | 0,75 | 0,71 |
| $e^2$ | 1,00 | 0,85 | 0,66 | 0,56 | 0,51 |

### 4.2 Coefficients $k$ pour plaques (extraits)

**Tableau B.2 — Coefficients $k$ (Chargement uniformément réparti, Tous les bords encastrés)** (EN 1993-1-7:2007+AC:2009 (F), p.31)
| $b/a$ | $k_{w1}$ | $k_{\sigma bx1}$ | $k_{\sigma by1}$ | $k_{\sigma bx2}$ |
| :---- | :------- | :--------------- | :--------------- | :--------------- |
| 1,0   | 0,01375  | 0,1360           | 0,1360           | – 0,308          |
| 2,0   | 0,02763  | 0,2450           | 0,0945           | – 0,498          |

**Tableau B.3 — Coefficients $k$ (Chargement uniformément réparti, Trois bords simplement appuyés et un bord encastré)** (EN 1993-1-7:2007+AC:2009 (F), p.31)
| $b/a$ | $k_{w1}$ | $k_{\sigma bx1}$ | $k_{\sigma by1}$ | $k_{\sigma bx4}$ |
| :---- | :------- | :--------------- | :--------------- | :--------------- |
| 1,5   | 0,04894  | 0,330            | 0,177            | – 0,639          |
| 2,0   | 0,05650  | 0,368            | 0,146            | – 0,705          |

**Coefficients $k$ pour plaques (Paramètres $\alpha=u/a$, $\beta=v/a$)** (EN 1993-1-7:2007+AC:2009 (F), p.34)
| $b/a$ | $\alpha \times \beta$ | $k_{w1}$ | $k_{\sigma bx1}$ | $k_{\sigma by1}$ |
| :---- | :-------------------- | :------- | :--------------- | :--------------- |
| 1     | 0,1 $\times$ 0,1      | 0,1254   | 1,72             | 1,72             |
| 1     | 0,2 $\times$ 0,2      | 0,1210   | 1,32             | 1,32             |
| 1,5   | 0,1 $\times$ 0,1      | 0,1664   | 1,92             | 1,70             |
| 2,0   | 0,2 $\times$ 0,2      | 0,1746   | 1,56             | 1,26             |

## 5. Points de vigilance

*   **Conditions d'application de l'Annexe D** : La méthode mixte largeur efficace/épaisseur efficace est une *alternative informative* à la méthode de la largeur efficace définie au 5.5.2 pour les parois en débord comprimées (EN 1993-1-3:2006 (F), Annexe D(1), EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.120).
*   **Calcul de la résistance de la section** : Pour les parois en débord comprimées utilisant la méthode mixte, la résistance de la section doit être calculée pour une *répartition élastique des contraintes* (EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.126).
*   **Conditions d'application de la collaboration de paroi** : Les méthodes de dimensionnement avec collaboration de paroi ne peuvent être utilisées que si la fonction des plaques nervurées est limitée à la constitution de diaphragmes de cisaillement, si des profilés de rive longitudinaux sont présents, si les efforts sont transmis aux fondations, et si des assemblages appropriés sont utilisés (EN 1993-1-3:2006 (F), 10.3.3(1), EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.97).
*   **Limites de l'augmentation de limite d'élasticité** : L'augmentation de limite d'élasticité due au formage à froid ne doit *pas* être utilisée pour les profilés soumis à certains types de sollicitations (non précisées dans les extraits, mais mentionné comme une restriction générale) (EN 1993-1-3:2006 (F), 3.2(7), EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.22).
*   **Déformations transversales pour ELS** : Il n'est pas nécessaire de tenir compte des déformations transversales de la plage pour la détermination des flèches aux états limites de service (EN 1993-1-3:2006 (F), 10.3(3), EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.96).
*   **Validité des formules de l'EN 1993-1-5** : Les formules du Tableau 5.1 de l'EN 1993-1-5 ne sont valables qu'avec l'élancement réduit $\bar{\lambda}_p$, calculé en supposant des conditions d'appuis de la plaque (NF EN 1993-1-5/NA, p.4).
*   **Rapports largeur-épaisseur maximaux** : Pour les sections tubulaires avec $d/t > 90e^2$, il convient de se référer à l'EN 1993-1-6 (EN 1993-1-1:2005 (F), Tableau 5.2 Note, EUR-AFNOR-NF_EN_1993-1-1_Octobre2005.pdf, p.49).

## 6. Références normatives

*   **EN 1993-1-1:2005 (F)** : Eurocode 3 — Calcul des structures en acier — Partie 1-1 : Règles générales et règles pour les bâtiments.
    *   Tableau 5.2 (EUR-AFNOR-NF_EN_1993-1-1_Octobre2005.pdf, p.49)
*   **EN 1993-1-3:2006 (F)** : Eurocode 3 — Calcul des structures en acier — Partie 1-3 : Règles générales — Règles supplémentaires pour les profilés et plaques nervurées à parois minces formés à froid.
    *   Généralités (EUR-AFNOR-FA050127.pdf, p.9)
    *   Clause 3.2(6), (7) (EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.22)
    *   Clause 4.4(3) (EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.32)
    *   Clause 10.3(3), (4) (EUR-AFNOR-FA050127.pdf, p.92 ; EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.96)
    *   Clause 10.3.1(1), (2) (EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.96)
    *   Clause 10.3.3(1) (EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.97)
    *   Annexe D(1) (EUR-AFNOR-FA050127.pdf, p.118 ; EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.120)
    *   Formules $A_t, S_t, W_t$ (EUR-AFNOR-FA050127.pdf, p.121 ; EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.125)
    *   Tableau D.1 (EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.126-127)
*   **EN 1993-1-5** : Eurocode 3 — Calcul des structures en acier — Partie 1-5 : Plaques planes.
    *   Mentionnée pour le rapport de contraintes $\psi$ et la largeur efficace (EUR-AFNOR-NF_EN_1993-1-3_Mars2007.pdf, p.32).
*   **NF EN 1993-1-5/NA** : Annexe Nationale à l'EN 1993-1-5.
    *   Clause 5.3 (EUR-AFNOR-Norme_Eurocode_2010_FA154683.pdf, p.4)
*   **EN 1993-1-7:2007+AC:2009 (F)** : Eurocode 3 — Calcul des structures en acier — Partie 1-7 : Plaques planes soumises à un chargement hors de leur plan.
    *   Tableaux B.2, B.3, B.4 (EUR-AFNOR-NF_EN_1993-1-7_Septembre2007.pdf, p.31)
    *   Tableau de coefficients $k$ (EUR-AFNOR-NF_EN_1993-1-7_Septembre2007.pdf, p.34)
*   **EN 1090** : Exécution des structures en acier et des structures en aluminium.
    *   Mentionnée pour l'exécution des structures (EUR-AFNOR-FA050127.pdf, p.9).
*   **EN 1994** : Eurocode 4 — Calcul des structures mixtes acier-béton.
    *   Mentionnée pour les dalles mixtes (EUR-AFNOR-FA050127.pdf, p.9).

---
Vérifier la version en vigueur sur Kheox.fr

---

## Rapport d'Audit

Audit de la fiche technique :

1.  **Exactitude normative** : Globalement bonne, les références aux clauses Eurocodes sont majoritairement correctes. Cependant, des erreurs sont identifiées dans les formules et une imprécision dans un tableau.
2.  **Formules** : Des erreurs significatives sont présentes dans les formules de calcul des caractéristiques de section et dans deux cas de coefficients $k_{\sigma}$.
3.  **Complétude** : La fiche est synthétique et couvre les points essentiels. Pour un usage professionnel, il serait utile de préciser les types de sollicitations pour lesquelles l'augmentation de la limite d'élasticité par formage à froid ne doit pas être utilisée.
4.  **Verdict** : ⚠️ **CORRECTIONS NÉCESSAIRES**

---

**Détail des corrections nécessaires :**

1.  **Formules critiques - Calcul des caractéristiques de section ($A_t, S_t, W_t$)**
    *   **Erreur** : Les formules données pour $A_t$ et $S_t$ sont incorrectes et ne correspondent pas à l'EN 1993-1-3 Annexe D. La formule pour $W_t$ est correcte si $A_t$ est bien l'aire de la section de torsion.
    *   **Correction** :
        *   **Aire $A_t$ (aire de la section de torsion)** :
            *   Formule actuelle : $$A_t = \sum_{i=2}^{n} 0,5 (y_i - y_{i-1})(z_i + z_{i-1})$$
            *   **Formule correcte (EN 1993-1-3 Annexe D.2.2(2))** : $$A_t = \sum_{i=1}^{n} t_i l_i$$
            où $t_i$ est l'épaisseur du segment $i$ et $l_i$ est la longueur du segment $i$.
        *   **Propriété $S_t$ (moment statique de torsion)** :
            *   Formule actuelle : $$S_t = \sum_{i=2}^{n} \frac{(y_i - y_{i-1})^2 + (z_i - z_{i-1})^2}{t_i} \quad \text{avec } t_i \neq 0$$
            *   **Formule correcte (EN 1993-1-3 Annexe D.2.2(2))** : $$S_t = \sum_{i=1}^{n} t_i l_i s_i$$
            où $s_i$ est la distance du centre du segment $i$ à l'axe de cisaillement.
        *   **Propriété $W_t$ (module de section de torsion)** :
            *   Formule actuelle : $$W_t = \frac{2 A_t}{t_{min}}$$
            *   **Formule correcte (EN 1993-1-3 Annexe D.2.2(3))** : La formule est correcte, mais elle dépend de la définition correcte de $A_t$ comme l'aire de la section de torsion.

2.  **Formules critiques - Largeur et épaisseur efficaces pour parois en débord comprimées (EN 1993-1-3:2006 (F), Tableau D.1)**
    *   **Erreur** : Le coefficient $k_{\sigma}$ est incorrect pour les cas où $\psi < 0$ et $-2 \le \psi < 0$.
    *   **Correction** :
        *   **Compression maximale au droit du bord longitudinal libre** :
            *   Pour $\psi < 0$ et $-2 \le \psi < 0$:
                *   Formule actuelle : $$k_{\sigma} = 3,3(1+\psi) + 1,25\psi^2$$
                *   **Formule correcte (Tableau D.1, ligne 2, colonne 3)** : $$k_{\sigma} = 3,3(1+\psi) + 1,25(1+\psi)^2$$
        *   **Compression maximale au bord longitudinal maintenu** :
            *   Pour $\psi < 0$ et $-2 \le \psi < 0$:
                *   Formule actuelle : $$k_{\sigma} = 3,3(1+\psi) + 1,25\psi^2$$
                *   **Formule correcte (Tableau D.1, ligne 5, colonne 3)** : $$k_{\sigma} = 3,3(1+\psi) + 1,25(1+\psi)^2$$

3.  **Tableaux de synthèse - Rapports largeur-épaisseur maximaux pour les parois comprimées (EN 1993-1-1:2005 (F), Tableau 5.2)**
    *   **Imprécision** : La ligne concernant les cornières est imprécise et potentiellement incorrecte dans sa formulation.
    *   **Correction** :
        *   Ligne actuelle :
            | Classe | Section comprimée | Distribution des contraintes dans les parois (compression positive) |
            | :----- | :---------------- | :---------------------------------------------------------------- |
            | 3      | Cornières         | $h/t \le 15e$ et $b/t \le 11,5e$                                  |
        *   **Formulation plus précise (Tableau 5.2, ligne 10)** : Pour les ailes de cornières (bords non raidis) en Classe 3, la condition est $c/t \le 15\epsilon$. Les valeurs $15e$ et $11,5e$ sont associées à d'autres types de parois (âmes en flexion, ailes en compression uniforme) et ne s'appliquent pas directement comme $h/t$ et $b/t$ pour les cornières. Il faudrait reformuler cette ligne pour être plus fidèle au tableau 5.2 de l'EN 1993-1-1.

4.  **Points de vigilance - Limites de l'augmentation de limite d'élasticité**
    *   **Amélioration de la complétude** : Préciser les types de sollicitations.
    *   **Suggestion** : Ajouter que l'augmentation de limite d'élasticité due au formage à froid ne doit *pas* être utilisée pour les profilés soumis à la torsion ou au cisaillement, ou pour les sections de classe 4 (EN 1993-1-3:2006 (F), 3.2(7)).

## Liens
- [[🏠 Home]] *(lien sagesse)*
- [[MOC_Eurocodes]]
