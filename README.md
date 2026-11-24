<div align="center">

# ✳ NORA

### A gentler digital companion for everyday life

**Mental well-being · Neurodiversity · Sleep · Accessibility · Personal organization**

**Project owner & developer: Arthur Guimarães**

NORA is being shaped around people who need everyday support that adapts to their energy, attention, routines and individual needs — including people living with depression, anxiety, ADHD, OCD, insomnia and other mental-health, neurodevelopmental or sleep-related challenges.

[Why NORA exists](docs/CARE-AND-INCLUSION.md) · [Explore features](docs/FEATURES.md) · [Architecture](docs/ARCHITECTURE.md) · [Run the local demo](#-try-the-public-demo)

</div>

---

## Why NORA exists

Everyday tasks that look simple from the outside can require a great deal of energy, attention, planning or emotional effort. Keeping appointments, starting a task, organizing a routine, changing plans after a difficult day, focusing, winding down for sleep or asking for help can become overwhelming.

**NORA's central purpose is to make those everyday moments more manageable, more accessible and less judgmental.** It brings practical organization and supportive tools into one adaptable space, so people can approach their day in a way that respects their own pace.

The project is being designed with people who may experience:

- **Depression and low-energy periods:** when getting started, maintaining routines or facing a long task list can feel difficult.
- **Anxiety and overwhelm:** when uncertainty, competing demands or too many steps make daily planning harder.
- **ADHD and executive-function challenges:** when organizing, prioritizing, remembering or sustaining attention takes extra effort.
- **OCD:** where product design must be especially careful not to reinforce compulsions, repeated checking or reassurance-seeking loops.
- **Insomnia and sleep difficulties:** when creating a calming routine, managing sleep-related habits or adjusting to travel and time-zone changes can be challenging.
- **Other experiences and conditions:** including sensory, cognitive, emotional or routine-related needs that call for more flexible and accessible interaction.

These groups are an important part of the product's intended audience, not a claim that NORA diagnoses or treats any condition. The goal is supportive daily functionality — not clinical intervention.

## What supportive design means in NORA

NORA's product direction is guided by a few principles:

- **Small steps instead of pressure.** Help make a task easier to start; do not shame someone for an unfinished list or a disrupted routine.
- **Flexible routines.** A plan should adapt when energy, focus or circumstances change. A difficult day should not be treated as failure.
- **Clear, calm interaction.** Reduce unnecessary clutter, offer readable information and provide accessible ways to navigate.
- **User choice and control.** Suggestions, reminders, sharing and AI integrations should remain optional and understandable.
- **Support without pretending to be treatment.** NORA can help structure a day or offer a supportive interaction; it must not present itself as a therapist, clinician or emergency service.
- **Privacy by design.** Sensitive information must not be shared with external AI services or other people without clear, informed user action.

For the product's inclusion principles and safety boundaries, see [Care, inclusion and responsible support](docs/CARE-AND-INCLUSION.md).

## Product areas

The main application has evolved around connected areas that support everyday life:

- **Daily organization:** My Day, calendar, reminders, tasks, studies and work.
- **Gentle planning and focus:** task prioritization, routine planning, focus sessions and the ability to approach work in smaller steps.
- **Accessibility:** visual preferences, contrast and text options, simplified or guided interaction, responsive navigation and reduced-stimulation choices.
- **Sleep and rest:** Nora Sleep sound library, personal playlists, sleep-related records and travel/time-zone support.
- **Supportive interaction:** Nora Acolhe and user-controlled shared-support or communication concepts.
- **AI-assisted planning:** optional Gemini-powered features with explicit permissions, temporary proposals and user review before a change is committed.
- **Offline resilience:** protected local copies, password-based unlocking, queued changes, account checks and duplicate-prevention safeguards.
- **Optional utilities:** medication organization and external search/comparison experiments. These are not clinical or prescribing features.

The reviewed source snapshot contained 20 navigation areas, 21 JavaScript files and 24 Python test files. That inventory describes the reviewed code snapshot, not a guarantee that every area is production-ready. See the [feature map](docs/FEATURES.md).

## What I build and work on

I lead the NORA project and work across its product and engineering process: understanding user needs, shaping features, implementing functionality, integrating services, testing real flows, debugging and documenting changes.

- **Backend:** Python, FastAPI, REST endpoints, validation and SQLite persistence.
- **Frontend:** JavaScript, HTML, CSS and responsive interface development.
- **Mobile prototype:** Java, Android Studio, Gradle and WebView integration.
- **AI and external services:** optional Gemini and SerpAPI integrations, configured server-side.
- **Reliability:** automated tests, migration and update scripts, offline synchronization safeguards, debugging and validation reports.
- **Product experience:** accessibility, navigation, supportive language, sleep-related tools and everyday workflows.

## Technology stack

| Layer | Technologies |
|---|---|
| Backend | Python, FastAPI, REST APIs, Pydantic |
| Frontend | JavaScript, HTML, CSS, responsive UI |
| Data | SQLite, SQL, schema updates and migrations |
| Android prototype | Java, Android Studio, Gradle, WebView |
| Quality | Pytest, API tests, browser-based UI checks, regression tests |
| Optional integrations | Google Gemini API, SerpAPI (server-side) |
| Workflow | Git, GitHub, Markdown documentation |

## Architecture at a glance

The responsive web application and experimental Android client connect to a Python/FastAPI server. The server uses SQLite and may call optional external services, such as Gemini or SerpAPI, when configured and permitted.

The Android prototype loads the NORA web experience from a configured server. The Python backend does **not** run inside the Android package. External integrations depend on server-side credentials, provider availability, quotas and user permissions.

See [Architecture and technical boundaries](docs/ARCHITECTURE.md).

---

## 🚀 Try the public demo

This repository includes a **small, executable, self-contained demonstration** of selected NORA concepts. It lets reviewers run real code without exposing the private full application, user databases, API keys or sensitive records.

The demo shows a simple daily task list and focus timer, using fictitious information. It is only a technical slice of the broader product idea: it does not yet implement condition-specific support, clinical functionality, the private account system, Gemini/SerpAPI calls, encrypted offline sync or the full Android client.

### Windows

1. Download or clone this repository.
2. Run INICIAR_DEMO_WINDOWS.bat.
3. Open http://127.0.0.1:8000 in your browser.

### Run from a terminal

Python 3.10+ is recommended.

    python -m venv .venv
    python -m pip install -r requirements-dev.txt
    python -m uvicorn demo.main:app --host 127.0.0.1 --port 8000

Open the app at http://127.0.0.1:8000 and the interactive API documentation at http://127.0.0.1:8000/docs.

### Run tests

    python -m pytest -q tests

The GitHub Actions workflow runs the demo test suite on pushes and pull requests.

### Demo privacy note

The demo has **no authentication** and is configured for local evaluation only. Do not expose it as a public internet service and do not enter real personal, account, medication or health information. Demo records are fictitious. The original NORA database, user data, .env and private server configuration are intentionally excluded.

## Development milestones

NORA has evolved through multiple development iterations. Version labels refer to development packages, not public app-store releases.

- **Core application:** responsive web interface, FastAPI backend, SQLite persistence and modular JavaScript features.
- **Accessibility and navigation:** desktop/mobile navigation, adjustable interface preferences, guided interaction and reduced-stimulation options.
- **Nora Sleep:** sound library and personal playlist work.
- **AI-assisted planning:** optional Gemini connection, explicit permissions, temporary proposals and user confirmation before writing planning changes.
- **Android prototype:** Java/WebView wrapper, Gradle configuration, emulator testing and server connectivity.
- **Offline work:** protected local copies, password unlock, queued task/study changes, account ownership checks and duplicate-sync prevention.
- **API usage controls:** internal Gemini/SerpAPI counters, local thresholds, cache and pause controls.

See [development history](docs/DEVELOPMENT-HISTORY.md) and [quality, validation and limitations](docs/QUALITY-AND-LIMITATIONS.md).

## Current status and limitations

NORA is an evolving prototype, not a clinically validated product or a production-certified service.

- The Android client is experimental and has not been published to an app store.
- The Android wrapper depends on the configured web server; it is not a standalone offline Android application.
- Automated checks were run against development copies and simulated APIs. This is not an independent security audit.
- Real Gemini/SerpAPI requests, provider billing, physical-device accessibility and final deployment require separate validation.
- Push delivery depends on browser/device permissions, HTTPS, network and server availability; it is not a guaranteed reminder system.
- NORA does not diagnose, treat, provide psychotherapy, recommend medication, monitor a person continuously or guarantee crisis intervention.
- NORA must not be used as the sole support for a mental-health crisis, sleep disorder, medication decision or emergency.

The public demo is intentionally narrower than the complete private application. See [Quality and limitations](docs/QUALITY-AND-LIMITATIONS.md).

## Repository map

    nora-personal-assistant/
    ├── README.md
    ├── demo/                         # Local, reduced FastAPI + SQLite demo
    ├── tests/                        # Automated demo tests
    ├── docs/                         # Product, inclusion and engineering documentation
    ├── .github/workflows/tests.yml   # Automated test workflow
    ├── requirements.txt
    ├── requirements-dev.txt
    └── INICIAR_DEMO_WINDOWS.bat

**Project owner & developer: Arthur Guimarães**  
[GitHub profile](https://github.com/ArthurGuimaraess) · [NORA repository](https://github.com/ArthurGuimaraess/nora-personal-assistant)
