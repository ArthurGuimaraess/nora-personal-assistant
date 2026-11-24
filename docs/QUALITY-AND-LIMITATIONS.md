# Quality, validation and limitations

## Evidence from development validation

The reviewed reports record different validation scopes. They should not be merged into a single claim that the entire product is production-tested.

### Source audit snapshot (16 November 2026)

- 44 focused application/accessibility tests passed.
- The broader Python suite reported 266 passes and 2 failures because .gitignore and installer/Nora.iss were not present in the reviewed ZIP. This does not establish that those files fail in the original project; they were missing from the review package.
- The 3.3 navigation was exercised in simulated Chromium at 390 px and 1280 px.
- Install idempotency and automatic rollback were tested.
- This was not an independent security audit and did not establish full physical-device or screen-reader compatibility.

### Nora 4.1 validation report

- 24/24 targeted API tests for the 3.9/4.0/4.1 paths passed in the reconstructed Python server environment.
- Tests covered optional fields, UUID/receipt compatibility, duplicate-send prevention, account mismatch blocking, validation and installation/reversal simulation.
- Java/Android compilation and final PC/Android visual checks remained pending in that environment.

### Nora 4.3 API-control validation report

- Python and JavaScript syntax checks passed.
- SQLite concurrency and internal limit protection were tested.
- Gemini and SerpAPI behavior was simulated without real provider keys.
- Per-account cache separation, account deletion cleanup and the authenticated usage endpoint were checked.
- The report records 275 passing tests in the reconstructed tree, with one desktop installer test omitted because the reference archive did not include installer/Nora.iss.
- No real Gemini/SerpAPI call, provider balance, Android compilation or final TalkBack/physical-device visual test was performed in that 4.3 validation run.

## Product and clinical boundaries

- NORA remains an evolving prototype, not a production-certified or clinically validated service.
- The intention to support people living with depression, anxiety, ADHD, OCD, insomnia and other challenges is a product-design focus, **not evidence that NORA treats those conditions**.
- No feature should diagnose, recommend medication, provide psychotherapy, interpret symptoms as a clinical assessment or promise improvement in a condition.
- Supportive language, gentle planning, focus tools, accessibility options and sleep playlists are practical features, not medical interventions.
- OCD-related experiences require particular care: do not add repetitive reassurance, compulsive checking or ritual reinforcement loops.
- NORA is not an emergency service. SOS/help concepts and notifications do not guarantee response or continuous monitoring.

## Technical limitations

- The Android client depends on the configured web server and has not been published to an app store.
- The 4.3 API-controller limits are internal thresholds, not provider quota enforcement or billing caps.
- Gemini token usage may only be available when the provider reports it; token counts are not a full cost calculation.
- SerpAPI results, provider quotas, medication stock, pharmacy delivery, shipping and final prices cannot be guaranteed by a search result.
- Push delivery depends on browser/device permissions, HTTPS, network and server availability; it is not a guaranteed reminder system.
- Screen-reader support needs real testing with NVDA, TalkBack and VoiceOver.
- Medication, sleep, well-being, SOS and shared-care functions are prototypes and are not clinically validated.

## Public demo safety

The reduced demo under demo/ has no authentication. Use only local evaluation with sample data. Do not expose it to the internet or enter real personal, account, medication or health information.
