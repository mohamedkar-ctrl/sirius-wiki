---
aliases: [Prospection, CRM, Leads, LinkedIn]
tags: [MOC, prospection, crm, linkedin, marketing]
type: moc
status: evergreen
created: 2026-05-05
updated: 2026-05-05
---

# 📊 MOC — Prospection & CRM

> État de la prospection commerciale SIRIUS Ingénierie.

---

## Pipeline — 500 leads qualifiés

| Segment | Code | Leads | Persona |
|---|---|---|---|
| Construction métallique | MET | ~120 | Persona 2 — Charpentier métallique |
| Développeurs PV | PV | ~80 | Persona 1 — Développeur PV |
| Installateurs PV | PV_INST | ~60 | Persona 1 bis |
| Architectes / BE | ARC | ~90 | Persona 3 — Architecte / MOA |
| Promoteurs / Foncières | PROMO | ~80 | Persona 4 — Promoteur logistique |
| BE complémentaires | BE | ~70 | Partenaires |

## Séquences LinkedIn (4 × 3 messages)
- **Persona 1** (PV) : Accroche ombrière → valeur tonnage → CTA RDV
- **Persona 2** (Charpentier) : Accroche sous-traitance → Tekla → CTA
- **Persona 3** (Archi/MOA) : Accroche expertise → IDEA Statica → CTA
- **Persona 4** (Promoteur) : Accroche ROI → économie acier → CTA

## Lead Magnets préparés
- [[FT-001 Cordons de Soudure EC3 vs CBFEM]] → téléchargeable
- [[FT-002 Boulons HR vs HV]] → quand finalisée
- SIRIUS Challenge (quiz technique) → `Marketing/sirius-challenge/`

## 🤖 Pipeline Automatisé n8n — Détection par Recrutement

> **Logique** : Entreprise qui recrute un ingénieur structures / dessinateur charpente = surcharge → prête à sous-traiter.

### Architecture
```
⏰ Quotidien 7h (L-V)
├── 🔍 SerpApi Google Jobs (agrège APEC, Indeed, LinkedIn, WTTJ, Glassdoor)
├── 🧹 Dédoublication + exclusion cabinets/concurrents
├── 🏢 Enrichissement Pappers (SIREN, CA, NAF, effectif, dirigeant)
├── 🎯 Scoring 0-100 + classification persona auto
└── 📊 Export Google Sheets + CSV Odoo + Email bulletin
```

### APIs configurées
| Service | Statut | Tier |
|---|---|---|
| SerpApi | ✅ Configuré | 250 req/mois gratuit |
| Pappers | ✅ Configuré | 100 crédits offerts |

### Mots-clés surveillés
- P2 : `ingénieur structure métallique`, `dessinateur charpente`, `projeteur Tekla`, `calculateur CM`
- P1 : `ingénieur structure photovoltaïque`, `dimensionnement ombrière`
- P3 : `dessinateur bureau études structure`, `technicien BE charpente`
- P4 : `ingénieur conception structure bâtiment`

---

## 🎯 Pipeline Automatisé n8n — Scout Finder (Apporteurs d'Affaires)

> **Logique** : Recherche hebdomadaire de profils LinkedIn correspondant aux 5 avatars scouts définis dans GODMODE V3. Scoring automatique + injection Odoo CRM.

### Architecture
```
⏰ Hebdo (Lundi 8h)
├── 📋 Requêtes par Avatar (5 avatars × 2-3 requêtes = 13 requêtes)
├── 🔍 SerpApi Google Search (site:linkedin.com/in)
├── 📊 Parser profils LinkedIn (nom, titre, entreprise, lieu)
├── 🧹 Dédoublication + exclusion concurrents/cabinets RH
├── 🎯 Scoring Scout 0-100 (titre, secteur, géo, indépendance, activité)
├── ✅ Filtre ≥ 50
└── 📊 Export : Odoo CRM [SCOUT] + Google Sheets + Email bulletin
```

### Avatars surveillés
| Avatar | Requêtes | Cible |
|---|---|---|
| A1 | architecte industriel/tertiaire | Architecte Prescripteur |
| A2 | agent immobilier indépendant entreprise | Agent Immo Indépendant |
| A3 | courtier travaux, AMO, économiste | Courtier Travaux / AMO |
| A4 | commercial indépendant BTP | Commercial BTP |
| A5 | ingénieur retraité structure | Ingénieur Retraité |

### Intégration Odoo CRM
- Leads créés avec préfixe **[SCOUT]** pour différencier des leads clients
- Priorité haute automatique si score ≥ 70
- Description enrichie : score, avatar, LinkedIn URL, snippet

### Quota SerpApi
- 13 requêtes/semaine × 4 = **~52 req/mois** (sur 250 gratuites)
- Reste ~198 req/mois pour le pipeline clients

---

## Actions en attente
- ✅ ~~Créer le compte SerpApi~~ (fait 21/04/2026)
- ⏳ Récupérer clés API (SerpApi + Pappers)
- ⏳ Configurer credentials n8n + importer workflow
- ⏳ Créer Google Sheet "SIRIUS_Leads_Recrutement"
- ⏳ Injection Odoo CRM des 500 leads
- ⏳ Déploiement SIRIUS Challenge sur Netlify
- ⏳ Premier envoi LinkedIn test

---

## 📂 Fichiers source
- `Marketing/suivi_prospection_500.csv`
- `Marketing/sequences_linkedin.md`
- `Marketing/odoo_import_template.csv`
- `Scripts/n8n_prospection_pipeline.json` — Workflow n8n prospection automatisée (clients)
- `Scripts/n8n_scout_finder_pipeline.json` — Workflow n8n détection scouts (apporteurs d'affaires)

## 📚 Knowledge Base Prospection (Sagesse & SOPs)

> Notes créées le 06/05/2026 à partir de la formation Lemlist (Entrepreneurs.com),
> du coaching Anaïs Benkelaï, et des Masterclass Vente.

### Notes Sagesse
- [[Sagesse_Cold_Email]] — Framework cold email B2B, templates, séquences
- [[Sagesse_Delivrabilite_Email]] — DNS, warm-up, anti-spam
- [[Sagesse_LinkedIn_Content]] — Stratégie contenu LinkedIn, personal branding
- [[Sagesse_Google_Ads_B2B]] — Lead gen Google Ads, mots-clés SIRIUS
- [[Sagesse_Funnel_Marketing]] — Funnel complet SIRIUS (awareness → retention)
- [[Sagesse_Vente_Closing]] — Scripts de vente, objections, négociation

### SOPs
- [[SOP_Campagne_Outbound]] — Procédure lancement campagne cold email
- [[SOP_Publication_LinkedIn]] — Calendrier éditorial, batching, Taplio

### Roadmap
- `Marketing/roadmap_10_clients_pv.md` — Plan 6 semaines pour 10 clients PV
- `Marketing/rapport_formation_entrepreneurs_lemlist.md` — Rapport complet formations

### 🤖 Skills Agentiques Sales (Phase 5 — Session 48)

> Skills adaptés de `ai-sales-team-claude` (Zubair Trabzada) pour le marché PV français.
> Déployés le 06/05/2026 dans `Marketing/skills/`.

| Skill | Fichier | Usage |
|-------|---------|-------|
| **SIRIUS Prospect** | `Marketing/skills/sirius-prospect/SKILL.md` | Analyse 360° d'un développeur PV (5 dimensions, score 0-100) |
| **SIRIUS Qualify** | `Marketing/skills/sirius-qualify/SKILL.md` | Qualification BANT + MEDDIC adaptée PV |
| **SIRIUS Outreach** | `Marketing/skills/sirius-outreach/SKILL.md` | Séquence 5 emails + LinkedIn omnicanal |
| **SIRIUS Prep** | `Marketing/skills/sirius-prep/SKILL.md` | Brief préparation RDV (11 sections, cheat sheet) |
| **Playbook Objections** | `Marketing/skills/sirius-objections/playbook-objections-pv.md` | 15 objections PV + réponses CERC |
| **Template Proposition** | `Marketing/skills/sirius-proposal/template-proposition-pv.md` | Proposition commerciale 10 sections |

### Sources analysées (repos GitHub)
- ✅ `ai-sales-team-claude` (541⭐) — 14 skills, adopté intégralement
- ✅ `ai-marketing-claude` (1.6k⭐) — 8/15 skills sélectionnés (Phase 2)
- ✅ `claude-skills` (13.9k⭐) — 25/235 skills sélectionnés (Phase 3)
- 📐 `ai-agency-claude` (51⭐) — Pattern scoring composite retenu
- 📚 `oh-my-claudecode` (32.7k⭐) — À surveiller (orchestration)

### 📊 Skills Marketing (Phase 6 — Session 48)

> Skills adaptés de `ai-marketing-claude` (Zubair) pour le marketing digital SIRIUS.
> Déployés le 06/05/2026 dans `Marketing/skills/`.

| Skill | Fichier | Usage |
|-------|---------|-------|
| **SIRIUS Audit** | `Marketing/skills/sirius-audit/SKILL.md` | Audit marketing complet d'un site (6 dimensions, score 0-100) |
| **SIRIUS Copy** | `Marketing/skills/sirius-copy/SKILL.md` | Optimisation copywriting (scoring + before/after) |
| **SIRIUS Social** | `Marketing/skills/sirius-social/SKILL.md` | Calendrier LinkedIn 30 jours (hooks, piliers, templates) |
| **SIRIUS Funnel** | `Marketing/skills/sirius-funnel/SKILL.md` | Analyse funnel B2B (friction, benchmarks, lead magnets) |
| **SIRIUS Competitors** | `Marketing/skills/sirius-competitors/SKILL.md` | Intelligence concurrentielle BET PV |
| **SIRIUS Emails** | `Marketing/skills/sirius-emails/SKILL.md` | Séquences email nurture & onboarding |
| **SIRIUS SEO** | `Marketing/skills/sirius-seo/SKILL.md` | Audit SEO + stratégie mots-clés PV |
| **SIRIUS Landing** | `Marketing/skills/sirius-landing/SKILL.md` | Optimisation landing pages B2B |

### 🎭 Personas C-Level (Phase 7 — Session 48)

> Personas adaptés de `claude-skills/agents/personas/` pour le conseil stratégique SIRIUS.
> Déployés le 06/05/2026 dans `Marketing/skills/personas/`.

| Persona | Fichier | Rôle |
|---------|---------|------|
| **DG SIRIUS** | `Marketing/skills/personas/dg-sirius.md` | Conseiller stratégique — vision, focus, décisions Go/No-Go |
| **DAF SIRIUS** | `Marketing/skills/personas/daf-sirius.md` | Directeur financier — pricing, trésorerie, rentabilité projet |
| **CMO SIRIUS** | `Marketing/skills/personas/cmo-sirius.md` | Directeur marketing — acquisition B2B, LinkedIn, cold email |
| **Solo Founder** | `Marketing/skills/personas/solo-founder-sirius.md` | Co-fondateur virtuel — time management, arbitrages, durabilité |

---

## 🔗 Liens
- [[MOC_Operations]]
- [[MOC_Strategie]]
- [[GED Index]]

