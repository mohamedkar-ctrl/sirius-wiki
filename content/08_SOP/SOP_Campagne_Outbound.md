---
aliases: [SOP Outbound, Campagne Cold Email, Prospection Email]
tags: [sop, outbound, cold-email, lemlist, prospection]
type: procedure
status: validated
created: 2026-05-06
updated: 2026-05-06
lien_sop: "[[MOC_Prospection]]"
source: "Formation Lemlist L5 + Coaching Anaïs Benkelaï (06/05/2026)"
---

# 📋 SOP — Lancement Campagne Outbound (Cold Email + LinkedIn)

> Procédure standard pour créer et lancer une campagne de prospection multicanale.
> Agent responsable : #9 Commercial | Validation : Dirigeant

---

## Prérequis (vérifier AVANT tout lancement)

- [ ] Domaine de prospection configuré (SPF/DKIM/DMARC)
- [ ] Score mail-tester.com ≥ 8/10
- [ ] Lemwarm actif depuis ≥ 14 jours
- [ ] Profil LinkedIn optimisé (bannière, headline, about)
- [ ] Templates d'emails validés par le dirigeant
- [ ] Base de leads enrichie et vérifiée

---

## Étape 1 — Préparation des leads (J-7)

### 1.1 Sourcing
| Source | Action | Output |
|--------|--------|--------|
| CSV existant | Importer depuis `Marketing/suivi_prospection_500.csv` | Leads bruts |
| Pappers | Recherche par NAF + CA + localisation | SIREN, dirigeant |
| Apollo.io | Enrichissement emails professionnels | Emails vérifiés |
| Lemlist Lead Finder | Recherche par persona | Leads enrichis |
| Pipeline n8n | Alertes recrutement automatiques | Leads "hot" |

### 1.2 Nettoyage
- Dédoublonner par email ET par entreprise
- Exclure les concurrents (liste noire : `Marketing/blacklist.csv`)
- Exclure les clients existants (vérifier dans Odoo)
- Vérifier les emails avec le vérificateur Lemlist intégré
- Objectif : **taux de bounce < 2%**

### 1.3 Segmentation
| Tier | Critère | Volume max | Séquence |
|------|---------|------------|----------|
| **A — Hot** | Recrute + CA > 5M€ | 10-15 | Email + LinkedIn + Appel |
| **B — Warm** | CA > 1M€ + projets actifs | 25-30 | Email + LinkedIn |
| **C — Cold** | Correspond au persona | 40-50 | Email seul |

### 1.4 Personnalisation
Pour chaque lead Tier A, préparer :
- [ ] Ice breaker personnalisé (projet récent, post LinkedIn, actualité)
- [ ] Variable `{{company_insight}}` renseignée
- [ ] Variable `{{project_reference}}` (si applicable)

---

## Étape 2 — Création de la campagne Lemlist (J-3)

### 2.1 Nommer la campagne
Format : `[PERSONA]_[TIER]_[DATE]_[VERSION]`
Exemple : `PV_DEV_TIER_A_20260520_V1`

### 2.2 Importer les leads
1. Importer le CSV dans Lemlist
2. Mapper les colonnes (email, prénom, nom, entreprise, variables custom)
3. Vérifier la prévisualisation (merge tags)

### 2.3 Construire la séquence

**Séquence multichannel (Tier A) :**
```
J0  — 📧 Email #1 : Proposition de valeur
J2  — 👤 LinkedIn : Visite profil
J3  — 🤝 LinkedIn : Demande de connexion
J5  — 📧 Email #2 : Follow-up avec cas d'usage
J7  — 💬 LinkedIn : Message (si connexion acceptée)
        └── IF non accepté → continuer par email
J10 — 📧 Email #3 : Ressource gratuite (FT)
J12 — 📧 Email #4 : Breakup email
J14 — 📞 Appel téléphonique (si engagement détecté)
```

**Séquence email seul (Tier C) :**
```
J0  — 📧 Email #1 : Proposition de valeur
J4  — 📧 Email #2 : Follow-up
J8  — 📧 Email #3 : Breakup
```

### 2.4 Paramètres d'envoi
| Paramètre | Valeur |
|-----------|--------|
| Envoi/jour/adresse | Max 40 |
| Plage horaire | 8h-11h et 14h-17h (heure Paris) |
| Jours d'envoi | Lundi à Vendredi |
| Tracking ouverture | ✅ Activé |
| Tracking clic | ❌ Désactivé (1er email) |
| Lien désinscription | ✅ Obligatoire |

---

## Étape 3 — Revue et lancement (J0)

### 3.1 Checklist pré-lancement
- [ ] Relire TOUS les emails (typos, merge tags)
- [ ] Envoyer un test à soi-même (vérifier inbox vs spam)
- [ ] Vérifier que Lemwarm est toujours actif
- [ ] Vérifier les conditions if/else de la séquence
- [ ] Validation du dirigeant obtenue ✅

### 3.2 Lancement progressif
| Jour | Volume | Action |
|------|--------|--------|
| J0 | 10 emails | Tier A uniquement — observer |
| J1 | 20 emails | Si pas de problème → augmenter |
| J2-J3 | 30-40 emails | Vitesse de croisière |
| J4+ | 40/jour/adresse max | Tous les tiers actifs |

---

## Étape 4 — Suivi et optimisation (J+1 à J+14)

### 4.1 Dashboard quotidien (5 min/jour)
| Métrique | Seuil d'alerte | Action corrective |
|----------|---------------|-------------------|
| Taux d'ouverture < 40% | 🔴 ALERTE | Retravailler les objets |
| Taux de bounce > 5% | 🔴 STOP | Nettoyer la base, vérifier les emails |
| Taux de spam > 0.3% | 🔴 STOP IMMÉDIAT | Arrêter, vérifier la délivrabilité |
| Taux de réponse < 2% | 🟠 ATTENTION | Retravailler le corps/proposition de valeur |
| Taux de désinscription > 2% | 🟠 ATTENTION | Revoir le ciblage |

### 4.2 Gestion des réponses
| Type de réponse | Action | Délai |
|-----------------|--------|-------|
| **Intéressé** | Proposer un RDV Lemcal | < 2h |
| **"Pas maintenant"** | Remercier, ajouter au nurture | 24h |
| **Demande d'info** | Répondre avec le détail demandé | < 4h |
| **Négatif poli** | Remercier, retirer de la séquence | 24h |
| **Agressif / Spam** | Ne PAS répondre, retirer, noter en blacklist | Immédiat |
| **OOO (absent)** | Reporter la séquence | Automatique (Lemlist) |

### 4.3 Rapport hebdomadaire
Chaque vendredi, produire un mini-rapport :
```
CAMPAGNE : [Nom]
PÉRIODE : [Semaine X]
ENVOYÉS : XX | OUVERTS : XX% | RÉPONDUS : XX%
RDV BOOKÉS : X | DEVIS ENVOYÉS : X
AJUSTEMENTS : [Ce qui a été modifié]
PROCHAINE SEMAINE : [Plan]
```

---

## Étape 5 — Post-campagne (J+15)

- [ ] Archiver la campagne dans Lemlist
- [ ] Exporter les résultats vers Odoo CRM
- [ ] Marquer les leads "contactés" dans le CSV
- [ ] Analyser les résultats vs objectifs
- [ ] Documenter les learnings (ce qui a marché / pas marché)
- [ ] Préparer la vague suivante

---

## 🔗 Liens
- [[MOC_Prospection]]
- [[Sagesse_Cold_Email]]
- [[Sagesse_Delivrabilite_Email]]
- [[FT_Lemlist_Config]]
