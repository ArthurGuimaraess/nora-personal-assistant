# Quality, validation and limitations

## What is checked in this repository

The included test suite exercises the public demo's main behaviors:

- The browser page and local API documentation respond.
- The demo starts with fictitious sample tasks.
- Tasks can be created, completed, updated and removed.
- Invalid values are rejected by input validation.
- User-provided task titles are handled as data rather than executable SQL.
- Changes persist across API requests.

The tests replace the normal database path with a temporary test database. GitHub Actions is configured to install the development dependencies and run the test suite on pushes and pull requests.

A passing test suite is useful evidence about these demo paths only. It is not an independent security audit and does not validate the complete private NORA application.

## Known limitations

- The demo has no authentication, authorization or multi-user support.
- It is intended for local evaluation only and must not be exposed to the internet or a shared network.
- It does not include external AI or search integrations.
- It does not include the complete NORA assistant, private application source, remote synchronization or the full mobile application.
- It has not undergone an independent penetration test, privacy audit or accessibility certification.
- Illustrative SVG previews are concepts, not live application screenshots.
- The demo has not been clinically evaluated and does not diagnose, treat or provide crisis support.

## Responsible product boundaries

NORA's broader purpose includes exploring more accessible and less judgmental ways to organize everyday life for people with different needs. That purpose must not be presented as proof of clinical effectiveness.

Do not describe this demo as therapy, a medical device, a diagnostic tool, a sleep treatment or an emergency service. Do not enter real personal, health, medication or account information into the demo.
