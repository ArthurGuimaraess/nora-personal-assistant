# NORA public demo — Architecture

This document describes only the software included in this repository. It is not a specification of the private NORA application.

## Components

- **Frontend:** a small browser interface built with HTML, CSS and JavaScript.
- **Backend:** a FastAPI application that serves the interface and exposes a small REST API.
- **Local persistence:** SQLite stores the demo task records on the machine running the demo.
- **Tests:** Pytest and FastAPI's test client exercise API behavior using a temporary database.
- **Continuous integration:** GitHub Actions installs the development dependencies and runs the test suite.

## Request flow

1. A person opens the local interface in a browser.
2. The JavaScript client sends requests to the local FastAPI server.
3. The server validates task input and performs parameterized SQLite operations.
4. The browser refreshes the task list and daily overview.

## Local data

By default, the SQLite file is created under the ignored `instance/` directory. Tests override the database path with a temporary file so they do not write to a developer's normal demo database.

## Deliberate limitations

The demo has no login, authorization, external AI or search service, remote synchronization, multi-user support, production deployment configuration or account-level data separation. It is intended to run on the local machine, bound to `127.0.0.1`.

Do not expose this demo to the internet or use it to store real personal, account, health or medication information.

## Private product boundary

The complete NORA application and its internal architecture are outside this repository. This document intentionally describes only the code that a reviewer can inspect here.
