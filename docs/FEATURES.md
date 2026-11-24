# NORA — Feature map

NORA's primary purpose is supportive everyday assistance for people whose routines, attention, energy, sleep or sensory needs can make ordinary tasks harder. This includes people living with depression, anxiety, ADHD, OCD, insomnia and other mental-health, neurodevelopmental or sleep-related challenges — as well as anyone who benefits from a gentler, more adaptable organizer.

This feature map separates areas found in the reviewed application snapshots from the broader product direction. It is not a claim that NORA treats any diagnosis.

| Area | How it can support everyday life | Status / boundary |
|---|---|---|
| My Day / Calendar | Make commitments and the day easier to understand | Found in reviewed application snapshots; validate on deployed build |
| Studies & Work | Keep tasks, due dates and priorities in one place | Core product area |
| Gentle planning | Break planning into proposed blocks and allow review before changes | Prototype; user permission and confirmation required |
| Focus mode | Offer a focus timer and a defined place to begin | Prototype functionality; should remain flexible rather than punitive |
| Accessibility | Contrast, themes, text/button sizing, reduced stimuli, guided interaction and responsive navigation | Automated/UI checks exist; assistive-technology testing remains necessary |
| Nora Sleep | Sleep-related tools, sound library, personal playlists and travel/time-zone support | Prototype; not insomnia treatment or sleep medicine |
| Nora Acolhe / supportive interaction | Offer a calm, optional space for supportive interaction | Prototype; not psychotherapy, diagnosis or crisis response |
| AI assistant | Optional Gemini support, explicit consent and user-selected preferences | Provider calls require private server configuration; not a clinician |
| Assistant with tools | Read permitted planning data, prepare proposals and ask for confirmation | Server validates and commits only after user confirmation |
| Shared care / messaging | Account-linked communication and user-controlled sharing | Requires privacy, consent and account-permission review |
| Medication-related utilities | Personal medication records and optional search/comparison flows | Not prescribing, diagnosis, medication-safety verification or guaranteed pricing |
| Offline mode | Protected copy, password unlock, queued changes, account checks and duplicate prevention | Development validation exists; real deployment/device coverage remains separate |
| API usage controls | Internal Gemini/SerpAPI counters, limits, cache and pause control | 4.3 incremental module; provider quotas/billing are separate |
| Android client | Java/WebView shell connected to configured NORA server | Experimental; not standalone Android backend or published app |

## Intended support direction by need

These are product-design goals, not promises of condition-specific clinical efficacy:

- **Depression / low energy:** make it easier to choose one small, realistic next step; allow plans to be softened or postponed without shame or streak penalties.
- **Anxiety / overwhelm:** present clear, predictable steps; avoid unnecessary alerts, pressure or ambiguous task states.
- **ADHD / executive-function needs:** make tasks visible, reduce friction to capture them, support prioritization and offer flexible focus sessions.
- **OCD:** avoid features that invite repeated checking, compulsive tracking, rituals or endless reassurance. NORA must not act as an OCD treatment tool.
- **Insomnia / sleep difficulties:** support user-chosen wind-down routines, sleep-related organization and access to the Nora Sleep library; do not diagnose or promise to cure sleep problems.
- **Other needs:** allow people to tailor visual, sensory, language and interaction preferences instead of assuming one experience fits everyone.

Not all of these directions are implemented as dedicated features today. The named communities describe who we want to design with and for; they do not imply that current NORA builds treat those conditions.

## Scope in the reviewed source snapshot

The code audit of the 16 November 2026 source snapshot identified 20 navigation areas: My Day, Calendar, Medication, Buy Medication, Talk to Nora, Studies & Work, Focus Mode, Sleep & Travel, Shared Care, Messages, History, Accessibility, Smart Nora, Assistant with Tools, Nora Acolhe, How to Use, Essential Mode, Usability Pilot, My Devices and Settings.

That audit also identified 21 JavaScript files in the static client, 24 Python test files, a Nora Sleep sound directory and an Android Java project. The inventory describes the reviewed snapshot; later incremental updates may have changed implementation.
