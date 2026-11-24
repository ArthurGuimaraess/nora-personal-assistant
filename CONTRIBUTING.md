# Contributing to the NORA public demo

Thank you for your interest in improving this small public part of NORA.

## Scope

Contributions should be limited to:

- The standalone demo in `demo/`.
- Tests for the public demo in `tests/`.
- Public documentation and illustrative previews.
- The dependency manifests and CI workflow needed to run and test the demo.

Do not submit code, assets, configuration or internal documentation from the separate private NORA application. Do not add credentials, private service endpoints, real user information, health information, databases or backups.

## Development setup

Python 3.10 or newer is recommended.

```bash
python -m venv .venv
python -m pip install -r requirements-dev.txt
python -m pytest -q tests
```

Run the demo locally with:

```bash
python -m uvicorn demo.main:app --host 127.0.0.1 --port 8000
```

Use only fictitious data. The demo has no authentication and should not be exposed to the internet or a shared network.

## Pull requests

- Explain the problem and the intended change.
- Keep changes focused and update documentation when behavior changes.
- Add or update tests for changed behavior.
- Run the test suite before submitting.
- Do not claim a feature is implemented unless it can be demonstrated in this public repository.
- Check that all added assets and dependencies can legally be redistributed.

By contributing, you agree that your contributions are provided under the MIT License that applies to this repository.
