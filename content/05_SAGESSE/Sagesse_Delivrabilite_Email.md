---
aliases: [Délivrabilité Email, Email Deliverability, SPF DKIM DMARC]
tags: [sagesse, email, delivrabilite, dns, outbound]
type: wisdom
status: validated
created: 2026-05-06
updated: 2026-05-06
lien_sagesse: "[[Sagesse_Cold_Email]]"
source: "Formation Prospection Lemlist L2 — Entrepreneurs.com (Lucas Philippot)"
---

# 🧠 Sagesse — Délivrabilité Email Outbound

> Règles extraites de la Leçon 2 (31:10) — « Prendre soin de sa délivrabilité ».
> La délivrabilité = la probabilité que votre email arrive en inbox (pas en spam).

---

## Principe #1 : Domaine séparé obligatoire

> **RÈGLE ABSOLUE** : Ne JAMAIS utiliser le domaine principal de l'entreprise pour la prospection cold email.

| ❌ Interdit | ✅ Correct |
|------------|-----------|
| `contact@siriusingenierie.fr` | `mohammed@sirius-eng.fr` |
| `m.karray@siriusingenierie.fr` | `mk@sirius-struct.fr` |

**Raison** : Si le domaine de prospection est blacklisté (spam), le domaine principal reste protégé. Les clients existants continuent de recevoir les emails opérationnels.

### Choix du domaine de prospection
- Similaire mais distinct : `sirius-eng.fr`, `sirius-struct.fr`, `sirius-btp.fr`
- Redirection web vers le site principal
- Coût : ~10€/an

---

## Principe #2 : Configuration DNS obligatoire

### SPF (Sender Policy Framework)
```dns
v=spf1 include:_spf.google.com ~all
```
Autorise Google Workspace à envoyer des emails depuis le domaine.

### DKIM (DomainKeys Identified Mail)
Signature cryptographique générée automatiquement par Google Workspace. Ajouter l'enregistrement TXT fourni par Google dans le DNS.

### DMARC (Domain-based Message Authentication)
```dns
v=DMARC1; p=none; rua=mailto:dmarc@sirius-eng.fr
```
Commencer avec `p=none` (monitoring), puis passer à `p=quarantine` après 2 semaines.

### Vérification
- Utiliser **mail-tester.com** — score minimum 8/10
- Lemlist intègre un vérificateur DNS automatique

---

## Principe #3 : Warm-up (échauffement) — 2 à 4 semaines

> Un nouveau domaine/email qui envoie immédiatement 50 cold emails = SPAM garanti.

### Processus de warm-up avec Lemwarm
1. **Semaine 1** : 5-10 emails/jour (envoyés automatiquement par Lemwarm à des vrais utilisateurs)
2. **Semaine 2** : 15-20 emails/jour
3. **Semaine 3** : 25-30 emails/jour
4. **Semaine 4** : Prêt à envoyer des campagnes réelles

### Règles pendant le warm-up
- Lemwarm envoie et reçoit des emails automatiquement avec un réseau de vrais utilisateurs
- Les emails sont automatiquement sortis du spam et répondus
- Cela construit la réputation du domaine auprès de Google/Microsoft

---

## Principe #4 : Volume progressif

| Phase | Volume max/jour/adresse | Recommandation |
|-------|------------------------|----------------|
| Semaine 1 (warm-up) | 5-10 | Lemwarm uniquement |
| Semaine 2-3 | 15-25 | Lemwarm + quelques manuels |
| Semaine 4+ | 30-40 | Campagnes actives |
| Croisière | 40-50 max | Ne JAMAIS dépasser |

### Stratégie multi-adresses
Pour augmenter le volume total :
- Créer **3-5 adresses email** sur le domaine de prospection
- Chaque adresse envoie max 40/jour
- Total = 120-200 emails/jour sans risque

---

## Principe #5 : Facteurs de classification spam

| Facteur | Impact | Comment éviter |
|---------|--------|----------------|
| Mots spam | 🔴 Fort | Éviter : "gratuit", "offre", "promotion", "cliquez ici" |
| Liens multiples | 🔴 Fort | Max 1 lien par email (signature incluse) |
| Images | 🟠 Moyen | Pas d'image au 1er email |
| HTML complexe | 🟠 Moyen | Email texte brut ou HTML minimal |
| Pièces jointes | 🔴 Fort | Jamais au 1er email |
| Taux de bounce élevé | 🔴 Fort | Vérifier les emails avant envoi |
| Pas de désinscription | 🔴 Fort | Lien unsub obligatoire |

---

## Checklist de lancement

- [ ] Domaine de prospection acheté
- [ ] Google Workspace configuré sur le domaine
- [ ] SPF ajouté dans le DNS
- [ ] DKIM ajouté dans le DNS
- [ ] DMARC ajouté dans le DNS
- [ ] Score mail-tester.com ≥ 8/10
- [ ] Lemwarm activé
- [ ] 2-4 semaines de warm-up effectuées
- [ ] DNS vérifié dans Lemlist (check vert)
- [ ] Premier test d'envoi à soi-même (inbox, pas spam)

---

## 🔗 Liens
- [[Sagesse_Cold_Email]]
- [[MOC_Prospection]]
- [[FT_SPF_DKIM_DMARC]]
- [[FT_Lemlist_Config]]
