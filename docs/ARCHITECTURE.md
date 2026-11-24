# NORA — Architecture overview

## System shape

The reviewed NORA application follows a client/server structure:

- **Frontend:** browser-based interface built with JavaScript, HTML and CSS, with responsive behavior for desktop and mobile.
- **Backend:** Python/FastAPI application exposing REST endpoints and validating input and permissions.
- **Persistence:** SQLite database for account-scoped application records and application state.
- **Android:** Java application with a WebView that loads the NORA web experience from a configured server. The Python backend is not bundled as an Android runtime.
- **External services:** Gemini and SerpAPI are optional integrations. Credentials belong in server-side environment configuration, never in browser JavaScript or a public repository.

## Feature modules and responsibility boundaries

The source audit identified modular backend features, modular browser features, a main application entry point, a dedicated test suite, Android source, deployment examples and backup tools.

The AI tool flow uses server-defined operations. A model can propose an action, but a proposal is validated and must be reviewed/confirmed by the user before it is committed. The model is not given direct SQL access or private session tokens.

## Offline data flow

The offline work evolved around three separate concepts:

1. A protected local copy for consultation.
2. A local queue for changes created while disconnected.
3. Synchronization history/status for understanding what happened.

The implementation notes describe password-based unlocking, account ownership checks, duplicate-prevention/idempotency and synchronization after reconnecting. These paths have automated development tests, but they still require validation against the final deployed server and physical devices.

## API usage controller (4.3 iteration)

The 4.3 incremental update adds a central controller for Gemini and SerpAPI attempts. It counts calls in SQLite before the provider request, applies internal per-user/day and global/month thresholds, caches SerpAPI results in memory for a short period per account, and exposes an authenticated usage panel. A global switch can pause external requests.

These controls are local application safeguards. They do not know the provider's actual account balance or guarantee a maximum currency spend. Provider-side quota and billing configuration remains necessary.

## Inclusive product direction

The architecture serves a product intended to be adaptable to different energy, attention, sleep, sensory and routine needs. Supportive UX should stay separate from clinical decision-making. AI suggestions require consent and user confirmation; sensitive information must not be shared by default.

## Public demo boundary

The demo is a deliberately reduced standalone sample. It has its own SQLite database, no login, no external APIs and only task organization/focus-timer flows. It is not the full NORA backend and should remain local-only.
